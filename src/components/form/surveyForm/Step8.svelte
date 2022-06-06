<script>
	import { communityWorkshopOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	Which of these community initiated workshops would be useful to you?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each communityWorkshopOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="community_workshop_choices"
					type="checkbox"
					bind:group={surveyData.community_workshop_choices}
					{value}
				/>
				<label for="community_workshop_choices"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="If there are other workshops that you would like to see run, please add
			the details here"
	divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
	nameText="other_community_workshop"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.other_community_workshop}
/>
<TextAreaInput
	lableClass="font-bold text-base sm:text-xl"
	headingText="If you would like to help run any of the workshops, please indicate which
			ones below."
	divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
	nameText="will_run_community_workshops"
	textAreaClass="w-full resize-y sm:text-xl"
	bind:inputValue={surveyData.will_run_community_workshops}
/>
