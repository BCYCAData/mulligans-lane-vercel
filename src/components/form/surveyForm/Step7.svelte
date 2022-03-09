<script>
	import {
		yesNoSendOptions,
		fireFightingExperienceOptions,
		yesNoOptions,
		stayGoOptions
	} from '$lib/surveyOptions';

	let yesNoMaybeOptions = [
		{ value: 'Y', lable: 'Leaving as early as possible' },
		{ value: 'N', lable: 'Planning on staying and defending' },
		{ value: 'M', lable: 'Unsure depending on severity' }
	];
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>Have you completed a RFS Bushfire survival plan?</h3>
		<div class="py-1 px-1 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoSendOptions as { value, lable }}
					<li class="flex-auto">
						<input name="rfs_survival_plan" type="radio" {value} />
						<label for="rfs_survival_plan"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>What is your level of firefighting experience?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each fireFightingExperienceOptions as { value, lable }}
				<li>
					<input name="fire_fighting_experience" type="radio" {value} />
					<label for="fire_fighting_experience"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Have you had unpleasant traumatic experience of bushfire?</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoOptions as { value, lable }}
					<li class="flex-auto">
						<input name="fire_trauma" type="radio" {value} />
						<label for="fire_trauma"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div>
		<h3>If your property is threatened by fire, are you:</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each stayGoOptions as { value, lable }}
				<li>
					<input name="plan_to_leave_before_fire" type="radio" {value} />
					<label for="plan_to_leave_before_fire"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>If your property is threatened by flood, are you:</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each stayGoOptions as { value, lable }}
				<li>
					<input name="plan_to_leave_before_flood" type="radio" {value} />
					<label for="plan_to_leave_before_flood"> {lable}</label>
				</li>
			{/each}
		</ul>
	</div>
</div>
