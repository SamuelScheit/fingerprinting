import { launch } from "puppeteer-core";
import fs from "fs";

let script = fs.readFileSync(__dirname + "/../../dist/index.js", "utf8");
script = `console.log = function (...args) { console.info(...args); window.test(args) };
${script.replaceAll("export ", "")};
get()`;

console.clear();
console.log(script);

const browser = await launch({
	headless: true,
	executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	defaultViewport: null,
	args: ["--start-maximized"],
	ignoreDefaultArgs: ["--disable-extensions"],
	timeout: 0,
});

const page = await browser.newPage();

await page.goto("https://example.org");

await page.exposeFunction("test", (message: any) => {
	console.log(message);
	debugger;
	console.dir(message, { depth: null });
});

const result = await page.evaluate(script);

await browser.close();
