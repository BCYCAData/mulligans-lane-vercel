<script>
	import { residencyOptions, yesNoOptions } from '$lib/surveyOptions';
	import NumberInput from '$components/form/inputs/NumberInput.svelte';

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">Are you:</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each residencyOptions as { value, lable }}
			<li class="sm:text-xl pr-3">
				<input
					name="residency_profile"
					type="radio"
					bind:group={surveyData.residency_profile}
					{value}
				/>
				<label for="residency_profile"> {lable}</label>
			</li>
		{/each}
	</ul>
</div>

<h3 class="text-base sm:text-xl">
	Please record the number of people who usually live at this property:
</h3>
<div class="py-2 pr-4 rounded-lg bg-orange-300">
	<ul class="flex pl-0 justify-start list-none sm:text-xl">
		<NumberInput
			name="residents0_18"
			listClass=""
			lable="0-18 years"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.residents0_18}
		/>
		<NumberInput
			name="residents19_50"
			listClass=""
			lable="19-50 years"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.residents19_50}
		/>
		<NumberInput
			name="residents51_70"
			listClass=""
			lable="51-70 years"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.residents51_70}
		/>
		<NumberInput
			name="residents71_"
			listClass=""
			lable="71 years +"
			lableClass="sm:text-xl"
			inputClass="border border-orange-700 w-20 rounded sm:text-xl"
			bind:value={surveyData.residents71_}
		/>
	</ul>
</div>
<div>
	<h3 class="text-base sm:text-xl">
		Do you consider any person on the property to be vulnerable?
	</h3>
	<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
		{#each yesNoOptions as { value, lable }}
			<li class="list-none sm:text-xl pr-3">
				<input
					name="vulnerable_residents"
					type="radio"
					bind:group={surveyData.vulnerable_residents}
					{value}
				/>
				<label for="vulnerable_residents"> {lable}</label>
			</li>
		{/each}
	</div>
</div>
