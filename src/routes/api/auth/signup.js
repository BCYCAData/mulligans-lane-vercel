import { db, supabaseRedirectBase } from '$lib/dbClient';

export async function post({ request }) {
	let removeCookie = '';
	const body = await request.formData();
	const email = body.get('email');
	const password = body.get('password');
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
// let data, redirect, cookie;
// let currentCookie = request.headers.get('cookie');
// if (null !== currentCookie) {
// 	// console.log('Cookie Exists: ', request.headers.get('cookie'));
// 	removeCookie = `${currentCookie}; Path=/; HttpOnly; expires=Thu, 01-Jan-1970 00:00:01 GMT`;
// }
// if (error) {
// 	console.log('Signup error:  ', error);
// 	data = {};
// 	cookie = `error=${error.message}`;
// 	redirect = '/';
// } else {
// 	data = user;
// 	cookie = `aud=${user.aud}`;
// 	redirect = '/auth/checkyouremail';
// }
// if (removeCookie !== '') {
// 	return {
// 		status: 302,
// 		body: data,
// 		headers: {
// 			// 'Set-Cookie': [
// 			// 	'error=Invalid login credentials; Path=/; HttpOnly; expires=Thu, 01-Jan-1970 00:00:01 GMT',
// 			// 	`${cookie}; Path=/; HttpOnly`
// 			// ],
// 			'Set-Cookie': [
// 				'error=Invalid login credentials; Path=/; HttpOnly; expires=Thu, 01-Jan-1970 00:00:01 GMT',
// 				`${cookie}; Path=/; HttpOnly`
// 			],
// 			location: redirect
// 		}
// 	};
// }
// return {
// 	status: 302,
// 	body: data,
// 	headers: {
// 		'Set-Cookie': `${cookie}; Path=/; HttpOnly`,
// 		location: redirect
// 	}
// };
// }
// async function checkUser(email, validAddres, searchAddress, fullname) {}
