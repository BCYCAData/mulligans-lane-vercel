<script>
	import { PIP } from '$lib/spatialUtils';
	import communityPolygons from '$lib/geojsonData/communities';

	let streetaddress;
	let suburb;
	async function submitForm() {
		const response = await fetch('/api/data/property', {
			method: 'POST',
			body: JSON.stringify({ streetaddress, suburb })
		});
		console.log(response);
		if (response.status === 400) {
			console.log('Error');
		} else if (response.status === 404) {
			console.log('Address not found');
		} else {
			let results = await response.json();
			const point = [Math.round(results.X), Math.round(results.Y)];
			for (let i = 0; i < communityPolygons.features.length; i++) {
				let polygon = communityPolygons.features[i].geometry.coordinates[0];
				let ok = PIP(polygon[0], point);
				console.log(ok);
			}
		}
	}
</script>

<form on:submit|preventDefault={submitForm}>
	<input
		id="streetaddress"
		type="text"
		class="block border border-orange-700 w-full p-1 rounded mb-1"
		name="streetaddress"
		required
		placeholder="Street Address"
		autocomplete="address-line1"
		bind:value={streetaddress}
	/>
	<div class="flex justify-between">
		<input
			id="suburb"
			type="text"
			class=" border max-w-1/2 border-orange-700 w-30% object-left p-1 rounded mb-1"
			name="suburb"
			required
			placeholder="Suburb"
			autocomplete="address-level2"
			bind:value={suburb}
		/>
		<button
			type="submit"
			class="w-24 m-4 text-center py-1 rounded-full  cursor-pointer bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
			>Check</button
		>
	</div>
</form>
