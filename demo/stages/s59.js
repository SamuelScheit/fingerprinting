/** checks if the browser is internet explorer */

function fn() {
	var n = window,
		t = navigator;
	return Y(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4;
}
