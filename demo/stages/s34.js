/**
 * gets the ice candidates of the RTCPeerConnection
 *
 * [
 *		{
 *			"urls": "stun:stun.fpapi.io:3478"
 *		},
 *		{
 *			"urls": "stun:stun.l.google.com:19302"
 *		}
 *	]
 *
 * s34: {
 *		s: -2,
 *		v: [
 *			"candidate:2079771436 1 udp 2122260223 169.254.25.252 50012 typ host generation 0 ufrag qRGm network-id 3",
 *			"candidate:1850891489 1 udp 2122194687 169.254.41.16 60447 typ host generation 0 ufrag qRGm network-id 4",
 *			"candidate:3267833839 1 udp 2122063615 192.168.178.74 61904 typ host generation 0 ufrag qRGm network-id 1 network-cost 10",
 *			"candidate:2750988316 1 udp 2121932543 10.1.86.185 55620 typ host generation 0 ufrag qRGm network-id 5 network-cost 50",
 *			"candidate:693893195 1 udp 2122131711 2a02:2455:16df:fd00:f90a:683d:8bd5:d4c6 62981 typ host generation 0 ufrag qRGm network-id 2 network-cost 10",
 *			"candidate:4242097647 1 udp 2122003199 fd54:20a4:d33b:b10c:bd3:0:1:55b4 62721 typ host generation 0 ufrag qRGm network-id 6 network-cost 50",
 *			"candidate:1372769609 1 udp 1685793023 2a02:6ea0:da08:3027::14 57677 typ srflx raddr fd54:20a4:d33b:b10c:bd3:0:1:55b4 rport 62721 generation 0 ufrag qRGm network-id 6 network-cost 50",
 *			"candidate:2256605174 1 udp 1685724927 149.102.239.229 56388 typ srflx raddr 10.1.86.185 rport 55620 generation 0 ufrag qRGm network-id 5 network-cost 50",
 *			"candidate:87632308 1 tcp 1518280447 169.254.25.252 9 typ host tcptype active generation 0 ufrag qRGm network-id 3",
 *			"candidate:278773369 1 tcp 1518214911 169.254.41.16 9 typ host tcptype active generation 0 ufrag qRGm network-id 4",
 *			"candidate:3154693495 1 tcp 1518083839 192.168.178.74 9 typ host tcptype active generation 0 ufrag qRGm network-id 1 network-cost 10",
 *			"candidate:3711378052 1 tcp 1517952767 10.1.86.185 9 typ host tcptype active generation 0 ufrag qRGm network-id 5 network-cost 50",
 *			"candidate:1469323987 1 tcp 1518151935 2a02:2455:16df:fd00:f90a:683d:8bd5:d4c6 9 typ host tcptype active generation 0 ufrag qRGm network-id 2 network-cost 10",
 *			"candidate:2182522743 1 tcp 1518023423 fd54:20a4:d33b:b10c:bd3:0:1:55b4 9 typ host tcptype active generation 0 ufrag qRGm network-id 6 network-cost 50",
 *		],
 *	}
 *
 */

function Ko(n) {
	return r(this, void 0, void 0, function () {
		var t, e, r;
		return i(this, function (i) {
			switch (i.label) {
				case 0:
					if (
						((t = Uo(
							{
								iceServers: xr(0).map(function (n) {
									return { urls: "stun:".concat(n) };
								}),
							},
							!0
						)),
						(e = t.s),
						(r = t.v),
						0 !== e)
					)
						return [2, e];
					i.label = 1;
				case 1:
					return (
						i.trys.push([1, , 3, 4]),
						[
							4,
							new Promise(function (t, e) {
								var i = !1;
								(r.onicecandidate = function (e) {
									var r = e.candidate;
									if (!r) return t(0);
									var o = r.candidate;
									o && (n(o), !i && / typ [sp]rflx /.test(o) && ((i = !0), s$1(t, 10, 0)));
								}),
									(r.onicegatheringstatechange = function () {
										"complete" === r.iceGatheringState && t(0);
									});
								var o = Yo(r, "test");
								0 === o
									? zo(r)
											.then(function (n) {
												var e = n.s,
													i = n.v;
												if (0 === e) return r.setLocalDescription(i);
												t(e);
											})
											.catch(e)
									: t(o);
							}),
						]
					);
				case 2:
					return [2, i.sent()];
				case 3:
					return Jo(r), [7];
				case 4:
					return [2];
			}
		});
	});
}
