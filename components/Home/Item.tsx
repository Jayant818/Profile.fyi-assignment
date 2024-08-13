"use client";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Item({ product }: { product: Product }) {
	const dispatch = useAppDispatch();
	const [isAdding, setIsAdding] = useState(false);

	const handleAddToCart = () => {
		setIsAdding(true);
		dispatch(addToCart(product));
		setTimeout(() => setIsAdding(false), 500); // Reset after animation
	};

	return (
		<div className="border p-4 relative overflow-hidden md:p-6 lg:p-8">
			<Image
				src={product.imageUrl}
				alt={product.name}
				className="w-full h-48 object-cover md:h-64 lg:h-72"
				width={400}
				height={400}
			/>
			<h2 className="mt-2 font-bold text-sm md:text-base lg:text-lg">
				{product.name}
			</h2>
			<p className="text-lg font-semibold md:text-xl">₹{product.price}</p>
			<button
				onClick={handleAddToCart}
				className={`bg-blue-500 text-white px-4 py-2 mt-2 transition-all duration-300 ${
					isAdding ? "bg-green-500" : ""
				} md:px-6 md:py-3`}
				disabled={isAdding}
			>
				{isAdding ? "Added!" : "Add to Cart"}
			</button>
		</div>
	);
}
