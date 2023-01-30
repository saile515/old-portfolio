import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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
		if (dark === undefined) return;
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		document.cookie = `dark=${dark}`;
	}, [dark]);

	return (
		<button
			onClick={() => setDark(!dark)}
			aria-label="Byt färgtema"
			className="ml-auto mx-4 sm:mx-12">
			{dark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
		</button>
	);
}
