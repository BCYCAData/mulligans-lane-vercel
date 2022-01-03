<script>
	import { get } from 'svelte/store';

	let submitting;

	// const signIn = async () => {};

	async function signIn(e) {
		const { response } = await fetch('/api/auth/signin.js', {
			method: 'post',
			body: new FormData(e.target)
		});
	}
</script>

<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<h1 class="mb-8 text-3xl text-center">Welcome Back</h1>
		<!-- <form on:submit|preventDefault={signIn}> -->
		<form action="/api/auth/signin" method="POST">
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required="true"
				placeholder="Email"
				autocomplete="email"
			/>
			<input
				id="password"
				type="password"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="password"
				required="true"
				placeholder="Password"
			/>
			<div class="flex justify-between mt-4 mb-3">
				<a
					href="../auth/resetpassword"
					class="text-sm text-gray-600 dark:text-gray-400 hover:underline"
				>
					Forgot Your Password?
				</a>
			</div>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Sign In</button
			>
		</form>
	</div>
	<div class="text-grey-dark mt-6">
		Not registered?
		<a class="no-underline border-b border-blue text-blue" href="../auth/signup">
			Create an account
		</a>
	</div>
</div>
