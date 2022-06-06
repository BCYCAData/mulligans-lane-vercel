import { db } from '$lib/dbClient';
import { getFormBody } from '$lib/utils';

export async function post({ request }) {
	const _session = await db.auth.session();
	console.log(_session);
	const token = _session?.access_token;
	console.log(password);
	const body = await request.formData();
	const formBody = await getFormBody(body);
	password = formBody.password;
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
