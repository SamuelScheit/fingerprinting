/**
 * checks if the browser is automated
 */
function Va() {
	return wn(function (n, t) {
		var e = t.navigator.webdriver;
		return null === e ? { s: -1, v: null } : void 0 === e ? { s: -2, v: null } : { s: 0, v: e };
	});
}
