import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';
export default function (): Partial<Config> {
	return {
		darkMode: 'class',
		content: ['./src/**/*.{html,js,svelte,ts}'],
		theme: {
			extend: {
				colors: {
					primary: colors.sky,
					gray: colors.neutral,
					success: colors.green,
					warning: colors.yellow,
					danger: colors.red
				}
			}
		},
		plugins: [
			forms({ strategy: 'class' }),
			iconsPlugin({
				collections: getIconCollections(['fluent']),
				scale: 1.5
			})
		]
	};
}
