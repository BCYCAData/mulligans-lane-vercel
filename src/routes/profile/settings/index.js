// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileSettings, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'stay_in_touch_choices,postal_address_street,postal_address_suburb,postal_address_postcode'
// 		)
// 		.eq('id', _session.user.id);
// 	console.log('profileSettings:', profileSettings);
// 	if (error) {
// 		console.log('error profileSettings:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileSettings }
// 	};
// }
// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileSettings, error } = await supabaseClient
// 		.from('profile')
// 		.update({})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileSettings:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileSettings }
// 	};
// }
import {
	supabaseServerClient,
	withPageAuth
} from '@supabase/auth-helpers-sveltekit';

export const get = async ({ locals, request }) =>
	withPageAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profileSettings, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'stay_in_touch_choices,postal_address_street,postal_address_suburb,postal_address_postcode'
				)
				.eq('id', locals.user.id);
			console.log('data', profileSettings);
			if (error) {
				console.log('error profileSettings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileSettings }
			};
		}
	);
export const post = async ({ locals, request }) =>
	withPageAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			console.log('first_name', body.get('first_name'));
			const { data: profileSettings, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileSettings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileSettings }
			};
		}
	);
