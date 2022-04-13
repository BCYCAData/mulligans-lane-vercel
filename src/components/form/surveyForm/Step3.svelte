<script>
	import { surveyData, yesNoOptions } from '$lib/surveyOptions';
	import { formatMobile, formatPhone } from '$lib/utils';
	import NumberInput from '$components/form/inputs/NumberInput.svelte';

	let mobileNumber = '';
	let phoneNumber = '';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>What is your phone number?</h3>
		<div class="flex py-2 px-2 rounded-lg bg-[#FDBA74]">
			<input
				type="tel"
				id="mobile"
				name="mobile"
				class="flex-auto mx-1 w-4 border border-orange-700 px-2  py-1 rounded"
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
				class="flex-auto mx-1 w-4 border border-orange-700 px-2  py-1 rounded"
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
	<div>
		<h3>What is the quality of your mobile reception at your property?</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				<div class="flex-auto font-semibold text-sm text-orange-700">Poor</div>
				{#each Array(5) as _, i}
					<li class="flex-auto">
						<input
							name="mobile_reception"
							type="radio"
							bind:group={surveyData.mobile_reception}
							value={i + 1}
						/>
						<label for="mobile_reception"> {i + 1}</label>
					</li>
				{/each}
				<div class="flex-auto font-semibold text-sm text-orange-700">
					Excellent
				</div>
			</ul>
		</div>
	</div>
	<div>
		<h3>
			Please record the number of people who usually live at this property:
		</h3>
		<div class=" py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			<ul class="inline-grid grid-cols-1 gap-4">
				<NumberInput
					name="residents0_18"
					lable="0-18 years"
					bind:value={surveyData.residents0_18}
				/>
				<NumberInput
					name="residents19_50"
					lable="19-50 years"
					bind:value={surveyData.residents19_50}
				/>
				<NumberInput
					name="residents51_70"
					lable="51-70 years"
					bind:value={surveyData.residents51_70}
				/>
				<NumberInput
					name="residents71_"
					lable="71 years +"
					bind:value={surveyData.residents71_}
				/>
			</ul>
		</div>
		<h3>Do you consider any person on the property to be vulnerable ?</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoOptions as { value, lable }}
					<li class="flex-auto">
						<input
							name="vulnerable_residents"
							type="radio"
							bind:group={surveyData.vulnerable_residents}
							{value}
						/>
						<label for="vulnerable_residents"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
