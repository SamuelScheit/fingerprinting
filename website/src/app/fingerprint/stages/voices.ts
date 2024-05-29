import { x64hash128 } from "@/../../fingerprintjs/src/utils/hashing";

let resolve!: (value?: any) => void;
let reject!: (reason?: any) => void;

let promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

function get() {
  return x64hash128(
    JSON.stringify(
      speechSynthesis.getVoices().map((x) => ({
        default: x.default,
        lang: x.lang,
        localService: x.localService,
        name: x.name,
        voiceURI: x.voiceURI,
      })),
    ),
  );
}

try {
  speechSynthesis.addEventListener("voiceschanged", () => {
    resolve(get());
  });

  let voices = get();

  if (!speechSynthesis.pending && voices.length > 0) {
    resolve(voices);
  }
} catch (error) {}

export function getVoices() {
  return promise;
}
