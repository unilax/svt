import type { Styles, DeepStyle, Props } from '$lib/types/utility.js';
export const card = {
	root: {
		layout: 'overflow-hidden',
		background: 'bg-white dark:bg-gray-900',
		border: 'rounded-lg divide-y divide-gray-200 ring-1 ring-gray-200 dark:ring-gray-800',
		effect: 'shadow'
	},
	north: { spacing: 'px-4 py-5 sm:px-6' },
	default: { spacing: 'px-4 py-5 sm:px-6' },
	south: { spacing: 'px-4 py-4 sm:px-6' }
} satisfies Styles;

export const props = {
	class: {} as string | DeepStyle<typeof card>,
	as: 'div'
};
