<script lang="ts">
	/** Imports */
	import { useProps, useUI, type DeepStyles } from '$lib/index.js';
	import { strify, twJoin, varify } from '$lib/utils/index.js';
	import { styles } from './button.config.js';

	/** Props  */
	const props = useProps('Button');
	let _class = props.class;
	export { _class as class };
	export let icon = props.icon;
	export let override = props.override;
	export let href = props.href;
	export let loading = props.loading;
	export let disabled = props.disabled;
	export let label = props.label;
	export let color = props.color;
	export let size = props.size;
	export let circle = props.circle;

	/** Logic */
	$: is = {
		east: $$slots.east || loading,
		west: $$slots.west,
		default: $$slots.default || label
	};

	/** UI */
	const { css, classer } = useUI(styles, _class, override);
	$: ui = {
		root: twJoin(
			strify(
				css.root,
				css.opt.size[size],
				varify(css.opt.variant['solid'], color),
				circle ? css.is.circle : {}
			),
			classer
		),
		icon: {
			load: loading ? strify(css.attr.icon.load) : '',
			east: typeof icon === 'string' ? icon : icon.east,
			west: typeof icon === 'object' ? icon.west : ''
		}
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	tabindex={0}
	disabled={disabled || loading}
	{href}
	data-circle={circle}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class={ui.root}
	{...$$restProps}
>
	{#if is.east}
		<slot name="east">
			<span data-slot="icon" class={ui.icon['load' || 'east']} />
		</slot>
	{/if}

	{#if is.default}
		<slot>{label}</slot>
	{/if}

	{#if is.west}
		<slot name="west">
			<span data-slot="icon" class={ui.icon.west} />
		</slot>
	{/if}
</svelte:element>
