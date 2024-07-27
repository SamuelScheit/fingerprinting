import data from "./data.json"
import fs from "fs"

function normalize(obj: any) {
	if (typeof obj !== "object") return obj

	return JSON.stringify(obj)
}

function getBaseLog(base, value) {
	return Math.log(value) / Math.log(base);
}

function groupBy(arr, property) {
	return arr.reduce(function (memo, x) {
		if (!memo[x[property]]) { memo[x[property]] = []; }
		memo[x[property]].push(x);
		return memo;
	}, {});
}

function limitNumberWithinRange(number, min, max) {
	return Math.min(Math.max(number, min), max)
}


const parameters = Object.keys(data[0])

const maps = {} as Record<string, Record<string, number>>;

for (const param of parameters) {
	const map = {} as Record<string, number>
	maps[param] = map

	for (const row of data) {
		const value = normalize(row[param])
		map[value] = (map[value] || 0) + 1
	}
}

const uniqueness = {}

for (const param of parameters) {
	const map = maps[param]
	const entries = Object.entries(map)
	const allValuesCount = entries.reduce((acc, [_, count]) => acc + count, 0)

	let sum = 0

	for (const [_, count] of entries) {
		const p = count / allValuesCount
		sum += p * getBaseLog(allValuesCount, p)
	}

	uniqueness[param] = Math.abs(-sum)
}

const stability = {}
const sessions = Object.values(groupBy(data, "ip")) as any

for (const param of parameters) {
	let average = 0

	for (const session of sessions) {
		const map = {} as Record<string, number>

		for (const row of session) {
			const value = normalize(row[param])

			map[value] = (map[value] || 0) + 1
		}

		const entries = Object.entries(map)
		const allPossibleValues = session.length

		let sum = 0

		for (const [_, count] of entries) {
			const p = count / allPossibleValues
			sum += p
		}

		sum /= entries.length

		average += sum
	}

	average /= sessions.length

	// stability[param] = limitNumberWithinRange(average, 0, 1)
	stability[param] = average
}

fs.writeFileSync("uniqueness.json", JSON.stringify(uniqueness, null, "\t"))
fs.writeFileSync("stability.json", JSON.stringify(stability, null, "\t"))

// console.log(data.map(x => x.keyboard_layout))
