import { Vr } from "./util";
import crypto from "crypto";

console.log(Yt());
// peer = new RTCPeerConnection()
// peer.createDataChannel(Math.random().toString())
// l = peer.createOffer()
// peer.setLocalDescription(l)

/**
{
    "iceServers": [
        {
            "credential": "admin",
            "urls": "turn:use1-turn.fpjs.io?transport=tcp",
            "username": "b8ba5b31-59f9-744f-5dca-7518ec23f2b8"
        }
    ]
}
 */

/**
 * 
 * s94:{
    "s": 0, // 0 = success, -2 = error
    "v": {
        "u": "d6fd7dd1-174f-c842-c2bf-12674a1f3b74", // random fingerprint ID
        "e": [
            "candidate:894275136 1 udp 2122260223 169.254.136.39 56911 typ host generation 0 ufrag OWBa network-id 3",
            "candidate:3639121165 1 udp 2122194687 169.254.41.16 60241 typ host generation 0 ufrag OWBa network-id 4",
            "candidate:1073491321 1 udp 2122063615 192.168.178.74 51681 typ host generation 0 ufrag OWBa network-id 1 network-cost 10",
            "candidate:455717168 1 udp 2121932543 10.1.86.185 53956 typ host generation 0 ufrag OWBa network-id 5 network-cost 50",
            "candidate:1768279622 1 udp 2122131711 2a02:2455:16df:fd00:ac40:3645:8968:6f3 64083 typ host generation 0 ufrag OWBa network-id 2 network-cost 10",
            "candidate:1069691667 1 udp 2122003199 fd54:20a4:d33b:b10c:bd3:0:1:55b4 56178 typ host generation 0 ufrag OWBa network-id 6 network-cost 50",
            "candidate:3420936916 1 tcp 1518280447 169.254.136.39 9 typ host tcptype active generation 0 ufrag OWBa network-id 3",
            "candidate:641876377 1 tcp 1518214911 169.254.41.16 9 typ host tcptype active generation 0 ufrag OWBa network-id 4",
            "candidate:3243702765 1 tcp 1518083839 192.168.178.74 9 typ host tcptype active generation 0 ufrag OWBa network-id 1 network-cost 10",
            "candidate:3850593700 1 tcp 1517952767 10.1.86.185 9 typ host tcptype active generation 0 ufrag OWBa network-id 5 network-cost 50",
            "candidate:2546932434 1 tcp 1518151935 2a02:2455:16df:fd00:ac40:3645:8968:6f3 9 typ host tcptype active generation 0 ufrag OWBa network-id 2 network-cost 10",
            "candidate:3244877703 1 tcp 1518023423 fd54:20a4:d33b:b10c:bd3:0:1:55b4 9 typ host tcptype active generation 0 ufrag OWBa network-id 6 network-cost 50"
        ],
        "s": [
            {
                "id": "I2uCLDoni",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "fd54:20a4:d33b:b10c:bd3:0:1:55b4",
                "candidateType": "host",
                "foundation": "1069691667",
                "ip": "fd54:20a4:d33b:b10c:bd3:0:1:55b4",
                "isRemote": true,
                "port": 56178,
                "priority": 2122003199,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            },
            {
                "id": "IUfMtdSjD",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "192.168.178.74",
                "candidateType": "host",
                "foundation": "1073491321",
                "ip": "192.168.178.74",
                "isRemote": true,
                "port": 51681,
                "priority": 2122063615,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            },
            {
                "id": "IbURXzjY4",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "2a02:2455:16df:fd00:ac40:3645:8968:6f3",
                "candidateType": "host",
                "foundation": "1768279622",
                "ip": "2a02:2455:16df:fd00:ac40:3645:8968:6f3",
                "isRemote": true,
                "port": 64083,
                "priority": 2122131711,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            },
            {
                "id": "IfYpE1t2a",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "169.254.41.16",
                "candidateType": "host",
                "foundation": "3639121165",
                "ip": "169.254.41.16",
                "isRemote": true,
                "port": 60241,
                "priority": 2122194687,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            },
            {
                "id": "IsPupA87C",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "169.254.136.39",
                "candidateType": "host",
                "foundation": "894275136",
                "ip": "169.254.136.39",
                "isRemote": true,
                "port": 56911,
                "priority": 2122260223,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            },
            {
                "id": "IvEBdETql",
                "timestamp": 1715205548472.197,
                "type": "remote-candidate",
                "address": "10.1.86.185",
                "candidateType": "host",
                "foundation": "455717168",
                "ip": "10.1.86.185",
                "isRemote": true,
                "port": 53956,
                "priority": 2121932543,
                "protocol": "udp",
                "transportId": "T01",
                "usernameFragment": "OWBa"
            }
        ]
    }
}
 */

function Zt() {
	const Dt = new Uint32Array(2);
	return crypto.getRandomValues(Dt), (1048576 * Dt[0] + (1048575 & Dt[1])) / 4503599627370496;
}

function Ht(n, t, e) {
	void 0 === e && (e = Zt);
	for (var r = "", i = 0; i < n; i++) r += t.charAt(e() * t.length);
	return r;
}

function Yt() {
	var alphabet = "0123456789abcdef";
	return [8, 4, 4, 4, 12]
		.map(function (n) {
			return Ht(n, alphabet);
		})
		.join("-");
}

/*
[
  "wrtcm", "partial", "wrtcm", "full", "wrtcm", "full", "onicecandidate", " udp ", " typ host ", "no localDescription",
  "wrtcd", "wrtcd", "Failed to execute .* No function .* provided"
]
*/

var ec = /*#__PURE__*/ Vr(
	[
		3493977307, 3502028746, 3468748939, 2510795684, 2879451792, 2981742789, 4069561766, 3754145959, 2514940605, 2797381082, 2817691797,
		3185558456, 3667257074, 2510732453, 2764042896, 3015040990, 3117996459, 3653479348, 2548628722, 3936400585, 4042428565, 4039954110,
		3368330680, 2514940656, 2800795602, 3165773784, 3016741518, 3368526754, 2510602169, 3098014352, 4071940035, 2731251174, 2664671652,
		3599561468, 2931145941, 4039100567, 3017396143, 2631057061, 4192926462, 3216437459, 3114590169, 4271692197, 3469208314, 3550717631,
		2549265625,
	],
	5
);

function rc(n) {
	var t = function (n) {
			return n();
		},
		e = function (n, t) {
			return n === t;
		},
		u = function (n, t, e, r) {
			return n(t, e, r);
		},
		a = function (n, t) {
			return n !== t;
		},
		c = function (n, t) {
			return n(t);
		},
		s = function (n, t) {
			return n(t);
		},
		l = function (n, t) {
			return n === t;
		},
		v = function (n, t) {
			return n(t);
		},
		d = function (n, t) {
			return n(t);
		},
		m = function (n) {
			return n();
		},
		p = function (n, t, e) {
			return n(t, e);
		},
		g = function (n, t, e) {
			return n(t, e);
		},
		w = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		b = p(Ar, n, 928136154), // 'use1-turn.fpjs.io'
		y = g(Ar, n, 2659403885); /* { "noop": "a", "wrtcm": "partial", "wrtcd": "20", "sld": "-" } */

	return w(r, this, void 0, void 0, function () {
		var n, r, w, E;
		return g(i, this, function (i) {
			var g = function (n) {
					return t(n);
				},
				k = function (n, t) {
					return e(n, t);
				},
				S = function (n, t, e, r) {
					return u(n, t, e, r);
				};
			switch (i.label) {
				case 0:
					/** wrtcm = 0 = 2 = 4
					 * partial = 1
					 * full = 3 = 5
					 * onicecandidate = 6
					 * udp = 7
					 * typ host = 8
					 * no localDescription = 9
					 * wrtcd = 10 = 11
					 * Failed to execute .* No function .* provided = 12
					 *  */
					return a(y[c(ec, 0)], c(ec, 1)) && a(y[c(ec, 2)], s(ec, 3))
						? [
								2,
								function () {
									return { s: -2, v: null };
								},
						  ]
						: // 4 = wrtcm
						  // 5 = full
						  ((n = l(y[v(ec, 4)], d(ec, 5)) ? m(Yt) : ""),
						  (r = []),
						  (w = []),
						  [4, p(h, p(f, 700, -4), ic.bind(null, n, b, y, r.push.bind(r), w.push.bind(w)))]);
				case 1:
					return (
						(E = i.sent()),
						[
							2,
							function () {
								var t = g(E);
								return k(t, 0) || k(t, -4)
									? { s: t, v: { u: n, e: S(o, [], r, !0), s: S(o, [], w, !0) } }
									: { s: t, v: null };
							},
						]
					);
			}
		});
	});
}

/**
 * n = ""
 * t = "use1-turn.fpjs.io"
 * e = { "noop": "a", "wrtcm": "partial", "wrtcd": "20", "sld": "-" }
 * o = []
 * u = []
 */

function ic(n, t, e, o, u) {
	var a = function (n, t) {
			return n(t);
		},
		/**
		 * 3 = {}
		 *
		 */
		c = "8|4|3|9|10|6|1|0|2|5|7",
		f = function (n, t, e) {
			return n(t, e);
		},
		l = function (n) {
			return n();
		},
		v = function (n, t) {
			return n(t);
		},
		d = function (n, t) {
			return n !== t;
		},
		h = function (n, t) {
			return n !== t;
		},
		m = function (n) {
			return n();
		},
		p = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		g = function (n, t, e, r) {
			return n(t, e, r);
		},
		w = function (n, t, e) {
			return n(t, e);
		};
	return p(r, this, void 0, void 0, function () {
		var r,
			b,
			y,
			E,
			k,
			S,
			R,
			L,
			I,
			P,
			O = {
				IVyDz: function (n, t) {
					return a(n, t);
				},
				lDjrI: c,
				eGBVv: function (n, t, e) {
					return f(n, t, e);
				},
				xKykP: function (n) {
					return l(n);
				},
				XoMCN: function (n, t, e) {
					return f(n, t, e);
				},
				yHSLV: function (n, t) {
					return v(n, t);
				},
				dVOqx: function (n, t, e) {
					return f(n, t, e);
				},
				snGwz: function (n, t, e) {
					return f(n, t, e);
				},
				qOVsg: function (n, t, e) {
					return f(n, t, e);
				},
				nEXBq: function (n, t) {
					return d(n, t);
				},
				vQPRt: function (n, t) {
					return a(n, t);
				},
				cfILk: function (n, t) {
					return h(n, t);
				},
				HYOKI: function (n) {
					return m(n);
				},
				caLSt: function (n) {
					return m(n);
				},
				ErDKv: function (n, t, e, r, i) {
					return p(n, t, e, r, i);
				},
				jCFWu: function (n, t, e, r) {
					return g(n, t, e, r);
				},
			};
		return w(i, this, function (i) {
			var a = {
				QegoI: O.lDjrI,
				TOadM: function (n, t, e) {
					return O.eGBVv(n, t, e);
				},
				IWlfm: function (n) {
					return O.xKykP(n);
				},
				LlSRH: function (n, t) {
					return O.IVyDz(n, t);
				},
				TYRGb: function (n, t, e) {
					return O.XoMCN(n, t, e);
				},
				sfktp: function (n, t) {
					return O.yHSLV(n, t);
				},
			};
			switch (i.label) {
				case 0:
					if (
						((r = O.dVOqx(Ga, n, t)),
						(b = O.snGwz(Uo, r, !0)),
						(y = O.XoMCN(Ar, b, 453955339)),
						(E = O.qOVsg(Ar, b, 1801730948)),
						O.nEXBq(y, 0))
					)
						return [2, y];
					i.label = 1;
				case 1:
					return (
						i.trys.push([1, , 7, 8]),
						(k = 0),
						(S = new Promise(function (n) {
							var t = !1;
							E[O.IVyDz(ec, 6)] = function (e) {
								for (var r = a.QegoI.split("|"), i = 0; ; ) {
									switch (r[i++]) {
										case "0":
											k++;
											continue;
										case "1":
											if (!c) return;
											continue;
										case "2":
											if (t) return;
											continue;
										case "3":
											var u = a.TOadM(Ar, f, 3367145028);
											continue;
										case "4":
											if (!f) return a.IWlfm(n);
											continue;
										case "5":
											t = !0;
											continue;
										case "6":
											var c = u.includes(a.LlSRH(ec, 7)) && u.includes(a.LlSRH(ec, 8));
											continue;
										case "7":
											a.TYRGb(s$1, n, 10);
											continue;
										case "8":
											var f = a.TOadM(Ar, e, 3367145028);
											continue;
										case "9":
											if (!u) return;
											continue;
										case "10":
											a.sfktp(o, u);
											continue;
									}
									break;
								}
							};
						})),
						(R = O.vQPRt(Yo, E)), // createDataChannel
						O.nEXBq(R, 0) ? [2, R] : [4, O.vQPRt(zo, E)] // createOffer
					);
				case 2:
					return (
						(L = i.sent()), // offer
						(I = O.dVOqx(Ar, L, 453955339)), // s
						(P = O.snGwz(Ar, L, 1801730948)), // v
						O.cfILk(I, 0) ? [2, I] : [4, O.snGwz(Ar, E, 76151562)(P)]
					);
				case 3:
					return i.sent(), [4, S];
				case 4:
					return i.sent(), O.HYOKI(dn) || O.caLSt(mn) ? [3, 6] : [4, O.ErDKv(oc, E, k, e, u)];
				case 5:
					i.sent(), (i.label = 6);
				case 6:
					return [2, 0];
				case 7:
					return O.jCFWu(s$1, Jo, 5e3, E), [7];
				case 8:
					return [2];
			}
		});
	});
}

/**
 * [ "NotSupportedError", "RTCPeerConnection", "webkitRTCPeerConnection", "RTCPeerConnection",
  "UnknownError", "Cannot create so many PeerConnections", "\\bcreateOffer\\b.*(\\bcallback\\b.*\\bnot a function\\b|\\barguments required\\b.*\\bpresent\\b)"]
 */

var Ho = /*#__PURE__*/ Vr(
	[
		2737342855, 3889739617, 2503606700, 1389922454, 2292762388, 3540284894, 1860081053, 3321140499, 3877787134, 1121878717, 2193021198,
		3624433103, 595641782, 2361053718, 3811800517, 1690941339, 2310534163, 3271713986, 599951537, 3012203853, 3523498479, 1875092650,
		2478559759, 2500816581, 1878640116, 2427967754, 3306374338, 764319159, 2310665283, 2534764226, 1623823803, 2499334677, 3591119299,
		1368170166, 2762658308, 3524227011, 1858442171, 3422209039, 3577568654, 1623823803, 2174210581, 3943916746, 729974148, 2240080713,
		3675087055, 1791985338, 3384470333, 3577568646, 567838902, 2461964032, 3725943490, 1576044983, 3146042115, 3490930894, 1875479213,
		2516108309, 3725881545, 1573421738, 3455505725, 3338886640, 1692369578, 3146040079, 3930269902,
	],
	6
);

function Uo(n, t) {
	for (
		var e = {
				IaGgt: "1|4|2|0|3",
				JsUWZ: function (n, t) {
					return n instanceof t;
				},
				mhowy: function (n, t) {
					return n === t;
				},
				ImCVJ: function (n, t) {
					return n(t);
				},
				OBWbr: function (n, t) {
					return n(t);
				},
			},
			r = e.IaGgt.split("|"),
			i = 0;
		;

	) {
		switch (r[i++]) {
			case "0":
				try {
					// u = new RTCPeerConnection(n)
					u = new o(n);
				} catch (a) {
					if (e.JsUWZ(a, Error)) {
						if (e.mhowy(a.name, Bo)) return { s: -6, v: null };
						if (e.ImCVJ(Xo, a)) return { s: -9, v: null };
					}
					throw a;
				}
				continue;
			case "1":
				// o = RTCPeerConnection
				var o = t ? window[e.OBWbr(Ho, 1)] || window[e.OBWbr(Ho, 2)] : window[e.OBWbr(Ho, 3)];
				continue;
			case "2":
				var u;
				continue;
			case "3":
				return { s: 0, v: u };
			case "4":
				if (!o) return { s: -3, v: null };
				continue;
		}
		break;
	}
}
