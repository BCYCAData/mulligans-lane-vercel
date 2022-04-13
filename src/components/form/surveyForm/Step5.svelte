<script>
	import {
		staticWaterOptions,
		yesNoMaybeOptions,
		fireFightingAssets
	} from '$lib/surveyOptions';

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
	let noneChecked = false;
	let have_stortzChecked = false;
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>Are there any static water supplies on the property?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each staticWaterOptions as { value, lable }}
				{#if value < 5}
					<li>
						<input
							name="static_water_available"
							type="checkbox"
							{value}
							on:change={(e) => {
								setStaticWater(e);
							}}
						/>
						<label for="static_water_available"> {lable}</label>
					</li>
				{:else}
					<li>
						<input
							name="static_water_available"
							type="checkbox"
							{value}
							on:change={(e) => {
								unCheckAllStaticWater(e);
							}}
							checked={noneChecked}
						/>
						<label for="static_water_available"> {lable}</label>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div>
		<h3>Do you have a Stortz fitting attached to a water tank?</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoMaybeOptions as { value, lable }}
					<li class="flex-auto">
						<input
							on:change={(e) => {
								have_stortzChecked = e.currentTarget.value == 'Y';
							}}
							name="have_stortz"
							type="radio"
							{value}
						/>
						<label for="have_stortz"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
		{#if have_stortzChecked}
			<h3>Please include the size</h3>
			<div class="flex justify-center py-2 px-2 rounded-lg bg-[#FDBA74]">
				<label class="flex-auto" for="stortz_size">Size (mm)</label>
				<input
					type="number"
					id="stortz_size"
					name="stortz_size"
					class="flex-auto border border-orange-700 w-half p-1 rounded mb-1"
				/>
			</div>
		{/if}
	</div>
	<div>
		<h3>Do you have any of the following at this property?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each fireFightingAssets as { value, lable }}
				<li>
					<input name="fire_fighting_assets" type="checkbox" {value} />
					<label for="fire_fighting_assets"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
</div>
