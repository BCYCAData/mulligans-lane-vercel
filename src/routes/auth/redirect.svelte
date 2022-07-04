<script>
	import { page } from '$app/stores';
	import PasswordEntry from '$components/form/auth/PasswordEntry.svelte';
	// import EmailEntry from '$components/form/auth/EmailEntry.svelte';

	const supabaseRedirectType = new URLSearchParams(
		$page.url.hash.substring(1)
	).get('type');
	const url = $page.url;

	// let email = '';
</script>

<p>Redirecting</p>
{supabaseRedirectType}
{url}
{#if supabaseRedirectType === 'invite'}
	<PasswordEntry />
{/if}
