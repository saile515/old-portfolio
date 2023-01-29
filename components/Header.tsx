import { useEffect, useRef, useState } from "react";

function DynamicText() {
	const ref = useRef<HTMLSpanElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const phrases = ["Nå dina kunder", "Sälj din produkt", "Bygg ett varumärke"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((currentIndex) => (currentIndex + 1) % phrases.length);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (!ref.current) return;
		ref.current.innerText = phrases[currentIndex];
	}, [currentIndex]);

	return (
		<h1 className="text-zinc-900 dark:text-zinc-50 font-title text-2xl xs:text-4xl sm:text-5xl mt-48 sm:mt-64 mx-4 sm:mx-16 max-w-[18rem] sm:max-w-md sm:leading-tight">
			<span className="bg-teal-600 rounded-lg px-2 whitespace-nowrap" ref={ref}>
				Nå dina kunder
			</span>
			<br /> med en hemsida från Webbej
		</h1>
	);
}

export default function Header() {
	return (
		<div className="h-screen w-full dark:text-zinc-50 bg-[url('/graph-paper.svg')] relative">
			<div className="absolute top-0 left-0 w-full h-full header-gradient-light dark:header-gradient-dark">
				<DynamicText />
			</div>
		</div>
	);
}
