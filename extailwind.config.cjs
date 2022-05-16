const config = {
	content: ['./src/**/*.{html,css,js,svelte,ts}'],

	theme: {
		gridTemplateAreas: {
			layout: [
				'header header header',
				'nav    main   main',
				'nav    footer footer'
			]
		},
		gridTemplateColumns: {
			layout: '24rem 1fr 2rem'
		},
		gridTemplateRows: {
			layout: '6rem 3rem 1fr auto'
		},
		extend: {}
	},

	plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};

module.exports = config;
