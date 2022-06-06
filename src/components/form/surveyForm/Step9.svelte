<script>
	import { informationSheetOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	What information sheets would be useful to you?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each informationSheetOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="information_sheet_choices"
					type="checkbox"
					bind:group={surveyData.information_sheet_choices}
					{value}
				/>
				<label for="information_sheet_choices"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>

<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="Are there other information sheets that you would find useful?"
	divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
	nameText="other_information_sheet"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.other_information_sheet}
/>
