<script>
	import {
		staticWaterOptions,
		yesNoOptions,
		fireFightingAssets,
		fireHazardReductionOptions
	} from '$lib/profileOptions';

	export let profileAssets;

	let selectedStaticSources = new Set();
	const unCheckAllStaticWater = (e) => {
		if (e.currentTarget.checked) {
			for (const source of selectedStaticSources) {
				source.checked = false;
			}
			selectedStaticSources.clear();
			noneChecked = true;
		}
	};
	const setStaticWater = (e) => {
		if (e.currentTarget.checked) {
			selectedStaticSources.add(e.currentTarget);
		} else {
			selectedStaticSources.delete(e.currentTarget);
		}
		if (noneChecked) {
			noneChecked = false;
		}
	};

	$: noneChecked = false;
</script>

<!-- static_water_available -->
<div class="flex flex-col mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="static_water_available_list"
		>
			Are there any static water supplies on the property?</label
		>
		<div class="flex rounded-lg bg-orange-50 mx-3">
			<div
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="static_water_available_list"
			>
				{#each staticWaterOptions as { value, lable }}
					<li
						class="justify-start place-items-center"
						name="static_water_available_list"
					>
						{#if value < 5}
							<input
								name="static_water_available"
								type="checkbox"
								bind:group={profileAssets[0].static_water_available}
								{value}
								on:change={(e) => {
									setStaticWater(e);
								}}
							/>
						{:else}
							<input
								name="static_water_available"
								type="checkbox"
								bind:group={profileAssets[0].static_water_available}
								{value}
								on:change={(e) => {
									unCheckAllStaticWater(e);
								}}
								checked={noneChecked}
							/>
						{/if}
						<label for="static_water_available"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- have_stortz -->
<div class="flex flex-col mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="have_stortz_list"
		>
			Do you have a Stortz fitting attached to a water tank?</label
		>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="have_stortz_list"
				>
					<input
						name="have_stortz"
						type="radio"
						bind:group={profileAssets[0].have_stortz}
						{value}
					/>
					<label for="have_stortz"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>

<!-- stortz_size -->
<div class:hidden={profileAssets[0].have_stortz === false}>
	<div class="flex flex-col mx-2">
		<div class="flex justify-start p-2 rounded-lg bg-orange-300">
			<label
				class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
				for="stortz_size">Please include the size (mm)</label
			>
			<input
				type="number"
				id="stortz_size"
				name="stortz_size"
				class="border border-orange-700 w-20 rounded ml-3 py-1 sm:text-xl"
				bind:value={profileAssets[0].stortz_size}
			/>
		</div>
	</div>
</div>

<!-- fire_fighting_assets -->
<div class="flex flex-col mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="fire_fighting_assets_list"
		>
			Do you have any of the following at this property?</label
		>
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
							bind:group={profileAssets[0].fire_fighting_assets}
							{value}
						/>
						<label for="fire_fighting_assets"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- fire_hazard_reduction -->
<div class="flex flex-col mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="fire_hazard_reduction_list"
		>
			Does your property have?</label
		>
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
							bind:group={profileAssets[0].fire_hazard_reduction}
							{value}
						/>
						<label for="fire_hazard_reduction"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>
</div>
