/**
 * check if the browser is webkit
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
