import { x64hash128 } from "../../../../fingerprintjs/src/utils/hashing";

function UUID() {
	if (typeof crypto?.randomUUID === "function") return crypto.randomUUID();

	const random = () => (Math.random() * 16) | 0;
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
		(c ^ (random() % 16 >> (c / 4))).toString(16),
	);
}

function getUUID() {
	const uuid = UUID();
	return x64hash128(uuid);
}

export function getIDLocalStorage() {
	try {
		let uuid = localStorage.getItem("id");
		if (uuid) return uuid;

		uuid = getUUID();

		localStorage.setItem("id", uuid);

		return uuid;
	} catch (e) {
		return null;
	}
}

export function setIDLocalStorage(uuid: string) {
	localStorage.setItem("id", uuid);
}

export function getIDSessionStorage() {
	try {
		let uuid = sessionStorage.getItem("id");
		if (uuid) return uuid;

		uuid = getUUID();

		sessionStorage.setItem("id", uuid);

		return uuid;
	} catch (e) {
		return null;
	}
}

export function setIDSessionStorage(uuid: string) {
	sessionStorage.setItem("id", uuid);
}


function setCookie(name: string, value: string) {
	document.cookie = `${name}=${value}; SameSite=Lax; Max-Age=315360000`;
}

function getCookie(name: string) {
	const cookies = document.cookie.split("; ");
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i]?.split("=");
		if (cookie?.[0] === name) return cookie[1];
	}
	return null;
}

export function getIDCookie() {
	try {
		let uuid = getCookie("id");
		if (uuid) return uuid;

		uuid = getUUID();

		setCookie("id", uuid);

		return uuid;
	} catch (e) {
		return null;
	}
}

export function setIDCookie(uuid: string) {
	setCookie("id", uuid);
}

export async function getIDFileSystem() {
	var dir = await navigator.storage.getDirectory();
	var handle = await dir.getFileHandle("id", { create: true });
	var file = await handle.getFile();
	var uuid = await file.text();
	if (uuid) return uuid;

	uuid = getUUID();

	var writable = await handle.createWritable();
	await writable.write(uuid);
	await writable.close();

	return uuid;
}

export async function setIDFileSystem(uuid: string) {
	var dir = await navigator.storage.getDirectory();
	var handle = await dir.getFileHandle("id", { create: true });
	var writable = await handle.createWritable();
	await writable.write(uuid);
	await writable.close();
}

function getIndexDB() {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open("fingerprint", 3);
		request.addEventListener("error", () => {
			reject(request.error);
		});

		request.addEventListener("upgradeneeded", () => {
			const db = request.result;

			if (!db.objectStoreNames.contains("id")) {
				db.createObjectStore("id");
			}
		});

		request.addEventListener("success", () => {
			resolve(request.result);
		});
	});
}

export async function getIDIndexedDB() {

	return new Promise<string>(async (resolve, reject) => {
		const db = await getIndexDB();
		const tx = db.transaction?.("id", "readwrite");
		const store = tx.objectStore("id");
		const uuid = store.get("id");

		uuid.onerror = function () {
			reject(uuid.error);
		};

		uuid.onsuccess = function () {
			if (uuid.result) return resolve(uuid.result);

			const newUUID = getUUID();
			store.put(newUUID, "id");

			resolve(newUUID);
		};
	})
}

export async function setIDIndexedDB(uuid: string) {
	const db = await getIndexDB();
	const tx = db.transaction?.("id", "readwrite");
	const store = tx.objectStore("id");
	store.put(uuid, "id");
}


export function isCookiesEnabled() {
	try {
		document.cookie = "cookietest=1; SameSite=Strict;";
		var t = -1 !== document.cookie.indexOf("cookietest=");
		return (
			(document.cookie =
				"cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
			t
		);
	} catch (e) {
		return false;
	}
}

export function setAllID(uuid: string) {
	try {
		setIDLocalStorage(uuid);
	} catch (error) {
		console.error(error)
	}
	try {
		setIDSessionStorage(uuid);
	} catch (error) {
		console.error(error)
	}
	try {
		setIDCookie(uuid);
	} catch (error) {
		console.error(error)
	}
	setIDFileSystem(uuid).catch(console.error);
	setIDIndexedDB(uuid).catch(console.error);
}
