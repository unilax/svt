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
		//spacing: 'mx-auto p-6 lg:px-8',
		//flex: '[&>*>*[data-flex=true]]:hidden [&>*>*[data-flex=true]]:lg:flex'
	},
	nav: {
		flex: ' flex justify-between items-center  gap-x-6',
		sizing: 'max-w-screen-2xl ',
		logo: {
			flex: 'flex lg:flex-1 font-semibold items-center text-lg'
		},
		links: {
			flex: 'hidden lg:flex lg:gap-x-12'
		},
		buttons: {
			//custom: '[&>[data-flex=false]]:lg:hidden [&>[data-flex=true]]:lg:flex',
			flex: 'flex flex-1 items-center justify-end gap-x-6'
		}
	},
	drawer: {
		flex: 'bg-white dark:bg-black/50 px-6 py-4 h-full w-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
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
