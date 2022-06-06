<script>
	import { communityMeetingOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	What community meetings would be useful to you?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each communityMeetingOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="community_meeting_choices"
					type="checkbox"
					bind:group={surveyData.community_meeting_choices}
					{value}
				/>
				<label for="community_meeting_choices"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="If there are other events you would be interested in, please add them
			below."
	divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
	nameText="other_community_meeting"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.other_community_meeting}
/>
