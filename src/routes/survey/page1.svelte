<div class="container">
	<div>
		1. What is your property address?
		<ul>
			<li>
				<input
					type="text"
					id="1"
					name="address"
					class="block border border-orange-700 w-450px p-1 rounded mb-1"
					required
					placeholder="Address"
					autocomplete="?????"
				/>
			</li>
		</ul>
	</div>

	<div>
		Do you reside full time at this address?
		<ul>
			<li>
				<input type="checkbox" id="2" name="Yes" />
				<label for="Yes">Yes</label>
			</li>

			<li>
				<input type="checkbox" id="3" name="No" />
				<label for="No">No</label>
			</li>
		</ul>
	</div>
	<div>
		If No:
		<select
			name="residency"
			id="residency"
			class="block border border-orange-700 w-half p-1 rounded mb-1"
			required
		>
			<option value="">Please choose an option</option>
			<option value="1"
				>Large proportion of time present, just short periods away</option
			>
			<option value="2">At the property regularly (at least every month)</option
			>
			<option value="3">At the property occasionally</option>
			<option value="4"
				>At the property for periods of time and then long absences</option
			>
			<option value="5">Not very often at the property</option>
		</select>
	</div>
	<br />

	<div>
		2. Is your property well signposted and numbered clearly from the road?
		<ul>
			<li>
				<input type="checkbox" id="2" name="Yes" />
				<label for="Yes">Yes</label>
			</li>

			<li>
				<input type="checkbox" id="3" name="No" />
				<label for="No">No</label>
			</li>
		</ul>
	</div>
	<br />
	<div>
		3. Is there easy access to property and paddocks?
		<ul>
			<li>
				<input type="checkbox" id="4" name="Yes" />
				<label for="Yes">Yes - all gates are 2.5 -3m</label>
			</li>
			<li>
				<input type="checkbox" id="4" name="Most" />
				<label for="Most">Yes - most gates are 2.5m+</label>
			</li>
			<li>
				<input type="checkbox" id="5" name="No" />
				<label for="No">No</label>
			</li>
			<li>
				<input type="checkbox" id="other" name="other" />
				<label for="other">Other</label>
				<input
					type="text"
					id="otherValue"
					name="other"
					class="block border border-orange-700 w-450px p-1 rounded mb-1"
				/>
			</li>
		</ul>
	</div>
</div>

<style>
	.container {
		margin: 40px, 60px;
		background-color: papayawhip;
	}
</style>
