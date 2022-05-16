<script>
	import {
		siteHazardsOptions,
		fireHazardReductionOptions,
		yesNoMaybeOptions
	} from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div>
	<div class="pt-5">
		<h3>Do you have any of the following on your property?</h3>
		<div class="p-2 rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each siteHazardsOptions as { value, lable }}
					<li>
						<input name="site_hazards" type="checkbox" {value} />
						<label for="site_hazards"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="Are there any other hazards on the property that should be noted?"
		divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_site_hazards"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
	<div>
		<h3>Does your property have?</h3>
		<div class="flex rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each fireHazardReductionOptions as { value, lable }}
					<li>
						<input name="fire_hazard_reduction" type="checkbox" {value} />
						<label for="fire_hazard_reduction"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>Does any adjoining land represent a hazard?</h3>
		<ul
			class="list-none p-2 flex justify-start rounded-lg bg-orange-300 sm:text-xl"
		>
			{#each yesNoMaybeOptions as { value, lable }}
				<li class="flex-none px-3">
					<input name="land_adjacent_hazard" type="radio" {value} />
					<label for="land_adjacent_hazard"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="Are there other areas that concern you or represent a potential threat?"
		divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_hazards"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
</div>

<style>
	ul {
		margin-block-start: 10px;
		margin-block-end: 10px;
		padding-inline-start: 20px;
	}
</style>
