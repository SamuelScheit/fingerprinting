function xa() {
	return h(f(500, { s: -3, v: null }), ja);
}
function ja() {
	return r(this, void 0, void 0, function () {
		var n, t, e, r, o, u, a;
		return i(this, function (i) {
			switch (i.label) {
				case 0:
					return (
						(n = window),
						(t = n.OfflineAudioContext || n.webkitOfflineAudioContext)
							? Sn()
								? [2, { s: -1, v: null }]
								: ((e = 4500),
								  (r = new t(1, 5e3, 44100)),
								  ((o = r.createOscillator()).type = "triangle"),
								  (o.frequency.value = 1e4),
								  ((u = r.createDynamicsCompressor()).threshold.value = -50),
								  (u.knee.value = 40),
								  (u.ratio.value = 12),
								  (u.attack.value = 0),
								  (u.release.value = 0.25),
								  o.connect(u),
								  u.connect(r.destination),
								  o.start(0),
								  [4, Ln(r)])
							: [2, { s: -2, v: null }]
					);
				case 1:
					return (a = i.sent())
						? [
								2,
								{
									s: 0,
									v: (function (n) {
										for (var t = 0, e = 0; e < n.length; ++e) t += Math.abs(n[e]);
										return t;
									})(a.getChannelData(0).subarray(e)),
								},
						  ]
						: [2, { s: -3, v: null }];
			}
		});
	});
}
