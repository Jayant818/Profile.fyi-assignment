"use client";
import { useAppSelector } from "@/lib/hooks";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const cartItems = useAppSelector((state) => state.cart);
	const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	// const { data: session } = useSession();
	// console.log(session);

	return (
		<nav className="bg-blue-500 p-4 sticky top-0 z-10">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-white text-2xl font-bold">
					<Image
						width={100}
						height={60}
						alt="logo"
						src="/images/fyi-logo.svg"
					/>
				</Link>

				<div className="flex items-center text-white">
					{/* {session ? (
						<span className="mr-4">Welcome, {session.user?.name}</span>
					) : (
						<button onClick={() => signIn()} className="mr-4 hover:underline">
							Login
						</button>
					)} */}

					<div className="relative">
						<Link href="/cart" className="flex items-center hover:underline">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							Cart
							{itemCount > 0 && (
								<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
									{itemCount}
								</span>
							)}
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
