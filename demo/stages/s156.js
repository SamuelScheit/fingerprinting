/** checks if certain globals are in the window object
 * set is hashed => needs brute force to find the value
 */

function constants() {
	for (var n, t = new Uint32Array(256), e = 0; e < 256; e++) {
		n = e;
		for (var r = 0; r < 8; r++) n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
		t[e] = n;
	}
	return t;
}

function CRC(t) {
	var k = constants();
	for (var e = -1, r = 0; r < t.length; r++) {
		e = (e >>> 8) ^ k[255 & (e ^ t[r])];
	}
	return (-1 ^ e) >>> 0;
}

function reverseCRC(n) {
	var t = constants();
	for (var e = -1, r = 0; r < 4; r++) {
		e = (e >>> 8) ^ t[255 & (e ^ (n >>> (r * 8)))];
	}
	return (-1 ^ e) >>> 0 === n;
}

function intToBytes(num) {
	var bytes = [];
	for (var i = 0; i < 4; i++) {
		bytes.push((num >> (i * 8)) & 0xff);
	}
	return bytes;
}

function stringToCharCode(n) {
	for (var t = new Uint8Array(n.length), e = 0; e < n.length; e++) {
		var r = n.charCodeAt(e);
		if (r > 127) return new TextEncoder().encode(n);
		t[e] = r;
	}
	return t;
}

function stringToId(n) {
	return CRC(stringToCharCode(n));
}

var Pa = 4191585516,
	Oa = /*#__PURE__*/ new Set([
		4106781067,
		3209949814,
		2612078219,
		2382064880,
		3225112721,
		1018714844,
		2899793226,
		2094258580,
		3169460974,
		3079760821,
		392195965,
		3461410589,
		3582327722,
		1731918890,
		1767246934,
		3419607467,
		1110225616,
		1455947556,
		450291099,
		176445009,
		1998723369,
		2961538051,
		3413933903,
		2299562828,
		3945560591,
		3336694844,
		3737152292,
		2669437517,
		3860417393,
		Pa,
	]);

Oa.forEach(function (n) {
	const x = reverseChecksum(n);

	console.log(x, n);
});

function Ta() {
	for (var n = [], t = Object.getOwnPropertyNames(window), e = 0; e < t.length; e++) {
		var r = t[e],
			i = stringToId(r);
		if ((Oa.has(i) && n.push(r), i === Pa)) {
			var o = t[e + 1] || "";
			n.push(o);
		}
	}
	return { s: 0, v: n };
}
