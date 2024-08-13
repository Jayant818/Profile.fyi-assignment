"use client";
import { CartItem } from "@/components/Cart/CartItem";
import { CartSummary } from "@/components/Cart/CartSummary";
import { DiscountForm } from "@/components/Cart/DiscountForm";
import { clearCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DISCOUNT_COUPONS = {
	APP10: 10,
	APP15: 15,
};

export default function Cart() {
	const cartItems = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [discountCode, setDiscountCode] = useState("");
	const [appliedDiscount, setAppliedDiscount] = useState(0);
	const [discountError, setDiscountError] = useState("");

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const applyDiscount = () => {
		// @ts-ignore
		const discountPercentage = DISCOUNT_COUPONS[discountCode];
		if (discountPercentage) {
			const discountAmount = (subtotal * discountPercentage) / 100;
			setAppliedDiscount(discountAmount);
			setDiscountError("");
		} else {
			setAppliedDiscount(0);
			setDiscountError("Invalid discount code");
		}
	};

	const total = Math.max(subtotal - appliedDiscount, 0);

	const handleCheckout = () => {
		dispatch(clearCart());
		router.push("/checkout");
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Your Cart</h1>
			{cartItems.map((item) => (
				<CartItem key={item.id} {...item} />
			))}
			<div className="mt-8 md:flex md:justify-between">
				<DiscountForm
					discountCode={discountCode}
					setDiscountCode={setDiscountCode}
					applyDiscount={applyDiscount}
					discountError={discountError}
				/>
				<CartSummary
					subtotal={subtotal}
					appliedDiscount={appliedDiscount}
					total={total}
					onCheckout={handleCheckout}
				/>
			</div>
		</div>
	);
}
