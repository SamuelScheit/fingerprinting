function getUUID() {
  if (typeof crypto?.randomUUID === "function") return crypto.randomUUID();

  const random = () => (Math.random() * 16) | 0;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ (random() % 16 >> (c / 4))).toString(16),
  );
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

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; SameSite=Lax; Secure;`;
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

export async function getIDFileSystem() {
  var dir = await navigator.storage.getDirectory();
  var handle = await dir.getFileHandle("id", { create: true });
  var file = await handle.getFile();
  var uuid = await file.text();
  if (uuid) return uuid;

  uuid = getUUID();

  var writable = await handle.createWritable();
  await writable.write(uuid);

  return uuid;
}

export async function getIDIndexedDB() {
  return new Promise((resolve, reject) => {
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
      const db = request.result;

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
    });
  });
}
