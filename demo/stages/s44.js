/**
 * s44: {
		s: 0, // 0 = retrieval was successful, -1 = retrieval failed
		v: true, // true = prefers dark mode, false = prefers light mode
	},
 */
function nu() {
	return tu("dark") ? { s: 0, v: !0 } : tu("light") ? { s: 0, v: !1 } : { s: -1, v: null };
}
function tu(n) {
	return matchMedia("(prefers-color-scheme: ".concat(n, ")")).matches;
}
