<script lang="ts">
	import { UHeader, useDark, UButton } from '$lib/index.js';
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
</script>

<section class="container p-4 flex-col bg-gray-50 dark:bg-gray-950 h-screen">
	<UHeader name="UI" {links}>
		<span
			slot="logo"
			class="i-fluent-developer-board-lightning-20-filled bg-black dark:bg-white size-10 -ml-1"
		/>
		<svelte:fragment slot="buttons">
			<UButton color="blaite" variant="ghost" label="Log in" />
			<UButton label="Sign up" />
		</svelte:fragment>
	</UHeader>
	<button on:click={dark.toggle}>Mode</button>
</section>
