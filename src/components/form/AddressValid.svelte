<script>
	export let searchAddress;
	export let validAddress;
	export let community;
</script>

<h2 class=" pt-[16px] font-semibold text-base text-center">
	{searchAddress}
</h2>
<h2>( {validAddress} )</h2>
<h2 class=" font-medium  text-base text-center">is part of the</h2>
<h2 class=" font-semibold text-base text-center">
	{community}
</h2>
<h2 class=" text-base text-center">community.</h2>
<div class="bg-white mt-5 px-6 py-1 rounded shadow-md text-black w-full">
	<form action="/api/auth/signup" method="post">
		<h1 class="mb-1 text-xl text-center">Sign up</h1>
		<input
			id="email"
			type="email"
			class="block border border-orange-700 w-full p-1 rounded mb-1"
			name="email"
			required
			placeholder="Email"
			autocomplete="email"
		/>
		<input
			id="password"
			type="password"
			class="block border border-orange-700 w-full p-1 rounded mb-1"
			name="password"
			required
			placeholder="Password"
		/>
		<input
			id="confirmpassword"
			type="password"
			class="block border border-orange-700 w-full p-1 rounded mb-1"
			name="confirmpassword"
			required
			placeholder="Confirm Password"
		/>
		<button
			type="submit"
			class="w-full text-center py-1 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
			>Create Account</button
		>
	</form>
	<div class="text-center text-sm text-grey-dark mt-1">
		By signing up, you agree to the
		<a
			class="no-underline border-b border-grey-dark text-grey-dark"
			href="/policies/termsofservice"
		>
			Terms of Service
		</a>
		and
		<a
			class="no-underline border-b border-grey-dark text-grey-dark"
			href="/policies/privacy"
		>
			Privacy Policy
		</a>
	</div>
</div>

<div class="text-grey-dark mt-3">
	Already have an account?
	<a class="no-underline border-b border-blue text-blue" href="../auth/signin/">
		Sign in
	</a>.
</div>
