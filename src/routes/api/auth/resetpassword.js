import { db, supabaseRedirectBase } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	console.log(body);
	const { data, error } = await db.auth.api.resetPasswordForEmail(
		body.get('email'),
		{
			redirectTo: `${supabaseRedirectBase}/auth/redirect`
		}
	);

	console.log('Data: ', data);
	console.log('Error: ', error);
}
