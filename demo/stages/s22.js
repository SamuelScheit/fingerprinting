/** WebAssembly
 *
 * Checks if each of these programs are valid WebAssembly programs
 *
 * program prefix:
 * [0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10]
 *
 * programs:
 * [9, 1, 7, 0, 65, 0, 253, 15, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
 * [240, 67, 0, 0, 0, 12, 1, 10, 0, 252, 2, 3, 1, 1, 0, 0, 110, 26, 11, 161, 10],
 * [6, 1, 4, 0, 18, 0, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
 * [8, 1, 6, 0, 65, 0, 192, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
 * [7, 1, 5, 0, 208, 112, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
 */

import fs from "fs";

const prefix = [0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10];

const programs = [
	[9, 1, 7, 0, 65, 0, 253, 15, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in chrome, safari, firefox
	[240, 67, 0, 0, 0, 12, 1, 10, 0, 252, 2, 3, 1, 1, 0, 0, 110, 26, 11, 161, 10], // invalid in chrome, safari, firefox => invalid section size: extends past end
	[6, 1, 4, 0, 18, 0, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in chrome and firefox, invalid in safari
	[8, 1, 6, 0, 65, 0, 192, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in firefox, chrome and safari
	[7, 1, 5, 0, 208, 112, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in firefox, chrome and safari
];

let i = 0;
for (const program of programs) {
	const wasm = new Uint8Array(prefix.concat(program));
	fs.writeFileSync(`${__dirname}/webassembly/${i++}.wasm`, wasm);
}

function o(n, t, e) {
	if (e || 2 === arguments.length)
		for (var r, i = 0, o = t.length; i < o; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
	return n.concat(r || Array.prototype.slice.call(t));
}

function Wu() {
	for (
		var n = {
				khbMs: "5|0|2|6|1|4|3",
				bOGiO: function (n, t) {
					return n === t;
				},
				hwGcA: function (n, t) {
					return n === t;
				},
				cYHbl: function (n, t, e) {
					return n(t, e);
				},
				yxesw: function (n, t) {
					return n < t;
				},
				uPMAh: function (n, t, e, r) {
					return n(t, e, r);
				},
				vUHgX: function (n, t) {
					return n(t);
				},
			},
			t = n.khbMs.split("|"),
			e = 0;
		;

	) {
		switch (t[e++]) {
			case "0":
				if (!(n.bOGiO(s, null) || n.hwGcA(s, void 0) ? void 0 : n.cYHbl(Ar, s, 1108488788))) return { s: -1, v: null };
				continue;
			case "1":
				var r = 0;
				continue;
			case "2":
				var i = [0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10];
				continue;
			case "3":
				return { s: 0, v: r };
			case "4":
				for (var u = 0, a = f; n.yxesw(u, a.length); u++) {
					// WebAssembly validate
					var c = a[u];
					r <<= 1;
					// uPMAh => concatenates i with []
					const arr = n.uPMAh(o, [], i, !1);
					// uPMAh => concatenates arr with c
					const program = n.uPMAh(o, arr, c, !1);

					r |= n.cYHbl(Ar, s, 1108488788)(Uint8Array.of.apply(Uint8Array, program)) ? 1 : 0;
				}
				continue;
			case "5":
				var s = window[n.vUHgX(Nu, 0)];
				continue;
			case "6":
				var f = [
					[9, 1, 7, 0, 65, 0, 253, 15, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
					[240, 67, 0, 0, 0, 12, 1, 10, 0, 252, 2, 3, 1, 1, 0, 0, 110, 26, 11, 161, 10],
					[6, 1, 4, 0, 18, 0, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
					[8, 1, 6, 0, 65, 0, 192, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
					[7, 1, 5, 0, 208, 112, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0],
				];
				continue;
		}
		break;
	}
}
