/** has Google Voice in speechSynthesis.getVoices() */

function lu(n) {
	var t = n.some(function (n) {
		const result = 1655763047 === C(n.name.slice(0, 6)); // "Google"
		if (result) {
			debugger;
		}
		return result;
	});
	return { s: n.length ? 0 : 1, v: t };
}

function su(n) {
	var t = window.speechSynthesis;
	if ("function" != typeof (null == t ? void 0 : t.getVoices)) return { s: -1, v: null };
	var e = function () {
		return t.getVoices();
	};
	return !t.addEventListener || (mn() && Oe())
		? n(e())
		: (function (n) {
				return r(this, void 0, void 0, function () {
					var t;

					return i(this, function (e) {
						switch (e.label) {
							case 0:
								return (
									e.trys.push([0, , 2, 3]),
									[
										4,
										new Promise(function (e, r) {
											var i,
												o = function () {
													n.getVoices().length ? (null == i || i(), (i = a(e, 50))) : i || (i = s$1(e, 600));
												};
											(t = function () {
												try {
													o();
												} catch (n) {
													r(n);
												}
											}),
												o(),
												n.addEventListener("voiceschanged", t);
										}),
									]
								);
							case 1:
								return [2, e.sent()];
							case 2:
								return t && n.removeEventListener("voiceschanged", t), [7];
							case 3:
								return [2];
						}
					});
				});
		  })(t).then(function () {
				return function () {
					var t = e();
					return t.length ? n(t) : { s: -2, v: null };
				};
		  });
}
