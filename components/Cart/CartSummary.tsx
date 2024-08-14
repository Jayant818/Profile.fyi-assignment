interface CartSummaryProps {
	subtotal: number;
	appliedDiscount: number;
	total: number;
	onCheckout: () => void;
}

export const CartSummary = ({
	subtotal,
	appliedDiscount,
	total,
	onCheckout,
}: CartSummaryProps) => {
	return (
		<div className="md:w-1/3">
			<div className="flex justify-between items-center mb-2">
				<span>Subtotal:</span>
				<span>Rs.{subtotal.toFixed(2)}</span>
			</div>
			{appliedDiscount > 0 && (
				<div className="flex justify-between items-center mb-2 text-green-600">
					<span>Discount:</span>
					<span>-Rs.{appliedDiscount.toFixed(2)}</span>
				</div>
			)}
			<div className="flex justify-between items-center text-xl font-bold mb-4">
				<span>Total:</span>
				<span>Rs.{total.toFixed(2)}</span>
			</div>
			<button
				onClick={onCheckout}
				className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
			>
				Checkout
			</button>
		</div>
	);
};
