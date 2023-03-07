/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				fade: "fadeIn 0.5s ease-in-out",
				fadeOut: "fadeOut 0.5s ease-in-out",
			},

			// that is actual animation
			keyframes: (theme) => ({
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
			}),

			colors: {
				"main-dark": "#232128",
				"main-gray": "#A4AEAD",
				"main-light": "#A4747F",
				"forest-green": "#365347",
				"tree-brown": "#BA895C",
			},
		},
	},
	plugins: [],
}
