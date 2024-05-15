let done = new Set();

export function toObject(any: any, depth: number = 0): any {
	let obj: any = {};

	if (any === null || any === undefined) return any;
	if (done.has(any)) return undefined;
	done.add(any);

	if (typeof any !== "object" && typeof any !== "function") {
		return any;
	}

	if (Array.isArray(any)) {
		return any.map((x) => toObject(x, depth + 1));
	} else {
		let keys = Object.keys(Object.getPrototypeOf(any)).concat(Object.keys(any)).concat(Object.getOwnPropertyNames(any));
		keys = keys.filter((x, i) => keys.indexOf(x) === i);

		for (let key of keys) {
			try {
				obj[key] = toObject(any[key], depth + 1);
			} catch (error) {
				console.error(error, any, key);
				obj[key] = "[Error] " + (error as Error).message;
			}
		}
		if (typeof any === "function" && keys.length === 0) {
			return "[Function]";
		}

		if (typeof any.length === "number" && typeof any.item === "function") {
			for (let i = 0; i < any.length; i++) {
				obj[i] = toObject(any[i], depth + 1);
			}
		}
	}

	return obj;
}
