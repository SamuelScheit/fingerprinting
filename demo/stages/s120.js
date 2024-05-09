/**
 * checks if new Error().toSource() is defined
 * 
 * s120: {
		s: 0,
		v: false,
	},
 */
function Xu() {
	try {
		throw "a";
	} catch (n) {
		try {
			return n.toSource(), { s: 0, v: !0 };
		} catch (t) {
			return { s: 0, v: !1 };
		}
	}
}
