/** speechSynthesis.getVoices() */

/**
 * s52: {
	s: 0, // 0 = success, 1 = not consistent e.g. firefox, -2 = error
	v: "b6d51c1509af9a35a6eb88bb5b7e06d3", // hash of the voices, 1 = "00000000000000000000000000000000"
},
 */

var Hash = function (n, t) {
	var e = (function (n) {
		for (var t = new Uint8Array(n.length), e = 0; e < n.length; e++) {
			var r = n.charCodeAt(e);
			if (r > 127) return new TextEncoder().encode(n);
			t[e] = r;
		}
		return t;
	})(n);
	t = t || 0;
	var r,
		i = [0, e.length],
		o = i[1] % 16,
		u = i[1] - o,
		a = [0, t],
		c = [0, t],
		s = [0, 0],
		f = [0, 0];
	for (r = 0; r < u; r += 16)
		(s[0] = e[r + 4] | (e[r + 5] << 8) | (e[r + 6] << 16) | (e[r + 7] << 24)),
			(s[1] = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16) | (e[r + 3] << 24)),
			(f[0] = e[r + 12] | (e[r + 13] << 8) | (e[r + 14] << 16) | (e[r + 15] << 24)),
			(f[1] = e[r + 8] | (e[r + 9] << 8) | (e[r + 10] << 16) | (e[r + 11] << 24)),
			J(s, tn),
			z(s, 31),
			J(s, en),
			K(a, s),
			z(a, 27),
			X(a, c),
			J(a, rn),
			X(a, on),
			J(f, en),
			z(f, 33),
			J(f, tn),
			K(c, f),
			z(c, 31),
			X(c, a),
			J(c, rn),
			X(c, un);
	(s[0] = 0), (s[1] = 0), (f[0] = 0), (f[1] = 0);
	var l = [0, 0];
	switch (o) {
		case 15:
			(l[1] = e[r + 14]), q(l, 48), K(f, l);
		case 14:
			(l[1] = e[r + 13]), q(l, 40), K(f, l);
		case 13:
			(l[1] = e[r + 12]), q(l, 32), K(f, l);
		case 12:
			(l[1] = e[r + 11]), q(l, 24), K(f, l);
		case 11:
			(l[1] = e[r + 10]), q(l, 16), K(f, l);
		case 10:
			(l[1] = e[r + 9]), q(l, 8), K(f, l);
		case 9:
			(l[1] = e[r + 8]), K(f, l), J(f, en), z(f, 33), J(f, tn), K(c, f);
		case 8:
			(l[1] = e[r + 7]), q(l, 56), K(s, l);
		case 7:
			(l[1] = e[r + 6]), q(l, 48), K(s, l);
		case 6:
			(l[1] = e[r + 5]), q(l, 40), K(s, l);
		case 5:
			(l[1] = e[r + 4]), q(l, 32), K(s, l);
		case 4:
			(l[1] = e[r + 3]), q(l, 24), K(s, l);
		case 3:
			(l[1] = e[r + 2]), q(l, 16), K(s, l);
		case 2:
			(l[1] = e[r + 1]), q(l, 8), K(s, l);
		case 1:
			(l[1] = e[r]), K(s, l), J(s, tn), z(s, 31), J(s, en), K(a, s);
	}
	return (
		K(a, i),
		K(c, i),
		X(a, c),
		X(c, a),
		nn(a),
		nn(c),
		X(a, c),
		X(c, a),
		("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
			("00000000" + (a[1] >>> 0).toString(16)).slice(-8) +
			("00000000" + (c[0] >>> 0).toString(16)).slice(-8) +
			("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
	);
};

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
function fu(n) {
	var t = function (n) {
			return n.replace(/([,\\])/g, "\\$1");
		},
		e = n
			.map(function (n) {
				return [t(n.voiceURI), t(n.name), t(n.lang), n.localService ? "1" : "0", n.default ? "1" : "0"].join(",");
			})
			.sort();

	/**
 * e = [
    "Aaron,Aaron,en-US,1,0",
    "Albert,Albert,en-US,1,0",
    "Alice,Alice,it-IT,1,0",
    "Alva,Alva,sv-SE,1,0",
    "Amira,Amira,ms-MY,1,0",
    "Amélie,Amélie,fr-CA,1,0",
    "Anna,Anna,de-DE,1,0",
    "Arthur,Arthur,en-GB,1,0",
    "Bad News,Bad News,en-US,1,0",
    "Bahh,Bahh,en-US,1,0"
]
 */

	return { s: n.length ? 0 : 1, v: Hash(JSON.stringify(e)) };
}
