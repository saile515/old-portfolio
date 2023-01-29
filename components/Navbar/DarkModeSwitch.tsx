import { useEffect, useState } from "react";

import getCookie from "../../utils/getCookie";

export default function DarkModeSwitch() {
	const [dark, setDark] = useState<boolean>();

	useEffect(() => {
		const cookie = getCookie("dark");
		const value = cookie === "false" ? false : true;
		setDark(value);
	}, []);

	useEffect(() => {
		console.log(dark);
		if (dark === undefined) return;
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		document.cookie = `dark=${dark}`;
	}, [dark]);

	return (
		<button onClick={() => setDark(!dark)} className="text:zinc-900 dark:text-zinc-50">
			Dark
		</button>
	);
}
