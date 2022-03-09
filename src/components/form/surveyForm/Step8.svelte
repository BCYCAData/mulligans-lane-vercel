<script>
	import { communityWorkshopOptions } from '$lib/surveyOptions';
	import TextAreaInput from '../inputs/TextAreaInput.svelte';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>
			Which of these community initiated workshops would be useful to you?
		</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each communityWorkshopOptions as { value, lable }}
				<li>
					<input name="community_workshop_choices" type="checkbox" {value} />
					<label for="community_workshop_choices"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<TextAreaInput
		headingText="If there are other workshops that you would like to see run, please add
			the details here"
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="other_community_workshop"
		textAreaClass="w-full resize-y"
	/>
	<TextAreaInput
		headingText="If you would like to help run any of the workshops, please indicate which
			ones below."
		divClass="py-2 px-2 rounded-lg bg-[#FDBA74]"
		nameText="will_run_community_workshops"
		textAreaClass="w-full resize-y"
	/>
</div>
