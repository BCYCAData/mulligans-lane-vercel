<script>
	import { informationSheetOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>What information sheets would be useful to you?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each informationSheetOptions as { value, lable }}
				<li>
					<input name="information_sheet_choices" type="checkbox" {value} />
					<label for="information_sheet_choices"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="Are there other information sheets that you would find useful?"
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_information_sheet"
		textAreaClass="w-full resize-y"
	/>
</div>
