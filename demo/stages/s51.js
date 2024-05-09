/**
 * s51: {
 *		s: 0,
 *		v: {
 *			default: 147.5625,
 *			apple: 147.5625,
 *			serif: 147.5625,
 *			sans: 144.015625,
 *			mono: 133.0625,
 *			min: 9.234375,
 *			system: 146.09375,
 *		},
 *	},
 *
 * the script creates a span element with a textContent of "mmMwWLliI0fiflO&1"
 * and a whiteSpace of "nowrap"
 * then assigns the style properties of the object to the span element
 * and calculates the width of the span element (getBoundingClientRect().width)
 *
 * {
 *   "default": [],
 *   "apple": [
 *       {
 *           "font": "-apple-system-body"
 *       }
 *   ],
 *   "serif": [
 *       {
 *           "fontFamily": "serif"
 *       }
 *   ],
 *   "sans": [
 *       {
 *           "fontFamily": "sans-serif"
 *       }
 *   ],
 *   "mono": [
 *       {
 *           "fontFamily": "monospace"
 *       }
 *   ],
 *   "min": [
 *       {
 *           "fontSize": "1px"
 *       }
 *   ],
 *   "system": [
 *       {
 *           "fontFamily": "system-ui"
 *       }
 *   ]
 * }
 */

ct = function () {
	return (function (n, t) {
		void 0 === t && (t = 4e3);
		return wn(function (e, r) {
			var i = r.document,
				u = i.body,
				a = u.style;
			(a.width = "".concat(t, "px")),
				(a.webkitTextSizeAdjust = a.textSizeAdjust = "none"),
				vn() ? (u.style.zoom = "".concat(1 / r.devicePixelRatio)) : dn() && (u.style.zoom = "reset");
			var c = i.createElement("div");

			// creates a string "word ".repeat(200)

			return (
				(c.textContent = o([], Array((t / 20) << 0), !0)
					.map(function () {
						return "word";
					})
					.join(" ")),
				u.appendChild(c),
				n(i, u)
			);
		}, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
	})(function (n, t) {
		for (var e = {}, r = {}, i = 0, o = Object.keys(Xn); i < o.length; i++) {
			var u = o[i],
				a = Xn[u],
				c = a[0],
				s = void 0 === c ? {} : c,
				f = a[1],
				// l is the textContent of the span element
				l = void 0 === f ? "mmMwWLliI0fiflO&1" : f,
				v = n.createElement("span");
			(v.textContent = l), (v.style.whiteSpace = "nowrap");
			for (var d = 0, h = Object.keys(s); d < h.length; d++) {
				var m = h[d],
					p = s[m];
				void 0 !== p && (v.style[m] = p);
			}
			(e[u] = v), t.append(n.createElement("br"), v);
		}
		for (var g = 0, w = Object.keys(Xn); g < w.length; g++) {
			r[(u = w[g])] = e[u].getBoundingClientRect().width;
		}
		return r;
	});
};
