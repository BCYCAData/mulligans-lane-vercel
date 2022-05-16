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

<div>
	<div class="pt-5">
		<h3>Are there any static water supplies on the property?</h3>
		<div class="p-1 rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
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
	</div>
	<div>
		<h3>Do you have a Stortz fitting attached to a water tank?</h3>
		<ul
			class="list-none p-2 flex justify-start rounded-lg bg-orange-300 sm:text-xl"
		>
			{#each yesNoMaybeOptions as { value, lable }}
				<li class="flex-none px-3">
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
		{#if have_stortzChecked}
			<h3>Please include the size</h3>
			<div class="flex justify-start p-2 rounded-lg bg-orange-300">
				<label class="flex-none mr-2 sm:text-xl" for="stortz_size"
					>Size (mm)</label
				>
				<input
					type="number"
					id="stortz_size"
					name="stortz_size"
					class="border border-orange-700 w-half rounded sm:text-xl"
				/>
			</div>
		{/if}
	</div>
	<div>
		<h3>Do you have any of the following at this property?</h3>
		<div class="flex rounded-lg bg-orange-300">
			<ul class="list-none rounded-lg bg-orange-300 sm:text-xl">
				{#each fireFightingAssets as { value, lable }}
					<li>
						<input name="fire_fighting_assets" type="checkbox" {value} />
						<label for="fire_fighting_assets"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	ul {
		margin-block-start: 10px;
		margin-block-end: 10px;
		padding-inline-start: 20px;
	}
</style>
