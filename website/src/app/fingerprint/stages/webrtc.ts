let resolve = () => { };
let reject = (x?: any) => { };
let promise = new Promise<void>((res, rej) => {
  resolve = res;
  reject = rej;
});
let candidates = [] as RTCIceCandidate[];
let peer: RTCPeerConnection;

export async function getWebRTCCandidates() {
  await promise;
  return candidates;
}

export async function getWebRTCStats() {
  await promise;
  const stats = await peer.getStats();
  return Object.fromEntries(Array.from(stats.entries()));
}

export async function initWebRTC() {
  peer = new RTCPeerConnection({
    iceServers: [
      { urls: "stun:stunserver.stunprotocol.org" },
      { urls: "stun:stun.l.google.com:19302", },
      // { urls: "stun:stun.fpapi.io:3478", },
      // {
      //   credential: "admin",
      //   urls: "turn:use1-turn.fpjs.io?transport=tcp",
      //   username: "b8ba5b31-59f9-744f-5dca-7518ec23f2b8",
      // },
    ],
  });

  peer.onicecandidate = (event) => {
    console.log("onicecandidate", event.candidate);
    if (event.candidate) {
      candidates.push(event.candidate);
    } else {
      resolve();
    }
  };
  peer.onicecandidateerror = (ev) => {
    console.log("onicecandidateerror", ev);
    reject(ev.errorText);
  };
  peer.onicegatheringstatechange = (ev) => {
    console.log("onicegatheringstatechange", peer.iceGatheringState);
    if (peer.iceGatheringState === "complete") {
      resolve();
    } else if (peer.iceGatheringState === "gathering") {
      // do nothing
    } else {
      reject(peer.iceGatheringState);
    }
  };

  setTimeout(() => {
    resolve()
  }, 900)

  peer.createDataChannel("data");

  const local = await peer.createOffer();
  await peer.setLocalDescription(local);

  return peer;
}
