<script context="module">
	let showFooter = true;
	// supabaseClient.auth.onAuthStateChange(async (event, _session) => {
	// 	console.log('Supabase event: ', event);
	// });
	// let currentURL;
	// export async function load({ url }) {
	// 	// if (
	// 	// 	(url.pathname === '/profile' && session.user === 'guest') ||
	// 	// 	(url.pathname === '/profile' && session.user === '')
	// 	// ) {
	// 	// 	return { redirect: '/', status: 302 };
	// 	// }
	// 	currentURL = url;
	// 	return { props: {} };
	// }
</script>

<script>
	// import { goto, invalidate } from '$app/navigation';
	import { page, session } from '$app/stores';
	import { supabaseClient } from '$lib/dbClient';
	import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
	import Navbar from '$components/header/navbar/Navbar.svelte';
	import '../app.css';
	import 'uno.css';

	const onUserUpdate = async (user) => {
		if (user) {
			// await goto('/testing');
			// if (!$page.url.pathname.endsWith('/testing')) {
			// 	location.reload();
			// }
		}
	};
</script>

<!-- <pre>{currentURL}</pre> -->

<SupaAuthHelper {supabaseClient} {onUserUpdate} {session}>
	<div class="grid w-11/12 mx-auto min-h-screen" id="wrapper">
		<header class="col-span-8 row-span-1">
			<Navbar />
		</header>
		<main class="col-span-8 row-span-22">
			<slot />
		</main>
		{#if showFooter}
			<footer class="col-span-8 row-span-1 sticky bottom-0">
				<div
					class="flex content-center items-center justify-around bg-orange-600 text-light-600 w-full h-[45px]"
				>
					<a
						class:active={$page.url.pathname.endsWith(
							'/policies/termsofservice'
						)}
						sveltekit:prefetch
						href="/policies/termsofservice">Terms of Service</a
					>
					<h3>Building a safer connected community</h3>
					<a
						class:active={$page.url.pathname.endsWith('/policies/privacy')}
						sveltekit:prefetch
						href="/policies/privacy">Privacy Policy</a
					>
				</div>
			</footer>
		{/if}
	</div>
</SupaAuthHelper>

<style>
	#wrapper {
		grid-template-rows: auto 1fr auto;
	}
</style>
