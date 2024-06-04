import type { DeepStyles, Props, Colors } from '$lib/types/index.js';

export const props = {
	class: {} as string | DeepStyles<typeof button>,
	override: false,
	loading: false,
	disabled: false,
	href: '',
	label: '',
	color: 'primary' as Colors['mask']

} satisfies Props;

export const button = {
	root: {
		flex: 'flex-shrink-0 items-center',
		border: 'focus:outline-none focus-visible:outline-0',
		effect: 'disabled:opacity-75',
		interactive: 'disabled:cursor-not-allowed',
		typography: 'font-semibold'
	},
    opt: {
        variant: {
			solid: {
				color: {
					background: 'bg-color-500 hover:bg-color-600 disabled:bg-color-500',
					border: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
					typography: 'text-white',
					effect: 'shadow-sm'
				},
				white: {
					background: `bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 disabled:bg-white dark:disabled:bg-gray-900`,
					border: `ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white',
					effect: 'shadow-sm'
				},
				black: {
					background: `bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 disabled:bg-gray-900 dark:disabled:bg-white`,
					border: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
					typography: 'text-white dark:text-gray-900',
					effect: 'shadow-sm'
				},
				gray: {
					background: `bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700/50 disabled:bg-gray-50 dark:disabled:bg-gray-800`,
					border: `ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: 'text-gray-700 dark:text-gray-200',
					effect: 'shadow-sm'
				}
			},
			outline: {
				color: {
					background: `hover:bg-color-50 dark:hover:bg-color-950 disabled:bg-transparent dark:disabled:bg-transparent`,
					border: `ring-1 ring-inset ring-color-500 focus-visible:ring-2 focus-visible:ring-color-500`,
					typography: 'text-color-500'
				}
			},
			soft: {
				color: {
					background: `bg-color-50 hover:bg-color-100 dark:bg-color-950 dark:hover:bg-color-900 disabled:bg-color-50 dark:disabled:bg-color-950`,
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500`,
					typography: 'text-color-500'
				}
			},
			subtle: {
				color: {
					background: `hover:bg-color-50 dark:hover:bg-color-950 disabled:bg-transparent dark:disabled:bg-transparent`,
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500`,
					typography: 'text-color-500'
				},
				white: {
					background: 'hover:bg-white dark:hover:bg-gray-900',
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white'
				},
				gray: {
					background: 'hover:bg-gray-50 dark:hover:bg-gray-800',
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: `text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`
				}
			},
        }
    }
};
