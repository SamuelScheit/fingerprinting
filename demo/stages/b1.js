/**
 * gets all key inputs and their timestamp and sends them to the server
 */

function Dc(n) {
	var t = E(document, "keydown", Zc("d", n)),
		e = E(document, "keyup", Zc("u", n));
	return function () {
		t(), e();
	};
}

const keys = {
	0: 48,
	1: 49,
	2: 50,
	3: 51,
	4: 52,
	5: 53,
	6: 54,
	7: 55,
	8: 56,
	9: 57,
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	ctrl: 17,
	alt: 18,
	pausebreak: 19,
	capslock: 20,
	esc: 27,
	space: 32,
	pageup: 33,
	pagedown: 34,
	end: 35,
	home: 36,
	leftarrow: 37,
	uparrow: 38,
	rightarrow: 39,
	downarrow: 40,
	print_screen: 44,
	insert: 45,
	delete: 46,
	a: 65,
	b: 66,
	c: 67,
	d: 68,
	e: 69,
	f: 70,
	g: 71,
	h: 72,
	i: 73,
	j: 74,
	k: 75,
	l: 76,
	m: 77,
	n: 78,
	o: 79,
	p: 80,
	q: 81,
	r: 82,
	s: 83,
	t: 84,
	u: 85,
	v: 86,
	w: 87,
	x: 88,
	y: 89,
	z: 90,
	leftwindowkey: 91,
	rightwindowkey: 92,
	selectkey: 93,
	numpad0: 96,
	numpad1: 97,
	numpad2: 98,
	numpad3: 99,
	numpad4: 100,
	numpad5: 101,
	numpad6: 102,
	numpad7: 103,
	numpad8: 104,
	numpad9: 105,
	multiply: 106,
	add: 107,
	subtract: 109,
	decimalpoint: 110,
	divide: 111,
	f1: 112,
	f2: 113,
	f3: 114,
	f4: 115,
	f5: 116,
	f6: 117,
	f7: 118,
	f8: 119,
	f9: 120,
	f10: 121,
	f11: 122,
	f12: 123,
	numlock: 144,
	scrolllock: 145,
	semicolon: 186,
	equalsign: 187,
	comma: 188,
	dash: 189,
	period: 190,
	forwardslash: 191,
	graveaccent: 192,
	openbracket: 219,
	backslash: 220,
	closebracket: 221,
	singlequote: 222,
};

var e = {
	0: 8,
	6: 5,
	8: 8,
	9: 0,
	13: 8,
	16: 8,
	17: 0,
	18: 0,
	20: 0,
	32: 4,
	37: 8,
	38: 8,
	39: 8,
	40: 8,
	48: 8,
	49: 0,
	50: 1,
	51: 2,
	52: 3,
	53: 3,
	54: 5,
	55: 5,
	56: 6,
	57: 7,
	65: 0,
	66: 3,
	67: 2,
	68: 2,
	69: 2,
	70: 3,
	71: 3,
	72: 5,
	73: 6,
	74: 5,
	75: 6,
	76: 7,
	77: 5,
	78: 5,
	79: 7,
	80: 8,
	81: 0,
	82: 3,
	83: 1,
	84: 3,
	85: 5,
	86: 3,
	87: 1,
	88: 1,
	89: 5,
	90: 0,
	91: 4,
	186: 8,
	187: 8,
	188: 6,
	189: 8,
	190: 7,
	191: 8,
	192: 0,
	219: 8,
	220: 8,
	221: 8,
	222: 8,
};
function Zc(n, t) {
	return function (r) {
		var i;
		if (
			(function (n) {
				if (!(n.target && n.target instanceof window.HTMLElement)) return !1;
				if (n.repeat) return !1;
				return "INPUT" === n.target.tagName || "TEXTAREA" === n.target.tagName;
			})(r)
		) {
			var o = e[String(r.keyCode)];
			void 0 !== o && t((((i = {}).t = n), (i.f = o), i));
		}
	};
}

function getCharCode(key) {
	return Object.keys(keys).find((k) => keys[k] === key);
}

console.log(
	Object.entries(e)
		.map(([k, v]) => getCharCode(Number(k)) + " = " + v)
		.join("\n")
);
