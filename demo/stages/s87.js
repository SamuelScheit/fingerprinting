/**
 * gets browser specific css colors
 * 
 * s87: {
		s: 0,
		v: {
			ac: "rgb(0, 0, 0)",
			act: "rgb(0, 0, 0)",
			at: "rgb(0, 0, 238)",
			ab: "rgb(0, 0, 0)",
			aca: "rgb(0, 0, 0)",
			aw: "rgb(255, 255, 255)",
			b: "rgb(255, 255, 255)",
			bh: "rgb(239, 239, 239)",
			bs: "rgb(239, 239, 239)",
			bb: "rgb(0, 0, 0)",
			bf: "rgb(239, 239, 239)",
			bt: "rgb(0, 0, 0)",
			ft: "rgb(0, 0, 0)",
			gt: "rgb(128, 128, 128)",
			h: "rgb(0, 0, 255)",
			ht: "rgb(255, 255, 255)",
			ib: "rgb(255, 255, 255)",
			ic: "rgb(255, 255, 255)",
			ict: "rgb(128, 128, 128)",
			it: "rgb(0, 0, 0)",
			lt: "rgb(0, 0, 238)",
			m: "rgb(255, 255, 0)",
			me: "rgb(255, 255, 255)",
			s: "rgb(255, 255, 255)",
			tdds: "rgb(0, 0, 0)",
			tdf: "rgb(239, 239, 239)",
			tdh: "rgb(0, 0, 0)",
			tdls: "rgb(0, 0, 0)",
			tds: "rgb(0, 0, 0)",
			vt: "rgb(0, 0, 238)",
			w: "rgb(255, 255, 255)",
			wf: "rgb(0, 0, 0)",
			wt: "rgb(0, 0, 0)",
			si: "rgb(179, 215, 255)",
			sit: "rgb(0, 0, 0)",
		},
	},
 * 
 */

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
