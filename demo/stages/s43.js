/**
 * prefers reduced motion:
 *
 * reduce: prefers-reduced-motion
 *
 * false: no-preference
 * true: reduce
 */

function Zn(n) {
	return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches;
}

At = function () {
	return !!Zn("reduce") || (!Zn("no-preference") && void 0);
};
