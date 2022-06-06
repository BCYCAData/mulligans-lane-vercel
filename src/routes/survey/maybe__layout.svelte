<script>
	import { beforeNavigate } from '$app/navigation';

	import Modal from '$components/Modal.svelte';
	import SaveProfilePrompt from '$components/form/SaveProfilePrompt.svelte';
	import ProgressBar from '$components/form/ProgressBar.svelte';

	let steps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	let currentActive = 1;
	let progressBar;

	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement);
	};

	const skipTo = (e) => {
		progressBar.skipTo(e);
	};

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
		on:submit|preventDefault
		id="surveyForm"
		on:change={(e) => {
			unsaved = true;
		}}
	>
		<!-- <div class="flex flex-row">
			<div class="w-1/3" />
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={(e) => {
					unsaved = false;
				}}
				hidden={!unsaved}
				type="submit"
				form="profileMyPlaceForm">Save My Answers</button
			>
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={(e) => {
					unsaved = false;
				}}
				hidden={!unsaved}>Cancel</button
			>
		</div> -->
		<slot />
		<div class=" mx-auto w-7/12">
			<ProgressBar
				{steps}
				bind:currentActive
				bind:this={progressBar}
				on:click={(e) => {
					skipTo(e);
				}}
			/>
		</div>
		<div class="mt-1 text-center">
			<button
				class="px-[20px] py-[6px] text-white bg-orange-500 rounded-xl focus:outline-none active:transform scale 98 disabled:cursor-not-allowed disabled:bg-slate-300"
				on:click={() => handleProgress(-1)}
				disabled={currentActive == 1}>Prev</button
			>
			<button
				class="px-[20px] py-[6px] text-white bg-orange-500 rounded-xl focus:outline-none active:transform scale 98 disabled:cursor-not-allowed disabled:bg-slate-300"
				on:click={() => handleProgress(+1)}
				hidden={currentActive == steps.length}>Next</button
			>
			<button
				class="px-[20px] py-[6px] text-white bg-orange-500 rounded-xl focus:outline-none active:transform scale 98 disabled:cursor-not-allowed disabled:bg-slate-300"
				type="submit"
				form="surveyForm"
				hidden={currentActive == steps.length}>Submit</button
			>
		</div>
	</form>
</section>
