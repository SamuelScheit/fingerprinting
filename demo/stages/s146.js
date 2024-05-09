/**
 * checks if the browser properly throws an error when accessing undefined variables
 *
 * s146: {
		s: 0,
		v: false,
	},
 */

function Hu() {
	try {
		return objectToInspect, { s: 0, v: !0 };
	} catch (n) {
		return { s: 0, v: !1 };
	}
}
