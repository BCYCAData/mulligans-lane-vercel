import supabaseConnection from '$lib/dbClient';
import { supabaseRedirectBase } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	console.log(body);
	const { data, error } =
		await supabaseConnection.auth.api.resetPasswordForEmail(body.get('email'), {
			redirectTo: `${supabaseRedirectBase}/signin`
		});

	console.log('Data: ', data);
	console.log('Error: ', error);
}
