<script>
	import {
		siteHazardsOptions,
		fireHazardReductionOptions,
		yesNoMaybeOptions
	} from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>Do you have any of the following on your property?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each siteHazardsOptions as { value, lable }}
				<li>
					<input name="site_hazards" type="checkbox" {value} />
					<label for="site_hazards"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="Are there any other hazards on the property that should be noted?"
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_site_hazards"
		textAreaClass="w-full resize-y"
	/>
	<div>
		<h3>Does your property have?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each fireHazardReductionOptions as { value, lable }}
				<li>
					<input name="fire_hazard_reduction" type="checkbox" {value} />
					<label for="fire_hazard_reduction"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Does any adjoining land represent a hazard?</h3>
		<div class="py-1 px-1 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoMaybeOptions as { value, lable }}
					<li class="flex-auto">
						<input name="land_adjacent_hazard" type="radio" {value} />
						<label for="land_adjacent_hazard"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="Are there other areas that concern you or represent a potential threat?"
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_hazards"
		textAreaClass="w-full resize-y"
	/>
</div>
