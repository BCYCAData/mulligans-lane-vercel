export async function post({ request }) {
	const body = await request.formData;
	console.log('request:', body.get('user'));

	return {
		status: 302,
		headers: {
			// 'set-cookie': [
			// 	`user=${message}; Path=/; HttpOnly`,
			// 	`authEvent=SIGNED_IN; Path=/; HttpOnly`,
			// 	`signInError=none; Path=/; HttpOnly`,
			// 	`token=${id}; Path=/; HttpOnly`
			// ],
			location: '/profile'
		}
	};
}
