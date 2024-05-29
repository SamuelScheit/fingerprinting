import { PgJson } from "drizzle-orm/pg-core";
import type { jsonSchema } from "drizzle-zod";
export type Json = (typeof jsonSchema)["_type"];

export function getDate() {
  const date = new Date();

  return {
    offset: date.getTimezoneOffset(),
    timezone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export function getPlugins() {
  return Array.from(navigator.plugins).map((plugin) => ({
    name: plugin.name as string,
    description: plugin.description as string,
    filename: plugin.filename as string,
  })) as Json;
}

declare global {
  interface Screen {
    availTop: number;
    availLeft: number;
  }
}

export function getSafeArea() {
  return [
    screen.availTop,
    screen.width - screen.availWidth - screen.availLeft,
    screen.height - screen.availHeight - screen.availTop,
    screen.availLeft,
  ];
}

export function getNavigatorFunctions(): string[] {
  var n = window.navigator;
  var t = ["webkitPersistentStorage", "connectionSpeed"];

  return Object.getOwnPropertyNames(Object.getPrototypeOf(n)).reduce(function (
    e,
    r,
  ) {
    if (t.indexOf(r) < 0) {
      // @ts-ignore
      var i = n[r];
      // @ts-ignore
      "function" == typeof i && void 0 !== i.name && e.push(i.name);
    }
    return e;
  }, []);
}
