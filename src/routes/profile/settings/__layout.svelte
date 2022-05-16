<script>
	import { beforeNavigate } from '$app/navigation';

	import Modal from '$components/Modal.svelte';
	import SaveProfilePrompt from '$components/form/SaveProfilePrompt.svelte';

	let unsaved = false;
	let modalVisible = false;

	beforeNavigate(({ to, cancel }) => {
		if (!unsaved) return; // nothing to do
		modalVisible = !modalVisible;
	});
</script>

<section class="content min-h-full bg-orange-300">
	{#if modalVisible}
		<Modal on:exit={() => (modalVisible = !modalVisible)}>
			<SaveProfilePrompt />
		</Modal>
	{/if}
	<form
		id="settingsForm"
		on:change={(e) => {
			unsaved = true;
		}}
		class="flex flex-col mx-auto min-h-full w-full text-orange-900 bg-orange-300"
		action="/profile/settings"
		method="POST"
	>
		<button
			on:click={(e) => {
				unsaved = false;
			}}
			hidden={!unsaved}
			type="submit"
			form="settingsForm">Save My Answers</button
		>
		<slot />
	</form>
</section>
