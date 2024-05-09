/**
 * checks if globals are defined that indicate the use of a headless browser
 *
 * 	s157: {
		s: 0,
		v: {
			awesomium: false,
			cef: false,
			cefsharp: false,
			coachjs: false,
			fminer: false,
			geb: false,
			nightmarejs: false,
			phantomas: false,
			phantomjs: false,
			rhino: false,
			selenium: false,
			webdriverio: false,
			webdriver: false,
			headless_chrome: false,
		},
	},
 * 
 */

Pi = function () {
	var n,
		t,
		e =
			(((n = {})[zr] = { window: ["awesomium"] }),
			(n[qr] = { window: ["RunPerfTest"] }),
			(n[Kr] = { window: ["CefSharp"] }),
			(n[Qr] = { window: ["emit"] }),
			(n[$r] = { window: ["fmget_targets"] }),
			(n[ni] = { window: ["geb"] }),
			(n[ti] = { window: ["__nightmare", "nightmare"] }),
			(n[ei] = { window: ["__phantomas"] }),
			(n[ri] = { window: ["callPhantom", "_phantom"] }),
			(n[ii] = { window: ["spawn"] }),
			(n[oi] = {
				window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
				document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"],
			}),
			(n[ui] = { window: ["wdioElectron"] }),
			(n[ai] = {
				window: [
					"webdriver",
					"__webdriverFunc",
					"__lastWatirAlert",
					"__lastWatirConfirm",
					"__lastWatirPrompt",
					"_WEBDRIVER_ELEM_CACHE",
					"ChromeDriverw",
				],
				document: [
					"__webdriver_script_fn",
					"__driver_evaluate",
					"__webdriver_evaluate",
					"__fxdriver_evaluate",
					"__driver_unwrapped",
					"__webdriver_unwrapped",
					"__fxdriver_unwrapped",
					"__webdriver_script_fn",
					"__webdriver_script_func",
					"__webdriver_script_function",
					"$cdc_asdjflasutopfhvcZLmcf",
					"$cdc_asdjflasutopfhvcZLmcfl_",
					"$chrome_asyncScriptInfo",
					"__$webdriverAsyncExecutor",
				],
			}),
			(n[ci] = { window: ["domAutomation", "domAutomationController"] }),
			n),
		r = {},
		i = vi(window),
		u = [];
	for (t in (void 0 !== window.document && (u = vi(window.document)), e)) {
		var a = e[t];
		if (void 0 !== a) {
			var c = void 0 !== a.window && di.apply(void 0, o([i], a.window, !1)),
				s = !(void 0 === a.document || !u.length) && di.apply(void 0, o([u], a.document, !1));
			r[t] = c || s;
		}
	}
	return r;
};
