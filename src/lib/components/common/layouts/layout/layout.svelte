<script lang="ts" context="module">
	export const props = {};
</script>

<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
</script>

<div id="svt-layout">
	<ModeWatcher />
	<slot />
</div>
