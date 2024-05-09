/**
 * Checks if at least 3 of the features are unavailable
 *
 * window.PushManager
 * window.AudioBuffer
 * window.RTCPeerConnection
 * navigator.geolocation
 * window.ServiceWorker
 * 
 * s68: {
		s: 0,
		v: false, // false = less than 3 are available, true = at least 3 are unavailable
	},
 *
 */

function O(n) {
	return n.reduce(function (n, t) {
		return n + (t ? 1 : 0);
	}, 0);
}

function Oe() {
	var n = window;
	return (
		O([
			!("PushManager" in n),
			!("AudioBuffer" in n),
			!("RTCPeerConnection" in n),
			!("geolocation" in navigator),
			!("ServiceWorker" in n),
		]) >= 3
	);
}
