import { useEffect, useRef, useState } from "react";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

function DynamicText() {
	const ref = useRef<HTMLSpanElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const phrases = ["Nå dina kunder", "Sälj din produkt", "Bygg ett varumärke"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((currentIndex) => (currentIndex + 1) % phrases.length);
		}, 5200);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (!ref.current) return;
		const activePhrase = phrases[currentIndex];
		let index = 0;

		let interval = setInterval(() => {
			index++;
			ref.current!.innerText = activePhrase.slice(0, index);
			if (index == activePhrase.length) clearInterval(interval);
		}, 2000 / activePhrase.length);

		setTimeout(() => {
			index = activePhrase.length;
			interval = setInterval(() => {
				index--;
				ref.current!.innerText = activePhrase.slice(0, index);
				if (index == 0) clearInterval(interval);
			}, 500 / activePhrase.length);
		}, 4000);
	}, [currentIndex]);

	return (
		<h1 className="text-zinc-900 dark:text-zinc-50 font-title text-2xl xs:text-4xl sm:text-5xl mt-48 sm:mt-64 mx-4 sm:mx-16 max-w-[18rem] sm:max-w-md sm:leading-tight">
			<span className="bg-teal-400 dark:bg-teal-600 rounded-lg px-2 whitespace-nowrap">
				<span ref={ref}>Nå dina kunder</span>
				<i className="bg-[url('/text-caret-light.svg')] dark:bg-[url('/text-caret-dark.svg')] text-zinc-900 dark:text-zinc-50 w-[1em] h-[1em] inline-block -mb-1 sm:-mb-2 -mx-2"></i>
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
				<button className="flex flex-col items-center ml-12 sm:ml-32 mt-4 sm:mt-12 text-zinc-900 dark:text-zinc-50">
					Läs mer nedan...
					<ChevronDoubleDownIcon className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
