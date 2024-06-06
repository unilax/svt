<script lang="ts">
	/** Imports */
	import { UDrawer, useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { UHeaderLinks } from '$lib/index.js';
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

	/** UI */
	const { css, classer } = useUI(header, _class, override);
</script>

<header data-hide="true" class={twJoin(strify(css.root), classer)}>
	<nav class={strify(css.nav)} aria-label="Global">
		<a href="/" class={strify(css.nav.east)}>
			<slot name="east">
				<slot name="logo" />
				{#if name}{name}{/if}
			</slot>
		</a>
		<div data-flex={true} class={strify(css.nav.center)}>
			<slot><UHeaderLinks {links} /></slot>
		</div>
		<div class={strify(css.nav.west)}>
			<slot name="west" />
			<slot name="menu">
				<button data-flex={false} class="flex items-center" on:click={toggle}>
					<span class="i-fluent-navigation-20-regular" />
				</button>
			</slot>
		</div>
	</nav>

	<UDrawer
		bind:open
		transition={{ content: { x: 400, duration: 100 } }}
		class={{
			content: {
				flex: 'lg:hidden w-full space-y-6 divide-y divide-gray-500/10 h-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
			},
			overlay: { flex: 'lg:hidden' }
		}}
	>
		<div class={strify(css.aside.north)}>
			<slot name="north">
				<slot name="logo" />
				<slot name="menu">
					<button class="flex items-center" on:click={toggle}>
						<span class="i-fluent-dismiss-20-regular" />
					</button>
				</slot>
			</slot>
		</div>

		<div class={strify(css.aside.panel)}>
			<slot name="panel">
				{#each links as link}
					<a href="/" class={strify(css.aside.panel.ancor)}>{link.label}</a>
				{/each}
			</slot>
		</div>

		<div class={strify(css.aside.south)}>
			<slot name="west" />
		</div>
	</UDrawer>
</header>
