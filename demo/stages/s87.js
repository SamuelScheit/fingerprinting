function Aa() {
	return wn(function (n, t) {
		var e = {},
			r = t.document.createElement("div");
		t.document.body.appendChild(r);
		for (
			var i,
				o = {
					AccentColor: "ac",
					AccentColorText: "act",
					ActiveText: "at",
					ActiveBorder: "ab",
					ActiveCaption: "aca",
					AppWorkspace: "aw",
					Background: "b",
					ButtonHighlight: "bh",
					ButtonShadow: "bs",
					ButtonBorder: "bb",
					ButtonFace: "bf",
					ButtonText: "bt",
					FieldText: "ft",
					GrayText: "gt",
					Highlight: "h",
					HighlightText: "ht",
					InactiveBorder: "ib",
					InactiveCaption: "ic",
					InactiveCaptionText: "ict",
					InfoBackground: "ib",
					InfoText: "it",
					LinkText: "lt",
					Mark: "m",
					Menu: "me",
					Scrollbar: "s",
					ThreeDDarkShadow: "tdds",
					ThreeDFace: "tdf",
					ThreeDHighlight: "tdh",
					ThreeDLightShadow: "tdls",
					ThreeDShadow: "tds",
					VisitedText: "vt",
					Window: "w",
					WindowFrame: "wf",
					WindowText: "wt",
					Selecteditem: "si",
					Selecteditemtext: "sit",
				},
				u = 0,
				a = Object.keys(o);
			u < a.length;
			u++
		) {
			var c = a[u];
			e[o[c]] = ((i = c), (r.style.color = i), t.getComputedStyle(r).color);
		}
		return { s: 0, v: e };
	});
}
