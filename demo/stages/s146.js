/** checks if the browser properly throws an error when accessing undefined variables */
function Hu() {
	try {
		return objectToInspect, { s: 0, v: !0 };
	} catch (n) {
		return { s: 0, v: !1 };
	}
}
