const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			title: ['"Roboto Slab"', "ui-sans-serif", "system-ui"],
			sans: ["Montserrat", "ui-sans-serif", "system-ui"],
		},
		screens: {
			xs: "380px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
	darkMode: "class",
};
