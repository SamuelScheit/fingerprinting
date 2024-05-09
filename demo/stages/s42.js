/**
 * min-monochrome, max-monochrome
 * 
 * s42: {
		s: 0,
		v: 0,
	},
 */

Ot = function () {
	if (matchMedia("(min-monochrome: 0)").matches) {
		for (var n = 0; n <= 100; ++n) if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
		throw new Error("Too high value");
	}
};
