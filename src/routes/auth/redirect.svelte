<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import PasswordEntry from '$components/form/auth/PasswordEntry.svelte';
	// import EmailEntry from '$components/form/auth/EmailEntry.svelte';

	const redirectType = new URLSearchParams($page.url.hash.substring(1)).get('type');
	const id = new URLSearchParams($page.url.hash.substring(1)).get('id');
	const token = new URLSearchParams($page.url.hash.substring(1)).get('access_token');
	const url = $page.url;

	// let email = '';
</script>

<!-- <p>Redirecting</p>
<div>redirectType {redirectType}</div>
<div>id {id}</div>
<div>token {token}</div> -->
<!-- <div>url {url}</div> -->

{#if redirectType === 'invite'}
	<PasswordEntry {redirectType} {token} />
{/if}
