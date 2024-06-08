import type { DeepStyles, Props, Colors, Styles } from '$lib/types/index.js';

type ButtonColor = keyof typeof styles.opt.variant.solid;
type ButtonVariant = keyof typeof styles.opt.variant;

export const props = {
	class: {} as string | DeepStyles<typeof button>,
	override: false,
	loading: false,
	disabled: false,
	circle: false,
	href: '',
	label: '',
	icon: {} as string | { east?: string; west?: string },
	color: 'blaite' as Colors['mask'] | Exclude<ButtonColor, 'color'>,
	variant: 'solid' as ButtonVariant,
	size: 'md' as 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} satisfies Props;

const styles = {
	root: {
		flex: 'flex flex-shrink-0 items-center',
		border: 'focus:outline-none focus-visible:outline-0',
		effect: 'disabled:opacity-75',
		interactive: 'cursor-pointer disabled:cursor-not-allowed',
		typography: 'font-semibold',
		sizing: '[&>[data-slot=icon]]:size-5'
	},
	is: {
		circle: { border: '!rounded-full' }
	},
	opt: {
		size: {
			xs: {
				flex: 'gap-x-1',
				typography: 'text-xs',
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			sm: {
				flex: 'gap-x-1',
				typography: 'text-sm',
				spacing: 'px-2 py-1',
				border: 'rounded'
			},
			md: {
				flex: 'gap-x-1.5',
				typography: 'text-sm',
				spacing: 'px-2.5 py-1.5',
				border: 'rounded-md'
			},
			lg: {
				flex: 'gap-x-2',
				typography: 'text-sm',
				spacing: 'px-3 py-2',
				border: 'rounded-md'
			},
			xl: {
				flex: 'gap-x-2',
				typography: 'text-base',
				spacing: 'px-3 py-2',
				border: 'rounded-md'
			}
		},
		variant: {
			solid: {
				color: {
					background: 'bg-color-500 hover:bg-color-600 disabled:bg-color-500',
					border: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
					typography: 'text-white',
					effect: 'shadow-sm'
				},
				blaite: {
					background: `bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-900 dark:disabled:bg-white`,
					border: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
					typography: 'text-white dark:text-gray-900',
					effect: 'shadow-sm'
				}
			},
			ghost: {
				color: {
					background: `hover:bg-color-50 dark:hover:bg-color-950 disabled:bg-transparent dark:disabled:bg-transparent`,
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-color-500`,
					typography: 'text-color-500'
				},
				blaite: {
					background: 'hover:bg-gray-100 dark:hover:bg-gray-800',
					border: `focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500`,
					typography: 'text-gray-900 dark:text-white'
				}
			}
		}
	},
	attr: {
		icon: {
			load: {
				svg: '',
				motion: 'animate-spin'
			}
		}
	}
} satisfies Styles;
export const button = styles;
