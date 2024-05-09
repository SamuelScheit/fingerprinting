/** gets href and referrer of page and parent pages
 * 
 * s69: {
		s: 0, // 1 if href/referrer is empty, 0 if not
		v: [
			{
				l: "https://fingerprint.com/demo/", // location.href
				f: "",
			},
			{
				l: "https://fingerprint.com/demo/", // document.referer
				f: "",
			},
		],
	},
	
 */

function hu(n) {
	var e = n.stripUrlParams;
	return r(this, void 0, void 0, function () {
		var n, r;
		return i(this, function (i) {
			switch (i.label) {
				case 0:
					return (
						(n = (function (n) {
							for (var t, e, r = [], i = n; ; )
								try {
									var o = null === (t = i.location) || void 0 === t ? void 0 : t.href,
										u = null === (e = i.document) || void 0 === e ? void 0 : e.referrer;
									if (void 0 === o || void 0 === u) return { s: 1, v: r };
									r.push({ l: o, f: u });
									var a = i.parent;
									if (!a || a === i) return { s: 0, v: r };
									i = a;
								} catch (c) {
									if (pu(c)) return { s: 1, v: r };
									throw c;
								}
						})(window)),
						e ? [4, mu(n.v)] : [3, 2]
					);
				case 1:
					return (r = i.sent()), [2, t(t({}, n), { v: r })];
				case 2:
					return [2, n];
			}
		});
	});
}
