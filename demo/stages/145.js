/** gets all functions defined on the navigator object */

function Zu() {
	return {
		s: 0,
		v:
			((n = window.navigator),
			(t = ["webkitPersistentStorage", "connectionSpeed"]),
			Object.getOwnPropertyNames(Object.getPrototypeOf(n)).reduce(function (e, r) {
				if (t.indexOf(r) < 0) {
					var i = n[r];
					"function" == typeof i && void 0 !== i.name && e.push(i.name);
				}
				return e;
			}, [])),
	};
	var n, t;
}
