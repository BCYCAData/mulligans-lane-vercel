import supabaseConnection from '$lib/dbClient';

export async function post(request) {
	const { user, session, error } = await supabaseConnection.auth.signUp({
		email: request.body.get('email'),
		password: request.body.get('password')
	});

	if (error) {
		console.log(error);
		return {
			status: error.status,
			body: error.message
		};
	} else {
		console.log('Registered User:  ');
		console.log(user);
	}
	return {
		status: 302,
		headers: { location: '/about' }
	};
}
