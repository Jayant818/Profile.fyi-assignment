interface CartSummaryProps {
	subtotal: number;
	appliedDiscount: number;
	total: number;
	handleCheckout: () => void;
}

export default function CartSummary({
	subtotal,
	appliedDiscount,
	total,
	handleCheckout,
}: CartSummaryProps) {
	return (
		<div className="mt-8 space-y-4 text-lg md:text-xl">
			<h2 className="font-bold">Subtotal: ₹{subtotal.toFixed(2)}</h2>
			{appliedDiscount > 0 && (
				<h2 className="text-xl font-bold text-green-600">
					Discount Applied: ₹{appliedDiscount.toFixed(2)}
				</h2>
			)}
			<h2 className="font-bold">Total: ₹{total.toFixed(2)}</h2>
			<button
				onClick={handleCheckout}
				className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-green-600 transition"
			>
				Checkout
			</button>
		</div>
	);
}
