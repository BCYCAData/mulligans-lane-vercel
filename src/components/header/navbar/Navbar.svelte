<script>
	import Logo from '$components/header/logo/Logo.svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let menuOpen = true;

	const handleNav = () => {
		menuOpen = !menuOpen;
	};
</script>

<nav class="bg-orange-300">
	<div class="flex justify-between mx-1  lg:mx-50">
		<Logo />
		<div class="inline-flex ">
			<!-- Primary Navbar items -->
			<div class="flex items-center space-x-3">
				<div class="hidden md:block">
					<a
						class:active={$page.url.pathname.endsWith('/')}
						sveltekit:prefetch
						href="{base}/"
						class="py-1 px-2 text-white bg-orange-500 font-semibold rounded-xl">Home</a
					>
					<a
						class:active={$page.url.pathname.endsWith('/about')}
						sveltekit:prefetch
						href="{base}/about"
						class="py-1 px-2 text-white bg-orange-500 font-semibold rounded-xl">About</a
					>
					<a
						class:active={$page.url.pathname.endsWith('/contact')}
						sveltekit:prefetch
						href="{base}/contact"
						class="py-1 px-2 text-white bg-orange-500 font-semibold rounded-xl">Contact Us</a
					>
				</div>
			</div>
		</div>

		<!-- Secondary Navbar items -->
		<div class="hidden md:flex items-center space-x-3">
			<a
				class:active={$page.url.pathname.endsWith('/signin')}
				sveltekit:prefetch
				href="{base}/auth/signin"
				class="py-0 px-2 font-semibold text-white bg-orange-500 rounded-xl">Sign In</a
			>
			<a
				class:active={$page.url.pathname.endsWith('/signup')}
				sveltekit:prefetch
				href="{base}/auth/signup"
				class="py-0 px-2 font-semibold text-white bg-orange-500 rounded-xl">Sign Up</a
			>
		</div>
		<div class="self-center text-sm  font-extrabold text-orange-500 md:hidden">
			Strengthening Our Community
		</div>
		<!-- Mobile menu button -->
		<div class="md:hidden flex items-center">
			<button class="outline-none mobile-menu-button" on:click={handleNav}>
				<svg
					class=" w-6 h-6 text-orange-500 hover:text-green-500 "
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
	</div>

	<!-- Mobile menu -->
	<div class="mobile-menu" class:hidden={menuOpen}>
		<ul>
			<li class="py-4">
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/')}
					sveltekit:prefetch
					href="{base}/"
					class="py-0.5 px-2 font-semibold text-white bg-orange-500 rounded-xl">Home</a
				>
			</li>
			<li class="py-4">
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/about')}
					sveltekit:prefetch
					href="{base}/about"
					class="py-0.5 px-2 font-semibold text-white bg-orange-500 rounded-xl">About</a
				>
			</li>
			<li class="py-4">
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/contact')}
					sveltekit:prefetch
					href="{base}/contact"
					class="py-0.5 px-2 font-semibold text-white bg-orange-500 rounded-xl">Contact Us</a
				>
			</li>
			<li class="py-4">
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/signin')}
					sveltekit:prefetch
					href="{base}/auth/signin"
					class="py-0.5 px-2 font-semibold text-white bg-orange-500 rounded-xl">Sign In</a
				>
			</li>
			<li class="py-8">
				<a
					on:click={handleNav}
					class:active={$page.url.pathname.endsWith('/register')}
					sveltekit:prefetch
					href="{base}/auth/signup"
					class="py-0.5 px-2 font-semibold text-white bg-orange-500 rounded-xl">Sign Up</a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	a.active {
		background-color: transparent;
		color: rgb(249, 115, 22);
	}
</style>
