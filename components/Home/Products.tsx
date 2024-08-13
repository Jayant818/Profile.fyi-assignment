import { Product } from "@/types";
import Item from "@/components/Home/Item";

export default function Products({ products }: { products: Product[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{products.map((item) => (
				<Item key={item.id} product={item} />
			))}
		</div>
	);
}
