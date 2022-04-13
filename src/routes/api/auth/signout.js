import { db } from '$lib/dbClient';

export async function post({ request }) {
	const { error } = await db.auth.signOut();
	if (error) {
		console.log('Sign Out Error:  ', error.message);
	}
	console.log('Signout on server');
	let message = 'guest';
	let id = '';
	return {
		status: 302,
		headers: {
			'set-cookie': [
				`user=${message}; Path=/; HttpOnly`,
				`authEvent=SIGNED_OUT; Path=/; HttpOnly`,
				`signInError=none; Path=/; HttpOnly`,
				`token=${id}; Path=/; HttpOnly`
			],
			location: '/auth/signout'
		}
	};
}
