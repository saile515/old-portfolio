import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import useScrollHeight from "../../../hooks/useScrollHeight";
import useWindowSize from "../../../hooks/useWindowSize";

export default function FeatureBox(props: { index: number; img: string; name: string; description: string }) {
	const [clientRect, setClientRect] = useState<{ top: number }>({ top: 0 });
	const ref = useRef<HTMLDivElement>(null);
	const windowSize = useWindowSize();
	const scrollHeight = useScrollHeight();

	useEffect(() => {
		if (!ref.current) return;
		setClientRect(ref.current.getBoundingClientRect());
	}, [scrollHeight]);

	return (
		<div ref={ref} style={{ opacity: (windowSize.height - clientRect.top - windowSize.height / 8) / (windowSize.height / 8) }} className="bg-teal-500 p-4">
			<div className="flex mb-4">
				<div className="relative w-8 md:w-10 h-8 md:h-10">
					<Image src={props.img} layout="fill" alt="Dekorativ icon" />
				</div>
				<h2 className=" leading-8 md:leading-10 text-xl md:text-3xl text-gray-100 font-bold mx-6">{props.name}</h2>
			</div>
			<p className="text-gray-100">{props.description}</p>
		</div>
	);
}
