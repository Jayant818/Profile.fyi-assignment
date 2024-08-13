import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-100 mt-10">
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/4 text-center md:text-left">
						<h5 className="uppercase mb-6 font-bold">About</h5>
						<ul className="mb-4">
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Company
								</Link>
							</li>
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Careers
								</Link>
							</li>
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/4 text-center md:text-left">
						<h5 className="uppercase mb-6 font-bold">Help</h5>
						<ul className="mb-4">
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									FAQ
								</Link>
							</li>
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Contact
								</Link>
							</li>
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Support
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/4 text-center md:text-left">
						<h5 className="uppercase mb-6 font-bold">Legal</h5>
						<ul className="mb-4">
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Terms
								</Link>
							</li>
							<li className="mt-2">
								<Link
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/4 text-center md:text-left">
						<h5 className="uppercase mb-6 font-bold">Social</h5>
						<ul className="mb-4">
							<li className="mt-2">
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Facebook
								</a>
							</li>
							<li className="mt-2">
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Twitter
								</a>
							</li>
							<li className="mt-2">
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline text-gray-600 hover:text-orange-500"
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-6">
				<div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
					<div className="sm:w-2/3 text-center py-6">
						<p className="text-sm text-gray-600 font-bold mb-2">
							© {new Date().getFullYear()} Profile
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
