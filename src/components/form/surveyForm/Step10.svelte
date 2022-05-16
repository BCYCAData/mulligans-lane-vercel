<script>
	import { communityMeetingOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div>
	<div class="pt-5">
		<h3>What community meetings would be useful to you?</h3>
		<div class="rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each communityMeetingOptions as { value, lable }}
					<li>
						<input name="community_meeting_choices" type="checkbox" {value} />
						<label for="community_meeting_choices"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="If there are other events you would be interested in, please add them
			below."
		divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_community_meeting"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
</div>
