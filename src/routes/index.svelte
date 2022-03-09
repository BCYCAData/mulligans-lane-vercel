<script context="module">
	export const prerender = true;
</script>

<script>
	import Modal from '$components/Modal.svelte';
	import AddressChallenge from '$components/form/addressChallenge/AddressChallenge.svelte';

	let visible = false;
	export function toggle() {
		visible = !visible;
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="text-gray-800">
	<div
		class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"
	>
		<div class="text-center lg:w-3/6 w-full">
			<h1
				class="title-font font-bold underline hidden md:block md:text-4xl md:mb-4 md:font-medium text-orange-600"
			>
				Strengthening OUR Community
			</h1>
			<p class="text-lg text-gray-800 leading-relaxed mb-3 md:text-xl md:mb-5">
				This project, funded by the Bushfire Community Recovery Resilience Fund,
				is a response to the community’s feedback following the 2019 bushfires.
			</p>
			<p class="text-base md:(text-xl mb-5) leading-relaxed mb-3">
				As a community we share the same environment.&nbsp; We want our
				community to feel prepared for future challenges and be armed with
				knowledge that helps us to tackle whatever natural disaster comes our
				way.
			</p>
			{#if visible}
				<Modal on:exit={() => toggle()}>
					<AddressChallenge />
				</Modal>
			{/if}
			<p
				class="text-base text-gray-900 font-semibold md:(text-xl mb-5) leading-relaxed mb-3"
			>
				Above all, we want our community to feel prepared, safe and connected.
			</p>
			<p class="text-base md:(text-xl mb-4) text-red-500 font-semibold mb-2">
				Will you join us?
			</p>
			<p
				class="cursor-pointer no-underline hover:underline m-2 py-1 px-1 font-semibold text-white bg-orange-500 rounded-xl"
				on:click={() => toggle()}
			>
				Tap here to find out if you qualify
			</p>

			<p class="text-base md:(text-xl mb-5) leading-relaxed mb-3">
				Please complete our initial online survey at <span
					><a href="https://forms.gle/z6dHgPxJbS7AhGLa6"
						>https://forms.gle/z6dHgPxJbS7AhGLa6</a
					></span
				>
			</p>
			<p class="text-sm md:(text-xl mb-2) leading-relaxed mb-0 font-semibold">
				Want more information?
			</p>
			<p class="text-sm md:(text-xl mb-5) leading-relaxed font-semibold mb-3">
				Call Helen 0424 515 963
			</p>
		</div>
	</div>
</section>
