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

<div>
	<div class="py-5">
		<h3>What is your property address?</h3>
		<div class="p-2 rounded-lg bg-orange-300">
			<input
				type="text"
				id="property_address"
				name="property_address"
				class="block border w-full border-orange-700 rounded sm:text-xl"
				placeholder="Property Address"
				autocomplete="street-address"
				style="text-transform:uppercase sm:text-xl"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={surveyData.property_address}
			/>
		</div>
	</div>
	<div>
		<h3>Are you:</h3>
		<ul class="list-none p-3 rounded-lg bg-orange-300  sm:text-xl">
			{#each residencyOptions as { value, lable }}
				<li>
					<input
						name="residency_profile"
						type="radio"
						bind:group={surveyData.residency_profile}
						class="m-1"
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
		<ul
			class="list-none  p-3 flex justify-start rounded-lg bg-orange-300  sm:text-xl"
		>
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
		</ul>
	</div>
	<div>
		<h3>Is there easy access to property and paddocks?</h3>
		<ul class="list-none p-3 rounded-lg bg-orange-300  sm:text-xl">
			{#each accessOptions as { value, lable }}
				{#if lable === 'Other'}
					<li class="justify-start place-items-center">
						<input
							on:change={(e) => {
								otherAccessChecked = true;
							}}
							class="m-1"
							name="truck_access"
							type="radio"
							{value}
						/>
						<label class="flex-none px-1" for="truck_access"> {lable}</label>

						<input
							type="text"
							class="flex-1 border w-auto border-orange-700 rounded mb-1"
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

<style>
	ul {
		margin-block-start: 10px;
		margin-block-end: 10px;
		padding-inline-start: 20px;
	}
</style>
