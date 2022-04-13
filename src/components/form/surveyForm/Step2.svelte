<script>
	import {
		surveyData,
		residencyOptions,
		yesNoOptions,
		accessOptions
	} from '$lib/surveyOptions';

	// export let survey_responses;

	/**
	 * Need to get the validAddress & searchAddress from the address challenge into a store
	 * and validate this address OR populate the address
	 */
	const validateAddress = (e) => {
		console.log('Validate address:  ', e.currentTarget.value);
	};
	let otherAccessChecked = false;
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>What is your property address?</h3>
		<div class="py-2 px-2 p-0 rounded-lg bg-[#FDBA74]">
			<input
				type="text"
				id="property_address"
				name="property_address"
				class="block border w-full max-w-3xl border-orange-700 p-1 rounded"
				placeholder="Property Address"
				autocomplete="street-address"
				style="text-transform:uppercase"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={surveyData.property_address}
			/>
		</div>
	</div>
	<div>
		<h3>Are you:</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each residencyOptions as { value, lable }}
				<li>
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

	<div>
		<h3>
			Is your property well sign_posted and numbered clearly from the road?
		</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoOptions as { value, lable }}
					<li class="flex-auto">
						<input
							name="sign_posted"
							type="radio"
							bind:group={surveyData.sign_posted}
							{value}
						/>
						<label for="sign_posted"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<h3>Is there easy access to property and paddocks?</h3>
		<ul class="py-1 px-2 p-0 rounded-lg bg-[#FDBA74]">
			{#each accessOptions as { value, lable }}
				{#if lable === 'Other'}
					<li class="flex justify-start place-items-center">
						<input
							on:change={(e) => {
								otherAccessChecked = true;
							}}
							name="truck_access"
							type="radio"
							{value}
						/>
						<label class="flex-none px-1" for="truck_access"> {lable}</label>

						<input
							type="text"
							class="flex-1 border w-auto border-orange-700  rounded mb-1"
							id="truck_access_other"
							name="truck_access_other"
							hidden={otherAccessChecked === false}
						/>
					</li>
				{:else}
					<li>
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
</div>
