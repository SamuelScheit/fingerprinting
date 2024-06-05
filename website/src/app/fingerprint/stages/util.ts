export function cleanUndefined(obj: any, visited = new Set<any>()): any {
	if (visited.has(obj)) return obj;
	if (typeof obj === "function") return null

	visited.add(obj);

	if (Array.isArray(obj)) {
		return obj.map((x) => cleanUndefined(x, visited));
	}

	if (typeof obj === "object" && obj !== null) {
		const newObj = {} as any;
		for (const key in obj) {
			try {
				if (obj[key] === undefined) { // @ts-ignore
					newObj[key] = null
				} else {
					newObj[key] = cleanUndefined(obj[key], visited);
				}
			} catch (error) {
				console.error(error, obj, key);
			}
		}
		console.log(newObj)
		return newObj
	}
	return obj;
}
