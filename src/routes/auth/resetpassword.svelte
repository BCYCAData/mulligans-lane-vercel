<script>
	import supabaseConnection from '$lib/db';

	export async function surveyResult({ fetch }) {
		let survey;
		const key = process.env['GOOGLE_API_KEY'];
		const id = process.env['SPREADSHEET_ID'];
		const ranges = 'Sheet1';
		const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}?fields=properties.title,sheets.properties.title&key=${key}`;
		// const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values:batchGet?${ranges}&key=${key}`;
		console.log(key);
		console.log(url);

		try {
			survey = await fetch(url);
			survey = await survey.json();
			console.log(survey);
		} catch (e) {
			console.log(e);
		}
		// you can pass the `articles` via props like that
		return {
			props: {
				survey
			}
		};
	}

	async function resetPassword() {
		const { user, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
		let p = 'p';
	}
</script>

<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<form on:submit|preventDefault={resetPassword}>
			<h1 class="mb-8 text-3xl text-center">Reset Password</h1>
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required="required"
				placeholder="Email"
				autocomplete="email"
			/>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Send Password Reset Link</button
			>
		</form>
	</div>
</div>
