<script>
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import Modal from '$components/Modal.svelte';
	import SaveProfilePrompt from '$components/form/SaveProfilePrompt.svelte';

	let unsaved = false;
	let modalVisible = false;

	beforeNavigate(async ({ cancel }) => {
		if (unsaved) {
			cancel();
			modalVisible = !modalVisible;
		}
	});
</script>

<section class="min-h-full bg-orange-300">
	{#if modalVisible}
		<Modal on:exit={() => (modalVisible = !modalVisible)}>
			<SaveProfilePrompt />
		</Modal>
	{/if}
	<form
		id="profileInformationForm"
		on:change={() => {
			unsaved = true;
		}}
		class="flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"
		action="/profile/mycommunity/information"
		method="POST"
	>
		{#if !unsaved && $page.url.pathname === '/profile/mycommunity/information'}
			<div class="flex flex-row">
				<div class="w-1/3" />
				<button
					class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
					on:click={() => {
						unsaved = false;
					}}
					hidden={!unsaved}
					type="submit"
					form="profileInformationForm">Save My Answers</button
				>
				<button
					class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
					on:click={() => {
						unsaved = false;
					}}
					hidden={!unsaved}
				/>
			</div>
		{/if}
		<slot />
	</form>
</section>
