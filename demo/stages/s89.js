/**
 * navigator.storage.getDirectory()
 *
 * { s: 0, v: "" } // success
 *
 * { s: 0, v: r(Ar, n, 3065852031) }
 *
 * { s: -1, v: null } // api unavailable
 */

function Eu() {
	var n = function (n, t, e) {
			return n(t, e);
		},
		t = function (n, t, e) {
			return n(t, e);
		},
		e = function (n, t) {
			return n === t;
		},
		o = function (n, t) {
			return n === t;
		},
		u = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		a = this;
	return n(
		h,
		(function (n, t, e) {
			return n(t, e);
		})(f, 250, { s: -2, v: null }),
		function () {
			var c = function (t, e, r) {
					return n(t, e, r);
				},
				s = function (n, t) {
					return e(n, t);
				},
				f = function (n, t) {
					return o(n, t);
				};
			return u(r, a, void 0, void 0, function () {
				var e,
					r = function (t, e, r) {
						return n(t, e, r);
					};
				return t(i, this, function (n) {
					switch (n.label) {
						case 0:
							return (
								(e = c(Ar, navigator, 1417288500)),
								(s(e, null) || f(e, void 0) ? void 0 : c(Ar, e, 3686698663))
									? [
											4,
											c(Ar, e, 3686698663)().then(
												function () {
													return { s: 0, v: "" };
												},
												function (n) {
													return { s: 0, v: r(Ar, n, 3065852031) };
												}
											),
									  ]
									: [2, { s: -1, v: null }]
							);
						case 1:
							return [2, n.sent()];
					}
				});
			});
		}
	);
}
