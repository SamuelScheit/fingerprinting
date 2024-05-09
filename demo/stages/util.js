function P(n) {
	if ("function" == typeof TextDecoder) {
		var t = new TextDecoder().decode(n);
		if (t) return t;
	}
	var e = b(n);
	return decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
}

function b(n) {
	return n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}

function T(n, t) {
	return (n - t + 256) % 256;
}

function pr(n, t, e) {
	var r = function () {
			throw new Error("Invalid data");
		},
		i = b(n);
	i.length < t.length + 2 && r();
	for (var o = 0; o < t.length; ++o) T(i[1 + o], i[0]) !== t[o] && r();
	var u = 1 + t.length,
		a = T(i[u], i[0]);
	i.length < u + 1 + a + e && r();
	var c = u + 1 + a,
		s = c + e,
		f = new ArrayBuffer(i.length - s),
		l = new Uint8Array(f);
	for (o = 0; o < l.length; ++o) l[o] = i[s + o] ^ i[c + (o % e)];
	return f;
}

export function Vr(n, t) {
	const result = JSON.parse(P(pr(new Uint32Array(n), [], t)));
	console.log(result);
	return result;
}
