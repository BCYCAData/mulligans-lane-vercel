<script context="module">
	let showFooter = true;
</script>

<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { page, session } from '$app/stores';
	import { supabaseClient } from '$lib/dbClient';
	import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
	import Navbar from '$components/header/navbar/Navbar.svelte';

	import '../app.css';
	import 'uno.css';

	// const onUserUpdate = null;
	const onUserUpdate = async (user) => {
		if (user) {
			console.log($page.url.pathname);
			if ($page.url.pathname.endsWith('/auth/updateuser')) {
				if (!$page.url.pathname.startsWith('/auth/updateuser')) {
					await goto('/auth/updateuser');
					location.reload();
				}
			} else if (!$page.url.pathname.startsWith('/profile')) {
				await goto('/profile');
				location.reload();
			}
		}
	};
</script>

<SupaAuthHelper {supabaseClient} {session} {onUserUpdate}>
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
						class:active={$page.url.pathname.endsWith('/policies/termsofservice')}
						sveltekit:prefetch
						href="/policies/termsofservice"
					>
						Terms of Service
					</a>
					<h3>Building a safer connected community</h3>
					<a
						class:active={$page.url.pathname.endsWith('/policies/privacy')}
						sveltekit:prefetch
						href="/policies/privacy"
					>
						Privacy Policy
					</a>
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
