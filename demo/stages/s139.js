function Bu() {
	return "undefined" == typeof CSS ? { s: -1, v: null } : { s: 0, v: CSS.supports("backdrop-filter", "blur(2px)") };
}
