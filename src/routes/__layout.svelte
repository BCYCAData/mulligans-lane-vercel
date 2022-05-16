<script context="module">
	let showFooter = true;
	export async function load({ url, session }) {
		showFooter = true;
		if (url.pathname.includes('/profile')) {
			showFooter = false;
		}

		if (
			(url.pathname === '/profile' && session.user === 'guest') ||
			(url.pathname === '/profile' && session.user === '')
		) {
			return { redirect: '/', status: 302 };
		}
		return { props: {} };
	}
</script>

<script>
	import { db } from '$lib/dbClient';
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import Navbar from '$components/header/navbar/Navbar.svelte';
	import '../app.css';
	import 'uno.css';

	db.auth.onAuthStateChange(async (event, _session) => {
		if (event === 'SIGNED_IN') {
			if (browser) {
				if (($session['user'] = 'guest')) {
					const dbSession = db.auth.session();
					let dbUser = dbSession.user.email.split('@')[0];
					$session['user'] = `${dbUser}`;
					$session['signInError'] = 'none';
					$session['authenticated'] = true;
					$session['authEvent'] = 'SIGNED_OUT';
				}
			}
		}
	});
</script>

<div class="grid w-11/12 mx-auto min-h-screen" id="wrapper">
	<header class="col-span-8 row-span-1">
		<Navbar />
	</header>
	<!-- <aside>Aside</aside> -->
	<main class="col-span-8 row-span-22"><slot /></main>
	{#if showFooter}
		<footer class="col-span-8 row-span-1 sticky bottom-0">
			<div
				class="flex content-center items-center justify-center bg-orange-600 text-light-600 w-full h-[45px]"
			>
				<h3>Building a safer connected community</h3>
			</div>
		</footer>
	{/if}
</div>

<style>
	#wrapper {
		grid-template-rows: auto 1fr auto;
	}
</style>
