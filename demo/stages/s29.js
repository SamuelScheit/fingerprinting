/**
 *
 * window.webkitStorageInfo
 * navigator.webkitTemporaryStorage.queryUsageAndQuota((used, granted)=>{})
 *
 * https://developer.chrome.com/docs/apps/offline_storage#query
 *
 * await navigator.storage.estimate()
 * 
 * s29: {
		s: 0, // 1 = navigator.storage.estimate, 0 = navigator.webkitTemporaryStorage.queryUsageAndQuota, -2 = unsupported
		v: 1197130899456,
	},
 */

function ea() {
	var n = function (n, t) {
			return n(t);
		},
		t = function (n, t, e) {
			return n(t, e);
		},
		e = function (n, t) {
			return n === t;
		},
		o = function (n, t) {
			return n === t;
		},
		a = function (n, t) {
			return n !== t;
		},
		c = function (n, t) {
			return n === t;
		},
		s = function (n, t) {
			return n === t;
		},
		f = function (n, t, e) {
			return n(t, e);
		},
		l = function (n, t) {
			return n !== t;
		},
		v = function (n, t, e) {
			return n(t, e);
		};
	return (function (n, t, e, r, i) {
		return n(t, e, r, i);
	})(r, this, void 0, void 0, function () {
		var r, d, h, m;
		return v(i, this, function (i) {
			var v = function (t, e) {
					return n(t, e);
				},
				p = function (n, e, r) {
					return t(n, e, r);
				},
				g = function (n, e, r) {
					return t(n, e, r);
				};
			switch (i.label) {
				case 0:
					return (
						(r = navigator),
						(d = t(Ar, r, 1417288500)),
						(h = t(Ar, r, 2706846255)) || (e(d, null) || o(d, void 0) ? void 0 : t(Ar, d, 3538568711))
							? h
								? [
										4,
										Promise.race([
											t(u, 250, void 0),
											new Promise(function (n) {
												p(
													Ar,
													h,
													1291883197
												)(function (t, e) {
													return v(n, e);
												});
											}),
										]),
								  ]
								: [3, 2]
							: [2, { s: -1, v: null }]
					);
				case 1:
					if (((m = i.sent()), a(m, void 0))) return [2, { s: 0, v: m }];
					i.label = 2;
				case 2:
					return (c(d, null) || s(d, void 0) ? void 0 : f(Ar, d, 3538568711))
						? [
								4,
								Promise.race([
									t(u, 250, void 0),
									f(Ar, d, 3538568711)().then(function (n) {
										return g(Ar, n, 1813778413);
									}),
								]),
						  ]
						: [3, 4];
				case 3:
					if (((m = i.sent()), l(m, void 0))) return [2, { s: 1, v: m }];
					i.label = 4;
				case 4:
					return [2, { s: -2, v: null }];
			}
		});
	});
}
