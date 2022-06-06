<script>
	import { yesNoOptions, accessOptions } from '$lib/surveyOptions';
	import { formatMobile, formatPhone } from '$lib/utils';

	/**
	 * Need to get the validAddress & searchAddress from the address challenge into a store
	 * and validate this address OR populate the address
	 */
	const validateAddress = (e) => {
		console.log('Validate address:  ', e.currentTarget.value);
	};
	let otherAccessChecked = false;
	let rentingChecked = false;

	export let surveyData;
</script>

<h3 class="mt-9 text-base sm:text-xl">What is your name?</h3>
<div class="p-2 pr-4 rounded-lg bg-orange-300">
	<div class="flex flex-wrap w-full">
		<input
			type="text"
			id="first_name"
			name="first_name"
			class="w-5/12 mt-1 border-2 border-orange-500 rounded sm:text-xl"
			placeholder="First Name"
			autocomplete="given-name"
			style="text-transform:uppercase"
			on:change={(e) => {
				validateAddress(e);
			}}
			bind:value={surveyData.first_name}
		/>
		<input
			type="text"
			id="family_name"
			name="family_name"
			class="w-6/12 ml-2 mt-1 border-2 border-orange-500 rounded sm:text-xl"
			placeholder="Family Name"
			autocomplete="family_name"
			style="text-transform:uppercase"
			on:change={(e) => {
				validateAddress(e);
			}}
			bind:value={surveyData.family_name}
		/>
	</div>
</div>

<h3 class="text-base sm:text-xl">What is your property address?</h3>
<div class="p-2 pr-4 rounded-lg bg-orange-300">
	<input
		type="text"
		id="property_address_street"
		name="property_address_street"
		class="w-full border-2 border-orange-500 rounded sm:text-xl"
		placeholder="Street Address"
		autocomplete="street-address"
		style="text-transform:uppercase"
		on:change={(e) => {
			validateAddress(e);
		}}
		bind:value={surveyData.property_address_street}
	/>
	<div class="flex flex-wrap w-full">
		<input
			type="text"
			id="property_address_suburb"
			name="property_address_suburb"
			class="w-8/12 mt-1 border-2 border-orange-500 rounded sm:text-xl"
			placeholder="Suburb"
			autocomplete="address-level2"
			style="text-transform:uppercase"
			on:change={(e) => {
				validateAddress(e);
			}}
			bind:value={surveyData.property_address_suburb}
		/>
		<input
			type="text"
			id="property_address_postcode"
			name="property_address_postcode"
			class="w-3/12 mt-1 border-2 border-orange-500 rounded sm:text-xl"
			placeholder="Postcode"
			autocomplete="postal-code"
			style="text-transform:uppercase"
			on:change={(e) => {
				validateAddress(e);
			}}
			bind:value={surveyData.property_address_postcode}
		/>
	</div>
</div>

<h3 class="text-base sm:text-xl">Are you renting this property?</h3>
<div class="p-2 pr-4 flex flex-col justify-start rounded-lg bg-orange-300">
	<div class="p-2 pr-4 flex flex-row">
		{#each yesNoOptions as { value, lable }}
			{#if lable === 'Yes'}
				<li class="list-none sm:text-xl pr-3">
					<input
						on:change={(e) => {
							rentingChecked = true;
						}}
						name="property_owned"
						type="radio"
						bind:group={surveyData.property_owned}
						{value}
					/>
					<label for="property_owned"> {lable}</label>
				</li>
			{:else}
				<li class="sm:text-xl pr-3">
					<input
						on:change={(e) => {
							rentingChecked = false;
						}}
						name="property_owned"
						type="radio"
						bind:group={surveyData.property_owned}
						{value}
					/>
					<label for="property_owned"> {lable}</label>
				</li>
			{/if}
		{/each}
	</div>
	<div class="flex flex-row sm:text-xl">
		<label class="p-2" for="agent_name" hidden={rentingChecked === false}
			>Agent Name</label
		>
		<input
			type="text"
			class="border basis-7/12 border-orange-700 rounded mb-1"
			id="agent_name"
			name="agent_name"
			hidden={rentingChecked === false}
			bind:value={surveyData.agent_name}
		/>
		<label class="p-2" for="agent_phone" hidden={rentingChecked === false}
			>Agent Phone</label
		>
		<input
			type="text"
			class="border basis-1/12 border-orange-700 rounded mb-1"
			id="agent_phone"
			name="agent_phone"
			hidden={rentingChecked === false}
			bind:value={surveyData.agent_phone}
		/>
	</div>
</div>
<h3 class="text-base sm:text-xl">
	Is your property well sign-posted and numbered clearly from the road?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	{#each yesNoOptions as { value, lable }}
		<li class="list-none sm:text-xl pr-3">
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
<h3 class="text-base sm:text-xl">
	Is there easy truck access to the property and paddocks?
</h3>
<div class="p-2 pr-4 flex justify-start rounded-lg bg-orange-300">
	<ul class="list-none w-full pl-0">
		{#each accessOptions as { value, lable }}
			{#if lable === 'Other'}
				<li class="sm:text-xl pr-3">
					<div class="flex flex-row ">
						<input
							on:change={(e) => {
								otherAccessChecked = !otherAccessChecked;
							}}
							name="truck_access"
							type="radio"
							bind:group={surveyData.truck_access}
							{value}
						/>
						<label for="truck_access"> {lable}</label>
						<input
							type="text"
							class="border w-full border-orange-700 rounded ml-2 pt-1 sm:text-xl"
							id="other_access_information"
							name="other_access_information"
							hidden={otherAccessChecked === false}
							bind:value={surveyData.other_access_information}
						/>
					</div>
				</li>
			{:else}
				<li class="sm:text-xl pr-3">
					<input
						on:change={(e) => {
							otherAccessChecked = false;
						}}
						name="truck_access"
						type="radio"
						bind:group={surveyData.truck_access}
						{value}
					/>
					<label for="truck_access"> {lable}</label>
				</li>
			{/if}
		{/each}
	</ul>
</div>
<h3 class="text-base sm:text-xl">What is your phone number?</h3>
<div class="p-2 pr-4 rounded-lg bg-orange-300">
	<div class="flex flex-row sm:text-xl">
		<label class="p-2" for="mobile">Mobile</label>
		<input
			type="tel"
			class="border basis-5/12 border-orange-700 rounded mb-1 sm:text-xl"
			id="mobile"
			name="mobile"
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
		<label class="p-2" for="phone">Landline</label>
		<input
			type="tel"
			class="border basis-5/12 border-orange-700 rounded mb-1 sm:text-xl"
			id="phone"
			name="phone"
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
						surveyData.phoneNumber = formatPhone(surveyData.phoneNumber, e.key);
					}
				}
			}}
			bind:value={surveyData.phone}
			autocomplete="tel-area-code"
		/>
	</div>
</div>
<h3 class="text-base sm:text-xl">
	What is the quality of your mobile reception at the property?
</h3>
<div class="p-2 pr-4 rounded-lg bg-orange-300">
	<ul class="flex my-0 items-center list-none sm:text-xl sm:w-1/2 sm:mx-auto">
		<div class="flex-auto font-semibold text-sm sm:text-base text-orange-700">
			Poor
		</div>
		{#each Array(5) as _, i}
			<li class="flex-auto">
				<input
					name="mobile_reception"
					type="radio"
					bind:group={surveyData.mobile_reception}
					value={i + 1}
				/>
				<label class="inline-block" for="mobile_reception">
					{i + 1}
				</label>
			</li>
		{/each}
		<div class="flex-auto font-semibold text-sm sm:text-base text-orange-700">
			Excellent
		</div>
	</ul>
</div>
