import { useEffect, useRef, useState } from "react";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

function DynamicText() {
	const phrases = ["Nå dina kunder", "Sälj din produkt", "Bygg ett varumärke"];

	const [phraseIndex, setPhraseIndex] = useState(0);
	const [letterIndex, setLetterIndex] = useState(0);
	const [animationFrame, setAnimationFrame] = useState(0);
	const [text, setText] = useState(phrases[0]);

	function incrementAnimationFrame(delay: number) {
		setTimeout(() => setAnimationFrame((animationFrame) => animationFrame + 1), delay);
	}

	useEffect(() => {
		setText(phrases[phraseIndex].slice(0, letterIndex));

		if (animationFrame < phrases[phraseIndex].length) {
			// Add letters
			setLetterIndex((letterIndex) => letterIndex + 1);
			incrementAnimationFrame(2000 / phrases[phraseIndex].length);
		} else if (animationFrame == phrases[phraseIndex].length) {
			// Blink cursor
			incrementAnimationFrame(530);
			incrementAnimationFrame(1060);
			incrementAnimationFrame(1590);
			incrementAnimationFrame(2120);
			incrementAnimationFrame(2650);
			incrementAnimationFrame(3180);
		} else if (animationFrame > phrases[phraseIndex].length + 5 && letterIndex > 0) {
			// Remove letters
			setLetterIndex((letterIndex) => letterIndex - 1);
			incrementAnimationFrame(500 / phrases[phraseIndex].length);
		} else if (letterIndex == 0) {
			// Next phrase
			setPhraseIndex((phraseIndex) => (phraseIndex + 1) % phrases.length);
			setAnimationFrame(0);
		}
	}, [animationFrame]);

	return (
		<h1 className="font-title text-2xl xs:text-4xl sm:text-5xl mt-48 sm:mt-64 mx-4 sm:mx-16 max-w-[18rem] sm:max-w-md sm:leading-tight">
			<span className="bg-teal-400 dark:bg-teal-600 rounded-lg px-2 whitespace-nowrap">
				<span>{text}</span>
				<span
					className={`relative text-3xl xs:text-5xl sm:text-6xl ml-1 ${
						animationFrame == phrases[phraseIndex].length + 1 ||
						animationFrame == phrases[phraseIndex].length + 3 ||
						animationFrame == phrases[phraseIndex].length + 5
							? "invisible"
							: "visible"
					}`}>
					|
				</span>
			</span>
			<br /> med en hemsida från Webbej
		</h1>
	);
}

export default function Header() {
	return (
		<div className="h-screen w-full bg-[url('/graph-paper.svg')] relative">
			<div className="absolute top-0 left-0 w-full h-full header-gradient-light dark:header-gradient-dark">
				<DynamicText />
				<button
					className="flex flex-col items-center ml-12 sm:ml-32 mt-4 sm:mt-12"
					onClick={() =>
						window.scrollTo({
							top: window.innerHeight,
							behavior: "smooth",
						})
					}>
					Läs mer nedan...
					<ChevronDoubleDownIcon className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
