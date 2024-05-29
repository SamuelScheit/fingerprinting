/**
 * checks if the browser has overriden the document.createElement function
 *
 * s151: {
		s: -1,
		v: null,
	},
 *
 * */

function ha() {
	var n = Object.getOwnPropertyDescriptor(document, "createElement");
	return n ? { s: 0, v: !("writeable" in n) } : { s: -1, v: null };
}