/**
 * safari and firefoy only
 *
 * window.indexedDB
 *
 */

const db = indexedDB.open("FKQjzB5zG2WcrRQU", 1);
db.onerror = function (event) {
	return { s: -5, v: null };
};
db.onupgradeneeded = function (event) {};

function fa() {
	var n = function (n) {
			return n();
		},
		t = function (n) {
			return n();
		},
		e = function (n) {
			return n();
		},
		o = function (n, t, e) {
			return n(t, e);
		},
		u = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		a = this;
	return o(h, o(f, 250, { s: -3, v: null }), function () {
		return u(r, a, void 0, void 0, function () {
			var r = function (t) {
					return n(t);
				},
				u = function (n) {
					return t(n);
				},
				a = function (n) {
					return e(n);
				};
			return o(i, this, function (n) {
				return r(dn) || u(mn) ? [2, a(la)] : [2, { s: -1, v: null }];
			});
		});
	});
}

function la() {
	var n = {
		eyYKK: "4|0|2|3|1",
		ChNGC: function (n, t) {
			return n(t);
		},
		YwgyF: function (n, t, e) {
			return n(t, e);
		},
		EbCxO: function (n, t, e) {
			return n(t, e);
		},
		zghzz: function (n, t) {
			return n(t);
		},
		TsDgA: function (n, t) {
			return n instanceof t;
		},
		nzBne: function (n, t) {
			return n(t);
		},
		dckcY: function (n, t, e) {
			return n(t, e);
		},
		nMbze: function (n, t, e) {
			return n(t, e);
		},
		sSRVk: function (n, t) {
			return n(t);
		},
		rxqRt: function (n) {
			return n();
		},
		VGCte: function (n, t) {
			return n === t;
		},
		UVBfe: function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
	};
	return n.UVBfe(r, this, void 0, void 0, function () {
		var t, e;
		return n.nMbze(i, this, function (r) {
			for (var i = n.eyYKK.split("|"), o = 0; ; ) {
				switch (i[o++]) {
					case "0":
						t = window[n.ChNGC(aa, 1)];
						continue;
					case "1":
						return [
							2,
							new Promise(function (n, r) {
								var i = function (n, t) {
									return u.Xpjhu(n, t);
								};
								try {
									var o = u.CUknA(Ar, t, 2758837156)(e, 1);
									(o[u.cpjBh(aa, 2)] = function () {
										i(n, { s: -5, v: null });
									}),
										(o[u.dkWeO(aa, 3)] = function (i) {
											var o = u.SIlTw(Ar, u.SIlTw(Ar, i, 1181691900), 325763347);
											try {
												return (
													u.ZhGIZ(
														Ar,
														u.CUknA(Ar, o, 138212912)("-", u.cpjBh(aa, 4)),
														2928708052
													)(new window[u.cpjBh(aa, 5)]()),
													void u.cpjBh(n, { s: 0, v: "" })
												);
											} catch (a) {
												if (u.qtJKV(a, Error)) return void u.QDnDA(n, { s: 0, v: u.jneJk(Ar, a, 3065852031) });
												u.QDnDA(r, a);
											} finally {
												u.jEhwK(Ar, o, 318865860)(), u.LndNH(Ar, t, 3885781331)(e);
											}
										});
								} catch (a) {
									if (!u.dEuRL(dn)) return void u.MPYsJ(n, { s: -5, v: null });
									if (u.qtJKV(a, Error) && u.rsyyk(a.name, u.dkWeO(aa, 6))) return void u.cpjBh(n, { s: -4, v: null });
									u.Xpjhu(r, a);
								}
							}),
						];
					case "2":
						if (!t) return [2, { s: -2, v: null }];
						continue;
					case "3":
						e = "".concat(n.ChNGC(Bt, 16));
						continue;
					case "4":
						var u = {
							SIlTw: function (t, e, r) {
								return n.YwgyF(t, e, r);
							},
							ZhGIZ: function (t, e, r) {
								return n.EbCxO(t, e, r);
							},
							CUknA: function (t, e, r) {
								return n.YwgyF(t, e, r);
							},
							cpjBh: function (t, e) {
								return n.zghzz(t, e);
							},
							qtJKV: function (t, e) {
								return n.TsDgA(t, e);
							},
							QDnDA: function (t, e) {
								return n.nzBne(t, e);
							},
							jneJk: function (t, e, r) {
								return n.dckcY(t, e, r);
							},
							jEhwK: function (t, e, r) {
								return n.nMbze(t, e, r);
							},
							LndNH: function (t, e, r) {
								return n.EbCxO(t, e, r);
							},
							Xpjhu: function (t, e) {
								return n.sSRVk(t, e);
							},
							dkWeO: function (t, e) {
								return n.zghzz(t, e);
							},
							dEuRL: function (t) {
								return n.rxqRt(t);
							},
							MPYsJ: function (t, e) {
								return n.zghzz(t, e);
							},
							rsyyk: function (t, e) {
								return n.VGCte(t, e);
							},
						};
						continue;
				}
				break;
			}
		});
	});
}
