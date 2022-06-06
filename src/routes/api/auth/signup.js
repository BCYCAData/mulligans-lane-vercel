import { db } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	console.log('SignIn', email, body.get('password'));
	const { user, error } = await db.auth.signUp({
		email: body.get('email'),
		password: body.get('password')
	});
	if (error) {
		return {
			status: 302,
			headers: {
				'Set-Cookie': [
					`signInError=${error.message}; Path=/; HttpOnly`,
					`user=guest; Path=/; HttpOnly`,
					`authEvent=SIGNED_IN; Path=/; HttpOnly`,
					`token=none; Path=/; HttpOnly`
				],
				location: '/auth/signin'
			}
		};
	}
	let message = user.email.split('@')[0];
	let id = user.id;
	return {
		status: 302,
		headers: {
			'set-cookie': [
				`user=${message}; Path=/; HttpOnly`,
				`authEvent=SIGNED_IN; Path=/; HttpOnly`,
				`signInError=none; Path=/; HttpOnly`,
				`token=${id}; Path=/; HttpOnly`
			],
			location: '/profile'
		}
	};
}
