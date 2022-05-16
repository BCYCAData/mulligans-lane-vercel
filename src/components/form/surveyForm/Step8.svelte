<script>
	import { communityWorkshopOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div>
	<div class="pt-5">
		<h3>
			Which of these community initiated workshops would be useful to you?
		</h3>
		<div class="rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each communityWorkshopOptions as { value, lable }}
					<li>
						<input name="community_workshop_choices" type="checkbox" {value} />
						<label for="community_workshop_choices"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<TextAreaInput
		headingText="If there are other workshops that you would like to see run, please add
			the details here"
		divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
		nameText="other_community_workshop"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
	<TextAreaInput
		headingText="If you would like to help run any of the workshops, please indicate which
			ones below."
		divClass="p-3 rounded-lg bg-orange-300 sm:text-xl"
		nameText="will_run_community_workshops"
		textAreaClass="w-full resize-y sm:text-xl"
	/>
</div>
