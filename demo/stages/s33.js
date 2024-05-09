/**
 * canvas only chrome
 * (skips every other browser brave, firefox, or browser which return "" for toDataURL()
 *
 * creates 4x4 canvas
 * 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAA9JREFUGFdjZEADjKQLAAAA7gAFLaYDxAAAAABJRU5ErkJggg=='
 *
 * aborts if the data does not contains [73, 68, 65, 84, 24] or 0x4944415418 as hex or "IDAT\x18" as string
 * aborts if the data does not contains [73, 69, 78, 68] or 49454e44 as hex or "IEND" as string
 *
 * checks if the bytes between IDAT and IEND are summed equal to 1321
 * 
 * s33: {
		s: 0,
		v: false,
	},
 *
 */

function Do() {
	var n = window;
	if (!vn()) return Zo(!1);
	try {
		if (
			[66, 114, 97, 118, 101]
				.map(function (n) {
					return String.fromCharCode(n);
				})
				.join("") in n
		)
			return Zo(!0);
		var t = document.createElement("canvas");
		(t.width = 4), (t.height = 4), (t.style.display = "inline");
		var e = t.toDataURL();
		if ("" === e) return Zo(!0);
		var r = V(e.split(",")[1]),
			i = L(r, [73, 68, 65, 84, 24]);
		if (-1 === i) return Zo(!1);
		var o = L(r, [73, 69, 78, 68]);
		return Zo(
			-1 === o
				? !1
				: 1321 !==
						r.slice(i + 5, o).reduce(function (n, t) {
							return n + t;
						}, 0)
		);
	} catch (u) {
		return Zo(!1);
	}
}
function Zo(n) {
	return { s: 0, v: n };
}
