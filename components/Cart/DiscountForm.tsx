interface DiscountFormProps {
	discountCode: string;
	setDiscountCode: (code: string) => void;
	applyDiscount: () => void;
	discountError: string;
}

export const DiscountForm = ({
	discountCode,
	setDiscountCode,
	applyDiscount,
	discountError,
}: DiscountFormProps) => {
	return (
		<div className="space-y-2 mb-4 md:mb-0">
			<h2 className="font-bold">Apply Discount Coupon:</h2>
			<div className="flex items-center space-x-2">
				<input
					type="text"
					value={discountCode}
					onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
					className="border border-gray-300 rounded-lg px-2 py-1"
					placeholder="Enter discount code"
				/>
				<button
					onClick={applyDiscount}
					className="bg-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-600 transition"
				>
					Apply
				</button>
			</div>
			{discountError && <p className="text-red-500">{discountError}</p>}
		</div>
	);
};
