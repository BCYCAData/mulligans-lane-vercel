<script>
	import AddressValid from './AddressValid.svelte';
	import AddressError from './AddressError.svelte';
	import AddressNotFound from './AddressNotFound.svelte';
	import AddressInvalid from './AddressInvalid.svelte';
	import AddressUnchallenged from './AddressUnchallenged.svelte';

	let streetaddress;
	let suburb;
	let validAddress;

	let unchallenged = true;
	let status = 'unchallenged';

	let searchAddress;
	let community;
</script>

{#if unchallenged}
	<AddressUnchallenged
		{streetaddress}
		{suburb}
		bind:validAddress
		bind:unchallenged
		bind:status
		bind:searchAddress
		bind:community
	/>
{/if}
{#if status === 'addressInvalid'}
	<AddressInvalid {searchAddress} />
{/if}
{#if status === 'addressNotFound'}
	<AddressNotFound {searchAddress} />
{/if}
{#if status === 'addressError'}
	<AddressError />
{/if}
{#if status === 'addressValid'}
	<AddressValid {searchAddress} {validAddress} {community} />
{/if}
