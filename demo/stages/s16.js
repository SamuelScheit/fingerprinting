/**
 * navigator.plugins
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
