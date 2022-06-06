import { db } from '$lib/dbClient';

export async function post({ request }) {
	const _session = db.auth.session();
	const token = _session?.access_token;
	const body = await request.formData();
	password = body.get('password');
	db.auth.setAuth(token);
	const { data, error } = await db.auth.update({ password: 'password' });
	console.log(data);
	if (error) {
		console.log(error);
	}
	return {
		status: 302,
		headers: {
			location: '/profile'
		}
	};
}
