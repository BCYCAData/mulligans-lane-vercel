<script>
	import { PIP } from '$lib/spatialUtils';
	import communityPolygons from '$lib/geojsonData/communities';

	let unchallenged = true;
	let addressValid = false;
	let addressNotFound = false;
	let addressInvalid = false;
	let addressError = false;

	let streetaddress;
	let suburb;

	let validAddress;
	let invalidAddress;
	let community;
	let errorString;

	async function submitForm() {
		invalidAddress = `${streetaddress} ${suburb}`;
		addressValid = false;
		addressNotFound = false;
		addressInvalid = false;
		addressError = false;
		const response = await fetch('/api/data/property', {
			method: 'POST',
			body: JSON.stringify({ streetaddress, suburb })
		});
		console.log(response);
		if (response.status === 400) {
			addressError = true;
			unchallenged = true;
		} else if (response.status === 404) {
			addressNotFound = true;
			unchallenged = true;
		} else {
			let results = await response.json();
			for (let i = 0; i < communityPolygons.features.length; i++) {
				let polygon = communityPolygons.features[i].geometry.coordinates[0];
				let ok = PIP(polygon[0], results.point);
				unchallenged = false;
				if (ok) {
					addressValid = true;
					validAddress = results.address;
					community = communityPolygons.features[i].properties.Community;
				} else {
					addressInvalid = true;
				}
			}
		}
	}
</script>

{#if unchallenged}
	<h2 class=" pt-[15px] text-base text-center">
		Membership is restricted to specific Communities
	</h2>
	<p class="mb-1 text-sm text-center">
		Please enter your Street Address and Suburb to check your qualification
	</p>
	<form on:submit|preventDefault={submitForm}>
		<input
			id="streetaddress"
			type="text"
			class="block border border-orange-700 w-full p-1 rounded mb-1"
			name="streetaddress"
			required
			placeholder="Street Address"
			autocomplete="address-line1"
			bind:value={streetaddress}
		/>
		<div class="flex justify-between">
			<input
				id="suburb"
				type="text"
				class=" border max-w-1/2 border-orange-700 w-30% object-left p-1 rounded mb-1"
				name="suburb"
				required
				placeholder="Suburb"
				autocomplete="address-level2"
				bind:value={suburb}
			/>
			<button
				type="submit"
				class="w-24 m-4 text-center py-1 rounded-full  cursor-pointer bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Check</button
			>
		</div>
	</form>
{/if}
{#if addressInvalid}
	<h2 class=" pt-[15px] text-base text-center">
		{invalidAddress}
	</h2>
	<h2 class=" pt-[15px] text-base text-center">
		is not part of any of the targeted communities.
	</h2>

	<div class="text-grey-dark mt-3">
		If you would like more information please
		<a class="no-underline border-b border-blue text-blue" href="../contact/">
			Contact us
		</a>.
	</div>
{/if}
{#if addressNotFound}
	<h2 class=" pt-[15px] text-base text-center">The address you entered:</h2>
	<h2 class=" pt-[15px] text-base text-center">
		{invalidAddress}
	</h2>
	<h2 class=" pt-[15px] text-base text-center">could not be found...</h2>

	<div class="text-grey-dark mt-3">
		If you would like more information please
		<a class="no-underline border-b border-blue text-blue" href="../contact/">
			Contact us
		</a>.
	</div>
{/if}
{#if addressError}
	<h2 class=" pt-[15px] text-base text-center">
		There was a System error trying to check the address
	</h2>
	<div class="text-grey-dark mt-3">
		If you would like more information please
		<a class="no-underline border-b border-blue text-blue" href="../contact/">
			Contact us
		</a>.
	</div>
{/if}
{#if addressValid}
	<h2 class=" pt-[15px] text-base text-center">
		{validAddress}
	</h2>
	<h2 class=" pt-[15px] text-base text-center">is part of the</h2>
	<h2 class=" pt-[15px] text-base text-center">
		{community}
	</h2>
	<h2 class=" pt-[15px] text-base text-center">community.</h2>
	<div class="bg-white mt-5 px-6 py-1 rounded shadow-md text-black w-full">
		<form action="/api/auth/signup" method="post">
			<h1 class="mb-1 text-xl text-center">Sign up</h1>
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-1 rounded mb-1"
				name="email"
				required
				placeholder="Email"
				autocomplete="email"
			/>
			<input
				id="password"
				type="password"
				class="block border border-orange-700 w-full p-1 rounded mb-1"
				name="password"
				required
				placeholder="Password"
			/>
			<input
				id="confirmpassword"
				type="password"
				class="block border border-orange-700 w-full p-1 rounded mb-1"
				name="confirmpassword"
				required
				placeholder="Confirm Password"
			/>
			<button
				type="submit"
				class="w-full text-center py-1 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Create Account</button
			>
		</form>
		<div class="text-center text-sm text-grey-dark mt-1">
			By signing up, you agree to the
			<a
				class="no-underline border-b border-grey-dark text-grey-dark"
				href="/policies/termsofservice"
			>
				Terms of Service
			</a>
			and
			<a
				class="no-underline border-b border-grey-dark text-grey-dark"
				href="/policies/privacy"
			>
				Privacy Policy
			</a>
		</div>
	</div>

	<div class="text-grey-dark mt-3">
		Already have an account?
		<a
			class="no-underline border-b border-blue text-blue"
			href="../auth/signin/"
		>
			Sign in
		</a>.
	</div>
{/if}
