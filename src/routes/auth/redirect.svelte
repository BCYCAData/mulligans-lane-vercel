<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import PasswordEntry from '$components/form/auth/PasswordEntry.svelte';
	// import EmailEntry from '$components/form/auth/EmailEntry.svelte';

	const url = new URLSearchParams($page.url.hash.substring(1));
	const redirectType = new URLSearchParams($page.url.hash.substring(1)).get('type');
	// const id = new URLSearchParams($page.url.hash.substring(1)).get('id');
	// const token = new URLSearchParams($page.url.hash.substring(1)).get('access_token');

	// let email = '';
</script>

<svelte:head>
	<title>Redirect</title>
</svelte:head>

<!-- <div>{redirectType}</div> -->

{#if redirectType === 'invite'}
	<!-- <div>PasswordEntry</div> -->
	<PasswordEntry {redirectType} />
{:else if redirectType === 'signup'}
	<section class="flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl">
		<h1 class="title-font mt-2 font-bold underline hidden sm:block sm:text-2xl text-orange-600">
			Thank you for signing up to Strengthen OUR Community
		</h1>
		<p class="text-base mt-3 mb-0 sm:text-lg ">
			We have a spiel here about why you need to do the Survey
		</p>
		<a
			type="button"
			class="no-underline w-1/3 text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"
			href="/survey"
		>
			Complete the Survey
		</a>
	</section>
{:else}
	<section class="flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl">
		<h1 class="title-font font-bold underline hidden sm:block sm:text-2xl text-orange-600">
			Strengthening OUR Community
		</h1>
		<div class="bg-green-100 rounded-lg mt-2 text-gray-800 items-center w-full">
			<p class="my-1 text-xl">Your request has been lodged.</p>
			<p class="my-1 text-xl">Please check you email inbox to confirm your details.</p>
			<p>You may need to 'Send/Receive'.</p>
			<p>If nothing is showing check your 'Spam' folder.</p>
		</div>
	</section>
{/if}
