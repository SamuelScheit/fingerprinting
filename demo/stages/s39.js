/**
 * check forced color mode
 */

function Gn(n) {
	return matchMedia("(forced-colors: ".concat(n, ")")).matches;
}

Pt = function () {
	return !!Gn("active") || (!Gn("none") && void 0);
};
