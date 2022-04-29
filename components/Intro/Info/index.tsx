import { useEffect, useRef, useState } from "react";

import FeatureBox from "./FeatureBox";
import useScrollHeight from "../../../hooks/useScrollHeight";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Info() {
	const [clientRect, setClientRect] = useState<{ top: number }>({ top: 0 });
	const ref = useRef<HTMLHeadingElement>(null);
	const windowSize = useWindowSize();
	const scrollHeight = useScrollHeight();

	useEffect(() => {
		if (ref.current) setClientRect(ref.current?.getBoundingClientRect());
	}, [scrollHeight]);

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="my-10 sm:m-10 min-h-[60vh] w-[90%] sm:w-[80%] grid grid-rows-[auto_1fr] gap-4">
				<h2 ref={ref} style={{ opacity: (windowSize.height - clientRect.top - windowSize.height / 8) / (windowSize.height / 8) }} className="text-xl font-bold md:text-2xl">
					Behöver du eller ditt företag en hemsida?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(6,minmax(10rem,1fr))] md:grid-rows-[repeat(3,minmax(10rem,1fr))] lg:grid-rows-2 gap-4 rounded-xl overflow-hidden">
					<FeatureBox index={1} img="/Search.svg" name="SEO" description="Sökmotoroptimering gör att din sida hamnar högt upp i google resultaten, vilket gör att din sida får mer trafik." />
					<FeatureBox index={1} img="/Gear.svg" name="Moderna Sidor" description="Jag utvecklar moderna och stilrena sidor som hör hemma på dagens webb." />
					<FeatureBox
						index={1}
						img="/Phone.svg"
						name="Mobil Först"
						description="Världen flyttas mot mobiler, och det borde din sida också. Jag designar sidor med mobilanvändare i första åtanke."
					/>
					<FeatureBox index={1} img="/Speed.svg" name="Prestanda" description="Jag levererar sidor med optimal prestanda, för enheter med olika kraft." />
					<FeatureBox index={1} img="/Money.svg" name="Ta Betalt" description="Sälj produkter på din hemsida och ta betalt. Jag gör det lätt för er att sälja produkter online." />
					<FeatureBox index={1} img="/Accessibility.svg" name="Tillgänglighet" description="Jag gör sidor tillgängliga för alla männsikor, oavsett deras förutsättningar." />
				</div>
			</div>
		</div>
	);
}
