/**
 * navigator.plugins
 * 
 * s16: {
		s: 0,
		v: [
			{
				name: "PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Chrome PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Chromium PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Microsoft Edge PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "WebKit built-in PDF",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
		],
	},
 */

yt = function () {
	var n = navigator.plugins;
	if (n) {
		for (var t = [], e = 0; e < n.length; ++e) {
			var r = n[e];
			if (r) {
				for (var i = [], o = 0; o < r.length; ++o) {
					var u = r[o];
					i.push({ type: u.type, suffixes: u.suffixes });
				}
				t.push({ name: r.name, description: r.description, mimeTypes: i });
			}
		}
		return t;
	}
};
