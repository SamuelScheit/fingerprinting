/**
 * s154: {
 *		s: 0,
 *		v: {
 *			wv: true, // widevine
 *			wvp: true, // widevine
 *			pr: false, // playready
 *			ck: false, // clearkey
 *			pt: false, // primetime
 *			fp: false, // fairplay
 *		},
 *	},
 *
 * {"type": "media-source","audio": {"contentType": "audio/mp4; codecs=\"mp4a.40.2\""},"keySystemConfiguration": {"keySystem": "com.widevine.alpha"}}
 * {"initDataTypes": ["cenc"],"audioCapabilities": [{"contentType": "audio/mp4;codecs=\"mp4a.40.2\""}]}
 *
 * navigator.requestMediaKeySystemAccess
 * ["com.microsoft.playready",[{"initDataTypes": ["cenc"],"audioCapabilities": [{"contentType": "audio/mp4;codecs=\"mp4a.40.2\""}]}]]
 * ["com.adobe.primetime","com.adobe.access"]
 * ["webkit-org.w3.clearkey","org.w3.clearkey"]
 * ['com.apple.fairplay']
 *
 * result:
 * {"powerEfficient": true,"smooth": true,"supported": true,"keySystemAccess": {}}
 *
 *
 */

const strings = [
	"wv",
	"wvp",
	"pr",
	["com.microsoft.playready", "com.youtube.playready"],
	"ck",
	["webkit-org.w3.clearkey", "org.w3.clearkey"],
	"pt",
	["com.adobe.primetime", "com.adobe.access"],
	"fp",
	["com.apple.fairplay"],
	"MediaKeys",
	"WebKitMediaKeys",
	"MSMediaKeys",
	"requestMediaKeySystemAccess",
	"navigator",
	"featurePolicy",
	"featurePolicy",
	"encrypted-media",
	"mediaCapabilities",
	"navigator",
	"decodingInfo",
	"navigator",
	"com.widevine.alpha",
	"media-source",
	{
		contentType: 'audio/mp4; codecs="mp4a.40.2"',
	},
	"keySystemAccess",
	"keySystemAccess",
	"brave",
	"robustness",
	"SW_SECURE_CRYPTO",
	"sessionTypes",
	["persistent-license"],
	{
		initDataTypes: ["cenc"],
		audioCapabilities: [
			{
				contentType: 'audio/mp4;codecs="mp4a.40.2"',
			},
		],
	},
];

function wv(n) {
	var t = function (n) {
			return n();
		},
		e = function (n) {
			return n();
		},
		o = function (n, t) {
			return n(t);
		},
		u = function (n) {
			return n();
		},
		a = function (n, t) {
			return n(t);
		},
		c = function (n, t, e) {
			return n(t, e);
		},
		s = function (n, t, e) {
			return n(t, e);
		},
		f = function (n, t) {
			return n(t);
		},
		l = function (n, t) {
			return n in t;
		},
		v = function (n, t) {
			return n(t);
		},
		d = function (n, t) {
			return n(t);
		},
		h = function (n, t, e) {
			return n(t, e);
		},
		m = function (n, t, e, r, i) {
			return n(t, e, r, i);
		};
	return (
		(function (n, t) {
			return n === t;
		})(n, void 0) && (n = !1),
		m(r, this, void 0, void 0, function () {
			var r, m, p, g, w;
			return c(i, this, function (i) {
				switch (i.label) {
					case 0:
						return t(mn) || e(gn)
							? [2, !1]
							: ((r = o(pa, 22)),
							  (m = !1),
							  u(ya)
									? ((p = { type: o(pa, 23), audio: a(pa, 24), keySystemConfiguration: { keySystem: r } }),
									  [4, c(Ar, c(Ar, navigator, 2900309608), 3516168465)(p)])
									: [3, 2]);
					case 1:
						(g = i.sent()), (m = s(y, g, f(pa, 25)) && g[a(pa, 26)]), (i.label = 2);
					case 2:
						return !(m && !l(v(pa, 27), navigator)) && e(vn)
							? [3, 4]
							: ((w = t(Sa)),
							  s(Ar, w, 621177879) && (c(Ar, w, 621177879)[0][o(pa, 28)] = d(pa, 29)),
							  n && (w[o(pa, 30)] = d(pa, 31)),
							  [4, h(Ea, [r], [w])]);
					case 3:
						return [2, i.sent()];
					case 4:
						return [2, !1];
				}
			});
		})
	);
}

function Ra() {
	var n = function (n) {
			return n();
		},
		t = function (n, t, e) {
			return n(t, e);
		},
		e = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		o = function (n, t) {
			return n < t;
		},
		u = function (n, t, e) {
			return n(t, e);
		};
	return (function (n, t, e, r, i) {
		return n(t, e, r, i);
	})(r, this, void 0, void 0, function () {
		var a = function (t) {
				return n(t);
			},
			c = function (n, e, r) {
				return t(n, e, r);
			},
			s = function (n, t, r, i, o) {
				return e(n, t, r, i, o);
			},
			l = function (n, t) {
				return o(n, t);
			},
			v = this;
		return u(i, this, function (n) {
			var t = function (n) {
					return a(n);
				},
				e = function (n, t, e) {
					return c(n, t, e);
				},
				o = function (n, t, e, r, i) {
					return s(n, t, e, r, i);
				},
				u = function (n, t, e) {
					return c(n, t, e);
				},
				d = function (n, t) {
					return l(n, t);
				};
			return a(wa) && a(ba)
				? [
						2,
						c(h, c(f, 250, { s: -2, v: null }), function () {
							var n = function (n, t) {
								return d(n, t);
							};
							return o(r, v, void 0, void 0, function () {
								var a,
									c,
									s,
									f,
									l,
									v,
									d,
									h = function (n) {
										return t(n);
									},
									m = function (n, t, r) {
										return e(n, t, r);
									},
									p = function (n, t, e, r, i) {
										return o(n, t, e, r, i);
									},
									g = this;
								return u(i, this, function (t) {
									switch (t.label) {
										case 0:
											return [
												4,
												Promise.all(
													ga.map(function (n) {
														var t = function (n) {
																return h(n);
															},
															e = function (n, t, e) {
																return m(n, t, e);
															};
														return p(r, g, void 0, void 0, function () {
															var r, o, u;
															return e(i, this, function (e) {
																switch (e.label) {
																	case 0:
																		return (r = n[0]), (o = n[1]), (u = [r]), [4, t(o)];
																	case 1:
																		return [2, u.concat([e.sent()])];
																}
															});
														});
													})
												),
											];
										case 1:
											for (a = t.sent(), c = {}, s = 0, f = a; n(s, f.length); s++)
												(l = f[s]), (v = l[0]), (d = l[1]), (c[v] = d);
											return [2, { s: 0, v: c }];
									}
								});
							});
						}),
				  ]
				: [
						2,
						function () {
							return { s: -1, v: null };
						},
				  ];
		});
	});
}
