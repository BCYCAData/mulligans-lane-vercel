<script>
	// @ts-nocheck

	import { supabaseClient } from '$lib/dbClient';
	import { goto, invalidate } from '$app/navigation';

	async function onSubmit() {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log('Sign Out Error:  ', error.message);
		}
		goto('/');
		invalidate('/');
	}
</script>

<div class="flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto">
	<h1 class="mb-8 text-3xl text-center">Thankyou for Participating</h1>
	<!-- <form action="/api/auth/signin" method="POST" /> -->
	<form on:submit|preventDefault={onSubmit}>
		<button
			type="submit"
			class="min-w-full w-80 text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"
		>
			Sign Out
		</button>
	</form>
</div>
