/** checks for display color depth
 * matchMedia("(color-gamut: ".concat(e, ")");
 *
 * "rec2020", "p3", "srgb"
 * 
 * s37: {
		s: 0,
		v: "p3",
	},
 *
 */

Lt = function () {
	for (var n = 0, t = ["rec2020", "p3", "srgb"]; n < t.length; n++) {
		var e = t[n];
		if (matchMedia("(color-gamut: ".concat(e, ")")).matches) return e;
	}
};
