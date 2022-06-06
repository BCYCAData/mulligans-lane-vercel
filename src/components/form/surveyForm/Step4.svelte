<script>
	import { yesNoMaybeOptions, yesNoOptions } from '$lib/surveyOptions';
	import NumberInput from '$components/form/inputs/NumberInput.svelte';
	let live_stock_present = false;
	let live_stock_safe_area = 'N';
	let share_livestock_safe_area = 'N';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	Please record the number of pets you have on this property
</h3>
<div class="py-2 pr-4 rounded-lg bg-orange-300">
	<ul class="flex pl-0 justify-start list-none sm:text-xl">
		<NumberInput
			name="number_dogs"
			listClass=""
			lable="Dogs"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.number_dogs}
		/>
		<NumberInput
			name="number_cats"
			listClass=""
			lable="Cats"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.number_cats}
		/>
		<NumberInput
			name="number_birds"
			listClass=""
			lable="Birds"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.number_birds}
		/>
		<NumberInput
			name="number_other_pets"
			listClass=""
			lable="Other"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.number_other_pets}
		/>
	</ul>
</div>
<h3 class="text-base sm:text-xl">Do you have livestock?</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	{#each yesNoOptions as { value, lable }}
		<li class="list-none sm:text-xl pr-3">
			<input
				on:change={(e) => {
					live_stock_present = value;
				}}
				name="live_stock_present"
				type="radio"
				bind:group={surveyData.live_stock_present}
				{value}
			/>
			<label for="live_stock_present"> {lable}</label>
		</li>
	{/each}
</div>

{#if live_stock_present === true}
	<h3 class="text-base sm:text-xl">
		Do you have an area which would be safe for stock in the event of a bushfire
		or flood?
	</h3>
	<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
		{#each yesNoMaybeOptions as { value, lable }}
			<li class="list-none sm:text-xl pr-3">
				<input
					on:change={(e) => {
						live_stock_safe_area = value;
					}}
					name="live_stock_safe_area"
					type="radio"
					bind:group={surveyData.live_stock_safe_area}
					{value}
				/>
				<label for="live_stock_safe_area"> {lable}</label>
			</li>
		{/each}
	</div>
	{#if live_stock_present && live_stock_safe_area != 'N'}
		<h3 class="text-base sm:text-xl">
			Would you be happy for other people to leave their stock on your property,
			in your safe area, for a short period in an emergency?
		</h3>
		<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
			{#each yesNoMaybeOptions as { value, lable }}
				<li class="list-none sm:text-xl pr-3">
					<input
						on:change={(e) => {
							share_livestock_safe_area = value;
						}}
						name="share_livestock_safe_area"
						type="radio"
						live_stock_present
						bind:group={surveyData.share_livestock_safe_area}
						{value}
					/>
					<label for="share_livestock_safe_area"> {lable}</label>
				</li>
			{/each}
		</div>
	{/if}
{/if}

<style>
	ul {
		margin-block-start: 10px;
		margin-block-end: 10px;
		padding-inline-start: 20px;
	}
</style>
