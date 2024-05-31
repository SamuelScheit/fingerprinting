export async function getTLS() {
	const request = await fetch("https://check.ja3.zone/")
	const data = await request.json()

	return data.hash
}
