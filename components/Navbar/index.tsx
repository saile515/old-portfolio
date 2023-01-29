import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";

function NavLink(props: { name: string; url: string }) {
	return (
		<Link href={props.url}>
			<a className="uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-50 mx-1 sm:mx-4 text-[0.624rem] xs:text-sm sm:text-base whitespace-nowrap">
				{props.name}
			</a>
		</Link>
	);
}

export default function Navbar() {
	const windowSize = useWindowSize();

	return (
		<div className="fixed top-0 left-0 w-full h-12 bg-zinc-50 dark:bg-zinc-900 bg-opacity-50 dark:bg-opacity-50 z-10 flex">
			<nav className="flex items-center ml-2 sm:ml-auto">
				<NavLink name="Hem" url="/" />
				<NavLink name="Om Oss" url="/about" />
				<NavLink name="FAQ" url="/FAQ" />
				<NavLink
					name={`${windowSize.width <= 480 ? "Pris" : "Priskalkylator"}`}
					url="/calculator"
				/>
			</nav>
			<DarkModeSwitch />
		</div>
	);
}
