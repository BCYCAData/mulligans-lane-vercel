<script>
	import { communityMeetingOptions } from '$lib/profileOptions';
	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileMeetings;
</script>

<!-- community_meeting_choices -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label
		class="mt-1 text-lg font-bold mb-1"
		for="community_meeting_choices_list"
		>What community meetings would be useful to you?</label
	>
	<div class="flex flex-col rounded-lg bg-orange-50 p-1">
		{#each communityMeetingOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="community_meeting_choices_list"
			>
				<input
					name="community_meeting_choices"
					type="checkbox"
					bind:group={profileMeetings.community_meeting_choices}
					{value}
				/>
				<label for="community_meeting_choices"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- other_community_meeting -->
<TextAreaInput
	lableClass="font-bold pl-4 pt-4 text-base sm:text-lg"
	headingText="If there are other events you would be interested in, please add them
			below."
	divClass="px-4 rounded-lg bg-orange-300 sm:text-lg"
	nameText="other_community_meeting"
	textAreaClass="w-full resize-y sm:text-lg"
	bind:inputValue={profileMeetings.other_community_meeting}
/>
