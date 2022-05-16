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
		id="profileAboutMeForm"
		on:change={(e) => {
			unsaved = true;
		}}
		class="flex flex-col mx-auto min-h-full w-full text-orange-900 bg-orange-300"
		action="/profile/aboutme"
		method="POST"
	>
		<div class="flex flex-row">
			<div class="w-1/3" />
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={(e) => {
					unsaved = false;
				}}
				hidden={!unsaved}
				type="submit"
				form="profileAboutMeForm">Save My Answers</button
			>
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={(e) => {
					unsaved = false;
				}}
				hidden={!unsaved}>Cancel</button
			>
		</div>
		<slot />
	</form>
</section>
