// https://fingerprint.com/r4a0Rd2Xs/?ci=js/3.9.4&q=NIrKSr1SW3HEAoyttBe2&ii=fingerprintjs-pro-react/2.6.3/preact/10.19.3&ii=fingerprintjs-pro-spa/1.3.1

import { body } from "./manual.body";
import crypto from "crypto";
import { deflateRawSync, inflateRawSync } from "zlib";

function Encode(n: string) {
	for (var t = new Uint8Array(n.length), e = 0; e < n.length; e++) {
		var r = n.charCodeAt(e);
		if (r > 127) return new TextEncoder().encode(n);
		t[e] = r;
	}
	return t;
}

// pad = [3, 10]
// unpad = [3, 7]

function pad(n: Uint8Array, t = [3, 10], e = 3, r = 7) {
	var i = () => crypto.randomBytes(1)[0];

	var o = i() % (e + 1),
		u = n,
		a = 1 + t.length + 1 + o + r + u.length,
		c = new ArrayBuffer(a),
		s = new Uint8Array(c),
		f = 0,
		l = i();
	s[f++] = l;
	for (var v = 0, d = t; v < d.length; v++) {
		var h = d[v];
		s[f++] = l + h;
	}
	s[f++] = l + o;
	for (var m = 0; m < o; ++m) s[f++] = i();
	var p = new Uint8Array(r);
	for (m = 0; m < r; ++m) (p[m] = i()), (s[f++] = p[m]);
	for (m = 0; m < u.length; ++m) s[f++] = u[m] ^ p[m % r];
	return c;
}

function Modulo(n: number, t: number) {
	return (n - t + 256) % 256;
}

function unpad(n: Uint8Array, t = [3, 7], e = 7) {
	var r = function () {
			throw new Error("Invalid data");
		},
		i = n;
	i.length < t.length + 2 && r();
	for (var o = 0; o < t.length; ++o) Modulo(i[1 + o], i[0]) !== t[o] && r();
	var u = 1 + t.length,
		a = Modulo(i[u], i[0]);
	i.length < u + 1 + a + e && r();
	var c = u + 1 + a,
		s = c + e,
		f = new ArrayBuffer(i.length - s),
		l = new Uint8Array(f);
	for (o = 0; o < l.length; ++o) l[o] = i[s + o] ^ i[c + (o % e)];
	return Buffer.from(f);
}

function GetKey() {
	for (var n, t = new Uint32Array(256), e = 0; e < 256; e++) {
		n = e;
		for (var r = 0; r < 8; r++) n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
		t[e] = n;
	}
	return t;
}

function GetKeyId(t: Uint8Array) {
	var k = GetKey();
	for (var e = -1, r = 0; r < t.length; r++) e = (e >>> 8) ^ k[255 & (e ^ t[r])];
	return (-1 ^ e) >>> 0;
}

function GetBody(body: any) {
	const encoded = Encode(JSON.stringify(body));
	const compressed = deflateRawSync(encoded);
	const padded = pad(compressed);

	return padded;
}

function DecompressDecode(n: ArrayBuffer) {
	return JSON.parse(Decode(unpad(Buffer.from(n))));
}

function Decode(n: Buffer) {
	var t = new TextDecoder().decode(n);
	if (t) return t;
}

async function test() {
	const payload = GetBody(body);

	const response = await fetch(
		`https://fingerprint.com/r4a0Rd2Xs/?ci=js/3.9.4&q=NIrKSr1SW3HEAoyttBe2&ii=fingerprintjs-pro-react/2.6.3/preact/10.19.3&ii=fingerprintjs-pro-spa/1.3.1`,
		{
			headers: {
				Cookie: `ABTests=%7B%22pricing-volume-discount-available-a-b%22%3A%22treatment%22%2C%22home-page-one-tap-sign-in%22%3A%22treatment%22%2C%22contact-sales-simplified-a-b%22%3A%22treatment%22%7D; _vid_s=U73NX6F7ez; AMP_88cf5b0af4=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJWMTRadnJIaEdQM0JUZUZaVnhVQSUyMiUyQyUyMnNlc3Npb25JZCUyMiUzQTE3MTUxOTI0ODE5MTIlMkMlMjJvcHRPdXQlMjIlM0FmYWxzZSUyQyUyMmxhc3RFdmVudFRpbWUlMjIlM0ExNzE1MTkzNTM1OTg0JTJDJTIybGFzdEV2ZW50SWQlMjIlM0ExMCU3RA==; fpjsWebsiteData={"historyData":{"landingPage":"/demo/","visitedPages":["/demo/","/resources/comparisons/compare-fingerprint-vs-shield/","/demo/","/resources/comparisons/compare-fingerprint-vs-shield/","/demo/"],"previousPage":"","utmParams":{"referral_url":""}}}; _iidt=0mZ5Nra/5k0Ky//xG01GwYAVvalaSOBPH73gaZntOaWfG/VJ/VBpqYKhY0seAynjCltz8D2EQU+sxecbXS6wt7kvY4rEqHj4aJ+8yhw=; _vid_t=8I2wyV70l56vTmdfLtZAC2dI07Doo45WPUXLzRSHZtqbumIgxtar9pf1SwrmFsvcXdGZRH66bbeS365qDLFAe7D/OFlk1EO8BwuFsc0=`,
				"User-Agent":
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
				Origin: "https://fingerprint.com",
				"Content-Type": "text/plain",
			},
			body: payload,
			method: "POST",
		}
	);

	const buffer = await response.arrayBuffer();

	const decoded = DecompressDecode(buffer);

	console.dir(decoded, { depth: null });
}

test();
