import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { removeFromCart, updateQuantity } from "@/lib/features/cart/cartSlice";

interface CartItemProps {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imageUrl: string;
}

export default function CartItem({
	id,
	name,
	price,
	quantity,
	imageUrl,
}: CartItemProps) {
	const dispatch = useAppDispatch();

	return (
		<div className="flex items-center justify-between border-b py-4">
			<Image
				src={imageUrl}
				alt={name}
				className="w-10 h-10 md:w-16 md:h-16 object-cover"
				width={64}
				height={64}
			/>
			<div className="flex-1 ml-4">
				<h3 className="text-base md:text-lg font-medium">{name}</h3>
				<p className="text-gray-600">₹{price}</p>
			</div>
			<div className="flex items-center space-x-2">
				<button
					onClick={() =>
						dispatch(
							updateQuantity({ id, quantity: Math.max(quantity - 1, 1) })
						)
					}
					className="px-2 md:px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
				>
					-
				</button>
				<input
					type="number"
					min="1"
					value={quantity}
					onChange={(e) =>
						dispatch(
							updateQuantity({
								id,
								quantity: Math.max(parseInt(e.target.value), 1),
							})
						)
					}
					className="w-10 border border-gray-300 rounded-lg text-center py-1"
				/>
				<button
					onClick={() =>
						dispatch(updateQuantity({ id, quantity: quantity + 1 }))
					}
					className="px-2 md:px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
				>
					+
				</button>
			</div>
			<button
				onClick={() => dispatch(removeFromCart(id))}
				className="ml-4 bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition"
			>
				Remove
			</button>
		</div>
	);
}
