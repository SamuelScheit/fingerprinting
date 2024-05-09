bi = function () {
	try {
		null[0]();
	} catch (n) {
		if (n instanceof Error && null != n.stack) return n.stack.toString();
	}
	throw new si(-3, "errorTrace signal unexpected behaviour");
};
