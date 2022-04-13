import { useEffect, useState } from "react";

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	function handleResize() {
		setWindowSize({
			width: window.document.documentElement.clientWidth,
			height: window.document.documentElement.clientHeight,
		});
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);
	return windowSize;
}
