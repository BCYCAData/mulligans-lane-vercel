<script>
	import { yesNoMaybeOptions, yesNoOptions } from '$lib/surveyOptions';
	import NumberInput from '$components/form/inputs/NumberInput.svelte';
	let live_stock_present = false;
	let live_stock_safe_area = 'N';
	let share_livestock_safe_area = 'N';
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<div>
		<h3>Please record the number of pets you have on this property</h3>
		<div class=" py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="inline-grid grid-cols-1 gap-4">
				<NumberInput name="number_dogs" lable="Dogs" />
				<NumberInput name="number_dogs" lable="Cats" />
				<NumberInput name="number_dogs" lable="Birds" />
				<NumberInput name="number_dogs" lable="Other" />
			</ul>
		</div>
	</div>
	<div>
		<h3>Do you have livestock?</h3>
		<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
			<ul class="flex justify-center px-3">
				{#each yesNoOptions as { value, lable }}
					<li class="flex-auto">
						<input
							on:change={(e) => {
								live_stock_present = value;
							}}
							name="live_stock_present"
							type="radio"
							{value}
						/>
						<label for="live_stock_present"> {lable}</label>
					</li>
				{/each}
			</ul>
		</div>
		{#if live_stock_present === true}
			<h3>
				Do you have an area which would be safe for stock in the event of a
				bushfire or flood?
			</h3>
			<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
				<ul class="flex justify-center px-3">
					{#each yesNoMaybeOptions as { value, lable }}
						<li class="flex-auto">
							<input
								on:change={(e) => {
									live_stock_safe_area = value;
								}}
								name="live_stock_safe_area"
								type="radio"
								{value}
							/>
							<label for="live_stock_safe_area"> {lable}</label>
						</li>
					{/each}
				</ul>
			</div>
			{#if live_stock_present && live_stock_safe_area != 'N'}
				<h3>
					Would you be happy for other people to leave their stock on your
					property, in your safe area, for a short period in an emergency?
				</h3>
				<div class="py-2 px-2 rounded-lg bg-[#FDBA74]">
					<ul class="flex justify-center px-3">
						{#each yesNoMaybeOptions as { value, lable }}
							<li class="flex-auto">
								<input
									on:change={(e) => {
										share_livestock_safe_area = value;
									}}
									name="share_livestock_safe_area"
									type="radio"
									{value}
								/>
								<label for="share_livestock_safe_area"> {lable}</label>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		{/if}
	</div>
</div>
