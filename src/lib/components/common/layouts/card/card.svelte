<script lang="ts">
	/** Imports */
	import { useProps, useStyles } from '$lib/index.js';
	import { stringify, twJoin } from '$lib/utils/index.js';

	/** Props */
	export let override = false;
	const props = useProps('Card');
	let _class = props.class;
	export { _class as class };
	export let as = props.as;

	/** Logic */
	const { css, classer: clas } = useStyles(props.class, _class, override);
</script>

<svelte:element this={as} class={twJoin(stringify(css.root), clas)}>
	{#if $$slots.north}
		<div class={stringify(css.north)}>
			<slot name="north" />
		</div>
	{/if}
	{#if $$slots.default}
		<div class={stringify(css.default)}>
			<slot />
		</div>
	{/if}
	{#if $$slots.south}
		<div class={stringify(css.south)}>
			<slot name="south" />
		</div>
	{/if}
</svelte:element>
