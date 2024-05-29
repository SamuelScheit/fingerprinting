/**
 * checks for inverted-colors
 *
 * matchMedia("(inverted-colors: ".concat(n, ")")).matches;
 *
 * "inverted", "none"
 * 
 * s41: {
		s: 0,
		v: false,
	},
 */

function Wn(n) {
	return matchMedia("(inverted-colors: ".concat(n, ")")).matches;
}

It = function () {
	return !!Wn("inverted") || (!Wn("none") && void 0);
};
