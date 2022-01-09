<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let title;

	/* This component emits an "exit" event when the user requests to exit */
	const dispatch = createEventDispatcher();
	const onKeyDown = (e) => {
		// keycode 27 is the Escape key
		if (e.keyCode === 27) {
			dispatch('exit');
		}
	};
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="shadow" transition:fade={{ duration: 200 }} />
<div
	class="popup-modal"
	in:fade={{ duration: 300 }}
	out:fly={{ y: 500, duration: 400 }}
>
	<span
		class="fixed cursor-pointer hover:font-bold right-0 pr-1"
		on:click={() => dispatch('exit')}>&times</span
	>
	{#if title}
		<h2 class="mb-1 pt-[15px] text-xl text-center">{title}</h2>
	{/if}
	<slot />
</div>

<style>
	h2 {
		padding-top: 15px;
	}
	.popup-modal {
		/* width: 400px; */
		height: min-content;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 1px 2px 2px hsla(209deg, 61%, 16%, 0.075),
			2px 4px 4px hsla(209deg, 61%, 16%, 0.075),
			4px 8px 8px hsla(209deg, 61%, 16%, 0.075),
			8px 16px 16px hsla(209deg, 61%, 16%, 0.075),
			16px 32px 32px hsla(209deg, 61%, 16%, 0.075);
		border-radius: 10px;
		background: hsl(210deg, 36%, 96%);
		display: flex;
		flex-direction: column;
		padding: 0px 16px 16px 16px;
		transition: all 0.4s;
	}
	.shadow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsla(211deg, 39%, 23%, 30%);
		backdrop-filter: blur(1px);
		-webkit-backdrop-filter: blur(1px);
	}
</style>
