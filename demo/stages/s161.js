/**
 *
 * create a peer connection and sends the userid to FPJS server
 *
 * s161: {
 *		s: 0,
 *		v: "3fee5bf9-be85-e6a0-f025-9d1564cf411d",
 *	},
 */

import { Vr } from "./util";

var Fa = /*#__PURE__*/ Vr(
	[
		3162032584, 4199825686, 887565954, 3784189494, 1664785987, 1122930482, 1983527582, 3628855449, 2468360051, 748569315, 4020122979,
		1010094663, 1559746680, 2019780048, 3646814168, 2536845156, 881855719, 3516872488, 610324043, 44075302, 640967326, 2416752788,
		2283823981, 1724858595, 2693670446, 576888340, 1946146852,
	],
	7
);
/**
 * [ "wrtcm", "full", {credential: "admin"}, "urls", "username", "iceServers", "turn:", {transport: "tcp" }]
 *
 */

const config = {
	credential: "admin",
	urls: "turn:use1-turn.fpjs.io?transport=tcp",
	username: "3fee5bf9-be85-e6a0-f025-9d1564cf411d",
};

const config2 = {
	iceServers: [
		{
			credential: "admin",
			urls: "turn:use1-turn.fpjs.io?transport=tcp",
			username: "3fee5bf9-be85-e6a0-f025-9d1564cf411d",
		},
	],
};

function Wa(n) {
	var t = function (n, t, e) {
			return n(t, e);
		},
		e = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		o = function (n, t) {
			return n === t;
		},
		u = function (n, t) {
			return n(t);
		},
		a = function (n) {
			return n();
		},
		c = function (n, t) {
			return n !== t;
		},
		s = function (n, t) {
			return n(t);
		},
		l = function (n, t, e) {
			return n(t, e);
		},
		v = function (n, t, e) {
			return n(t, e);
		},
		d = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		m = (function (n, t, e) {
			return n(t, e);
		})(Ar, n, 928136154),
		p = v(Ar, n, 2659403885);
	return d(r, this, void 0, void 0, function () {
		var n,
			v,
			d,
			g,
			w,
			b,
			y = function (n, e, r) {
				return t(n, e, r);
			},
			E = function (n, t, r, i, o) {
				return e(n, t, r, i, o);
			},
			k = function (n, t) {
				return o(n, t);
			},
			S = function (n, t) {
				return u(n, t);
			},
			R = function (n) {
				return a(n);
			},
			L = function (n, e, r) {
				return t(n, e, r);
			},
			I = function (n, e, r) {
				return t(n, e, r);
			},
			P = function (n, t) {
				return c(n, t);
			},
			O = function (n, t) {
				return s(n, t);
			},
			T = function (n, e, r) {
				return t(n, e, r);
			},
			A = function (n, t, e) {
				return l(n, t, e);
			},
			V = this;
		return l(i, this, function (t) {
			var e = function (n, t, e) {
					return y(n, t, e);
				},
				o = function (n, t, e) {
					return y(n, t, e);
				},
				u = function (n, t, e, r, i) {
					return E(n, t, e, r, i);
				};
			switch (t.label) {
				case 0:
					return k(p[S(Fa, 0)], S(Fa, 1))
						? [
								2,
								function () {
									return { s: -2, v: null };
								},
						  ]
						: ((n = R(Yt)),
						  (v = L(Ga, n, m)),
						  (d = S(Uo, v)),
						  (g = I(Ar, d, 453955339)),
						  (w = L(Ar, d, 1801730948)),
						  P(g, 0)
								? [
										2,
										function () {
											return { s: g, v: null };
										},
								  ]
								: ((b = O(Yo, w)),
								  P(b, 0)
										? [
												2,
												function () {
													return { s: b, v: null };
												},
										  ]
										: [
												4,
												T(h, A(f, 100, { s: -4, v: n }), function () {
													return u(r, V, void 0, void 0, function () {
														var t,
															r = function (n, t, r) {
																return e(n, t, r);
															},
															u = function (n, t, r) {
																return e(n, t, r);
															};
														return o(i, this, function (e) {
															switch (e.label) {
																case 0:
																	// RTCPeerConnection.createOffer()
																	return [4, r(Ar, w, 882066760)()];
																case 1:
																	// RTCPeerConnection.setLocalDescription()
																	return (t = e.sent()), [4, u(Ar, w, 76151562)(t)];
																case 2:
																	return e.sent(), [2, { s: 0, v: n }];
															}
														});
													});
												}),
										  ]));
				case 1:
					return [2, t.sent()];
			}
		});
	});
}
