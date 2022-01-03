import supabaseConnection from '$lib/dbClient';
import { getSession } from './../../../hooks/index';

export async function post(request) {
	const { user, session, error } = await supabaseConnection.auth.signIn({
		email: request.body.get('email'),
		password: request.body.get('password')
	});

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 200,
		body: 'Success'
	};
}
