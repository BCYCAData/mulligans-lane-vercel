<script context="module">
	export async function load({ url, session }) {
		console.log(session);
		// console.log(url);
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
		// else {
		// 	session.set({ user: { guest: true } });
		// 	await unsetAuthCookie();
		// }
		console.log('Supabase event: ', event);
	});
</script>

<!-- 
<Header /> -->
<div class="flex flex-col h-screen overflow-hidden">
	<header class="w-full">
		<Navbar />
	</header>
	<main class="flex flex-1 overflow-y-scroll">
		<div class="container mx-auto">
			<slot />
		</div>
	</main>
	<footer
		class="flex  justify-center items-center p-2 bg-orange-600 text-light-600 w-full"
	>
		<p>Building a safer connected community</p>
	</footer>
</div>
