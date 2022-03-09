import supabaseConnection from '$lib/dbClient';
import { validate_component } from 'svelte/internal';

export async function post({ request }) {
	const body = await request.formData();
	const email = body.get('email');
	const fullname = body.get('fullname');
	const validAddress = ''; //how to get these props from AddressValid.svelte
	const searchAddress = ''; //how to get these props from AddressValid.svelte

	const userExists = await checkUser(
		email,
		validAddres,
		searchAddress,
		fullname
	);
	const { user, error } = await supabaseConnection.auth.signUp(
		{
			email: email,
			password: body.get('password')
		},
		{
			data: {
				validAddress: validAddress,
				searchAddress: searchAddress,
				community: '', //how to get these props from AddressValid.svelte
				fullname: fullname
			},
			redirectTo: `${supabaseRedirectBase}/user/profile`
		}
	);

	if (error) {
		console.log(error);
		return {
			status: error.status,
			body: error.message
		};
	} else {
		//Handle user and session
		console.log('Registered User:  ', user);
	}
	return {
		status: 302,
		headers: { location: '/about' }
	};
}
async function checkUser(email, validAddres, searchAddress, fullname) {}
