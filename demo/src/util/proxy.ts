import { load } from "../../assets/fingerprint.pro";

export function getProxy(path, obj = {}) {
	if (typeof obj !== "object" && typeof obj !== "function") return obj;

	return new Proxy(obj, {
		get(target, key) {
			console.log(`get ${path}.${key.toString()}`);
			return getProxy(`${path}.${key.toString()}`, obj[key]);
		},
		apply(target, thisArg, args) {
			console.log(`apply ${path}`, obj, args);
			return getProxy(`${path}()`, (obj as Function).apply(thisArg, args));
		},
		set(target, p, newValue, receiver) {
			console.log(`set ${path}.${p.toString()} = ${newValue}`);
			return Reflect.set(obj, p, getProxy(`${path}.${p.toString()}`, newValue));
		},
		ownKeys(target) {
			console.log(`ownKeys ${path}`);
			return [];
		},
		getOwnPropertyDescriptor(target, p) {
			console.log(`getOwnPropertyDescriptor ${path}.${p.toString()}`);
			return getProxy(`${path}.getOwnPropertyDescriptor`, Object.getOwnPropertyDescriptor(obj, p));
		},
		has(target, p) {
			// console.log(`has ${path}.${p.toString()}`);
			return obj.hasOwnProperty(p);
		},
		isExtensible(target) {
			console.log(`isExtensible ${path}`);
			return Object.isExtensible(obj);
		},
		preventExtensions(target) {
			console.log(`preventExtensions ${path}`);
			return Object.preventExtensions(obj);
		},
		getPrototypeOf(target) {
			console.log(`getPrototypeOf ${path}`);
			return getProxy(`${path}.prototype`, Object.getPrototypeOf(obj));
		},
		setPrototypeOf(target, v) {
			console.log(`setPrototypeOf ${path} = ${v}`);
			return Object.setPrototypeOf(obj, getProxy(`${path}.prototype`, v));
		},
		construct(target, argArray, newTarget) {
			console.log(`construct ${path}`);
			const instance = Reflect.construct(obj, argArray, newTarget);
			return getProxy(`${path}`, instance);
		},
		defineProperty(target, property, attributes) {
			console.log(`defineProperty ${path}.${property.toString()}`);
			return Object.defineProperty(obj, property, attributes);
		},
		deleteProperty(target, p) {
			console.log(`deleteProperty ${path}.${p.toString()}`);
			return Object.deleteProperty(obj, p);
		},
	});
}
