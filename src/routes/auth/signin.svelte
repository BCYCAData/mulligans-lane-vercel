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
</script>

<div class="container max-w-sm max-w-screen-xsm mx-auto">
	<div
		class="bg-white p-6 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"
	>
		<h1 class="text-2xl text-center">Welcome Back</h1>
		<form action="/api/auth/signin" method="POST">
			<!-- <form on:submit|preventDefault={handleSubmit}> -->
			<input
				id="email"
				type="email"
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
				name="email"
				required={true}
				placeholder="Email"
				autocomplete="email"
			/>
			<input
				id="password"
				type="password"
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
				name="password"
				required={true}
				placeholder="Password"
			/>
			<div class="flex justify-between mt-4 mb-3">
				<a
					href="/auth/requestresetpassword"
					class="text-sm font-semibold text-orange-600 dark:text-gray-400 hover:underline"
				>
					Forgot Your Password? &lt&lt&lt
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
			class="text-center py-1 px-5 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
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
