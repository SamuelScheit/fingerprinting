/**
 * checks the integrity of setTimeout and Error object
 */

function ac() {
	var n = function (n) {
			return n();
		},
		t = function (n, t) {
			return n(t);
		},
		e = function (n, t, e) {
			return n(t, e);
		};
	return (function (n, t, e, r, i) {
		return n(t, e, r, i);
	})(r, this, void 0, void 0, function () {
		var r;
		return e(i, this, function (e) {
			switch (e.label) {
				case 0:
					return n(vn) ? ((r = { s: 0 }), [4, n(cc)]) : [3, 2];
				case 1:
					return [2, ((r[t(uc, 0)] = e.sent()), r)];
				case 2:
					return [2, { s: -1, v: null }];
			}
		});
	});
}
function cc() {
	var n = function (n, t, e) {
			return n(t, e);
		},
		t = function (n, t) {
			return n(t);
		},
		e = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		o = this;
	return t(wn, function (u, a) {
		var c = function (t, e, r) {
				return n(t, e, r);
			},
			s = function (n, e) {
				return t(n, e);
			};
		return e(r, o, void 0, void 0, function () {
			var n,
				t,
				e,
				r = function (n, t, e) {
					return c(n, t, e);
				},
				o = function (n, t) {
					return s(n, t);
				},
				u = function (n, t, e) {
					return c(n, t, e);
				},
				f = function (n, t, e) {
					return c(n, t, e);
				};
			return c(i, this, function (i) {
				switch (i.label) {
					case 0:
						// new Error().name = " "
						((n = new (r(Ar, a, 2619118453))()).name = " "),
							(t = !1),
							(e = {
								get: function () {
									return (t = !0), "";
								},
							}),
							// Object.defineProperty(err, "stack", e)
							r(Ar, Object, 1973166116)(n, o(uc, 1), e);
						try {
							throw n;
						} catch (c) {}
						return (
							// window.setTimeout(console.debug, 0, n)
							u(Ar, a, 327851548)(f(Ar, a, 906219446).debug, 0, n),
							[
								4,
								new Promise(function (n) {
									// window.setTimeout(resolve)
									return r(Ar, a, 327851548)(n);
								}),
							]
						);
					case 1:
						return i.sent(), [2, t];
				}
			});
		});
	});
}
