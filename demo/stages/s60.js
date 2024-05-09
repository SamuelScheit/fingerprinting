/**
 * checks if the browser is edge
 */

function ln() {
	var n = window,
		t = navigator;
	return Y(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !fn();
}
