/**
 * window.webkitRequestFileSystem
 *
 * deprecated in most browsers
 * https://developer.chrome.com/blog/deps-rems-106
 *
 *
 * window.webkitRequestFileSystem(
 * window.TEMPORARY, 1,
 * function() {
 * 	console.debug("request fs found");
 * 	resolve(false);
 * },
 * function() {
 * 	console.debug("request fs not found");
 * 	resolve(true);
 * });
 *
 * window.TEMPORARY = 0
 * window.PERSISTENT = 1
 * 
 * s23: {
		s: -3, // unsupported
		v: null,
	},
 *
 */
function oa() {
	var n = function (n, t) {
			return n(t);
		},
		t = function (n, t, e, r, i) {
			return n(t, e, r, i);
		},
		e = function (n, t, e) {
			return n(t, e);
		};
	return t(r, this, void 0, void 0, function () {
		var r,
			o = function (t, e) {
				return n(t, e);
			},
			u = function (n, e, r, i, o) {
				return t(n, e, r, i, o);
			},
			a = function (t, e) {
				return n(t, e);
			};
		return e(i, this, function (n) {
			var t = function (n, t) {
				return o(n, t);
			};
			return (r = window[a(ra, 0)])
				? [
						2,
						new Promise(function (n) {
							var e = function (n, t) {
								return o(n, t);
							};
							u(
								r,
								0,
								1,
								function () {
									return e(n, !0);
								},
								function () {
									return t(n, !1);
								}
							);
						}),
				  ]
				: [2, void 0];
		});
	});
}
