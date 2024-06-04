<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
    import { strify, twJoin, varify } from '$lib/utils/index.js'
	import { button } from './button.js';

	/** Props  */
	const props = useProps('Button');
    let _class: typeof props.class = {};
	export { _class as class };
    export let override = props.override;
	export let href = props.href;
	export let loading = props.loading;
	export let disabled = props.disabled;
	export let label = props.label;
	export let color = props.color;

    /** Logic */
   
	/** React */
	$: isLeading = $$slots.leading;
	$: isTrailing = $$slots.trailing;
	$: isDefault = $$slots.default || label;

    /** CSS & UI */
    const { css, classer } = useUI(button, _class, override)
    $: rootUI = twJoin(strify(
        css.root,
		varify(css.opt.variant['solid'], color)
    ), classer)
    

</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={0}
	disabled={disabled || loading}
	{href}
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
    class={rootUI}
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
