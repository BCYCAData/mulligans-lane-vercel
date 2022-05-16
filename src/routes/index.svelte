<script context="module">
	export const prerender = true;
</script>

<script>
	import Modal from '$components/Modal.svelte';
	import AddressChallenge from '$components/form/addressChallenge/AddressChallenge.svelte';

	let modalVisible = false;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section
	class="flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl text-gray-800"
>
	<h1
		class="title-font font-bold underline hidden sm:block sm:text-2xl sm:font-bold text-orange-600"
	>
		Strengthening OUR Community
	</h1>
	<p class="text-base mt-3 mb-0 sm:text-lg ">
		This project, funded by the Bushfire Community Recovery Resilience Fund, is
		a response to the community’s feedback following the 2019 bushfires.
	</p>
	<p class="text-base sm:text-lg  mt-1 mb-0">
		As a community we share the same environment.&nbsp; We want our community to
		feel prepared for future challenges and be armed with knowledge that helps
		us to tackle whatever natural disaster comes our way.
	</p>
	{#if modalVisible}
		<Modal on:exit={() => (modalVisible = !modalVisible)}>
			<AddressChallenge />
		</Modal>
	{/if}
	<p class="text-base text-gray-900 font-semibold md:text-xl mt-1 mb-0">
		Above all, we want our community to feel prepared, safe and connected.
	</p>
	<p class="text-base md:text-lg text-red-500 font-semibold mt-1 mb-0">
		Will you join us?
	</p>
	<p
		class="cursor-pointer max-w-80 no-underline hover:underline mt-1 p-2 font-semibold text-white bg-orange-500 rounded-xl"
		on:click={() => (modalVisible = !modalVisible)}
	>
		Tap here to find out if you qualify
	</p>
	<!-- <div>DBUser = {$dbUser}</div> -->
	<p class="text-base md:text-lg mt-3 ">
		Please complete our initial online survey at <br />
		<span
			><a class="text-blue-600" href="https://forms.gle/z6dHgPxJbS7AhGLa6"
				>https://forms.gle/z6dHgPxJbS7AhGLa6</a
			></span
		>
	</p>
	<p class="text-sm md:text-lg mt-1 font-semibold">Want more information?</p>
	<p class="text-sm md:text-lg mt-0 font-semibold">Call Helen 0424 515 963</p>
</section>
