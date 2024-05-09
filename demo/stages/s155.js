/**
 * checks if some window variables were overridden
 *
 */

["plugins", "userAgent", "platform", "appName", "languages"];

function Ia() {
	for (var n, t, e = {}, r = 0, i = La(0); r < i.length; r++)
		for (var o = i[r], u = o[0], a = 0, c = o[1]; a < c.length; a++) {
			var s = c[a],
				f =
					null === (t = null === (n = Object.getOwnPropertyDescriptor(window[u], s)) || void 0 === n ? void 0 : n.get) ||
					void 0 === t
						? void 0
						: t.toString();
			void 0 !== f && (e["".concat(u, ".").concat(s)] = f);
		}
	return { s: 0, v: e };
}
