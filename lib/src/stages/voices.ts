let resolve!: (value?: any) => void;
let reject!: (reason?: any) => void;

let promise = new Promise((res, rej) => {
	resolve = res;
	reject = rej;
});

let voices = speechSynthesis.getVoices();

if (!speechSynthesis.pending && voices.length > 0) {
	resolve(voices);
}

export function getVoices() {
	return promise;
}

speechSynthesis.addEventListener("voiceschanged", () => {
	resolve(speechSynthesis.getVoices());
});
