<script>
	import Navbar from '$components/header/navbar/Navbar.svelte';
	import '../app.css';
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
		<!-- <div
			class="flex justify-center items-center p-2 bg-orange-600 text-light-600 w-full"
		> -->
		<p>Building a safer connected community</p>
		<!-- </div> -->
	</footer>
</div>
