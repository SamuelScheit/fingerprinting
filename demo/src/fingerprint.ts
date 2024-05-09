// https://fingerprint.com/r4a0Rd2Xs/?ci=js/3.9.4&q=NIrKSr1SW3HEAoyttBe2&ii=fingerprintjs-pro-react/2.6.3/preact/10.19.3&ii=fingerprintjs-pro-spa/1.3.1

import { body } from "./types/request.example";
import crypto from "crypto";
import { deflateRawSync, inflateRawSync } from "zlib";
import type { FingerprintResponse } from "./types/response";

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

async function requestFingerprint() {
	body.lr = [];
	body.ai = body.si = "A73NX6F7eg";
	body.pi = "Fla3cFWhft";
	body.s26.v = [];
	body.s55 = { s: -1, v: null };
	body.s56 = { s: -1, v: null };
	body.s94 = { s: -2, v: null };
	body.s78 = { s: -3, v: null };
	// body.s52 = { s: -2, v: null };
	// body.s90 = { s: -2, v: null };
	body.s21 = { s: -3, v: null };
	// body.s79 = { s: -3, v: [] };

	const payload = GetBody(body);

	const response = await fetch(
		`https://fingerprint.com/r4a0Rd2Xs/?ci=js/3.9.4&q=NIrKSr1SW3HEAoyttBe2&ii=fingerprintjs-pro-react/2.6.3/preact/10.19.3&ii=fingerprintjs-pro-spa/1.3.1`,
		{
			headers: {
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

	const decoded: FingerprintResponse = DecompressDecode(buffer);

	console.dir(decoded, { depth: null });
	const { result, visitorToken } = decoded.products.identification.data;

	console.log(result.visitorId, visitorToken, result.firstSeenAt);
}

requestFingerprint();
