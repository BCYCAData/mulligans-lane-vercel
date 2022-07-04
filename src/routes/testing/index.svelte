<!-- <script context="module">
	// import {
	// 	supabaseServerClient,
	// 	withPageAuth
	// } from '@supabase/auth-helpers-sveltekit';

	// export const load =
	// 	async ({ session }) =>
	// 	// withPageAuth(
	// 	// 	{
	// 	// 		redirectTo: '/',
	// 	// 		user: session.user
	// 	// 	}
	// 	// ,
	// 	async () => {
	// 		// 	const { data } = await supabaseServerClient(session.accessToken)
	// 		// 		.from('profile')
	// 		// 		.select('*');
	// 		return { props: { user: session.user } };
	// 	};
	// );
</script> -->
<script>
	import { session } from '$app/stores';
	export let profile;
</script>

// example
{#if !$session.user}
	<h1>I am not logged in</h1>
{:else}
	<h1>Welcome {$session.user.email}</h1>
	<p>I am logged in!</p>
	<pre>{JSON.stringify(profile, null, 2)}</pre>
{/if}
