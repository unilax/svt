<script lang="ts">
	import { strify, twJoin } from '$lib/utils/index.js';
	import type { Styles, Props, DeepStyles } from '$lib/types/utility.js';

	export let links: any[] = [];
	const styles = {
		root: {
			flex: 'cursor-pointer text-gray-900 dark:text-white text-sm font-semibold flex items-center gap-1'
		}
	} satisfies Styles;
</script>

{#each links as link}
	<a href="/" class={strify(styles.root)}>{link?.label}</a>
{/each}
