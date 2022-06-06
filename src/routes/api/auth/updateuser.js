import { db } from '$lib/dbClient';
import { getFormBody } from '$lib/utils';

export async function post({ request }) {
	const body = await request.formData();
	const formBody = await getFormBody(body);
	password = formBody.password;
	const { data, error } = await db.auth.update({ password });
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
