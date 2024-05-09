/** gets values for rendering math formulates
 *
 * s92: {
		s: 0,
		v: {
			x: 7.998046875,
			y: 7.998046875,
			left: 7.998046875,
			right: 294.70703125,
			bottom: 26.123046875,
			height: 18.125,
			top: 7.998046875,
			width: 286.708984375,
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

function Na() {
	var n = "<mrow><munderover><mmultiscripts><mo>∏</mo>";
	function t(n, t, e, r, i) {
		return (
			"<mmultiscripts><mi>".concat(n, "</mi><mi>").concat(t, "</mi><mi>").concat(e, "</mi>") +
			"<mprescripts></mprescripts><mi>".concat(r, "</mi><mi>").concat(i, "</mi></mmultiscripts>")
		);
	}
	for (
		var e = 0,
			r = [
				["𝔈", "υ", "τ", "ρ", "σ"],
				["𝔇", "π", "ο", "ν", "ξ"],
				["𝔄", "δ", "γ", "α", "β"],
				["𝔅", "θ", "η", "ε", "ζ"],
				["𝔉", "ω", "ψ", "ϕ", "χ"],
				["ℭ", "μ", "λ", "ι", "κ"],
			];
		e < r.length;
		e++
	) {
		var i = r[e],
			o = t.apply(void 0, i);
		n += o;
	}
	return (
		(n += "</munderover></mrow>"),
		wn(function (t, e) {
			var r = e.document.createElement("math");
			return (r.style.whiteSpace = "nowrap"), (r.innerHTML = n), e.document.body.append(r), { s: 0, v: _a(r, e) };
		})
	);
}
