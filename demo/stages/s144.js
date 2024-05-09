/**
 * supports SharedArrayBuffer
 * 
 * s144: {
		s: -2,
		v: null,
	},
 *
 */

function Uu() {
	if ("function" != typeof window.SharedArrayBuffer) return { s: -2, v: null };
	var n = new window.SharedArrayBuffer(1);
	return void 0 === n.byteLength ? { s: -1, v: null } : { s: 0, v: n.byteLength };
}
