<script>
	import { formatMobile, formatPhone } from '$lib/utils';
	import {
		yesNoOptions,
		yesNoSendOptions,
		fireFightingExperienceOptions,
		stayGoOptions
	} from '$lib/profileOptions';

	export let profileAboutMe;

	/**
	 * Need to get the validAddress & searchAddress from the address challenge into a store
	 * and validate this address OR populate the address
	 */
	const validateAddress = (e) => {
		// console.log('Validate address: ', e.currentTarget.value);
	};
</script>

<!-- first_name, family_name -->
<div class="flex flex-row mx-2">
	<div class="flex flex-col basis-full mx-2">
		<label class="text-lg font-bold mb-1" for="fullname">First name:</label>
		<input
			type="text"
			name="first_name"
			class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
			placeholder="First Name"
			autocomplete="given-name"
			bind:value={profileAboutMe.first_name}
		/>
	</div>
	<div class="flex flex-col basis-full mx-2">
		<label class="text-lg font-bold mb-1" for="family_name">Family name:</label>
		<input
			type="text"
			name="family_name"
			class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
			placeholder="Family Name"
			autocomplete="family_name"
			style="text-transform:capitalize"
			bind:value={profileAboutMe.family_name}
		/>
	</div>
</div>

<!-- phone-->
<div class="flex flex-row justify-between items-center py-2 mx-2">
	<label class="text-lg font-bold mx-2" for="phone">Landline:</label>
	<input
		type="tel"
		name="phone"
		class="border w-full border-orange-700 rounded py-1  mx-2 sm:text-lg"
		placeholder="Landline XXXX XXXX"
		on:keydown={(e) => {
			if (['Backspace', 'Delete'].includes(e.key)) {
				profileAboutMe.phone = e.currentTarget.value;
			} else {
				e.preventDefault();
				profileAboutMe.phone = e.currentTarget.value;
				if (
					['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)
				) {
					profileAboutMe.phone = formatPhone(profileAboutMe.phone, e.key);
				}
			}
		}}
		bind:value={profileAboutMe.phone}
	/>
	<!--mobile -->
	<label class="text-lg font-bold mx-2" for="mobile">Mobile:</label>
	<input
		type="tel"
		name="mobile"
		class="border w-full border-orange-700 rounded bg-orange-50 py-1 mx-2 sm:text-lg"
		placeholder="Mobile 0XXX XXX XXX"
		on:keydown={(e) => {
			if (['Backspace', 'Delete'].includes(e.key)) {
				profileAboutMe.mobile = e.currentTarget.value;
			} else {
				e.preventDefault();
				profileAboutMe.mobile = e.currentTarget.value;
				if (
					['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)
				) {
					profileAboutMe.mobile = formatMobile(profileAboutMe.mobile, e.key);
				}
			}
		}}
		bind:value={profileAboutMe.mobile}
	/>
	<!-- </div> -->
</div>

<!-- mobile_reception -->
<div class="flex flex-row justify-around items-center mx-2">
	<label class="justify-end text-lg font-bold" for="mobile_reception_list"
		>Mobile Reception:</label
	>
	<div
		class="flex flex-row rounded-lg bg-orange-50"
		style="align-items: center"
	>
		<div class="font-semibold text-sm px-4 sm:text-base text-orange-900">
			Poor
		</div>
		{#each Array(5) as _, i}
			<li
				class="list-none sm:text-base sm:font-semibold sm:px-5"
				name="mobile_reception_list"
			>
				<label class="pl-2" for="mobile_reception">
					{i + 1}<br />
					<input
						name="mobile_reception"
						type="radio"
						bind:group={profileAboutMe.mobile_reception}
						value={i + 1}
					/>
				</label>
			</li>
		{/each}
		<div class="font-semibold text-sm px-4 sm:text-base text-orange-900">
			Excellent
		</div>
	</div>
</div>

<!-- rfs_survival_plan -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="mt-1 text-lg font-bold mb-1" for="rfs_survival_plan_list"
		>Have you made an RFS Bushfire survival plan?</label
	>
	<div class="flex flex-row rounded-lg bg-orange-50 p-1">
		{#each yesNoSendOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="live_stock_safe_area_list"
			>
				<input
					name="rfs_survival_plan"
					type="radio"
					bind:group={profileAboutMe.rfs_survival_plan}
					{value}
				/>
				<label for="rfs_survival_plan"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- fire_fighting_experience -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="mt-1 text-lg font-bold mb-1" for="fire_fighting_experience_list"
		>What is your level of firefighting experience?</label
	>
	<div class="flex flex-col rounded-lg bg-orange-50 p-1">
		{#each fireFightingExperienceOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="fire_fighting_experience_list"
			>
				<input
					name="fire_fighting_experience"
					type="radio"
					bind:group={profileAboutMe.fire_fighting_experience}
					{value}
				/>
				<label for="fire_fighting_experience"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- fire_trauma -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="text-lg font-bold mb-1" for="fire_trauma_list"
		>Have you had unpleasant traumatic experience of bushfire?</label
	>
	<div class="flex flex-row rounded-lg bg-orange-50">
		{#each yesNoOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="fire_trauma_list"
			>
				<label class="pl-2" for="fire_trauma">
					{lable}<input
						name="fire_trauma"
						type="radio"
						bind:group={profileAboutMe.fire_trauma}
						{value}
					/></label
				>
			</li>
		{/each}
	</div>
</div>

<!-- plan_to_leave_before_fire: ''; -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="text-lg font-bold mb-1" for="plan_to_leave_before_fire_list"
		>If your property is threatened by fire, are you:</label
	>
	<div class="flex flex-col rounded-lg bg-orange-50 p-1">
		{#each stayGoOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="plan_to_leave_before_fire_list"
			>
				<input
					name="plan_to_leave_before_fire"
					type="radio"
					bind:group={profileAboutMe.plan_to_leave_before_fire}
					{value}
				/>
				<label for="plan_to_leave_before_fire"> {lable}</label>
			</li>
		{/each}
	</div>
</div>

<!-- plan_to_leave_before_flood -->
<div class="flex flex-row justify-between items-center px-4 mt-2">
	<label class="text-lg font-bold mb-1" for="plan_to_leave_before_flood_list"
		>If your property is threatened by flood, are you:</label
	>
	<div class="flex flex-col rounded-lg bg-orange-50 p-1">
		{#each stayGoOptions as { value, lable }}
			<li
				class="list-none sm:text-base sm:font-semibold sm:p-1"
				name="plan_to_leave_before_flood_list"
			>
				<input
					name="plan_to_leave_before_flood"
					type="radio"
					bind:group={profileAboutMe.plan_to_leave_before_flood}
					{value}
				/>
				<label for="plan_to_leave_before_flood"> {lable}</label>
			</li>
		{/each}
	</div>
</div>
