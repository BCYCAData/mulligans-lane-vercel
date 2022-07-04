<script>
	import { siteHazardsOptions, yesNoMaybeOptions } from '$lib/profileOptions';

	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileHazards;
</script>

<!-- site_hazards_list -->
<div class="flex flex-col mx-2">
	<div class="flex flex-row justify-start items-center mt-3 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			for="site_hazards_list"
		>
			Do you have any of the following on your property?</label
		>
		<div class="flex rounded-lg bg-orange-50 mx-3">
			<div
				class="tracking-wide text-lg font-bold mb-1"
				name="site_hazards_list"
			>
				{#each siteHazardsOptions as { value, lable }}
					<li
						class="list-none sm:text-base sm:font-semibold sm:p-1"
						name="site_hazards_list"
					>
						<input
							name="site_hazards"
							type="checkbox"
							bind:group={profileHazards[0].site_hazards}
							{value}
						/>
						<label for="site_hazards"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>

	<!-- other_site_hazards -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<TextAreaInput
			lableClass="tracking-wide text-lg font-bold mb-1"
			headingText="Are there any other hazards on the property that should be noted?"
			divClass="rounded-lg bg-orange-300 sm:text-lg"
			nameText="other_site_hazards"
			textAreaClass="w-full resize-y sm:text-lg"
			bind:inputValue={profileHazards[0].other_site_hazards}
		/>
	</div>

	<!-- land_adjacent_hazard -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<label
			class="tracking-wide text-lg font-bold mb-1"
			for="land_adjacent_hazard_list"
		>
			Does any adjoining land represent a hazard?</label
		>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoMaybeOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="land_adjacent_hazard_list"
				>
					<input
						name="land_adjacent_hazard"
						type="radio"
						bind:group={profileHazards[0].land_adjacent_hazard}
						{value}
					/>
					<label for="land_adjacent_hazard"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>

	<!-- other_hazards -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<TextAreaInput
			lableClass="tracking-wide text-lg font-bold mb-1"
			headingText="Are there other areas that concern you or represent a potential threat?"
			divClass="rounded-lg bg-orange-300 sm:text-lg"
			nameText="other_hazards"
			textAreaClass="w-full resize-y sm:text-lg"
			bind:inputValue={profileHazards[0].other_hazards}
		/>
	</div>
</div>
