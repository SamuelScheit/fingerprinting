/**
 * check forced color mode
 * 
 * s39: {
		s: 0,
		v: false,
	},
 */

function Gn(n) {
	return matchMedia("(forced-colors: ".concat(n, ")")).matches;
}

Pt = function () {
	return !!Gn("active") || (!Gn("none") && void 0);
};
