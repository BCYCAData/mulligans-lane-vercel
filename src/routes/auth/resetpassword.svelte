<script>
	// @ts-nocheck

	import supabaseConnection from '$lib/dbClient';
	import { supabaseRedirectBase } from '$lib/dbClient';

	let strength = 0;
	let validations = [];
	let showPassword = false;
	let password = '';
	let confirmPassword = '';
	let email = '';

	function validatePassword(e) {
		const password = e.target.value;
		validations = [
			password.length > 8,
			password.search(/[A-Z]/) > -1,
			password.search(/[0-9]/) > -1,
			password.search(/[$&+,:;=?@#!]/) > -1
		];
		strength = validations.reduce((acc, cur) => acc + cur, 0);
	}

	async function resetPassword() {
		console.log('Base: ', supabaseRedirectBase);
		const { data, error } =
			await supabaseConnection.auth.api.resetPasswordForEmail(email, {
				redirectTo: `${supabaseRedirectBase}/signin`
			});
		console.log('Data: ', data);
		console.log('Error: ', error);
	}
</script>

<div
	class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
>
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<form on:submit|preventDefault={resetPassword}>
			<h1 class="mb-8 text-3xl text-center">Reset Password</h1>
			<label
				class="inline uppercase tracking-wide text-orange-500 text-xs font-bold"
				for="email">Email:</label
			>
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required={true}
				placeholder="Email"
				autocomplete="email"
				value={email}
			/>
			<label
				class="inline uppercase tracking-wide text-orange-500 text-xs font-bold"
				for="password"
				>Confirm Password:<span
					class="toggle-password text-3xl text-gray-700 font-normal ml-3  align-middle "
					on:mouseenter={() => (showPassword = true)}
					on:mouseleave={() => (showPassword = false)}
				>
					{showPassword ? '👁' : '👁'}
				</span></label
			>
			<input
				id="password"
				type={showPassword ? 'text' : 'password'}
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="password"
				required={true}
				placeholder="New Password"
				on:input={validatePassword}
				value={password}
			/>
			<div>{strength}</div>
			<label
				class="inline uppercase tracking-wide text-orange-500 text-xs font-bold"
				for="confirmPassword"
				>Confirm Password:<span
					class="toggle-password text-3xl text-gray-700 font-normal ml-3  align-middle "
					on:mouseenter={() => (showPassword = true)}
					on:mouseleave={() => (showPassword = false)}
				>
					{showPassword ? '👁' : '👁'}
				</span></label
			>

			<input
				id="confirmPassword"
				type={showPassword ? 'text' : 'password'}
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="confirmPassword"
				required={true}
				placeholder="Confirm New Password"
				on:input={validatePassword}
				value={confirmPassword}
			/>
			<div class="strength">
				<span class="bar bar-1" class:bar-show={strength > 0} />
				<span class="bar bar-2" class:bar-show={strength > 1} />
				<span class="bar bar-3" class:bar-show={strength > 2} />
				<span class="bar bar-4" class:bar-show={strength > 3} />
			</div>

			<ul>
				<li>
					{validations[0] ? '🏆' : '❌'} must be at least 5 characters
				</li>
				<li>
					{validations[1] ? '🏆' : '❌'} must contain a capital letter
				</li>
				<li>{validations[2] ? '🏆' : '❌'} must contain a number</li>
				<li>
					{validations[3] ? '🏆' : '❌'} must contain one symbol ($&+,:;=?@!#)
				</li>
			</ul>

			<button disabled={strength < 4}>Sign Up</button>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				disabled={strength < 4 && { confirmPassword } !== { password }}
				>Send Password Reset Link</button
			>
		</form>
	</div>
</div>

<style>
	.strength {
		display: flex;
		height: 20px;
		width: 100%;
	}
	.bar {
		margin-right: 5px;
		height: 100%;
		width: 25%;
		transition: box-shadow 500ms;
		box-shadow: inset 0px 20px #1f1f1f;
	}
	.bar-show {
		box-shadow: none;
	}
	.bar-1 {
		background: linear-gradient(to right, red, orangered);
	}
	.bar-2 {
		background: linear-gradient(to right, orangered, yellow);
	}
	.bar-3 {
		background: linear-gradient(to right, yellow, yellowgreen);
	}
	.bar-4 {
		background: linear-gradient(to right, yellowgreen, green);
	}
	.bar:last-child {
		margin-right: 0;
	}
</style>
