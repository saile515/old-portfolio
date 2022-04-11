import { useEffect, useState } from "react";

export default function useScrollHeight() {
	const [scrollHeight, setScrollHeight] = useState(0);

	function handleScroll() {
		setScrollHeight(window.scrollY);
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
			handleScroll();

			return () => window.removeEventListener("resize", handleScroll);
		}
	}, []);
	return scrollHeight;
}
