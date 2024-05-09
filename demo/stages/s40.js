/**
 * dynamic-range
 *
 * true: high or standard
 * false: no
 * 
 * s40: {
		s: 0,
		v: false,
	},
 */

function Bn(n) {
	return matchMedia("(dynamic-range: ".concat(n, ")")).matches;
}

Ct = function () {
	return !!Bn("high") || (!Bn("standard") && void 0);
};
