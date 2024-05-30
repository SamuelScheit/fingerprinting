export async function getTLS() {
	const request = await fetch("https://workers.cloudflare.com/cf.json")
	const data = await request.json()

	return data.tlsExportedAuthenticator.clientFinished + data.tlsExportedAuthenticator.clientHandshake + data.tlsClientExtensionsSha1
}
