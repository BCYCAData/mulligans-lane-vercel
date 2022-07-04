// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileInformation, error } = await supabaseClient
// 		.from('profile')
// 		.select('information_sheet_choices,other_information_sheet')
// 		.eq('id', _session.user.id);
// 	if (null == profileInformation[0].information_sheet_choices) {
// 		profileInformation[0].information_sheet_choices = [];
// 	}
// 	console.log('profileInformation:', profileInformation);
// 	if (error) {
// 		console.log('error profileInformation:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileInformation }
// 	};
// }
// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileInformation, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			information_sheet_choices: body.get('information_sheet_choices'),
// 			other_information_sheet: body.get('other_information_sheet')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileInformation:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileInformation }
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
			const { data: profileInformation, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('information_sheet_choices,other_information_sheet')
				.eq('id', locals.user.id);
			console.log('data', profileInformation);
			if (null == profileInformation[0].information_sheet_choices) {
				profileInformation[0].information_sheet_choices = [];
			}
			if (error) {
				console.log('error profileInformation:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileInformation }
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
			const { data: profileInformation, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					information_sheet_choices: body.get('information_sheet_choices'),
					other_information_sheet: body.get('other_information_sheet')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileInformation:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileInformation }
			};
		}
	);
