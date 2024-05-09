/**
 * prefers reduced transparency
 *
 * false: no-preference
 * true: reduce
 */

function Hn(n) {
	return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches;
}
Vt = function () {
	return !!Hn("reduce") || (!Hn("no-preference") && void 0);
};
