/**
 *
 * checks if the following apis are available
 *
 * in chrome:
 * window.SharedWorker
 * navigator.connection.ontypechange
 * new Audio().sinkId
 *
 * in firefox:
 * window.onorientationchange
 * window.orientation
 * /android/i.test(navigator.appVersion)
 *
 * navigator.appVersion is the user agent
 *
 * Y sums up the number of truthy values
 * the value is true if the api is unavailable
 *
 * if chrome and at least 2 apis are unavailable => true
 * if firefox and at least 2 apis are unavailable => true
 * 
 * s65: {
		s: 0,
		v: false, // true if at least two apis are unavailable
	},
 *
 */

function gn() {
	var n = vn(), // is chrome
		t = mn(), // is firefox
		e = window,
		r = navigator,
		i = "connection";
	return n
		? Y([!("SharedWorker" in e), r[i] && "ontypechange" in r[i], !("sinkId" in new window.Audio())]) >= 2
		: !!t && Y(["onorientationchange" in e, "orientation" in e, /android/i.test(navigator.appVersion)]) >= 2;
}
