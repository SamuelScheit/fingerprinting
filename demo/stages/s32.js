/**
 * checks if cookies are allowed
 * 
 * s32: {
		s: 0,
		v: true,
	},
*/

Rt = function () {
	var n = document;
	try {
		n.cookie = "cookietest=1; SameSite=Strict;";
		var t = -1 !== n.cookie.indexOf("cookietest=");
		return (n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"), t;
	} catch (e) {
		return !1;
	}
};
