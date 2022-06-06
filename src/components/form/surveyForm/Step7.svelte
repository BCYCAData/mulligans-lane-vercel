<script>
	import {
		yesNoSendOptions,
		fireFightingExperienceOptions,
		yesNoOptions,
		stayGoOptions
	} from '$lib/surveyOptions';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">
	Have you completed a RFS Bushfire survival plan?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	{#each yesNoSendOptions as { value, lable }}
		<li class="list-none sm:text-xl pr-3">
			<input
				name="rfs_survival_plan"
				type="radio"
				bind:group={surveyData.rfs_survival_plan}
				{value}
			/>
			<label for="rfs_survival_plan"> {lable}</label>
		</li>
	{/each}
</div>
<h3 class="text-base sm:text-xl">
	What is your level of firefighting experience?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each fireFightingExperienceOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="fire_fighting_experience"
					type="radio"
					bind:group={surveyData.fire_fighting_experience}
					{value}
				/>
				<label for="fire_fighting_experience"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<h3 class="text-base sm:text-xl">
	Have you had unpleasant traumatic experience of bushfire?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	{#each yesNoOptions as { value, lable }}
		<li class="list-none sm:text-xl pr-3">
			<input
				name="fire_trauma"
				type="radio"
				bind:group={surveyData.fire_trauma}
				{value}
			/>
			<label for="fire_trauma"> {lable}</label>
		</li>
	{/each}
</div>
<h3 class="text-base sm:text-xl">
	If your property is threatened by fire, are you:
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each stayGoOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="plan_to_leave_before_fire"
					type="radio"
					bind:group={surveyData.plan_to_leave_before_fire}
					{value}
				/>
				<label for="plan_to_leave_before_fire"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
<h3 class="text-base sm:text-xl">
	If your property is threatened by flood, are you:
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each stayGoOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="plan_to_leave_before_flood"
					type="radio"
					bind:group={surveyData.plan_to_leave_before_flood}
					{value}
				/>
				<label for="plan_to_leave_before_flood"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>
