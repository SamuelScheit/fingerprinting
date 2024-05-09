/**
 * notification permissions
 * 
 * s106: {
		s: 0,
		v: false,
	},
 */

Si = function () {
	return r(this, void 0, void 0, function () {
		var n, t;
		return i(this, function (e) {
			switch (e.label) {
				case 0:
					if (void 0 === window.Notification) throw new si(-1, "window.Notification is undefined");
					if (void 0 === navigator.permissions) throw new si(-1, "navigator.permissions is undefined");
					if ("function" != typeof (n = navigator.permissions).query)
						throw new si(-2, "navigator.permissions.query is not a function");
					e.label = 1;
				case 1:
					return e.trys.push([1, 3, , 4]), [4, n.query({ name: "notifications" })];
				case 2:
					return (t = e.sent()), [2, "denied" === window.Notification.permission && "prompt" === t.state];
				case 3:
					throw (e.sent(), new si(-3, "notificationPermissions signal unexpected behaviour"));
				case 4:
					return [2];
			}
		});
	});
};
