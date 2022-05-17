<!-- <script context="module">
	import { db } from '$lib/dbClient';
	export async function load({ stuff }) {
		return {
			props: {
				email: db.auth.session().user.email
			}
		};
	}
</script> -->
<script>
	import { db } from '$lib/dbClient';

	export let redirectType;

	$: email = '';

	db.auth.onAuthStateChange(async (event, _session) => {
		email = _session.user.email;
		console.log('Supabase event: ', event);
	});
	let strength = 0;
	let validations = [];
	let showPassword = false;
	let password = '';
	let confirmPassword = '';
	let heading = '';
	let submitText = '';

	if (redirectType == 'invite') {
		heading = 'Please Set a Password';
		submitText = 'Set Password';
	}
	function validatePassword(e) {
		const password = e.target.value;
		validations = [
			password.length > 8,
			password.search(/[A-Z]/) > -1,
			password.search(/[0-9]/) > -1,
			password.search(/[$&+,:;=?#^!]/) > -1
		];
		strength = validations.reduce((acc, cur) => acc + cur, 0);
	}
</script>

<!-- <pre>{JSON.stringify(load().url)}</pre> -->
<div class="container max-w-sm max-w-screen-xsm mx-auto">
	<div
		class="bg-white p-6 ml-1.5 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"
	>
		<form action="/api/auth/updateuser" method="POST">
			<!-- <form on:submit|preventDefault={handleSubmit}> -->
			<h1 class="mb-8 text-3xl text-center">{heading}</h1>
			<label
				class="inline uppercase tracking-wide text-orange-500 text-xs font-bold"
				for="email">Email:</label
			>
			<input
				id="email"
				type="email"
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
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
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
				name="password"
				required={true}
				placeholder="New Password"
				on:input={validatePassword}
				value={password}
			/>
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
				class="block text-xl border border-orange-700 w-full py-3 rounded mb-4"
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

			<ul class="list-none">
				<li>
					<span class="text-[10px]">{validations[0] ? '🏆' : '❌'}</span>
					<span class="text-base"> must be at least 5 characters</span>
				</li>
				<li>
					<span class="text-[10px]">{validations[1] ? '🏆' : '❌'}</span>
					<span class="text-base"> must contain a capital letter</span>
				</li>
				<li>
					<span class="text-[10px]">{validations[2] ? '🏆' : '❌'}</span>
					<span class="text-base"> must contain a number</span>
				</li>
				<li>
					<span class="text-[10px]">{validations[3] ? '🏆' : '❌'}</span>
					<span class="text-base"> must contain one symbol ($&+,:;=?#^!)</span>
				</li>
			</ul>

			<!-- <button disabled={strength < 4}>Sign Up</button> -->
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				disabled={strength < 4 && { confirmPassword } !== { password }}
				>{submitText}</button
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
