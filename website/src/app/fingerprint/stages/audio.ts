import getAudioFingerprint, {
  doesBrowserSuspendAudioContext,
} from "../../../../../fingerprintjs/src/sources/audio";

export async function getAudioFingerprint1() {
  const result = await getAudioFingerprint();
  return result();
}

export async function getAudioFingerprint2() {
  if (doesBrowserSuspendAudioContext()) return;

  let offlineAudioContext =
    // @ts-ignore
    window.OfflineAudioContext || window.webkitOfflineAudioContext;

  let bufferSize = 4500;
  let sampleRate = 44100;
  let duration = 5e3;

  let audioContext = new offlineAudioContext(1, duration, sampleRate);
  let oscillator = audioContext.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.value = 10000;

  let dynamicsCompressor = audioContext.createDynamicsCompressor();
  dynamicsCompressor.threshold.value = -50;
  dynamicsCompressor.knee.value = 40;
  dynamicsCompressor.ratio.value = 12;
  dynamicsCompressor.attack.value = 0;
  dynamicsCompressor.release.value = 0.25;

  oscillator.connect(dynamicsCompressor);
  dynamicsCompressor.connect(audioContext.destination);
  oscillator.start(0);

  let audioBuffer = await renderAudio(audioContext);
  let audioData = audioBuffer.getChannelData(0).subarray(bufferSize);

  let totalMagnitude = audioData.reduce(
    (total, sample) => total + Math.abs(sample),
    0,
  );

  return totalMagnitude;
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
