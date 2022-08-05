const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'index.html',
		'underconstruction.html'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Epilogue', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};