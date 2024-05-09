/**
 * Calculates a fingerprint based on audio data.
 *
 * s90: {
 *		s: 0,
 *		v: 0.00006128742097644135,
 *	},
 * This is the audio fingerprint of the open source version https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/audio.ts
 *
 */

function kn() {
	return r(this, void 0, void 0, function () {
		var n, t, e;
		return i(this, function (o) {
			switch (o.label) {
				case 0:
					return (
						(t = new Promise(function (n) {
							var t = document,
								e = "visibilitychange",
								r = function () {
									t.hidden || (t.removeEventListener(e, r), n());
								};
							t.addEventListener(e, r), r();
						}).then(function () {
							return N(500);
						})),
						(e = (function () {
							return r(this, void 0, void 0, function () {
								var n, t, e, r, o, u, a;
								return i(this, function (i) {
									switch (i.label) {
										case 0:
											return (
												(n = window),
												(t = n.OfflineAudioContext || n.webkitOfflineAudioContext)
													? Sn()
														? [2, -1]
														: [4, Rn(t)]
													: [2, -2]
											);
										case 1:
											return (e = i.sent())
												? ((r = new t(1, e.length - 1 + 4e4, En)),
												  ((o = r.createBufferSource()).buffer = e),
												  (o.loop = !0),
												  (o.loopStart = (e.length - 1) / En),
												  (o.loopEnd = e.length / En),
												  o.connect(r.destination),
												  o.start(),
												  [4, Ln(r)])
												: [2, -3];
										case 2:
											return (u = i.sent())
												? ((a = (function (n, t) {
														for (var e = void 0, r = !1, i = 0; i < t.length; i += Math.floor(t.length / 10))
															if (0 === t[i]);
															else if (void 0 === e) e = t[i];
															else if (e !== t[i]) {
																r = !0;
																break;
															}
														void 0 === e
															? (e = n.getChannelData(0)[n.length - 1])
															: r &&
															  (e = (function (n) {
																	for (var t = 1 / 0, e = -1 / 0, r = 0; r < n.length; r++) {
																		var i = n[r];
																		0 !== i && (i < t && (t = i), i > e && (e = i));
																	}
																	return (t + e) / 2;
															  })(t));
														return e;
												  })(e, u.getChannelData(0).subarray(e.length - 1))),
												  [2, Math.abs(a)])
												: [2, -3];
									}
								});
							});
						})().then(
							function (t) {
								return (n = [!0, t]);
							},
							function (t) {
								return (n = [!1, t]);
							}
						)),
						[4, Promise.race([t, e])]
					);
				case 1:
					return (
						o.sent(),
						[
							2,
							function () {
								if (!n) return -3;
								if (!n[0]) throw n[1];
								return n[1];
							},
						]
					);
			}
		});
	});
}
