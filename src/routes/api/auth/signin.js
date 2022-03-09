import supabaseConnection from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	const { user, error } = await supabaseConnection.auth.signIn({
		email: body.get('email'),
		password: body.get('password')
	});
	// console.log('Signin: ', user);
	console.log(user.identities);
	if (error) {
		console.log(error.message);
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 302,
		body: user,
		headers: {
			'Set-Cookie': `id=${user.id}; Path=/; Secure; HttpOnly`,
			location: '/profile'
		}
	};
}
