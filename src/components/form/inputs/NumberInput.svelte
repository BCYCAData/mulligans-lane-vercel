<script>
	export let name;
	export let lable;
	export let inputClass;
	export let lableClass;
	export let inputValue;
</script>

<div class="flex flex-col justify-items-center mx-auto">
	<label class={lableClass} for={name}>{lable}</label>
	<input
		type="number"
		id={name}
		{name}
		class={inputClass}
		value={inputValue}
		min="0"
	/>
</div>
