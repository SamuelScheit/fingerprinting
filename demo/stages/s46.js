/** hash of math functions
 * 
 * s46: {
		s: 0,
		v: "5963cfe25fe61d0bbd7b4920bc602dc8",
	},
 */

import { x64hash128 } from "./hash";

function xt() {
	var n,
		t = Math.acos || Yn,
		e = Math.acosh || Yn,
		r = Math.asin || Yn,
		i = Math.asinh || Yn,
		o = Math.atanh || Yn,
		u = Math.atan || Yn,
		a = Math.sin || Yn,
		c = Math.sinh || Yn,
		s = Math.cos || Yn,
		f = Math.cosh || Yn,
		l = Math.tan || Yn,
		v = Math.tanh || Yn,
		d = Math.exp || Yn,
		h = Math.expm1 || Yn,
		m = Math.log1p || Yn;
	return {
		acos: t(0.12312423423423424),
		acosh: e(1e308),
		acoshPf: ((n = 1e154), Math.log(n + Math.sqrt(n * n - 1))),
		asin: r(0.12312423423423424),
		asinh: i(1),
		asinhPf: (function (n) {
			return Math.log(n + Math.sqrt(n * n + 1));
		})(1),
		atanh: o(0.5),
		atanhPf: (function (n) {
			return Math.log((1 + n) / (1 - n)) / 2;
		})(0.5),
		atan: u(0.5),
		sin: a(-1e300),
		sinh: c(1),
		sinhPf: (function (n) {
			return Math.exp(n) - 1 / Math.exp(n) / 2;
		})(1),
		cos: s(10.000000000123),
		cosh: f(1),
		coshPf: (function (n) {
			return (Math.exp(n) + 1 / Math.exp(n)) / 2;
		})(1),
		tan: l(-1e300),
		tanh: v(1),
		tanhPf: (function (n) {
			return (Math.exp(2 * n) - 1) / (Math.exp(2 * n) + 1);
		})(1),
		exp: d(1),
		expm1: h(1),
		expm1Pf: (function (n) {
			return Math.exp(n) - 1;
		})(1),
		log1p: m(10),
		log1pPf: (function (n) {
			return Math.log(1 + n);
		})(10),
		powPI: (function (n) {
			return Math.pow(Math.PI, n);
		})(-100),
	};
}

const n = xt();
console.log(n);

const hash = x64hash128(
	Object.keys(n)
		.map(function (t) {
			return "".concat(t, "=").concat(n[t]);
		})
		.join(",")
);

console.log(hash);

// v8 = 5963cfe25fe61d0bbd7b4920bc602dc8
// webkit = fde394cd050c47a94fa5a2e663470533
// firefox = 5f030fa7d2e5f9f757bfaf81642eb1a6
