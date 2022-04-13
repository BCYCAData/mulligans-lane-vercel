//	Get the user First & Last Names, email and password
//	signIn to supabase:
//		On Error
//			1. Set an error-cookie
//			2. Redirect to '/auth/signin'
//		On Success
//			1. Set user cookie as email username `user=${user.aud}`
//			2. Redirect to '/profile'
import * as cookie from 'cookie';
import { db } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	const email = body.get('email');
	const { user, error } = await db.auth.signIn({
		email: email,
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

// function deleteAllCookies() {
// 	var cookies = document.cookie.split(';');

// 	for (var i = 0; i < cookies.length; i++) {
// 		var cookie = cookies[i];
// 		var eqPos = cookie.indexOf('=');
// 		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
// 		// document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
// 		console.log('Delete Cookie: ', name);
// 	}
// }
// 'Set-Cookie': [
// 	'error=Invalid login credentials; Path=/; HttpOnly; expires=Thu, 01-Jan-1970 00:00:01 GMT',
// 	`${cookie}; Path=/; HttpOnly`
// ],
