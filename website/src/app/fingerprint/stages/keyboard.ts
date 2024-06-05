import { x64hash128 } from "../../../../fingerprintjs/src/utils/hashing";

declare global {
	interface Navigator {
		keyboard: {
			getLayoutMap: () => Promise<Map<string, string>>;
		};
	}
}

export async function getKeyboardLayout() {
	const keyboard = await navigator.keyboard.getLayoutMap();
	const map = Array.from(keyboard.values()).join("");

	return x64hash128(map)
}
