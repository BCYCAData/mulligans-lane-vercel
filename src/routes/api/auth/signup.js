import supabaseConnection from '$lib/dbClient';

export async function post(request) {
	// request.body.get('fullname'),
	const street = request.body.get('streetaddress').toUpperCase();
	const suburb = request.body.get('suburb').toUpperCase();
	const address = `${street} ${suburb}`;
	console.log(address);
	// request.body.get('suburb'),
	// request.body.get('postcode'),
	// request.body.get('mobile'),
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
