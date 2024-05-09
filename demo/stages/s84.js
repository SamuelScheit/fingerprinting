/**
 * window.screen.width
 * window.screen.height
 * 
 * s84: {
		s: 0,
		v: {
			w: 1920,
			h: 1080,
		},
	},
	
 */
function ua() {
	return wn(function (n, t) {
		var e = window.screen,
			r = function (n) {
				var t = parseInt(n);
				return "number" == typeof t && isNaN(t) ? -1 : t;
			};
		return { s: 0, v: { w: r(e.width), h: r(e.height) } };
	});
}
