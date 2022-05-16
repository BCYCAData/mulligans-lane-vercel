import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],

	kit: {
		adapter: adapter(),
		vite: {
			define: {
				'process.env': process.env
			},
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
					$actions: path.resolve('./src/actions')
				}
			},
			plugins: [Unocss({})]
		}
	}
};

export default config;
