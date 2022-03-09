<script>
	import supabaseConnection from '$lib/dbClient';

	let profileData = {
		fullname: 'Alan Keown',
		property_address: '',
		residency_profile: '',
		sign_posted: true,
		truck_access: '',
		truck_access_other: '',
		mobile: '',
		phone: '',
		mobile_reception: '',
		residents0_18: '',
		residents19_50: '',
		residents51_70: '',
		residents71_: '',
		vulnerable_residents: false,
		number_dogs: '',
		number_cats: '',
		number_birds: '',
		number_other_pets: '',
		live_stock_present: false,
		live_stock_safe_area: '',
		share_livestock_safe_area: '',
		static_water_available: [],
		have_stortz: '',
		stortz_size: '',
		fire_fighting_assets: [],
		site_hazards: [],
		other_site_hazards: '',
		fire_hazard_reduction: [],
		land_adjacent_hazard: '',
		other_hazards: '',
		rfs_survival_plan: '',
		fire_fighting_experience: '',
		fire_trauma: false,
		plan_to_leave_before_fire: '',
		plan_to_leave_before_flood: '',
		community_workshop_choices: [],
		other_community_workshop: '',
		will_run_community_workshops: '',
		information_sheet_choices: [],
		other_information_sheet: '',
		community_meeting_choices: [],
		other_community_meeting: '',
		stay_in_touch_choices: [],
		other_comments: ''
	};

	async function updateProfile() {
		const { user, error } = await supabaseConnection.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
		let p = 'p';
	}
</script>

<div
	class="bg-white px-3 py-4 rounded shadow-md text-gray-900 w-full leading-tight flex-grow "
>
	<h1 class="mb-2 text-3xl text-center">Your Profile</h1>
	<form on:submit|preventDefault={updateProfile}>
		<h2 class="text-2xl mb-3 border-b border-gray-600">Personal Info</h2>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="fullname">Full name:</label
		>
		<input
			class="block border border-orange-700 w-full p-3 rounded mb-4"
			type="text"
			id="fullname"
			name="fullname"
			placeholder="Your Full Name"
			value={profileData.fullname}
		/>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="homeaddress">Residential address:</label
		>
		<input
			class="block border border-orange-700 w-full p-3 rounded mb-4"
			type="text"
			id="homeaddress"
			name="homeaddress"
			placeholder="Where you live"
		/>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="mailaddress">Contact address:</label
		>
		<input
			class="block border border-orange-700 w-full p-3 rounded mb-4"
			type="text"
			id="mailaddress"
			name="mailaddress"
			placeholder="Mail address"
		/>
		<div class="inline-block">
			<label
				class=" uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="mobile">Mobile phone:</label
			>
			<input
				class=" border border-orange-700 p-3 rounded mb-4"
				type="tel"
				id="mobile"
				name="mobile"
				placeholder="0XXX XXX XXX"
			/>
			<label
				class=" uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
				for="phone">Landline:</label
			>
			<input
				class=" border border-orange-700 p-3 rounded mb-4"
				type="phone"
				id="phone"
				name="phone"
				placeholder="(XX) XXXX XXXX"
			/>
		</div>
		<h2 class="text-2xl mb-3 border-b border-gray-600">Account Details</h2>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="username">Username:</label
		>
		<input
			id="username"
			type="text"
			class="block border border-orange-700 w-full p-3 rounded mb-4"
			name="username"
			placeholder="User Name"
		/>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="email">Email:</label
		>
		<input
			id="email"
			type="email"
			class="block border border-orange-700 w-full p-3 rounded mb-4"
			name="email"
			placeholder="Email"
			autocomplete="email"
		/>
		<label
			class="block uppercase tracking-wide text-orange-500 text-xs font-bold mb-1"
			for="password">Password:</label
		>
		<div class="flex justify-items-start">
			<input
				id="password"
				type="password"
				class="block border border-orange-700 p-3 rounded mb-4"
				name="password"
				placeholder="Hidden"
				readonly
			/>
			<div class="flex justify-between ml-4 mt-4 mb-3">
				<a
					href="../auth/requestresetpassword"
					class="text-sm text-gray-700 hover:underline"
				>
					Reset Password?
				</a>
			</div>
		</div>
		<button
			type="submit"
			class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
			>Save Changes</button
		>
	</form>
</div>
<!-- </div> -->
