<script>
	export let headingText;
	export let nameText;
	export let divClass;
	export let textAreaClass;
</script>

<div>
	<h3>{headingText}</h3>
	<div class={divClass}>
		<textarea id={nameText} name={nameText} class={textAreaClass} />
	</div>
</div>
