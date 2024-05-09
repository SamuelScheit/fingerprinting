/**
 * openDatabase()
 *
 * localStorage.setItem("test", "1")
 * localStorage.removeItem("test")
 *
 * if local storage and openDatabase works return:
 * { s: 0, v: false };
 *
 * if an error occured for local storage or openDatabase return:
 * { s: 0, v: true };
 *
 * if openDatabase is not available return:
 * { s: -1, v: null };
 *
 */

function da() {
	var n = function (n) {
			return n();
		},
		t = function (n, t) {
			return n(t);
		},
		e = function (n, t) {
			return n(t);
		},
		r = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		i = function (n, t, e) {
			return n(t, e);
		},
		o = "test";
	if (
		!(function (n) {
			return n();
		})(dn) ||
		n(Pe)
	)
		return { s: -1, v: null };
	var u = window[t(va, 0)],
		a = window[e(va, 1)];
	try {
		r(u, null, null, null, null);
	} catch (c) {
		return { s: 0, v: !0 };
	}
	try {
		return i(Ar, a, 2330630162)(o, "1"), i(Ar, a, 588657539)(o), { s: 0, v: !1 };
	} catch (s) {
		return { s: 0, v: !0 };
	}
}
