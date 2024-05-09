/**
 *
 * checks that navigator.languages was not tampered with
 * 
 * checks that Object.getOwnPropertyDescriptor(navigator.languages, "length").writable === false
 *
 * and checks for each language Object.getOwnPropertyDescriptor(languages, i).writable === false and .configurable === false
 * 
 * false: was not modified
 * true: was modified
 * 
 s162: {
		s: 0,
		v: false,
	}
 *
 */

navigator.languages;
function Ha() {
	var n = function (n, t) {
			return n(t);
		},
		t = (function (n, t, e) {
			return n(t, e);
		})(Ar, navigator, 2698072953);
	return t ? { s: 0, v: n(Ba, t) } : { s: -1, v: null };
}

function Ba(n) {
	var t = function (n, t) {
			return n(t);
		},
		e = function (n, t, e) {
			return n(t, e);
		},
		r = function (n, t) {
			return n < t;
		},
		i = function (n, t, e) {
			return n(t, e);
		},
		o = function (n, t, e) {
			return n(t, e);
		},
		u = (function (n, t, e) {
			return n(t, e);
		})(
			Ar,
			Object,
			1110892003
		)(n, t(Za, 0));
	if (u && e(Ar, u, 2813370411)) return !0;
	for (var a = 0; r(a, n.length); a++) {
		var c = i(Ar, Object, 1110892003)(n, a);
		if (c && (o(Ar, c, 2813370411) || i(Ar, c, 1651707638))) return !0;
	}
	return !1;
}
