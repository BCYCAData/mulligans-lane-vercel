<script>
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import AuthErrorMessage from '$components/form/AuthErrorMessage.svelte';

	import Modal from '$components/Modal.svelte';
	import AddressChallenge from '$components/form/addressChallenge/AddressChallenge.svelte';

	let modalVisible = false;

	if (browser) {
		if ($session['user'] === 'guest' || $session['user'] === '') {
			$session['signInError'] = 'none';
		}
	}
	// import { db } from '$lib/dbClient';

	// async function handleSubmit(e) {
	// 	const formData = new FormData(e.target);
	// 	const { user, error } = await db.auth.signIn({
	// 		email: formData.get('email'),
	// 		password: formData.get('password')
	// 	});
	// }
</script>

<div
	class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
>
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<h1 class="mb-8 text-3xl text-center">Welcome Back</h1>
		<form action="/api/auth/signin" method="POST">
			<!-- <form on:submit|preventDefault={handleSubmit}> -->
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required={true}
				placeholder="Email"
				autocomplete="email"
			/>
			<input
				id="password"
				type="password"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="password"
				required={true}
				placeholder="Password"
			/>
			<div class="flex justify-between mt-4 mb-3">
				<a
					href="/auth/requestresetpassword"
					class="text-sm text-gray-600 dark:text-gray-400 hover:underline"
				>
					Forgot Your Password?
				</a>
			</div>
			{#if $session['signInError'] !== 'none' && $session['signInError'] !== ''}
				<AuthErrorMessage message={$session['signInError']} />
			{/if}

			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Sign In</button
			>
		</form>
		{#if modalVisible}
			<Modal on:exit={() => (modalVisible = !modalVisible)}>
				<AddressChallenge />
			</Modal>
		{/if}
	</div>
	<div class="text-grey-dark mt-6">
		Not registered?
		<button
			class="text-center py-0 px-5 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
			on:click={() => (modalVisible = !modalVisible)}
		>
			Create an account
		</button>
	</div>
	<!-- <div class="text-grey-dark mt-6">
		Not registered?
		<a
			class="no-underline border-b border-blue text-blue"
			href="../auth/signup"
		>
			Create an account
		</a>
	</div> -->
</div>
