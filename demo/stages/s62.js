/**
 * checks if the browser is safari
 */

function dn() {
	var n = window,
		t = navigator;
	return (
		Y([
			"ApplePayError" in n,
			"CSSPrimitiveValue" in n,
			"Counter" in n,
			0 === t.vendor.indexOf("Apple"),
			"getStorageUpdates" in t,
			"WebKitMediaKeys" in n,
		]) >= 4
	);
}
