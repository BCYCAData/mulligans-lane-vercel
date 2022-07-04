<script>
	import {
		yesNoOptions,
		residencyOptions,
		accessOptions
	} from '$lib/profileOptions';

	import NumberInput from '$components/form/inputs/NumberInput.svelte';

	export let profileMyPlace;

	/**
	 * Need to get the validAddress & searchAddress from the address challenge into a store
	 * and validate this address OR populate the address
	 */
	const validateAddress = (e) => {
		console.log('Validate address:  ', e.currentTarget.value);
	};
</script>

<section class="min-h-full bg-orange-300">
	<!-- Property address -->
	<div class="flex flex-row mt-2 mx-2">
		<div class="flex flex-col basis-7/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="property_address_street">Property address</label
			>
			<input
				type="text"
				name="property_address_street"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Street Address"
				autocomplete="street-address"
				style="text-transform:uppercase sm:text-lg"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={profileMyPlace[0].property_address_street}
			/>
		</div>
		<div class="flex flex-col basis-3/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="property_address_suburb">Suburb</label
			>
			<input
				type="text"
				name="property_address_suburb"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Suburb"
				autocomplete="address-level2"
				style="text-transform:uppercase sm:text-lg"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={profileMyPlace[0].property_address_suburb}
			/>
		</div>
		<div class="flex flex-col basis-2/12 mx-2">
			<label
				class="tracking-wide text-lg font-bold mb-1"
				for="property_address_postcode">Postcode</label
			>
			<input
				type="text"
				name="property_address_postcode"
				class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
				placeholder="Postcode"
				autocomplete="postal-code"
				on:change={(e) => {
					validateAddress(e);
				}}
				bind:value={profileMyPlace[0].property_address_postcode}
			/>
		</div>
	</div>

	<!-- Ownership -->
	<div class="flex flex-row mt-4 mx-2">
		<div class="flex items-center justify-start">
			<label
				class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
				for="owned_list">Do you Own this property?</label
			>
			<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
				{#each yesNoOptions as { value, lable }}
					<li
						class="list-none sm:text-base sm:font-semibold sm:p-1"
						name="owned_list"
					>
						<input
							name="property_rented"
							type="radio"
							bind:group={profileMyPlace[0].property_rented}
							{value}
						/>
						<label for="property_rented"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>
	<div class:hidden={profileMyPlace[0].property_rented === true}>
		<div class="flex flex-row pt-0 mx-2">
			<div class="flex flex-col basis-7/12 mx-2">
				<label
					class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
					for="agent_name"
					>Managing Agent
				</label>
				<input
					type="text"
					name="agent_name"
					class="block border w-full border-orange-700 rounded py-1 sm:text-lg"
					placeholder="Managing Agent name"
					style="text-transform:titlecase sm:text-lg"
					on:change={(e) => {
						validateAddress(e);
					}}
					bind:value={profileMyPlace[0].agent_name}
				/>
			</div>
			<div class="flex flex-col basis-5/12 mx-2">
				<label
					class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
					for="agent_phone">Phone</label
				>
				<input
					type="text"
					name="agent_phone"
					class="block border w-full border-orange-700 rounded py-1 sm:text-lg"
					placeholder="Managing Agent phone"
					autocomplete=""
					style="text-transform:uppercase sm:text-lg"
					on:change={(e) => {
						validateAddress(e);
					}}
					bind:value={profileMyPlace[0].agent_phone}
				/>
			</div>
		</div>
		<!-- {/if} -->
	</div>

	<!-- residency_profile -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="residency_profile_list">Are you:</label
		>
		<div class="flex rounded-lg bg-orange-50 mx-3">
			<div class="list-none sm:text-base sm:font-semibold sm:p-1">
				{#each residencyOptions as { value, lable }}
					<li
						class="justify-start place-items-center"
						name="residency_profile_list"
					>
						<input
							class="m-1"
							name="residency_profile"
							type="radio"
							bind:group={profileMyPlace[0].residency_profile}
							{value}
						/>
						<label for="residency_profile"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>

	<!-- sign_posted -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="sign_posted_list"
		>
			Is your property well sign_posted and numbered clearly from the road?
		</label>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="sign_posted_list"
				>
					<input
						name="sign_posted"
						type="radio"
						bind:group={profileMyPlace[0].sign_posted}
						{value}
					/>
					<label for="sign_posted"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>

	<!-- truck_access -->
	<div class="flex flex-row justify-start items-center mx-2 mt-2">
		<label class="tracking-wide text-lg font-bold mb-1" for="truck_access_list"
			>Is there easy access to property and paddocks?</label
		>
		<div class="flex rounded-lg bg-orange-50 mx-3">
			<div class="list-none sm:text-base sm:font-semibold sm:p-1">
				{#each accessOptions as { value, lable }}
					<li class="justify-start place-items-center" name="truck_access_list">
						{#if lable === 'Other'}
							<input
								class="m-1"
								name="truck_access"
								type="radio"
								bind:group={profileMyPlace[0].truck_access}
								{value}
							/>
						{:else}
							<input
								name="truck_access"
								type="radio"
								bind:group={profileMyPlace[0].truck_access}
								{value}
							/>
						{/if}
						<label for="truck_access"> {lable}</label>
					</li>
				{/each}
			</div>
		</div>
	</div>

	<!-- truck_access_other_information -->
	<div class="flex flex-row justify-start items-center mt-2 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			hidden={profileMyPlace[0].truck_access !== 4}
			for="truck_access_other_information">Other Access Information:</label
		>
		<input
			type="text"
			class="border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"
			id="truck_access_other_information"
			name="truck_access_other_information"
			hidden={profileMyPlace[0].truck_access !== 4}
			bind:value={profileMyPlace[0].truck_access_other_information}
		/>
	</div>

	<!--Occupants -->
	<div class="flex flex-row mt-2 mx-2">
		<div class="flex items-center justify-start">
			<label
				class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
				for="residents_profile"
				>How many people usually live at this property:</label
			>
			<div
				class="flex flex-row justify-between list-none rounded-lg bg-orange-50 p-1 mx-2"
				name="residents_profile"
			>
				<NumberInput
					name="residents0_18"
					lable="0-18 years"
					lableClass="tracking-wide text-orange-900 text-l font-bold mb-1"
					inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
					bind:inputValue={profileMyPlace[0].residents0_18}
				/>
				<NumberInput
					name="residents19_50"
					lable="19-50 years"
					lableClass="tracking-wide text-orange-900 text-l font-bold mb-1"
					inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
					bind:inputValue={profileMyPlace[0].residents19_50}
				/>
				<NumberInput
					name="residents51_70"
					lable="51-70 years"
					lableClass="tracking-wide text-orange-900 text-l font-bold mb-1"
					inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
					bind:inputValue={profileMyPlace[0].residents51_70}
				/>
				<NumberInput
					name="residents71_"
					lable="71 years +"
					lableClass="tracking-wide text-orange-900 text-l font-bold mb-1"
					inputClass="border border-orange-700 w-10 rounded py-1 sm:text-lg"
					bind:inputValue={profileMyPlace[0].residents71_}
				/>
			</div>
		</div>
	</div>

	<!-- vulnerable_residents -->
	<div class="flex flex-row justify-start items-center mt-2 mx-2">
		<label
			class="tracking-wide mr-4 mt-1 text-lg font-bold mb-1"
			for="vulnerable_residents_list"
		>
			Do you consider any person on the property to be vulnerable?
		</label>
		<div class="flex flex-row rounded-lg bg-orange-50 p-1 mx-2">
			{#each yesNoOptions as { value, lable }}
				<li
					class="list-none sm:text-base sm:font-semibold sm:p-1"
					name="vulnerable_residents_list"
				>
					<input
						name="vulnerable_residents"
						type="radio"
						bind:group={profileMyPlace[0].vulnerable_residents}
						{value}
					/>
					<label for="vulnerable_residents"> {lable}</label>
				</li>
			{/each}
		</div>
	</div>
</section>
