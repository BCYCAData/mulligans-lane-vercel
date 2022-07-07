<script>
	import { yesNoOptions, yesNoMaybeOptions } from '$lib/profileOptions';

	import NumberInput from '$components/form/inputs/NumberInput.svelte';

	export let profileAnimals;
</script>

<!-- number_dog number_cats number_birds number_other_pets -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="mt-1 text-lg font-bold mb-1" for="animals_profile"
		>How many pets do you usually have at this property:</label
	>
	<div
		class="flex flex-row justify-around list-none rounded-lg bg-orange-50 p-1 mx-2"
		name="animals_profile"
	>
		<NumberInput
			name="number_dogs"
			lable="Dogs"
			lableClass="tracking-wide text-orange-900 px-2 text-l font-bold mb-1"
			inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
			bind:inputValue={profileAnimals.number_dogs}
		/>
		<NumberInput
			name="number_cats"
			lable="Cats"
			lableClass="tracking-wide text-orange-900 px-2 text-l font-bold mb-1"
			inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
			bind:inputValue={profileAnimals.number_cats}
		/>
		<NumberInput
			name="number_birds"
			lable="Birds"
			lableClass="tracking-wide text-orange-900 px-2 text-l font-bold mb-1"
			inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
			bind:inputValue={profileAnimals.number_birds}
		/>
		<NumberInput
			name="number_other_pets"
			lable="Other"
			lableClass="tracking-wide text-orange-900 px-2 text-l font-bold mb-1"
			inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
			bind:inputValue={profileAnimals.number_other_pets}
		/>
	</div>
</div>

<!-- live_stock_present -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="mt-1 text-lg font-bold mb-1" for="live_stock_present_list">
		Do you have livestock?
	</label>
	<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
		{#each yesNoOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="live_stock_present_list"
			>
				<input
					name="live_stock_present"
					type="radio"
					bind:group={profileAnimals.live_stock_present}
					{value}
				/>
				<label for="live_stock_present"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- live_stock_safe_area -->
<div class:hidden={profileAnimals.live_stock_present != true}>
	<div class="flex flex-row justify-between items-center px-4 mt-2">
		<label class="mt-1 text-lg font-bold mb-1" for="live_stock_safe_area_list">
			Do you have a safe area for stock in the event of a bushfire or flood?
		</label>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1">
			{#each yesNoMaybeOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="live_stock_safe_area_list"
				>
					<input
						name="live_stock_safe_area"
						type="radio"
						bind:group={profileAnimals.live_stock_safe_area}
						{value}
					/>
					<label for="live_stock_safe_area"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>

<!-- share_livestock_safe_area -->
<div class:hidden={profileAnimals.live_stock_safe_area === 'N'}>
	<div class="flex flex-row justify-between items-center px-4 mt-2">
		<label
			class="mt-1 text-lg font-bold mb-1"
			for="share_livestock_safe_area_list"
		>
			Would you let leave their stock in your safe area, for a short time in an
			emergency?
		</label>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoMaybeOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="share_livestock_safe_area_list"
				>
					<input
						name="share_livestock_safe_area"
						type="radio"
						bind:group={profileAnimals.share_livestock_safe_area}
						{value}
					/>
					<label for="share_livestock_safe_area"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>
