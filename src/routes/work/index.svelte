<div class="radio_container">
	<input
		type="number"
		name="citizenship"
		placeholder="Citizenship"
		value="yes"
		id="citizenship1"
	/>
	<label for="citizenship1" value="yes">yes</label>
	<input
		type="number"
		name="citizenship"
		placeholder="Citizenship"
		value="no"
		id="citizenship2"
	/>
	<label for="citizenship2" value="no">no</label>
</div>

<style>
	input[type='number'] {
		position: absolute;
		left: -1000em;
	}

	input[type='number'] + label:before {
		cursor: pointer;
		background-color: red;
		flex: auto;
	}

	input[type='number']:checked + label:before {
		background-color: blue;
	}

	.radio_container {
		height: 6rem;
		width: 100%;
		background-color: green;
		display: flex;
		flex-direction: row;
		text-align: center; /* To align the content horizontally center*/
		align-items: center; /* To align the content vertically center*/
	}
	label {
		flex: 1;
		display: block;
	}
</style>
