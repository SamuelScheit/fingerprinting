/**
 * prefers-contrast:
 *
 * 0: no-preference
 * 1: high, more
 * -1: low, less
 * 10: forced
 *
 * 
 * s38: {
		s: 0,
		v: 0,
	},
 */
function Dn(n) {
	return matchMedia("(prefers-contrast: ".concat(n, ")")).matches;
}
Tt = function () {
	return Dn("no-preference") ? 0 : Dn("high") || Dn("more") ? 1 : Dn("low") || Dn("less") ? -1 : Dn("forced") ? 10 : void 0;
};
