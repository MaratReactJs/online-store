import Header from '@/components/Header';
import { ImageCarousel } from '@/components/ImageCarousel';

export interface Product {
	id?: number;
	product: string;
	price: string;
}

export default async function Home() {
	const res = await fetch(
		'https://653d338bf52310ee6a99fc70.mockapi.io/products',
		{ cache: 'no-cache' }
	);

	const products: Product[] = await res.json();
	return (
		<>
			<Header />
			<main>
				<ImageCarousel />
				<div className="flex flex-wrap -mx-4">
					{products.map((item) => (
						<div
							key={item.id}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
							<div className="bg-white p-2 rounded-lg shadow-md  overflow-hidden">
								<p className="text-xl font-semibold">
									{item.product}
								</p>
								<p className="text-gray-600">{item.price}</p>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
