<script>
	// @ts-nocheck

	import { stayInTouchOptions } from '$lib/profileOptions';
	import { beforeNavigate } from '$app/navigation';

	import Modal from '$components/Modal.svelte';
	import SaveProfilePrompt from '$components/form/SaveProfilePrompt.svelte';

	let unsaved = false;
	let modalVisible = false;

	beforeNavigate(({}) => {
		if (!unsaved) return; // nothing to do
		modalVisible = !modalVisible;
	});
	// export let profileSettings;
</script>

<section class="min-h-full bg-orange-300">
	{#if modalVisible}
		<Modal on:exit={() => (modalVisible = !modalVisible)}>
			<SaveProfilePrompt />
		</Modal>
	{/if}
	<form
		id="settingsForm"
		on:change={() => {
			unsaved = true;
		}}
		class="flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"
		action="/profile/settings"
		method="POST"
	>
		<button
			on:click={() => {
				unsaved = false;
			}}
			hidden={!unsaved}
			type="submit"
			form="settingsForm"
		>
			Save My Answers
		</button>
		<!--stay_in_touch_choices -->
		<!-- <div class="flex flex-row justify-start items-center mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="stay_in_touch_choices_list"
		>
			How would you prefer to stay in touch?</label
		>
		<div class="flex rounded-lg bg-orange-50 mx-3">
			<div
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="stay_in_touch_choices_list"
			>
				{#each stayInTouchOptions as { value, lable }}
					<li>
						<input
							name="stay_in_touch_choices"
							type="checkbox"
							bind:group={profileSettings.stay_in_touch_choices}
							{value}
						/>
						<label for="stay_in_touch_choices"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>
</div> -->
		<h1>TBD</h1>
		<!-- Postal address -->
		<!-- <div class:hidden={!profileSettings.stay_in_touch_choices.includes(5)}>
	<div class="flex flex-row pt-3 mx-2">
		<div class="flex flex-col basis-7/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="postal_address_street">Postal address</label
			>
			<input
				type="text"
				name="postal_address_street"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Street Address"
				autocomplete="street-address"
				style="text-transform:uppercase sm:text-lg"
				on:change={() => {
					validateAddress(e);
				}}
				bind:value={profileSettings.postal_address_street}
			/>
		</div>
		<div class="flex flex-col basis-3/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="postal_address_suburb">Suburb</label
			>
			<input
				type="text"
				name="postal_address_suburb"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Suburb"
				autocomplete=""
				style="text-transform:uppercase sm:text-lg"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={profileSettings.postal_address_suburb}
			/>
		</div>
		<div class="flex flex-col basis-2/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="postal_address_postcode">Postcode</label
			>
			<input
				type="text"
				name="postal_address_postcode"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Postcode"
				autocomplete=""
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={profileSettings.postal_address_postcode}
			/>
		</div>
	</div>
</div> -->
	</form>
</section>
