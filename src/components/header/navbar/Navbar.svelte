<script>
	import Logo from '$components/header/logo/Logo.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { session } from '$app/stores';

	let menuOpen = true;

	const handleNav = () => {
		menuOpen = !menuOpen;
	};
</script>

<nav
	class="container h-15 flex justify-around items-center mx-auto bg-orange-300"
>
	<!-- <div
		class="container h-15 mx-1 lg:mx-50 flex justify-around items-center mx-auto"
	> -->
	<Logo />
	<!-- <div class="inline-flex"> -->
	<!-- Primary Navbar items -->
	<div class="flex ml-[89px] items-center">
		<div class="hidden md:block">
			<a
				class:active={$page.url.pathname.endsWith('/')}
				sveltekit:prefetch
				href="{base}/"
				><button
					class="py-2 px-2 font-semibold text-white bg-orange-500 rounded-xl"
					>Home</button
				></a
			>
			<a
				class:active={$page.url.pathname.endsWith('/about')}
				sveltekit:prefetch
				href="{base}/about"
				><button
					class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
					>About</button
				></a
			>
			<a
				class:active={$page.url.pathname.endsWith('/contact')}
				sveltekit:prefetch
				href="{base}/contact"
				><button
					class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
					>Contact Us</button
				></a
			>
		</div>
	</div>
	<!-- </div> -->

	<!-- Secondary Navbar items -->
	<div class="hidden md:flex items-center">
		{#if $session['authenticated']}
			<form action="/api/auth/signout" method="post">
				<!-- <form on:submit|preventDefault={handleSubmit}> -->
				<button
					class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
					>Sign Out</button
				>
			</form>
			<!-- <a
					class:active={$page.url.pathname.endsWith('/signin')}
					sveltekit:prefetch
					href="{base}/auth/signout"
					class="py-0 px-2 font-semibold text-white bg-orange-500 rounded-xl"
					>Sign Out</a
				> -->
		{:else}
			<a
				class:active={$page.url.pathname.endsWith('/signin')}
				sveltekit:prefetch
				href="{base}/auth/signin"
				><button
					class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
					>Sign In</button
				></a
			>
		{/if}
	</div>
	<div
		class="text-sm pl-3 mb-4 mt-6 bg-orange-300 text-center z-50 font-extrabold text-orange-500 md:hidden"
	>
		Strengthening Our Community
	</div>
	<!-- Mobile menu button -->
	<div class="md:hidden flex items-center">
		<button
			class="outline-none bg-transparent mobile-menu-button"
			on:click={handleNav}
		>
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
	<!-- </div> -->

	<!-- Mobile menu -->
	<div
		class="bg-orange-300 absolute w-full mobile-menu"
		class:hidden={menuOpen}
	>
		<ul class="space-y-2 list-none">
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/')}
					sveltekit:prefetch
					href="{base}/"
					><button
						class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
						>Home</button
					></a
				>
			</li>
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/about')}
					sveltekit:prefetch
					href="{base}/about"
					><button
						class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
						>About</button
					></a
				>
			</li>
			<li>
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/contact')}
					sveltekit:prefetch
					href="{base}/contact"
					><button
						class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
						>Contact Us</button
					></a
				>
			</li>
			<li>
				{#if $session['authenticated']}
					<form action="/api/auth/signout" method="post">
						<!-- <form on:submit|preventDefault={handleSubmit}> -->
						<button
							class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
							>Sign Out</button
						>
					</form>
				{:else}
					<a
						class:active={$page.url.pathname.endsWith('/signin')}
						sveltekit:prefetch
						href="{base}/auth/signin"
						><button
							class="py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"
							>Sign In</button
						></a
					>
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
