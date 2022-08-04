import { animated, useSpring } from "react-spring";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { Waypoint } from "react-waypoint";
import useScrollHeight from "../../../hooks/useScrollHeight";

export default function FeatureBox(props: { index: number; img: string; name: string; description: string }) {
	const [inView, setInView] = useState(false);
	const springProps = useSpring({
		to: { transform: inView ? "translate(0, 0)" : "translate(0, 0)", opacity: inView ? 1 : 1 },
		from: { transform: inView ? "translate(0, 100%)" : "translate(0, 0)", opacity: inView ? 0 : 1 },
		delay: 500,
		config: { mass: 1, tension: 100 },
	});

	return (
		<Waypoint onEnter={() => setInView(true)}>
			<animated.div style={springProps} className="bg-teal-500 p-4">
				<div className="flex mb-4">
					<div className="relative w-8 md:w-10 h-8 md:h-10">
						<Image src={props.img} layout="fill" alt="Dekorativ icon" />
					</div>
					<h2 className=" leading-8 md:leading-10 text-xl lg:text-2xl text-gray-100 font-bold mx-6">{props.name}</h2>
				</div>
				<p className="text-gray-100">{props.description}</p>
			</animated.div>
		</Waypoint>
	);
}
