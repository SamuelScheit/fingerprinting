let resolve = () => { };
let reject = (x?: any) => { };
let promise = new Promise<void>((res, rej) => {
  resolve = res;
  reject = rej;
});
let candidates = [] as any[];
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
      const x = event.candidate
      candidates.push({
        address: x.address,
        port: x.port,
        tcpType: x.tcpType,
        type: x.type,
        protocol: x.protocol, // @ts-ignore
        url: x.url,
        relatedAddress: x.relatedAddress,
        relatedPort: x.relatedPort,
      });
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

export async function enumerateMediaDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.map((x) => ({
    deviceId: x.deviceId,
    groupId: x.groupId,
    kind: x.kind,
    label: x.label,
  })) as any;
}
