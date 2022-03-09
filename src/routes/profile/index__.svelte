<div class="w-full md:w3/5 mx-auto p-8">
	<p>Open <strong>one</strong></p>
	<div class="shadow-md">
		<div class="tab w-full overflow-hidden border-t">
			<input
				class="absolute opacity-0"
				type="radio"
				name="tabs2"
				id="tab-single-one"
			/>
			<label
				class=" block p-5 leading-normal cursor-pointer"
				for="tab-single-one">Lable One</label
			>
			<div
				class=" tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal "
			>
				<p class="p-5">hkhjhjhjhjhjhjkhjhjhjhj</p>
			</div>
		</div>
		<div class="tab w-full overflow-hidden border-t">
			<input
				class="absolute opacity-0"
				type="radio"
				name="tabs2"
				id="tab-single-two"
			/>
			<label
				class=" block p-5 leading-normal cursor-pointer"
				for="tab-single-two">Lable Two</label
			>
			<div
				class=" tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal "
			>
				<p class="p-5">hkhjhjhjhjhjhjkhjhjhjhj</p>
			</div>
		</div>
		<div class="tab w-full overflow-hidden border-t">
			<input
				class="absolute opacity-0"
				type="radio"
				name="tabs2"
				id="tab-single-three"
			/>
			<label
				class=" block p-5 leading-normal cursor-pointer"
				for="tab-single-three">Lable Three</label
			>
			<div
				class=" tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal "
			>
				<p class="p-5">hkhjhjhjhjhjhjkhjhjhjhj</p>
			</div>
		</div>
	</div>
</div>

<style>
	.tab-content {
		max-height: 0;
		transition: max-height 0.35s;
	}
	.tab input:checked .tab-content {
		height: 100px;
	}
	.tab input:checked + label {
		font-size: 1.25rem;
		padding: 1.25rem;
		border-left-width: 2px;
		border-color: #6574cd;
		background-color: #f8fafc;
		color: #6574cd;
	}
	.tab label::after {
		float: right;
		right: 0;
		top: 0;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5;
		font-size: 1.5rem;
		text-align: center;
		transition: all 0.35s;
	}
	.tab input[type='radio'] + label::after {
		content: '\25BE';
		font-weight: bold;
		border-width: 1px;
		border-radius: 9999px;
		border-color: #b8c2cc;
	}
	.tab input[type='radio']:checked + label::after {
		transform: rotateX(180deg);
		background-color: #6574cd;
		color: #f8fafc;
	}
</style>
