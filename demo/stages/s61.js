/**
 * check if the browser is chrome
 * 
 * s61: {
		s: 0,
		v: true,
	},
 */

function vn() {
	var n = window,
		t = navigator;
	return (
		Y([
			"webkitPersistentStorage" in t,
			"webkitTemporaryStorage" in t,
			0 === t.vendor.indexOf("Google"),
			"webkitResolveLocalFileSystemURL" in n,
			"BatteryManager" in n,
			"webkitMediaStream" in n,
			"webkitSpeechGrammar" in n,
		]) >= 5
	);
}
