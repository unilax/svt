<script lang="ts">
	import { UButton, UHeader } from '$lib/index.js';
	import { useDark } from '$lib/index.js';
	const dark = useDark();
	const links = [{ label: 'Product' }, { label: 'Features' }, { label: 'Marketplace' }];
</script>

<UHeader name="UI" {links}>
	<span
		slot="logo"
		class="bg-black dark:bg-white i-fluent-developer-board-lightning-20-filled size-10"
	/>

	<svelte:fragment slot="west">
		<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Log in</a>
		<UButton label="Sign up" />
	</svelte:fragment>
</UHeader>
