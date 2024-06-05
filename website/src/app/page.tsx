import { api } from "@/trpc/server";

export default async function Home() {
	return (
		<div className="min-h-[100vh] bg-gradient-to-b from-[#120b1c] to-[#15162c]">
			<main className="flex min-h-screen flex-col items-center justify-center text-center text-white">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
					<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
						<span>Browser </span>
						<span className="bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-transparent">
							Fingerprint
						</span>
					</h1>
					<div className="text-center text-xl leading-relaxed text-gray-300">
						A Fingerprint is a unique identifier based on your browser and device configuration.
						<br />
						This identifier can be used to track you across different websites and build a profile of your
						online activity.
					</div>
					<div className="flex flex-col items-center gap-4">
						<a
							href="/fingerprint"
							className="rounded-lg bg-[#780ff1] px-6 py-4 text-2xl font-semibold text-[#ffffff]"
						>
							Show my browser fingerprint
						</a>
						<div className="text-xs text-gray-400">
							By clicking the button, you agree to our{" "}
							<a href="/privacy" className="underline">
								Privacy Policy
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
