import type { Styles, Props, DeepStyle } from '$lib/types/utility.js';

export const props = {
	class: {} as string | DeepStyle<typeof button>,
	override: false,
	label: '',
	href: ''
} satisfies Props;

const button = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-gray-900',
		border: 'rounded-lg divide-y divide-gray-200 ring-1 ring-gray-200 dark:ring-gray-800',
		effect: 'shadow'
	}
} satisfies Styles;
