"use client";

import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Item({ product }: { product: Product }) {
	const dispatch = useAppDispatch();
	const [isAdding, setIsAdding] = useState(false);
	const cartItems = useAppSelector((state) => state.cart);
	const isInCart = cartItems.some((item: any) => item.id === product.id);

	const handleAddToCart = () => {
		if (!isInCart) {
			setIsAdding(true);
			dispatch(addToCart(product));
			setTimeout(() => setIsAdding(false), 500); // Reset after animation
		} else {
			dispatch(removeFromCart(product.id));
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="relative h-48 w-full">
				<Image
					src={product.imageUrl}
					alt={product.name}
					layout="fill"
					objectFit="cover"
					className="transition-opacity duration-300 hover:opacity-75"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800 mb-2">
					{product.name}
				</h3>
				<p className="text-xl font-bold text-blue-600 mb-4">₹{product.price}</p>
				<button
					onClick={handleAddToCart}
					className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
						isInCart
							? "bg-red-500 hover:bg-red-600 text-white"
							: isAdding
							? "bg-green-500 text-white cursor-not-allowed"
							: "bg-blue-500 hover:bg-blue-600 text-white"
					}`}
					disabled={isAdding}
				>
					{isInCart ? "Remove from Cart" : isAdding ? "Added!" : "Add to Cart"}
				</button>
			</div>
		</div>
	);
}
