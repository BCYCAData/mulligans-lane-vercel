<script>
	import { informationSheetOptions } from '$lib/profileOptions';
	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileInformation;
</script>

<!-- information_sheet_choices -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label
		class="mt-1 text-orange-900 text-l font-bold mb-1"
		for="information_sheet_choices_list"
		>What information sheets would be useful to you?</label
	>
	<div class="flex flex-col rounded-lg bg-orange-50 p-1">
		{#each informationSheetOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="information_sheet_choices_list"
			>
				<input
					name="information_sheet_choices"
					type="checkbox"
					bind:group={profileInformation.information_sheet_choices}
					{value}
				/>
				<label for="information_sheet_choices"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- other_information_sheet -->
<TextAreaInput
	lableClass="font-bold pl-4 pt-4 text-base sm:text-lg"
	headingText="Are there other information sheets that you would find useful?"
	divClass="px-4 rounded-lg bg-orange-300 sm:text-lg"
	nameText="other_information_sheet"
	textAreaClass="w-full resize-y sm:text-lg"
	bind:inputValue={profileInformation.other_information_sheet}
/>
