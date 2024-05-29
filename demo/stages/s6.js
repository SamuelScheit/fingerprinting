/**
 * s6: {
	s: 0,
	v: [25, 0, 0, 0],
 }
 */

function _n() {
	var n = screen;
	return [
		U(B(n.availTop), null),
		U(B(n.width) - B(n.availWidth) - U(B(n.availLeft), 0), null),
		U(B(n.height) - B(n.availHeight) - U(B(n.availTop), 0), null),
		U(B(n.availLeft), null),
	];
}

function kn() {
	return r(n, void 0, void 0, function () {
		var n;
		return i(this, function (t) {
			switch (t.label) {
				case 0:
					return Mn((n = _n()))
						? xn
							? [2, o([], xn, !0)]
							: pn()
							? [
									4,
									((e = document),
									(e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)),
							  ]
							: [3, 2]
						: [3, 2];
				case 1:
					t.sent(), (n = _n()), (t.label = 2);
				case 2:
					return Mn(n) || (xn = n), [2, n];
			}
			var e;
		});
	});
}
