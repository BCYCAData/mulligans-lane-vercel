<script>
	import { supabaseClient, supabaseRedirectBase } from '$lib/dbClient';

	let systemError = false;

	async function resetPassword() {
		console.log('Base: ', supabaseRedirectBase);
		const { data, error } = await supabaseClient.auth.api.resetPasswordForEmail(
			'bcycadata@outlook.com',
			{
				redirectTo: `${supabaseRedirectBase}/auth/resetpassword`
			}
		);
		console.log('Data: ', data);
		console.log('Error: ', error);
		if (error) {
			systemError = true;
		}
	}
</script>

<div class="flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto">
	<div
		class="bg-white p-6 ml-1.5 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"
	>
		<form action="/api/auth/resetpassword" method="POST">
			<!-- <form on:submit|preventDefault={resetPassword}> -->
			<h1 class="mb-8 text-3xl text-center">Reset Password</h1>
			<input
				id="email"
				type="email"
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
				name="email"
				required={true}
				placeholder="Email"
				autocomplete="email"
			/>
			{#if systemError}
				<h2 class="mt-5">
					There was a System error trying to check the address.
				</h2>
				<h2>Please check your internet connection and try again later.</h2>
				<div class="mt-3">
					<p>If you would like more information please</p>
					<div class="text-center">
						<a class="no-underline " href="../contact/"> Contact us </a>
					</div>
				</div>
			{:else}
				<button
					type="submit"
					class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
					>Send Password Reset Link</button
				>
			{/if}
		</form>
	</div>
</div>
