/**
 * math random entropy
 * 
 * s48: {
		s: 0,
		v: [-73502740, 248815548, -1049183144, -570535580, 790563733, 68073693],
	},
*/

var c = [];
let i = Math.random();
const MaxSignedInt32 = Math.pow(2, 31);

for (let o = 4096 * 6 + 1; o > 0; --o) {
	if (o % 4096 === 0) {
		var u = Math.random();
		// | 0 => rounds the number to an integer
		c.push(((i - u) * MaxSignedInt32) | 0);
		i = u;
	}
}

console.log(c);

function Gu() {
	for (
		var n = {
				yIZLX: "5|0|4|1|3|2",
				ziTlw: function (n, t) {
					return n - t;
				},
				FcHgi: function (n, t) {
					return n * t;
				},
				YuLQx: function (n, t) {
					return n >= t;
				},
				UtKPG: function (n, t) {
					return n === t;
				},
				zGGks: function (n, t) {
					return n % t;
				},
				kkGAQ: function (n, t) {
					return n | t;
				},
				rSSVq: function (n, t) {
					return n - t;
				},
			},
			t = n.yIZLX.split("|"),
			e = 0;
		;

	) {
		switch (t[e++]) {
			case "0":
				var r = 6;
				continue;
			case "1":
				var i = Math.random();
				continue;
			case "2":
				return { s: 0, v: c };
			case "3":
				for (var o = n.ziTlw(n.FcHgi(r, a), 1); n.YuLQx(o, 0); --o)
					if (n.UtKPG(n.zGGks(o, a), 0)) {
						var u = Math.random();
						c.push(n.kkGAQ(n.FcHgi(n.rSSVq(i, u), Math.pow(2, 31)), 0)), (i = u);
					}
				continue;
			case "4":
				var a = 4096;
				continue;
			case "5":
				var c = [];
				continue;
		}
		break;
	}
}
