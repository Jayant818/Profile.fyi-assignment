"use client";

import { addToCart, removeFromCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Item({ product }: { product: Product }) {
	const dispatch = useAppDispatch();
	const [isAdding, setIsAdding] = useState(false);
	const cartItems = useAppSelector((state) => state.cart.items);
	const isInCart = cartItems.some((item) => item.id === product.id);

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
		<div>
			<Image src={product.image} alt={product.name} width={200} height={200} />
			<h3>{product.name}</h3>
			<p>₹{product.price}</p>
			<button onClick={handleAddToCart}>
				{isInCart ? "Remove from Cart" : isAdding ? "Added!" : "Add to Cart"}
			</button>
		</div>
	);
}
