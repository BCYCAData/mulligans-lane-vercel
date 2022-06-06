<script>
	import {
		siteHazardsOptions,
		fireHazardReductionOptions,
		yesNoMaybeOptions
	} from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	Do you have any of the following on your property?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each siteHazardsOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input name="site_hazards" type="checkbox" {value} />
				<label for="site_hazards"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="Are there any other hazards on the property that should be noted?"
	divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
	nameText="other_site_hazards"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.other_site_hazards}
/>
<h3 class="text-base sm:text-xl">Does your property have?</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each fireHazardReductionOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="fire_hazard_reduction"
					type="checkbox"
					bind:group={surveyData.fire_hazard_reduction}
					{value}
				/>
				<label for="fire_hazard_reduction"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<h3 class="text-base sm:text-xl">
	Does any adjoining land represent a hazard?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	{#each yesNoMaybeOptions as { value, lable }}
		<li class="list-none sm:text-xl pr-3">
			<input
				name="land_adjacent_hazard"
				type="radio"
				bind:group={surveyData.land_adjacent_hazard}
				{value}
			/>
			<label for="land_adjacent_hazard"> {lable}</label>
		</li>
	{/each}
</div>
<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="Are there other areas that concern you or represent a potential threat?"
	divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
	nameText="other_hazards"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.other_hazards}
/>
