import Products from "@/components/Home/Products";
import getData from "@/lib/actions/getData.action";
import React, { Suspense } from "react";
import Loading from "@/components/shared/Loading";
import { Product } from "@/types";

const Home = async () => {
	return (
		<Suspense fallback={<Loading />}>
			<HomeContent />
		</Suspense>
	);
};

const HomeContent = async () => {
	const data = await getData();
	const res: Product[] = JSON.parse(data);
	return (
		<section className="px-4 sm:px-6 lg:px-8 py-8">
			<Products products={res} />
		</section>
	);
};

export default Home;
