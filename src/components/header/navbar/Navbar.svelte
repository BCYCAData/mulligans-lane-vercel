<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import Logo from '$components/header/logo/Logo.svelte';
	import { supabaseClient } from '$lib/dbClient';
	import { page, session } from '$app/stores';

	let menuOpen = true;

	const handleSubmit = async () => {
		await supabaseClient.auth.signOut();
		await goto('/');
		location.reload();
	};

	const handleNav = () => {
		menuOpen = !menuOpen;
	};
</script>

<nav class="container h-15 flex justify-around items-center mx-auto bg-orange-300">
	<Logo />
	<!-- Primary Navbar items -->
	<div class="flex ml-[89px] items-center">
		<div class="hidden md:block">
			<a class:active={$page.url.pathname.endsWith('/')} sveltekit:prefetch href="/">
				<button class="py-2 px-2 font-semibold text-white bg-orange-500 rounded-xl">Home</button>
			</a>
			<a class:active={$page.url.pathname.endsWith('/about')} sveltekit:prefetch href="/about">
				<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
					About
				</button>
			</a>
			<a class:active={$page.url.pathname.endsWith('/contact')} sveltekit:prefetch href="/contact">
				<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
					Contact Us
				</button>
			</a>
		</div>
	</div>

	<!-- Secondary Navbar items -->
	<div class="hidden md:flex items-center">
		{#if $session.user}
			<button
				on:click={handleSubmit}
				href="/"
				class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl
				outline-black"
			>
				Sign Out
			</button>
		{:else}
			<a
				class:active={$page.url.pathname.endsWith('/signin')}
				sveltekit:prefetch
				href="/auth/signin"
			>
				<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
					Sign In
				</button>
			</a>
		{/if}
	</div>
	<div
		class="text-sm pl-3 mb-4 mt-6 bg-orange-300 text-center z-50 font-extrabold text-orange-500 md:hidden"
	>
		Strengthening Our Community
	</div>
	<!-- Mobile menu button -->
	<div class="md:hidden flex items-center">
		<button class="outline-none bg-transparent mobile-menu-button" on:click={handleNav}>
			<svg
				class=" w-6 h-6 text-orange-500 hover:text-purple-500 "
				x-show="!showMenu"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	<div class="bg-orange-300 absolute w-full mobile-menu" class:hidden={menuOpen}>
		<ul class="space-y-2 list-none">
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/')}
					sveltekit:prefetch
					href="/"
				>
					<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
						Home
					</button>
				</a>
			</li>
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/about')}
					sveltekit:prefetch
					href="/about"
				>
					<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
						About
					</button>
				</a>
			</li>
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/contact')}
					sveltekit:prefetch
					href="/contact"
				>
					<button class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black">
						Contact Us
					</button>
				</a>
			</li>
			<li>
				{#if $session.user}
					<button
						on:click={handleSubmit}
						class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
					>
						Sign Out
					</button>
				{:else}
					<a
						class:active={$page.url.pathname.endsWith('/signin')}
						sveltekit:prefetch
						href="/auth/signin"
					>
						<button
							class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
						>
							Sign In
						</button>
					</a>
				{/if}
			</li>
		</ul>
	</div>
</nav>

<style>
	a.active button {
		background-color: transparent;
		color: rgb(249, 115, 22);
	}
</style>
