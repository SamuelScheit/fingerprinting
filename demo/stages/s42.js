/** min-monochrome, max-monochrome
 */

Ot = function () {
	if (matchMedia("(min-monochrome: 0)").matches) {
		for (var n = 0; n <= 100; ++n) if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
		throw new Error("Too high value");
	}
};
