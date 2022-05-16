<script>
	import { communityWorkshopOptions } from '$lib/profileOptions';
	import TextAreaInput from '$components/form/inputs/TextAreaInput.svelte';

	export let profileWorkshops;
</script>

<!-- community_workshop_choices -->
<div class="flex flex-row mt-4 mx-4">
	<div class="flex items-center justify-start">
		<label
			class="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			for="community_workshop_choices_list"
			>Which of these community initiated workshops would be useful to you?</label
		>
		<div class="flex flex-col rounded-lg bg-orange-50 p-1 mx-2">
			{#each communityWorkshopOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="community_workshop_choices"
				>
					<input
						name="community_workshop_choices"
						type="checkbox"
						bind:group={profileWorkshops[0].community_workshop_choices}
						{value}
					/>
					<label for="community_workshop_choices"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</div>

<!-- other_community_workshop -->
<div class="flex flex-col mt-4 mx-4">
	<div class="flex items-center justify-start">
		<TextAreaInput
			lableClass="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			headingText="If there are other workshops that you would like to see run, please add
			the details here"
			divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
			nameText="other_community_workshop"
			textAreaClass="w-full resize-y sm:text-xl"
			bind:inputValue={profileWorkshops[0].other_community_workshop}
		/>
	</div>
</div>

<!-- will_run_community_workshops -->
<div class="flex flex-col mt-4 mx-4">
	<div class="flex items-center justify-start">
		<TextAreaInput
			lableClass="tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"
			headingText="If you would like to help run any of the workshops, please indicate which
			ones below."
			divClass="p-2 rounded-lg bg-orange-300 sm:text-xl"
			nameText="will_run_community_workshops"
			textAreaClass="w-full resize-y sm:text-xl"
			bind:inputValue={profileWorkshops[0].will_run_community_workshops}
		/>
	</div>
</div>
