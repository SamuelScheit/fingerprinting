/** canvas hashes of geometry, text and winding
 * 
 * s17: {
		s: 0,
		v: {
			winding: true,
			geometry: "1fd188f9714ca90a5a10eb2fc306b5eb",
			text: "32a115bd05e0f411c5ecd7e285fd36e2",
		},
	},

*/

function On(n) {
	return r(this, void 0, void 0, function () {
		var t, e, r, o, u, a, c;
		return i(this, function (i) {
			switch (i.label) {
				case 0:
					return (
						(t = !1),
						(o = (function () {
							var n = document.createElement("canvas");
							return (n.width = 1), (n.height = 1), [n, n.getContext("2d")];
						})()),
						(u = o[0]),
						(a = o[1]),
						(function (n, t) {
							return !(!t || !n.toDataURL);
						})(u, a)
							? [3, 1]
							: ((e = r = "unsupported"), [3, 4])
					);
				case 1:
					return (
						(t = (function (n) {
							return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd");
						})(a)),
						n ? ((e = r = "skipped"), [3, 4]) : [3, 2]
					);
				case 2:
					return [4, Tn(u, a)];
				case 3:
					(c = i.sent()), (e = c[0]), (r = c[1]), (i.label = 4);
				case 4:
					return [2, { winding: t, geometry: e, text: r }];
			}
		});
	});
}

function Tn(n, t) {
	return r(this, void 0, void 0, function () {
		var e, r;
		return i(this, function (i) {
			switch (i.label) {
				case 0:
					return (
						(function (n, t) {
							(n.width = 240),
								(n.height = 60),
								(t.textBaseline = "alphabetic"),
								(t.fillStyle = "#f60"),
								t.fillRect(100, 1, 62, 20),
								(t.fillStyle = "#069"),
								(t.font = '11pt "Times New Roman"');
							var e = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
							t.fillText(e, 2, 15), (t.fillStyle = "rgba(102, 204, 0, 0.2)"), (t.font = "18pt Arial"), t.fillText(e, 4, 45);
						})(n, t),
						[4, F()]
					);
				case 1:
					return (
						i.sent(),
						(e = An(n)),
						(r = An(n)),
						e !== r
							? [2, ["unstable", "unstable"]]
							: ((function (n, t) {
									(n.width = 122), (n.height = 110), (t.globalCompositeOperation = "multiply");
									for (
										var e = 0,
											r = [
												["#f2f", 40, 40],
												["#2ff", 80, 40],
												["#ff2", 60, 80],
											];
										e < r.length;
										e++
									) {
										var i = r[e],
											o = i[0],
											u = i[1],
											a = i[2];
										(t.fillStyle = o), t.beginPath(), t.arc(u, a, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill();
									}
									(t.fillStyle = "#f9c"),
										t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
										t.arc(60, 60, 20, 0, 2 * Math.PI, !0),
										t.fill("evenodd");
							  })(n, t),
							  [4, F()])
					);
				case 2:
					return i.sent(), [2, [An(n), e]];
			}
		});
	});
}
