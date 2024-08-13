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
		setTimeout(() => setIsAdding(false), 500);
	};

	return (
		<div className="border p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
			<div className="aspect-w-1 aspect-h-1 mb-4">
				<Image
					src={product.imageUrl}
					alt={product.name}
					layout="fill"
					objectFit="cover"
					className="rounded-md"
				/>
			</div>
			<h2 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h2>
			<p className="text-xl font-semibold mb-4">₹{product.price.toFixed(2)}</p>
			<button
				onClick={handleAddToCart}
				className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300 ${
					isAdding ? "bg-green-500" : "hover:bg-blue-600"
				}`}
				disabled={isAdding}
				aria-label={`Add ${product.name} to cart`}
			>
				{isAdding ? "Added!" : "Add to Cart"}
			</button>
		</div>
	);
}
