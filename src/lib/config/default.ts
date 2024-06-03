import * as props from '$lib/config/imports/props.js';

export const config = {
	strategy: {
		override: false
	},
	colors: {
		primary: 'sky',
		gray: 'cool',
		success: 'green',
		warning: 'yellow',
		danger: 'red',
		mask: [
			'red',
			'orange',
			'amber',
			'yellow',
			'lime',
			'green',
			'emerald',
			'teal',
			'cyan',
			'sky',
			'blue',
			'indigo',
			'violet',
			'purple',
			'fuchsia',
			'pink',
			'rose'
		],
		base: ['slate', 'cool', 'zinc', 'neutral', 'stone']
	},
	components: props
};
