/**
 * check if the browser is safari
 * 
 * s63: {
		s: 0,
		v: false,
	},
 */

function hn() {
	var n = window,
		t = n.HTMLElement,
		e = n.Document;
	return (
		Y([
			"safari" in n,
			!("ongestureend" in n),
			!("TouchEvent" in n),
			!("orientation" in n),
			t && !("autocapitalize" in t.prototype),
			e && "pointerLockElement" in e.prototype,
		]) >= 4
	);
}
