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
			className={`px-4 py-2 xs:py-4 xs:w-[80vw] sm:w-80 text-left text-xl xs:text-2xl leading-10 font-title bg-teal-400 dark:bg-teal-600 rounded-lg sm:hover:translate-x-2 transition-transform flex items-center overflow-hidden ${
				props.activeIndex == props.index ? "rounded-r-none xs:!translate-x-4" : ""
			} ${props.activeIndex !== null ? "!w-24" : ""}`}>
			{props.icon}
			<span
				className={`mr-4 transition-all ${
					props.activeIndex !== null ? "hidden w-0" : "w-full"
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

	const iconStyle = "w-10 h-10 mr-4";

	return (
		<div className="flex p-2 my-auto sm:m-8 justify-center">
			<div className="flex flex-col gap-4 content-center">
				<InfoBox
					item="SEO"
					icon={<ArrowTrendingUpIcon className={iconStyle} />}
					index={0}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Mobil först"
					icon={<DevicePhoneMobileIcon className={iconStyle} />}
					index={1}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Tillgänglighet"
					icon={<UsersIcon className={iconStyle} />}
					index={2}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				<InfoBox
					item="Prestanda"
					icon={<CpuChipIcon className={iconStyle} />}
					index={3}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
			</div>
			<div
				className={`bg-teal-400 dark:bg-teal-600 p-4 rounded-lg xs:transition-all overflow-hidden ${
					activeIndex !== null ? "xs:ml-3" : "w-0 px-0"
				} ${
					activeIndex == 0
						? "rounded-tl-none"
						: activeIndex == 3
						? "xs:rounded-bl-none"
						: ""
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
				<div className="relative lg:ml-auto lg:flex-grow justify-center text-center mt-32 mb-16 flex flex-col items-center mx-4 group">
					<h2 className="font-title text-xl sm:text-4xl mb-2">
						Hemsidor för alla syften
					</h2>
					<p className="max-w-lg text-left sm:text-xl leading-loose sm:leading-loose">
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
