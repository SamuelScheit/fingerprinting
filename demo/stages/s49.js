/** performance.now() measure 50000 times to get the smallest accuracy value */

var n = performance;
// if (!(null == n ? void 0 : n.now)) return { s: -1, v: null };
for (var max = 1, min = 1, current = n.now(), i = current, o = 0; o < 50000; o++) {
	if ((current = i) < (i = n.now())) {
		var u = i - current;
		if (u > max && u < min) {
			min = u;
		} else if (u < max) {
			min = max;
			max = u;
		}
	}
}
console.log({ s: 0, v: [max, min] });
