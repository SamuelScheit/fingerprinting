/** ICE + RTCStatsReport peer.getStats()
 *
 * s78: {
 *		s: 0, // 0 = success, -2 = error, -3 = unsupported (safari, firefox)
 *		v: [
 *			{
 *				id: "HjD6dszXj",
 *				type: "codec",
 *				clockRate: 90000,
 *				mimeType: "video/VP8",
 *				direction: "sendrecv",
 *				uri: "urn:ietf:params:rtp-hdrext:toffset",
 *			},
 *			{
 *				id: "I3Ue5bgKi",
 *				timestamp: 1715207446861.099,
 *				type: "remote-candidate",
 *				address: "169.254.136.39",
 *				candidateType: "host",
 *				foundation: "1599188347",
 *				ip: "169.254.136.39",
 *				isRemote: true,
 *				port: 50879,
 *				priority: 2122260223,
 *				protocol: "udp",
 *				transportId: "T01",
 *				usernameFragment: "lsNp",
 *			},
 *			// ...
 *		],
 *	},
 *
 */

function Iu(n) {
	var t = function (n) {
			return n();
		},
		e = function (n, t) {
			return n === t;
		},
		u = function (n, t) {
			return n > t;
		},
		a = function (n, t, e, r) {
			return n(t, e, r);
		},
		c = function (n, t) {
			return n === t;
		},
		s = function (n, t, e) {
			return n(t, e);
		},
		l = function (n, t, e) {
			return n(t, e);
		},
		v = function (n, t) {
			return n <= t;
		},
		d = function (n, t) {
			return n - t;
		},
		m = function (n, t) {
			return n(t);
		},
		p = function (n, t) {
			return n === t;
		},
		g = function (n, t) {
			return n(t);
		},
		w = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		b = (function (n, t, e) {
			return n(t, e);
		})(Ar, n, 2659403885);
	return w(r, this, void 0, void 0, function () {
		var n,
			r,
			w,
			y = function (n) {
				return t(n);
			},
			E = function (n, t) {
				return e(n, t);
			},
			k = function (n, t) {
				return u(n, t);
			},
			S = function (n, t, e, r) {
				return a(n, t, e, r);
			},
			R = function (n, t) {
				return c(n, t);
			},
			L = function (n, t, e) {
				return s(n, t, e);
			},
			I = function (n, t, e) {
				return l(n, t, e);
			},
			P = function (n, t) {
				return v(n, t);
			},
			O = function (n, t) {
				return d(n, t);
			},
			T = function (n, t) {
				return e(n, t);
			},
			A = function (n, t) {
				return m(n, t);
			},
			V = function (n, t) {
				return m(n, t);
			},
			C = function (n, t) {
				return p(n, t);
			},
			x = function (n, t) {
				return g(n, t);
			},
			j = function (n) {
				return t(n);
			};
		return l(i, this, function (t) {
			var e = function (n, t) {
					return R(n, t);
				},
				i = function (n, t, e) {
					return L(n, t, e);
				},
				u = function (n, t, e) {
					return I(n, t, e);
				},
				a = function (n, t) {
					return k(n, t);
				},
				c = function (n, t) {
					return P(n, t);
				},
				s = function (n, t) {
					return O(n, t);
				};
			switch (t.label) {
				case 0:
					return T(b[A(ku, 13)], V(ku, 14)) || C(b[A(ku, 15)], x(ku, 16))
						? [
								2,
								function () {
									return { s: -2, v: null };
								},
						  ]
						: j(dn) || y(mn)
						? [
								2,
								function () {
									return { s: -3, v: null };
								},
						  ]
						: ((n = y(Pu)),
						  (r = n.length),
						  [
								4,
								L(
									h,
									I(f, 400, -4),
									Ru.bind(null, b, function (t, o) {
										return (
											n.some(function (n) {
												return e(i(Ar, n, 223244161), u(Ar, t, 223244161));
											}) || n.push(t),
											a(n.length, r) && c(o, s(n.length, r))
										);
									})
								),
						  ]);
				case 1:
					return (
						(w = t.sent()),
						[
							2,
							function () {
								var t = y(w);
								return E(t, 0) || k(n.length, r) ? { s: 0, v: S(o, [], n, !0) } : { s: t, v: null };
							},
						]
					);
			}
		});
	});
}
function Pu() {
	var n = {
		HuleP: function (n, t, e) {
			return n(t, e);
		},
		ZeVsm: function (n, t) {
			return n(t);
		},
		mbQWJ: function (n, t, e) {
			return n(t, e);
		},
		haUpI: "4|2|1|3|5|0",
		BLsOf: function (n, t) {
			return n === t;
		},
		dCZFk: function (n, t, e) {
			return n(t, e);
		},
		TqHUA: function (n, t) {
			return n(t);
		},
		DBOQX: function (n, t, e) {
			return n(t, e);
		},
		ObwVk: function (n, t) {
			return n(t);
		},
		GTYpT: function (n, t) {
			return n === t;
		},
		TGqbh: function (n, t, e) {
			return n(t, e);
		},
	};
	try {
		for (var e = n.haUpI.split("|"), r = 0; ; ) {
			switch (e[r++]) {
				case "0":
					return i.slice(0, 5).map(function (e, r) {
						return n.HuleP(t, n.HuleP(t, { id: n.ZeVsm(Ut, n.mbQWJ(Ar, e, 3639779463))(9), type: Su }, u[r]), c[r]);
					});
				case "1":
					var i = (n.BLsOf(o, null) || n.BLsOf(o, void 0) ? void 0 : n.HuleP(Ar, o, 1497648566)) || [];
					continue;
				case "2":
					var o = n.dCZFk(Ar, window[n.ZeVsm(ku, 19)], 33590818)(n.TqHUA(ku, 20));
					continue;
				case "3":
					var u = (n.BLsOf(a, null) || n.BLsOf(a, void 0) ? void 0 : n.DBOQX(Ar, a, 1497648566)) || [];
					continue;
				case "4":
					var a = n.mbQWJ(Ar, window[n.ObwVk(ku, 17)], 33590818)(n.ZeVsm(ku, 18));
					continue;
				case "5":
					var c = (n.GTYpT(a, null) || n.GTYpT(a, void 0) ? void 0 : n.TGqbh(Ar, a, 1733327687)) || [];
					continue;
			}
			break;
		}
	} catch (s) {
		return [];
	}
}
