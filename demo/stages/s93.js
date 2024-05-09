/**
 * renders emojis and returns their bounding boxes
 * 
 * s93: {
		s: 0,
		v: {
			x: 7.998046875,
			y: 9.873046875,
			left: 7.998046875,
			right: 1307.998046875,
			bottom: 27.998046875,
			height: 18.125,
			top: 9.873046875,
			width: 1300,
			font: "Times",
		},
	},
 */

function _a(n, t) {
	for (
		var e = {}, r = n.getBoundingClientRect(), i = 0, o = ["x", "y", "left", "right", "bottom", "height", "top", "width"];
		i < o.length;
		i++
	) {
		var u = o[i];
		u in r && (e[u] = r[u]);
	}
	var a = t.getComputedStyle(n, null).getPropertyValue("font-family");
	return (e.font = a), e;
}

function Ma() {
	for (var n = "", t = 128512; t <= 128591; t++) {
		var e = String.fromCodePoint(t);
		n += e;
	}
	return wn(function (t, e) {
		var r = e.document.createElement("span");
		return (r.style.whiteSpace = "nowrap"), (r.innerHTML = n), e.document.body.append(r), { s: 0, v: _a(r, e) };
	});
}
