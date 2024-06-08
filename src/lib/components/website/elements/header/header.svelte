<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { UHeaderLinks, UDrawer } from '$lib/index.js';
	import { header } from './header.config.js';

	/** Props */
	const props = useProps('Header');
	let _class = props.class;
	export let links = props.links;
	export let open = props.open;
	export let name = props.name;
	export let override = props.override;
	export function toggle() {
		open = !open;
	}

	/** Logic */
	let drawer: UDrawer;

	/** UI */
	const { css, classer } = useUI(header, _class, override);
</script>

<header class={twJoin(strify(css.root), classer)}>
	<nav class={strify(css.nav)} aria-label="Global">
		<a href="/" class={strify(css.nav.logo)}>
			<slot name="logo" />
			{#if name}{name}{/if}
		</a>

		<div class={strify(css.nav.links)}>
			<UHeaderLinks {links} />
		</div>

		<div class={strify(css.nav.buttons)}>
			<slot name="buttons" />
		</div>

		<div class="flex">
			<slot name="menu">
				<button on:click={drawer.toggle} type="button" class="flex justify-between items-center">
					<span class="i-fluent-dismiss-20-regular" />
				</button>
			</slot>
		</div>
	</nav>
	<UDrawer
		transition={{ content: { x: 250, duration: 100 } }}
		bind:this={drawer}
		class={strify(css.drawer)}
	>
		<div class="flex justify-between items-center gap-x-6">
			<slot name="logo" />

			<button on:click={drawer.toggle} type="button" class="flex justify-between items-center">
				<span class="i-fluent-dismiss-20-regular" />
			</button>
		</div>
		<div class="mt-6 flow-root">
			<div class="-my-6 divide-y divide-gray-600/10 dark:divide-gray-400/10">
				<div class="space-y-2 py-6">
					{#each links as link}
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-950/50"
							>{link.label}</a
						>
					{/each}
				</div>
				<div class="py-6 flex justify-center items-center w-full mx-auto gap-x-5">
					<slot name="buttons" />
				</div>
			</div>
		</div>
	</UDrawer>
</header>
