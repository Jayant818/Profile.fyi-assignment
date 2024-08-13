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

export const CartItem = ({
	id,
	name,
	price,
	quantity,
	imageUrl,
}: CartItemProps) => {
	const dispatch = useAppDispatch();

	return (
		<div className="flex items-center justify-between border-b py-4">
			<div className="flex items-center">
				<Image
					src={imageUrl}
					alt={name}
					width={80}
					height={80}
					className="object-cover mr-4"
				/>
				<div>
					<h2 className="text-base md:text-lg font-semibold">{name}</h2>
					<p className="text-gray-600">${price.toFixed(2)}</p>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex items-center mr-4">
					<button
						onClick={() =>
							dispatch(
								updateQuantity({ id, quantity: Math.max(quantity - 1, 1) })
							)
						}
						className="px-2 py-1 bg-gray-200 rounded-l"
					>
						-
					</button>
					<input
						type="text"
						value={quantity}
						onChange={(e) => {
							const newQuantity = parseInt(e.target.value);
							if (!isNaN(newQuantity) && newQuantity > 0) {
								dispatch(updateQuantity({ id, quantity: newQuantity }));
							}
						}}
						className="w-12 text-center border-t border-b"
					/>
					<button
						onClick={() =>
							dispatch(updateQuantity({ id, quantity: quantity + 1 }))
						}
						className="px-2 py-1 bg-gray-200 rounded-r"
					>
						+
					</button>
				</div>
				<button
					onClick={() => dispatch(removeFromCart(id))}
					className="text-red-500 hover:text-red-700"
				>
					Remove
				</button>
			</div>
		</div>
	);
};
