<script>
	import { stayInTouchOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div>
	<div class="pt-5">
		<h3>How would you prefer to stay in touch?</h3>
		<div class="rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each stayInTouchOptions as { value, lable }}
					<li>
						<input name="stay_in_touch_choices" type="checkbox" {value} />
						<label for="stay_in_touch_choices"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="Do you have any other comments that you would like to add?"
		divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_comments"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
</div>
