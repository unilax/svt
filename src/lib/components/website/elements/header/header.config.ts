import type { Styles, Props, DeepStyles } from '$lib/types/utility.js';

export const props = {
	class: {} as string | DeepStyles<typeof header>,
	override: false,
	open: false,
	name: '',
	links: [] as any[]
} as Props;

const styles = {
	root: {
		spacing: 'mx-auto p-6 lg:px-8',
		flex: '[&>*>*[data-flex=true]]:hidden [&>*>*[data-flex=true]]:lg:flex'
	},
	nav: {
		flex: ' flex justify-between items-center  gap-x-6',
		sizing: 'max-w-screen-2xl ',
		east: {
			flex: 'flex items-center',
			sizing: 'w-fit',
			typography: 'font-semibold'
		},
		center: {
			flex: 'grow justify-center gap-x-6 '
		},
		west: {
			custom: '[&>[data-flex=false]]:lg:hidden [&>[data-flex=true]]:lg:flex',
			flex: 'flex justify-end items-center gap-x-6'
		}
	},
	aside: {
		flex: 'lg:hidden',
		north: {
			flex: 'flex justify-between font-semibold items-center gap-x-6'
		},
		panel: {
			spacing: 'space-y-2 py-6',
			flex: 'flex flex-col',
			ancor: {
				spacing: '-mx-3 px-3 py-2',
				background: 'hover:bg-gray-50',
				border: 'rounded-lg',
				typography: 'text-base font-semibold leading-7 text-gray-900'
			}
		},
		south: {
			spacing: 'py-6 ',
			flex: 'flex justify-center items-center gap-x-5'
		}
	}
} satisfies Styles;
export const header = styles;
