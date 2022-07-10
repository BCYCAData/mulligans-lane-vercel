<script>
	// @ts-nocheck

	import { beforeNavigate } from '$app/navigation';
	import {
		staticWaterOptions,
		yesNoOptions,
		fireFightingAssets,
		fireHazardReductionOptions
	} from '$lib/profileOptions';

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
	export let profileAssets;
	let noneChecked = false;

	let selectedStaticSources = new Set();
	const unCheckAllStaticWater = (e) => {
		if (e.currentTarget.checked) {
			console.log('unset');
			for (const source of selectedStaticSources) {
				source.checked = false;
			}
			selectedStaticSources.clear();
			noneChecked = true;
		}
	};
	const setStaticWater = (e) => {
		console.log('set');
		if (e.currentTarget.checked) {
			selectedStaticSources.add(e.currentTarget);
		} else {
			selectedStaticSources.delete(e.currentTarget);
		}
		if (noneChecked) {
			noneChecked = false;
		}
	};
</script>

<section class="min-h-full bg-orange-300">
	{#if modalVisible}
		<Modal on:exit={() => (modalVisible = !modalVisible)}>
			<SaveProfilePrompt />
		</Modal>
	{/if}
	<form
		id="profileAssetsForm"
		on:change={() => {
			unsaved = true;
		}}
		class="flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"
		action="/profile/myplace/assets"
		method="POST"
	>
		<div class="flex flex-row">
			<div class="w-1/3" />
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={() => {
					unsaved = false;
				}}
				hidden={!unsaved}
				type="submit"
				form="profileAssetsForm"
			>
				Save My Answers
			</button>
			<button
				class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
				on:click={() => {
					unsaved = false;
				}}
				hidden={!unsaved}
			>
				Cancel
			</button>
		</div>

		<!-- static_water_available -->
		<div class="flex flex-row justify-between items-center px-4 mt-2">
			<label
				class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
				for="static_water_available_list"
			>
				Are there any static water supplies on the property?
			</label>
			<div class="flex rounded-lg bg-orange-50 mx-3">
				<div
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="static_water_available_list"
				>
					{#each staticWaterOptions as { value, lable }}
						<li class="justify-start place-items-center" name="static_water_available_list">
							{#if value < 5}
								<input
									name="static_water_available"
									type="checkbox"
									bind:group={profileAssets.static_water_available}
									{value}
									on:change={(e) => {
										setStaticWater(e);
									}}
								/>
							{:else}
								<input
									name="static_water_available"
									type="checkbox"
									bind:group={profileAssets.static_water_available}
									{value}
									on:change={(e) => {
										unCheckAllStaticWater(e);
									}}
									checked={noneChecked}
								/>
							{/if}
							<label for="static_water_available">{lable}</label>
						</li>
					{/each}
				</div>
			</div>
		</div>

		<!-- have_stortz -->
		<div class="flex flex-row justify-between items-center px-4 mt-2">
			<label class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1" for="have_stortz_list">
				Do you have a Stortz fitting attached to a water tank?
			</label>
			<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
				{#each yesNoOptions as { value, lable }}
					<li class="list-none sm:text-base sm:font-semibold sm:p-1" name="have_stortz_list">
						<input name="have_stortz" type="radio" bind:group={profileAssets.have_stortz} {value} />
						<label for="have_stortz">{lable}</label>
					</li>
				{/each}
			</div>
		</div>

		<!-- stortz_size -->
		<div class:hidden={profileAssets.have_stortz !== true}>
			<div class="flex flex-row justify-start items-center px-4 mt-2">
				<label class="mt-1 text-lg font-bold mb-1" for="stortz_size">
					Please include the size (mm)
				</label>
				<input
					type="number"
					id="stortz_size"
					name="stortz_size"
					class="border border-orange-700 w-20 rounded ml-4 py-1 sm:text-lg"
					bind:value={profileAssets.stortz_size}
				/>
			</div>
		</div>

		<!-- fire_fighting_assets -->
		<div class="flex flex-row justify-between items-center px-4 mt-2">
			<label class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1" for="fire_fighting_assets_list">
				Do you have any of the following at this property?
			</label>
			<div class="flex rounded-lg bg-orange-50 mx-3">
				<div
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="fire_fighting_assets_list"
				>
					{#each fireFightingAssets as { value, lable }}
						<li
							class="list-none sm:text-base sm:font-semibold sm:p-1"
							name="fire_fighting_assets_list"
						>
							<input
								name="fire_fighting_assets"
								type="checkbox"
								bind:group={profileAssets.fire_fighting_assets}
								{value}
							/>
							<label for="fire_fighting_assets">{lable}</label>
						</li>
					{/each}
				</div>
			</div>
		</div>

		<!-- fire_hazard_reduction -->
		<div class="flex flex-row justify-between items-center px-4 mt-2">
			<label
				class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
				for="fire_hazard_reduction_list"
			>
				Does your property have?
			</label>
			<div class="flex rounded-lg bg-orange-50 mx-3">
				<div
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="fire_hazard_reduction_list"
				>
					{#each fireHazardReductionOptions as { value, lable }}
						<li>
							<input
								name="fire_hazard_reduction"
								type="checkbox"
								bind:group={profileAssets.fire_hazard_reduction}
								{value}
							/>
							<label for="fire_hazard_reduction">{lable}</label>
						</li>
					{/each}
				</div>
			</div>
		</div>
	</form>
</section>
