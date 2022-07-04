<script>
	import { informationSheetOptions } from '$lib/profileOptions';
	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileInformation;
</script>

<!-- information_sheet_choices -->
<div class="flex flex-row mt-4 mx-4">
	<div class="flex items-center justify-start">
		<label
			class="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			for="information_sheet_choices_list"
			>What information sheets would be useful to you?</label
		>
		<div class="flex flex-col rounded-lg bg-orange-50 p-1 mx-2">
			{#each informationSheetOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="information_sheet_choices_list"
				>
					<input
						name="information_sheet_choices"
						type="checkbox"
						bind:group={profileInformation[0].information_sheet_choices}
						{value}
					/>
					<label for="information_sheet_choices"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>

<!-- other_information_sheet -->
<div class="flex flex-col mt-4 mx-4">
	<div class="flex items-center justify-start">
		<TextAreaInput
			lableClass="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			headingText="Are there other information sheets that you would find useful?"
			divClass="p-2 rounded-lg bg-orange-300 sm:text-lg"
			nameText="other_information_sheet"
			textAreaClass="w-full resize-y sm:text-lg"
			bind:inputValue={profileInformation[0].other_information_sheet}
		/>
	</div>
</div>
