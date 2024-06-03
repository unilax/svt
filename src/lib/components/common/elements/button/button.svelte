<script lang="ts">
	/** Imports */
	import { useProps, useStyles } from '$lib/index.js';

	/** Props */
	const props = useProps('Button');
	let _class: typeof props.class = {};
	export { _class as class };
	export let label = props.label;
	export let href = props.href;
	export let override = props.override;

	/** Logic */
	const { css, classer, strify } = useStyles(props.class, _class, override);

	/** React */
	$: isLeading = $$slots.leading;
	$: isTrailing = $$slots.trailing;
	$: isDefault = $$slots.default || label;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={0}
	{href}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	{#if isLeading}
		<span><slot name="leading" /></span>
	{/if}

	{#if isDefault}
		<span><slot>{label}</slot></span>
	{/if}

	{#if isTrailing}
		<span><slot name="trailing" /></span>
	{/if}
</svelte:element>
