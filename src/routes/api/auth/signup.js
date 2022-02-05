import supabaseConnection from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	const { user, session, error } = await supabaseConnection.auth.signUp({
		email: body.get('email'),
		password: body.get('password')
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
		console.log('Session:  ');
		console.log(session);
	}
	return {
		status: 302,
		headers: { location: '/about' }
	};
}
