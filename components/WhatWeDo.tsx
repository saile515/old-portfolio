import {
	ArrowRightIcon,
	ArrowTrendingUpIcon,
	CpuChipIcon,
	DevicePhoneMobileIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

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
			className={`px-4 py-2 w-full sm:w-64 text-left text-xl leading-10 font-title  bg-teal-400 dark:bg-teal-600 rounded-lg sm:hover:translate-x-2 transition-all flex items-center overflow-hidden ${
				props.activeIndex == props.index ? "rounded-r-none !translate-x-4" : ""
			} ${props.activeIndex !== null ? "w-16" : ""}`}>
			{props.icon}
			<span className={`ml-3 ${props.activeIndex !== null ? "hidden sm:inline" : ""}`}>
				{props.item}
			</span>
			<ArrowRightIcon
				className={`w-6 h-6 ml-auto transition-transform ${
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
		<div className="flex p-2 m-auto sm:m-8">
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
					activeIndex !== null ? "w-68 ml-4" : "w-0 px-0"
				} ${
					activeIndex == 0 ? "rounded-tl-none" : activeIndex == 3 ? "rounded-bl-none" : ""
				}`}>
				<p className="text-sm xs:text-base xs:w-64">{texts[activeIndex]}</p>
			</div>
		</div>
	);
}

export default function WhatWeDo() {
	return (
		<div className="min-h-screen flex items-center relative">
			<InfoBoxes />
		</div>
	);
}
