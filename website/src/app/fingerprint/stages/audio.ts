import getAudioFingerprintFPJS, {
} from "../../../../fingerprintjs/src/sources/audio";

export async function getAudioFingerprint1() {
	const result = await getAudioFingerprintFPJS();
	if (typeof result === "function") return result();
	return result;
}

const sampleRate = 44100;
const cloneCount = 40000;
const stabilizationPrecision = 6.2;

/**
 * A version of the entropy source with stabilization to make it suitable for static fingerprinting.
 * Audio signal is noised in private mode of Safari 17.
 */
export async function getAudioFingerprint2() {
	const rawFingerprint = await getUnstableAudioFingerprint();
	return stabilize(rawFingerprint, stabilizationPrecision);
}

/**
 * A version of the entropy source without stabilization.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
export async function getUnstableAudioFingerprint() {
	return getBaseAudioFingerprint()
}

async function getBaseAudioFingerprint() {
	const w = window;
	// @ts-ignore
	const AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
	if (!AudioContext) throw new Error("AudioContext is not supported");

	const baseSignal = await getBaseSignal(AudioContext);
	if (!baseSignal) throw new Error("Failed to get the base signal");

	// This context copies the last sample of the base signal many times.
	// The array of copies helps to cancel the noise.
	const context = new AudioContext(1, baseSignal.length - 1 + cloneCount, sampleRate);
	const sourceNode = context.createBufferSource();
	sourceNode.buffer = baseSignal;
	sourceNode.loop = true;
	sourceNode.loopStart = (baseSignal.length - 1) / sampleRate;
	sourceNode.loopEnd = baseSignal.length / sampleRate;
	sourceNode.connect(context.destination);
	sourceNode.start();

	const clonedSignal = await renderAudio(context);
	if (!clonedSignal) throw new Error("Failed to clone the signal");
	const fingerprint = extractFingerprint(baseSignal, clonedSignal.getChannelData(0).subarray(baseSignal.length - 1));
	return Math.abs(fingerprint); // The fingerprint is made positive to avoid confusion with the special fingerprints
}

/**
 * Produces an arbitrary audio signal
 */
async function getBaseSignal(AudioContext: typeof window.OfflineAudioContext) {
	const targetSampleIndex = 3395;
	const context = new AudioContext(1, targetSampleIndex + 1, sampleRate);

	const oscillator = context.createOscillator();
	oscillator.type = "square";
	oscillator.frequency.value = 1000;

	const compressor = context.createDynamicsCompressor();
	compressor.threshold.value = -70;
	compressor.knee.value = 40;
	compressor.ratio.value = 12;
	compressor.attack.value = 0;
	compressor.release.value = 0.25;

	const filter = context.createBiquadFilter();
	filter.type = "allpass";
	filter.frequency.value = 5.239622852977861;
	filter.Q.value = 0.1;

	oscillator.connect(compressor);
	compressor.connect(filter);
	filter.connect(context.destination);
	oscillator.start(0);

	return await renderAudio(context);
}

function extractFingerprint(baseSignal: AudioBuffer, clonedSample: Float32Array) {
	let fingerprint = undefined;
	let needsDenoising = false;

	for (let i = 0; i < clonedSample.length; i += Math.floor(clonedSample.length / 10)) {
		if (clonedSample[i] === 0) {
			// In some cases the signal is 0 on a short range for some reason. Ignoring such samples.
		} else if (fingerprint === undefined) {
			fingerprint = clonedSample[i];
		} else if (fingerprint !== clonedSample[i]) {
			needsDenoising = true;
			break;
		}
	}

	// The looped buffer source works incorrectly in old Safari versions (>14 desktop, >15 mobile).
	// The looped signal contains only 0s. To fix it, the loop start should be `baseSignal.length - 1.00000000001` and
	// the loop end should be `baseSignal.length + 0.00000000001` (there can be 10 or 11 0s after the point). But this
	// solution breaks the looped signal in other browsers. Instead of checking the browser version, we check that the
	// looped signals comprises only 0s, and if it does, we return the last value of the base signal, because old Safari
	// versions don't add noise that we want to cancel.
	if (fingerprint === undefined) {
		fingerprint = baseSignal.getChannelData(0)[baseSignal.length - 1];
	} else if (needsDenoising) {
		fingerprint = getMiddle(clonedSample);
	}

	return fingerprint!;
}

/**
 * Calculates the middle between the minimum and the maximum array item
 */
export function getMiddle(signal: Float32Array) {
	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < signal.length; i++) {
		const value = signal[i]!;
		// In very rare cases the signal is 0 on a short range for some reason. Ignoring such samples.
		if (value === 0) {
			continue;
		}
		if (value < min) {
			min = value;
		}
		if (value > max) {
			max = value;
		}
	}

	return (min + max) / 2;
}

/**
 * Truncates some digits of the number to make it stable.
 * `precision` is the number of significant digits to keep. The number may be not integer:
 *  - If it ends with `.2`, the last digit is rounded to the nearest multiple of 5;
 *  - If it ends with `.5`, the last digit is rounded to the nearest even number;
 */
export function stabilize(value, precision) {
	if (value === 0) {
		return value;
	}

	const power = Math.floor(Math.log10(Math.abs(value)));
	const precisionPower = power - Math.floor(precision) + 1;
	const precisionBase = 10 ** -precisionPower * ((precision * 10) % 10 || 1);
	return Math.round(value * precisionBase) / precisionBase;
}

function renderAudio(audioContext: OfflineAudioContext) {
	return new Promise<AudioBuffer>((resolve, reject) => {
		let onComplete = () => {
			resolve(audioBuffer);
		};

		audioContext.oncomplete = (e) => {
			resolve(e.renderedBuffer);
		};
		audioContext.onstatechange = () => {
			if (audioContext.state === "suspended") {
				audioContext.resume();
			}
		};

		let audioBuffer = audioContext.startRendering();
		if (audioBuffer && audioBuffer instanceof Promise) {
			return audioBuffer.then(onComplete).catch(reject);
		}
	});
}
