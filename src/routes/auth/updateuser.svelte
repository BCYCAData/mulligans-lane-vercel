<script>
	// @ts-nocheck

	// import { supabaseClient } from '$lib/dbClient';
	import { page } from '$app/stores';

	import PasswordEntry from '$components/form/auth/PasswordEntry.svelte';

	const redirectType = new URLSearchParams($page.url.hash.substring(1)).get('type');

	// let email = '';
	// let strength = 0;
	// let validations = [];
	// let showPassword = false;
	// let heading = '';
	// let submitText = '';

	// $: password = '';
	// $: confirmPassword = '';
	// $: canGo = validEmail && password === confirmPassword && strength === 4;

	// $: validEmail = validateEmail(email);

	// if (redirectType == 'invite') {
	// 	heading = 'Please Set a Password';
	// 	submitText = 'Set Password';
	// }

	// function validatePassword(e) {
	// 	const passwordValue = e.target.value;
	// 	validations = [
	// 		passwordValue.length > 8,
	// 		passwordValue.search(/[A-Z]/) > -1,
	// 		passwordValue.search(/[0-9]/) > -1,
	// 		passwordValue.search(/[$&+,:;=?#^!]/) > -1
	// 	];
	// 	strength = validations.reduce((acc, cur) => acc + cur, 0);
	// }

	// function validateEmail(email) {
	// 	var emailRegEx =
	// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return emailRegEx.test(String(email).toLowerCase());
	// }
</script>

<!-- <div class="flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto">
	<h3>{heading}</h3>
	<h3>{submitText}</h3>
	<form action="/api/auth/updateuser" method="POST">
		<label class="inline uppercase tracking-wide text-orange-500 text-xs font-bold" for="email">
			Email:
		</label>
		<input
			id="email"
			type="email"
			class="block border border-orange-700 w-full py-3 rounded mb-4"
			name="email"
			required={true}
			placeholder="Email"
			autocomplete="email"
			bind:value={email}
		/>
		<label class="inline uppercase tracking-wide text-orange-500 text-xs font-bold" for="password">
			Password:
			<span
				class="toggle-password text-3xl text-gray-700 font-normal ml-3  align-middle "
				on:mouseenter={() => (showPassword = true)}
				on:mouseleave={() => (showPassword = false)}
			>
				{showPassword ? '👁' : '👁'}
			</span>
		</label>
		<input
			id="password"
			type={showPassword ? 'text' : 'password'}
			class="block border border-orange-700 w-full py-3 rounded mb-4"
			name="password"
			required={true}
			placeholder="New Password"
			on:input={validatePassword}
			value={password}
		/>
		<label
			class="inline uppercase tracking-wide text-orange-500 text-xs font-bold"
			for="confirmPassword"
		>
			Confirm Password:
			<span
				class="toggle-password text-3xl text-gray-700 font-normal ml-3  align-middle "
				on:mouseenter={() => (showPassword = true)}
				on:mouseleave={() => (showPassword = false)}
			>
				{showPassword ? '👁' : '👁'}
			</span>
		</label>

		<input
			id="confirmPassword"
			type={showPassword ? 'text' : 'password'}
			class="block border border-orange-700 w-full py-3 rounded mb-4"
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
				<span class="text-[10px]">{validations[0] ? '✔️' : '❌'}</span>
				<span class="text-sm">must be at least 5 characters</span>
			</li>
			<li>
				<span class="text-[10px]">{validations[1] ? '✔️' : '❌'}</span>
				<span class="text-sm">must contain a capital letter</span>
			</li>
			<li>
				<span class="text-[10px]">{validations[2] ? '✔️' : '❌'}</span>
				<span class="text-sm">must contain a number</span>
			</li>
			<li>
				<span class="text-[10px]">{validations[3] ? '✔️' : '❌'}</span>
				<span class="text-sm">must contain one symbol ($&+,:;=?#^!)</span>
			</li>
		</ul> -->
<!-- {#if $session['signInError'] !== 'none' && $session['signInError'] !== ''}
				<AuthErrorMessage message={$session['signInError']} />
			{/if} -->
<!-- <button
			type="submit"
			class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"
			value=""
			disabled={!canGo}
		>
			Create Account
		</button>
	</form>
</div> -->

<!-- <style>
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
</style> -->

{#if redirectType === 'invite'}
	<div class="flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto">
		<h3>Thank you for accepting our invitation.</h3>
		<h3>'Please Set a Password'</h3>
	</div>

	<PasswordEntry />
{/if}
