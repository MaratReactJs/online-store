import { LuMenuSquare } from 'react-icons/lu';
export default function Header() {
	return (
		<header className="min-h-[10vh] bg-[#0193a9] flex items-center">
			<LuMenuSquare className="text-[3em]" />
			<h1 className="text-[2em]">ONLINE STORE</h1>
			<input
				type="search"
				className="appearance-none border-none rounded  outline-none"
			/>
		</header>
	);
}
