<script lang="ts">
	import Header from '$components/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="flex flex-col w-full  items-center">
	<slot />
</main>

<footer
	class="fixed bottom-0 flex flex-col justify-center items-center p-2 bg-orange-600 text-light-600 w-full"
>
	<p>Building a safer connected community</p>
</footer>
