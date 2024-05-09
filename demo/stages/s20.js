/** gets immediately evaluated and was a bit harder to debug
 * Proceeding as follows:
 * 1. search for string s20 and find: `(e.s20 = _i)`
 * 2. Debugger automatically resolves _i to generic function which returns a promise and is used in many other properties as well
 * 3. We need to find the original function (the original promise that is passed to this generic function)
 * 4. Search for the variable declaration "_i =  " and find "var _i = *#__PURE__* Vi(ut),"
 * 5. Vi is the wrapper function and ut is the original promise
 *
 * https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/fonts.ts
 *
 * the following fonts are checked:
 * ["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"]
 * and are grouped into these categories:
 * 'monospace', 'sans-serif', 'serif',
 *
 * returns the following object:
 * {s: 0,v: ["Arial Unicode MS", "Gill Sans", "Helvetica Neue", "Menlo"],
 */

var ut = function () {
	var n = this;
	return wn(function (t, e) {
		var o = e.document;
		return r(n, void 0, void 0, function () {
			var n, t, e, r, u, a, c, s, f, l, v;
			return i(this, function (i) {
				switch (i.label) {
					case 0:
						return (
							((n = o.body).style.fontSize = "48px"),
							(t = o.createElement("div")).style.setProperty("visibility", "hidden", "important"),
							(e = {}),
							(r = {}),
							(u = function (n) {
								var e = o.createElement("span"),
									r = e.style;
								return (
									(r.position = "absolute"),
									(r.top = "0"),
									(r.left = "0"),
									(r.fontFamily = n),
									(e.textContent = "mmMwWLliI0O&1"),
									t.appendChild(e),
									e
								);
							}),
							(a = function (n, t) {
								return u("'".concat(n, "',").concat(t));
							}),
							(c = function () {
								for (
									var n = {},
										t = function (t) {
											n[t] = In.map(function (n) {
												return a(t, n);
											});
										},
										e = 0,
										r = Pn;
									e < r.length;
									e++
								) {
									t(r[e]);
								}
								return n;
							}),
							(s = function (n) {
								return In.some(function (t, i) {
									return n[i].offsetWidth !== e[t] || n[i].offsetHeight !== r[t];
								});
							}),
							(f = (function () {
								return In.map(u);
							})()),
							(l = c()),
							n.appendChild(t),
							[4, F()]
						);
					case 1:
						for (i.sent(), v = 0; v < In.length; v++) (e[In[v]] = f[v].offsetWidth), (r[In[v]] = f[v].offsetHeight);
						return [
							2,
							Pn.filter(function (n) {
								return s(l[n]);
							}),
						];
				}
			});
		});
	});
};
