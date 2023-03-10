import {
	ArrowRightIcon,
	ArrowTrendingUpIcon,
	CpuChipIcon,
	DevicePhoneMobileIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { animated, useSpring } from "react-spring";

import { Waypoint } from "react-waypoint";

function InfoBox(props: {
	item: string;
	index: number;
	activeIndex: number;
	setActiveIndex: Dispatch<SetStateAction<number>>;
	icon: ReactNode;
}) {
	return (
		<button
			onClick={() => {
				if (props.activeIndex != props.index) props.setActiveIndex(props.index);
				else props.setActiveIndex(null);
			}}
			className={`px-4 py-2 w-[80vw] sm:w-64 text-left text-xl leading-10 font-title bg-teal-400 dark:bg-teal-600 rounded-lg sm:hover:translate-x-2 transition-transform flex items-center overflow-hidden ${
				props.activeIndex == props.index ? "rounded-r-none !translate-x-4" : ""
			} ${props.activeIndex !== null ? "!w-16" : ""}`}>
			{props.icon}
			<span
				className={`mx-3 transition-all ${
					props.activeIndex !== null ? "hidden sm:inline" : ""
				}`}>
				{props.item}
			</span>
			<ArrowRightIcon
				className={`w-6 h-6 ml-auto transition-all ${
					props.activeIndex == props.index ? "rotate-180" : ""
				}`}
			/>
		</button>
	);
}

function InfoBoxes() {
	const texts = [
		"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis dolore praesentium facere. Vitae autem quaerat ad earum, et iure placeat delectus dolorum fuga totam optio non, error praesentium porro?",
		"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis dolore praesentium facere. Vitae autem quaerat ad earum, et iure placeat delectus dolorum fuga totam optio non, error praesentium porro?",
		"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis dolore praesentium facere. Vitae autem quaerat ad earum, et iure placeat delectus dolorum fuga totam optio non, error praesentium porro?",
		"4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis dolore praesentium facere. Vitae autem quaerat ad earum, et iure placeat delectus dolorum fuga totam optio non, error praesentium porro?",
	];

	const [activeIndex, setActiveIndex] = useState<number>(null);

	return (
		<div className="flex p-2 my-auto sm:m-8 justify-center">
			<div className="flex flex-col gap-4">
				<InfoBox
					item="SEO"
					icon={<ArrowTrendingUpIcon className="w-8 h-8" />}
					index={0}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Mobil först"
					icon={<DevicePhoneMobileIcon className="w-8 h-8" />}
					index={1}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Tillgänglighet"
					icon={<UsersIcon className="w-8 h-8" />}
					index={2}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Prestanda"
					icon={<CpuChipIcon className="w-8 h-8" />}
					index={3}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
			</div>
			<div
				className={`bg-teal-400 dark:bg-teal-600 p-4 rounded-lg transition-all overflow-hidden ${
					activeIndex !== null ? "ml-4" : "w-0 px-0 ml-2"
				} ${
					activeIndex == 0 ? "rounded-tl-none" : activeIndex == 3 ? "rounded-bl-none" : ""
				}`}>
				<p className="text-sm xs:text-base xs:w-64">{texts[activeIndex]}</p>
			</div>
		</div>
	);
}

export default function WhatWeDo() {
	const [animationFinished, setAnimationFinished] = useState(false);
	const [spring, api] = useSpring(() => ({
		from: { y: 100, opacity: 0 },
	}));

	return (
		<div className="min-h-screen flex items-center">
			<animated.div
				style={{ ...spring }}
				className="flex flex-col lg:flex-row-reverse items-center justify-center w-full">
				<div className="lg:ml-auto lg:flex-grow text-center mt-32 mb-16 flex flex-col items-center mx-4">
					<h2 className="font-title text-xl sm:text-2xl mb-2">
						Hemsidor för alla syften
					</h2>
					<p className="max-w-md text-left sm:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum numquam
						corporis provident cumque quis quo, dignissimos quae animi fugiat reiciendis
						molestiae? Officia at magni a! Corrupti ipsa porro quae officia.
					</p>
				</div>
				<Waypoint
					onEnter={() => {
						if (!animationFinished)
							setTimeout(
								() =>
									api.start({
										from: { y: 100, opacity: 0 },
										to: { y: 0, opacity: 1 },
									}),
								50
							);

						setAnimationFinished(true);
					}}
					fireOnRapidScroll
				/>
				<InfoBoxes />
			</animated.div>
		</div>
	);
}
