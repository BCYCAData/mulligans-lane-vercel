<script>
	import { informationSheetOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div>
	<div class="pt-5">
		<h3>What information sheets would be useful to you?</h3>
		<div class="rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each informationSheetOptions as { value, lable }}
					<li>
						<input name="information_sheet_choices" type="checkbox" {value} />
						<label for="information_sheet_choices"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="Are there other information sheets that you would find useful?"
		divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_information_sheet"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
</div>
