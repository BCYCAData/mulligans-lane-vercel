<script>
	import { surveyData, yesNoOptions } from '$lib/surveyOptions';
	import { formatMobile, formatPhone } from '$lib/utils';
	import NumberInput from '$components/form/inputs/NumberInput.svelte';

	let mobileNumber = '';
	let phoneNumber = '';
</script>

<div>
	<div class="py-5">
		<h3>What is your phone number?</h3>
		<div class="p-2 rounded-lg bg-orange-300">
			<input
				type="tel"
				id="mobile"
				name="mobile"
				class="flex-none w-1/4 border border-orange-700 min-w-[145px] rounded sm:text-xl"
				placeholder="Mobile 0XXX XXX XXX"
				on:keydown={(e) => {
					if (['Backspace', 'Delete'].includes(e.key)) {
						surveyData.mobile = e.currentTarget.value;
					} else {
						e.preventDefault();
						surveyData.mobile = e.currentTarget.value;
						if (
							['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)
						) {
							surveyData.mobile = formatMobile(surveyData.mobile, e.key);
						}
					}
				}}
				bind:value={surveyData.mobile}
			/>
			<input
				type="tel"
				id="phone"
				name="phone"
				class="flex-none w-1/4 ml-2 border border-orange-700 min-w-[145px] rounded sm:text-xl"
				placeholder="Landline XXXX XXXX"
				on:keydown={(e) => {
					if (['Backspace', 'Delete'].includes(e.key)) {
						surveyData.phoneNumber = e.currentTarget.value;
					} else {
						e.preventDefault();
						surveyData.phoneNumber = e.currentTarget.value;
						if (
							['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)
						) {
							surveyData.phoneNumber = formatPhone(
								surveyData.phoneNumber,
								e.key
							);
						}
					}
				}}
				bind:value={surveyData.phoneNumber}
				autocomplete="tel-area-code"
			/>
		</div>
	</div>

	<h3>What is the quality of your mobile reception at your property?</h3>
	<div class="p-1 rounded-lg bg-orange-300">
		<ul class="flex justify-center list-none sm:text-xl">
			<div class="flex-auto font-semibold text-sm sm:text-base text-orange-700">
				Poor
			</div>
			{#each Array(5) as _, i}
				<li class="flex-auto">
					<label class="" for="mobile_reception">
						{i + 1}<br />
						<input
							name="mobile_reception"
							type="radio"
							bind:group={surveyData.mobile_reception}
							value={i + 1}
						/>
					</label>
				</li>
			{/each}
			<div class="flex-auto font-semibold text-sm sm:text-base text-orange-700">
				Excellent
			</div>
		</ul>
	</div>
	<h3 class="pt-3">
		Please record the number of people who usually live at this property:
	</h3>
	<div class=" p-1 rounded-lg bg-orange-300">
		<ul class="list-none">
			<NumberInput
				name="residents0_18"
				listClass=""
				lable="0-18 years"
				lableClass="sm:text-xl"
				inputClass="border border-orange-700 w-20 rounded mb-1 ml-5 sm:text-xl"
				bind:value={surveyData.residents0_18}
			/>
			<NumberInput
				name="residents19_50"
				listClass=""
				lable="19-50 years"
				lableClass="sm:text-xl"
				inputClass="border border-orange-700 w-20 rounded mb-1 ml-2 sm:text-xl"
				bind:value={surveyData.residents19_50}
			/>
			<NumberInput
				name="residents51_70"
				listClass=""
				lable="51-70 years"
				lableClass="sm:text-xl"
				inputClass="border border-orange-700 w-20 rounded mb-1 ml-2 sm:text-xl"
				bind:value={surveyData.residents51_70}
			/>
			<NumberInput
				name="residents71_"
				listClass=""
				lable="71 years +"
				lableClass="sm:text-xl"
				inputClass="border border-orange-700 w-20 rounded mb-1 ml-5 sm:text-xl"
				bind:value={surveyData.residents71_}
			/>
		</ul>
	</div>
	<div>
		<h3 class="pt-3">
			Do you consider any person on the property to be vulnerable?
		</h3>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoOptions as { value, lable }}
				<li class="flex-none px-3">
					<input
						name="sign_posted"
						type="radio"
						bind:group={surveyData.sign_posted}
						{value}
					/>
					<label for="sign_posted"> {lable}</label>
				</li>
			{/each}
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
