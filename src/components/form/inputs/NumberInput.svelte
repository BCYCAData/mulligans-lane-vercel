<script>
	export let name;
	export let lable;
</script>

<li class="inline-grid place-items-center grid-cols-3">
	<label class="col-span-1" for={name}>{lable}</label>
	<input
		type="number"
		id={name}
		{name}
		class="border border-orange-700 w-20 p-1 rounded mb-1 ml-2 col-span-1"
		value="0"
		min="0"
	/>
</li>
