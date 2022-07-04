<script>
	import { communityMeetingOptions } from '$lib/profileOptions';
	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileMeetings;
</script>

<!-- community_meeting_choices -->
<div class="flex flex-row mt-4 mx-4">
	<div class="flex items-center justify-start">
		<label
			class="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			for="community_meeting_choices_list"
			>What community meetings would be useful to you?</label
		>
		<div class="flex flex-col rounded-lg bg-orange-50 p-1 mx-2">
			{#each communityMeetingOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="community_meeting_choices_list"
				>
					<input
						name="community_meeting_choices"
						type="checkbox"
						bind:group={profileMeetings[0].community_meeting_choices}
						{value}
					/>
					<label for="community_meeting_choices"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>

<!-- other_community_meeting -->
<div class="flex flex-col mt-4 mx-4">
	<div class="flex items-center justify-start">
		<TextAreaInput
			lableClass="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			headingText="If there are other events you would be interested in, please add them
			below."
			divClass="p-2 rounded-lg bg-orange-300 sm:text-lg"
			nameText="other_community_meeting"
			textAreaClass="w-full resize-y sm:text-lg"
			bind:inputValue={profileMeetings[0].other_community_meeting}
		/>
	</div>
</div>
