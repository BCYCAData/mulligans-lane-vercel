<script>
	import {
		yesNoSendOptions,
		fireFightingExperienceOptions,
		yesNoOptions,
		stayGoOptions
	} from '$lib/surveyOptions';

	// let yesNoMaybeOptions = [
	// 	{ value: 'Y', lable: 'Leaving as early as possible' },
	// 	{ value: 'N', lable: 'Planning on staying and defending' },
	// 	{ value: 'M', lable: 'Unsure depending on severity' }
	// ];
</script>

<div>
	<div class="pt-5">
		<h3>Have you completed a RFS Bushfire survival plan?</h3>
		<ul
			class="list-none  p-3 justify-start rounded-lg bg-orange-300 sm:text-xl"
		>
			{#each yesNoSendOptions as { value, lable }}
				<li class="flex-none px-3">
					<input name="rfs_survival_plan" type="radio" {value} />
					<label for="rfs_survival_plan"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>What is your level of firefighting experience?</h3>
		<div class="flex rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each fireFightingExperienceOptions as { value, lable }}
					<li>
						<input name="fire_fighting_experience" type="radio" {value} />
						<label for="fire_fighting_experience"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>Have you had unpleasant traumatic experience of bushfire?</h3>
		<ul
			class="list-none  p-3 flex justify-start rounded-lg bg-orange-300 sm:text-xl"
		>
			{#each yesNoOptions as { value, lable }}
				<li class="flex-none px-3">
					<input name="fire_trauma" type="radio" {value} />
					<label for="fire_trauma"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>

	<div>
		<h3>If your property is threatened by fire, are you:</h3>
		<div class="flex rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each stayGoOptions as { value, lable }}
					<li>
						<input name="plan_to_leave_before_fire" type="radio" {value} />
						<label for="plan_to_leave_before_fire"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>If your property is threatened by flood, are you:</h3>
		<div class="flex rounded-lg bg-orange-300">
			<ul class="list-none sm:text-xl">
				{#each stayGoOptions as { value, lable }}
					<li>
						<input name="plan_to_leave_before_flood" type="radio" {value} />
						<label for="plan_to_leave_before_flood"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	ul {
		margin-block-start: 10px;
		margin-block-end: 10px;
		padding-inline-start: 20px;
	}
</style>
