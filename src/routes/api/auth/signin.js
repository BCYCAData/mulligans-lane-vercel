import supabaseConnection from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	const { user, error } = await supabaseConnection.auth.signIn({
		email: body.get('email'),
		password: body.get('password')
	});

	if (error) {
		console.log(error.message);
		return {
			status: error.status
		};
	}

	return {
		status: 201
		// body: 'Success'
	};
}
