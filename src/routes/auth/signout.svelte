<script>
	import { db } from '$lib/dbClient';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	async function onSubmit(e) {
		const { error } = await db.auth.signOut();
		if (error) {
			console.log('Sign Out Error:  ', error.message);
		}
		$session['user'] = 'guest';
		$session['signInError'] = 'none';
		$session['authenticated'] = false;
		$session['authEvent'] = 'SIGNED_OUT';
		goto('/');
	}
</script>

<div
	class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
>
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<h1 class="mb-8 text-3xl text-center">Thankyou for Participating</h1>
		<!-- <form action="/api/auth/signin" method="POST" /> -->
		<form on:submit|preventDefault={onSubmit}>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"
				>Sign Out</button
			>
		</form>
	</div>
</div>
