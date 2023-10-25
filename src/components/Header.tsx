import { LuMenuSquare } from 'react-icons/lu';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

export default function Header() {
	return (
		<header className="min-h-[10vh] bg-[#0193a9] flex items-center justify-around px-[2em]">
			<LuMenuSquare className="text-[3em]" />
			<h1 className="text-[2em]">ONLINE STORE</h1>
			<input
				type="search"
				className="appearance-none border-none rounded-full  outline-none h-[3em] w-[60%]"
			/>
			<figure className="flex flex-col items-center">
				<ImLocation className="text-[1.4em]" />
				<figcaption>Адреса</figcaption>
			</figure>
			<figure className="flex flex-col items-center">
				<FaUserAlt className="text-[1.4em]" />
				<figcaption>Войти</figcaption>
			</figure>
			<figure className="flex flex-col items-center">
				<FaShoppingCart className="text-[1.4em]" />
				<figcaption>Корзина</figcaption>
			</figure>
		</header>
	);
}
