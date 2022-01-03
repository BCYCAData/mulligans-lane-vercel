<script>
	import supabaseConnection from '$lib/dbClient';

	console.log(supabaseConnection);

	async function updateProfile() {
		const { user, error } = await supabaseConnection.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
		let p = 'p';
	}
</script>

<div class="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-3 py-4 rounded shadow-md text-gray-900 w-full leading-tight ">
		<h1 class="mb-2 text-3xl text-center">Your Profile</h1>
		<form on:submit|preventDefault={updateProfile}>
			<h2 class="text-2xl mb-3 border-b border-gray-600">Personal Info</h2>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="fullname">Full name:</label
			>
			<input
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				type="text"
				id="fullname"
				name="fullname"
				placeholder="Your Full Name"
			/>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="homeaddress">Residential address:</label
			>
			<input
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				type="text"
				id="homeaddress"
				name="homeaddress"
				placeholder="Where you live"
			/>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="mailaddress">Contact address:</label
			>
			<input
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				type="text"
				id="mailaddress"
				name="mailaddress"
				placeholder="Mail address"
			/>
			<div class="inline-block">
				<label class=" uppercase tracking-wide text-orange-500 text-xs font-bold mb-1" for="mobile"
					>Mobile phone:</label
				>
				<input
					class=" border border-orange-700 p-3 rounded mb-4"
					type="tel"
					id="mobile"
					name="mobile"
					placeholder="0XXX XXX XXX"
				/>
				<label class=" uppercase tracking-wide text-orange-500 text-xs font-bold mb-1" for="phone"
					>Landline:</label
				>
				<input
					class=" border border-orange-700 p-3 rounded mb-4"
					type="phone"
					id="phone"
					name="phone"
					placeholder="(XX) XXXX XXXX"
				/>
			</div>
			<h2 class="text-2xl mb-3 border-b border-gray-600">Account Details</h2>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="username">Username:</label
			>
			<input
				id="username"
				type="text"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="username"
				placeholder="User Name"
			/>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="email">Email:</label
			>
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				placeholder="Email"
				autocomplete="email"
			/>
			<label
				class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="password">Password:</label
			>
			<div class="flex justify-items-start">
				<input
					id="password"
					type="password"
					class="block border border-orange-700 p-3 rounded mb-4"
					name="password"
					placeholder="Hidden"
					readonly
				/>
				<div class="flex justify-between ml-4 mt-4 mb-3">
					<a href="../auth/resetpassword" class="text-sm text-gray-700 hover:underline">
						Reset Password?
					</a>
				</div>
			</div>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Save Changes</button
			>
		</form>
	</div>
</div>
