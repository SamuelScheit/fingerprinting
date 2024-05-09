/**
 * checks for touch support
 */

Et = function () {
	var n,
		t = navigator,
		e = 0;
	void 0 !== t.maxTouchPoints ? (e = H(t.maxTouchPoints)) : void 0 !== t.msMaxTouchPoints && (e = t.msMaxTouchPoints);
	try {
		document.createEvent("TouchEvent"), (n = !0);
	} catch (r) {
		n = !1;
	}
	return { maxTouchPoints: e, touchEvent: n, touchStart: "ontouchstart" in window };
};
