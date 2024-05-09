/**
 * checks if globals or navigator.hardwareConcurrency were overridden
 * 
 * 	s159: {
		s: -2,
		v: null,
	},
 */
function Ca() {
	return (function (n, t) {
		var e = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n), t);
		if (!e || !e.get) return { s: -1, v: null };
		var r = window.Function,
			i = window.Object,
			o = !1;
		try {
			o = delete window.Function && delete window.Object;
		} catch (a) {
			o = !1;
		}
		if (!o) return u(), { s: -2, v: null };
		try {
			return e.get.toString(), { s: 0, v: !1 };
		} catch (c) {
			return { s: 0, v: !0 };
		} finally {
			u();
		}
		function u() {
			try {
				(window.Function = r), (window.Object = i);
			} catch (a) {}
		}
	})(navigator, "hardwareConcurrency");
}
