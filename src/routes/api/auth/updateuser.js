import { db } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	password = body.get('password');
	const { error } = await db.auth.update({ password });
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
