<script>
	import { stayInTouchOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>How would you prefer to stay in touch?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each stayInTouchOptions as { value, lable }}
				<li>
					<input name="stay_in_touch_choices" type="checkbox" {value} />
					<label for="stay_in_touch_choices"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="Do you have any other comments that you would like to add?"
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_comments"
		textAreaClass="w-full resize-y"
	/>
</div>
