import Button from "../../General/Button";
import useScrollHeight from "../../../hooks/useScrollHeight";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Header() {
	const scrollHeight = useScrollHeight();
	const windowSize = useWindowSize();

	return (
		<div
			style={{
				height: windowSize.height * (1 - scrollHeight / windowSize.height),
				background: `linear-gradient(${(scrollHeight / windowSize.height) * 50 + 145}deg,transparent,transparent 65%,#2dd4bf 65.05%),linear-gradient(${
					-(scrollHeight / windowSize.height) * 25 + 100
				}deg,transparent,transparent 75%,#115e59 75.05%)`,
			}}
			className=" w-full bg-gray-200">
			<div className="w-[70%] h-[60%] flex flex-col justify-center items-center m-10">
				<h1 className="text-gray-800 font-bold text-4xl sm:text-6xl my-2">Elias Jörgensen</h1>
				<p className="text-gray-600 max-w-sm italic my-2">
					Jag är en <span className="font-bold">Fullstack utvecklare</span>, Studerande och Freelancer. Jag utvecklar hemsidor och webbappar.
				</p>
				<Button
					onClick={(event) => {
						window.scrollTo({ top: windowSize.height / 2, behavior: "smooth" });
					}}>
					Läs Mer
				</Button>
			</div>
		</div>
	);
}