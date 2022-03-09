<script>
	import { communityMeetingOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>What community meetings would be useful to you?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each communityMeetingOptions as { value, lable }}
				<li>
					<input name="community_meeting_choices" type="checkbox" {value} />
					<label for="community_meeting_choices"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="If there are other events you would be interested in, please add them
			below."
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_community_meeting"
		textAreaClass="w-full resize-y"
	/>
</div>
