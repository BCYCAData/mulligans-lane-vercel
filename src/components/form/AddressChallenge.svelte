<form action="/api/data/property" method="post">
	<input
		id="streetaddress"
		type="text"
		class="block border border-orange-700 w-full p-1 rounded mb-1"
		name="streetaddress"
		required
		placeholder="Street Address"
		autocomplete="address-line1"
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
		/>
		<button
			type="submit"
			class="w-24 m-4 text-center py-1 rounded-full  cursor-pointer bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
			>Check</button
		>
	</div>
</form>
