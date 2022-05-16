<script>
	export let redirectType;

	let heading = '';
	let submitText = '';
	let email;

	let validEmail;
	$: validEmail = emailIsValid();
	$: email;

	if (redirectType == 'invite') {
		heading = 'Please Enter an Email Address';
		submitText = 'Set New Email';
	}
	function emailIsValid() {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
</script>

<div
	class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
>
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
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
				class="block border border-orange-700 w-full py-3 rounded mb-4"
				name="email"
				required={true}
				placeholder="Email"
				autocomplete="email"
				value={email}
			/>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"
				disabled={!emailIsValid()}>{submitText}</button
			>
		</form>
	</div>
</div>
