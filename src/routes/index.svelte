<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Modal from '$components/Modal.svelte';
	import AddressChallenge from '$components/form/AddressChallenge.svelte';

	let visible = true;
	export function toggle() {
		visible = !visible;
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="text-gray-800 body-font">
	<div
		class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"
	>
		<div class="text-center lg:w-5/6 w-full">
			<h1
				class="title-font font-bold underline hidden md:(block text-4xl mb-4 font-medium) text-orange-600"
			>
				Strengthening OUR Community
			</h1>
			<p class="text-sm md:(text-xl mb-5) leading-relaxed mb-3">
				This project, funded by the Bushfire Community Recovery Resilience Fund,
				is a response to the community’s feedback following the 2019 bushfires.
			</p>
			<p class="text-sm md:(text-xl mb-5) leading-relaxed mb-3">
				As a community we share the same environment.&nbsp; We want our
				community to feel prepared for future challenges and be armed with
				knowledge that helps us to tackle whatever natural disaster comes our
				way.
			</p>
			{#if visible}
				<Modal
					on:exit={() => toggle()}
					title="Please enter your Street Address and Suburb:"
				>
					<AddressChallenge />
				</Modal>
			{/if}
			<p
				class="text-sm text-gray-900 font-semibold md:(text-xl mb-5) leading-relaxed mb-3"
			>
				Above all, we want our community to feel prepared, safe and connected.
			</p>
			<p class="text-sm md:(text-xl mb-7) text-red-500 font-semibold mb-5">
				Will you join us?

				<span
					class="text-sm ml-4 md:(text-xl mb-7) text-orange-500 font-semibold mb-5 cursor-pointer hover:font-bold"
					on:click={() => toggle()}>Click here to continue</span
				>
			</p>
			<p class="text-sm md:(text-xl mb-5) leading-relaxed mb-3">
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
