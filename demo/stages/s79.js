/**
 * webkitTapHighlightColor
 *
 * ["v","v","v","default.ini",{"create": true},"URL","URL"]
 *
 * navigator.storage.getDirectory().getFileHandle().getFile().createObjectURL()
 *
 * 'df6af1a6-a4c0-40d3-80bb-8331e3471341' => converted with textencoder to bytes
 *
 * {s: -3,v: [{n: "default.ini",l: 4246720862}]}
 *
 */

function _u() {
	var n = function (n) {
			return n();
		},
		t = function (n, t) {
			return n(t);
		},
		e = function (n, t, e) {
			return n(t, e);
		},
		o = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		u = function (n, t, e) {
			return n(t, e);
		},
		a = function (n, t, e) {
			return n(t, e);
		},
		c = function (n, t, e) {
			return n(t, e);
		};
	return o(r, this, void 0, void 0, function () {
		var s,
			l = function (t) {
				return n(t);
			},
			v = function (n, e) {
				return t(n, e);
			},
			d = function (n, t, r) {
				return e(n, t, r);
			},
			m = function (n, t, e, r, i) {
				return o(n, t, e, r, i);
			},
			p = function (n, e) {
				return t(n, e);
			},
			g = function (n, t, e, r, i) {
				return o(n, t, e, r, i);
			},
			w = function (n, t, e) {
				return u(n, t, e);
			},
			b = function (t) {
				return n(t);
			},
			y = function (n, t, e) {
				return a(n, t, e);
			},
			E = this;
		return c(i, this, function (n) {
			var t = function (n, t) {
					return v(n, t);
				},
				e = function (n, t) {
					return p(n, t);
				},
				o = function (n, t, e) {
					return d(n, t, e);
				},
				u = function (n, t, e, r, i) {
					return g(n, t, e, r, i);
				},
				a = function (n, t, e) {
					return d(n, t, e);
				};
			switch (n.label) {
				case 0:
					return (s = l(Vu))
						? [3, 2]
						: [
								4,
								w(h, w(f, 350, { s: -3, v: null }), function () {
									var n = function (n) {
											return l(n);
										},
										t = function (n, t) {
											return v(n, t);
										},
										e = function (n, t, e) {
											return d(n, t, e);
										};
									return m(r, E, void 0, void 0, function () {
										var r,
											o = function (t) {
												return n(t);
											},
											u = function (n, e) {
												return t(n, e);
											};
										return e(i, this, function (n) {
											switch (n.label) {
												case 0:
													return (r = { s: -3 }), [4, Promise.all([o(Mu)])];
												case 1:
													return [2, ((r[u(ju, 0)] = n.sent()), r)];
											}
										});
									});
								}),
						  ];
				case 1:
				case 3:
				case 5:
					return [2, n.sent()];
				case 2:
					return b(Cu)
						? [3, 4]
						: [
								4,
								d(h, w(f, 350, { s: -1, v: null }), function () {
									return u(r, E, void 0, void 0, function () {
										var n,
											r = function (n, e) {
												return t(n, e);
											},
											u = function (n, t) {
												return e(n, t);
											};
										return o(i, this, function (t) {
											switch (t.label) {
												case 0:
													return (n = { s: -1 }), [4, Promise.all([r(Mu, s[0])])];
												case 1:
													return [2, ((n[u(ju, 1)] = t.sent()), n)];
											}
										});
									});
								}),
						  ];
				case 4:
					return [
						4,
						y(h, y(f, 350, { s: -2, v: null }), function () {
							var n = function (n, t) {
								return p(n, t);
							};
							return m(r, E, void 0, void 0, function () {
								var t;
								return a(i, this, function (e) {
									switch (e.label) {
										case 0:
											return (t = { s: 0 }), [4, Promise.all(s.map(xu))];
										case 1:
											return [2, ((t[n(ju, 2)] = e.sent()), t)];
									}
								});
							});
						}),
					];
			}
		});
	});
}

function Mu(n) {
	var t = function (n, t, e) {
			return n(t, e);
		},
		e = function (n, t, e) {
			return n(t, e);
		},
		o = function (n, t) {
			return n(t);
		},
		u = function (n, t, e) {
			return n(t, e);
		},
		a = function (n, t) {
			return n(t);
		},
		c = function (n, t, e, r, i) {
			return n(t, e, r, i);
		};
	return (
		(function (n, t) {
			return n === t;
		})(n, void 0) && (n = a(ju, 3)),
		c(r, this, void 0, void 0, function () {
			var r, c, s, f, l, v;
			return t(i, this, function (i) {
				switch (i.label) {
					case 0:
						(r = n.split("/").slice(-1)[0]), (i.label = 1);
					case 1:
						return i.trys.push([1, 5, , 6]), [4, t(Ar, t(Ar, navigator, 1417288500), 3686698663)()];
					case 2:
						return (c = i.sent()), [4, e(Ar, c, 2562634255)(r, o(ju, 4))];
					case 3:
						return (s = i.sent()), [4, e(Ar, s, 2331980737)()];
					case 4:
						return (
							(f = i.sent()),
							(l = e(Ar, window[o(ju, 5)], 365625032)(f).split("/").pop() || ""),
							(v = o(C, l)),
							u(Ar, window[a(ju, 6)], 920520132)(l),
							[2, { n: f.name, l: v }]
						);
					case 5:
						return i.sent(), [2, { n: r, l: -1 }];
					case 6:
						return [2];
				}
			});
		})
	);
}
