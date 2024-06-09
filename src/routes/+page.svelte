<script lang="ts">
	import { UHeader, useDark, UButton, UInput, USelectMenu, UMedia } from '$lib/index.js';
	const dark = useDark();
	const links = [
		{
			label: 'Documentation',
			href: '/getting-started'
		},
		{
			label: 'Playground',
			href: '/playground'
		},
		{
			label: 'Roadmap',
			href: '/roadmap'
		},
		{
			label: 'Pro',
			href: '/pro'
		},
		{
			label: 'Releases',
			href: 'https://github.com/nuxt/ui/releases',
			target: '_blank'
		}
	];
	let value: string = 'BEST';
	let header: UHeader;
	const options = {
		sweet: ['Caramel', 'Chocolate', 'Strawberry', 'Cookies & Cream'],
		savory: ['Basil', 'Bacon', 'Rosemary']
	};
</script>

<section class="container p-4 flex-col bg-white dark:bg-gray-900 h-screen">
	<UHeader bind:this={header} name="SVT" {links}>
		<span
			slot="logo"
			class="i-fluent-developer-board-lightning-20-filled bg-black dark:bg-white size-10 -ml-1"
		/>
		<svelte:fragment slot="buttons">
			<UButton label="Sign up" />
		</svelte:fragment>
		<svelte:fragment slot="menu" let:open>
			<button on:click={dark.toggle} class="flex items-center rounded-md">
				<span class="i-fluent-weather-sunny-20-filled dark:i-fluent-weather-moon-20-filled" />
			</button>
			<button
				data-state="hide"
				on:click={header.toggle}
				type="button"
				class="flex items-center rounded-md"
			>
				<span class={open ? 'i-fluent-dismiss-20-regular' : 'i-fluent-navigation-20-regular'} />
			</button>
		</svelte:fragment>
	</UHeader>
	<div class="flex-col max-w-md mt-10">
		<UMedia />
		<USelectMenu placeholder='Pick' multiple {options}/>

	</div>
</section>
