/**
 * Error.stack
 * 
 * s119: {
		s: 0,
		v: "TypeError: Cannot read properties of null (reading '0')\n    at bi (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:4311:10)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:4486:14\n    at G (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:589:13)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:737:8\n    at new Promise (<anonymous>)\n    at Object.construct (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:116:30)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:735:15\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:770:8\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:615:21\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:274:15",
	},
 * 
 */

bi = function () {
	try {
		null[0]();
	} catch (n) {
		if (n instanceof Error && null != n.stack) return n.stack.toString();
	}
	throw new si(-3, "errorTrace signal unexpected behaviour");
};
