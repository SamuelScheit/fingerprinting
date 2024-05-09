/**
 * checks if the browser is firefox
 * 
 * s64: {
		s: 0,
		v: false,
	},
 */
function mn() {
	var n,
		t,
		e = window;
	return (
		Y([
			"buildID" in navigator,
			"MozAppearance" in
				(null !== (t = null === (n = document.documentElement) || void 0 === n ? void 0 : n.style) && void 0 !== t ? t : {}),
			"onmozfullscreenchange" in e,
			"mozInnerScreenX" in e,
			"CSSMozDocumentRule" in e,
			"CanvasCaptureMediaStream" in e,
		]) >= 4
	);
}
