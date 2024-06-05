export function cleanUndefined<T extends any>(obj: T, visited = new Set<any>()): T {
	if (visited.has(obj)) return obj;

	visited.add(obj);

	if (Array.isArray(obj)) {
		return obj.map((x) => cleanUndefined(x, visited)) as T;
	}

	if (typeof obj === "object" && obj !== null) {
		for (const key in obj) {
			try {
				if (obj[key] === undefined) { // @ts-ignore
					obj[key] = null
				} else {
					obj[key] = cleanUndefined(obj[key], visited);
				}
			} catch (error) {
				console.error(error, obj, key);
			}
		}
	}
	return obj;
}
