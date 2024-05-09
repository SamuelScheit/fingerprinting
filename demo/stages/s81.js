/**
 * math with buffers
 * s81: {
		s: 0,
		v: 127,
	},
 */

_t = function () {
	var n = new Float32Array(1),
		t = new Uint8Array(n.buffer);
	return (n[0] = 1 / 0), (n[0] = n[0] - n[0]), t[3];
};
// => [0, 0, 192, 127]
