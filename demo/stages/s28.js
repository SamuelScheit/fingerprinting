/**
 * check for global variables that indiciate the browser type
 * 
 * s28: {
		s: 0,
		v: ["chrome"],
	},
 */

St = function () {
	for (
		var n = [],
			t = 0,
			e = [
				"chrome",
				"safari",
				"__crWeb",
				"__gCrWeb",
				"yandex",
				"__yb",
				"__ybro",
				"__firefox__",
				"__edgeTrackingPreventionStatistics",
				"webkit",
				"oprt",
				"samsungAr",
				"ucweb",
				"UCShellJava",
				"puffinDevice",
			];
		t < e.length;
		t++
	) {
		var r = e[t],
			i = window[r];
		i && "object" == typeof i && n.push(r);
	}
	return n.sort();
};
