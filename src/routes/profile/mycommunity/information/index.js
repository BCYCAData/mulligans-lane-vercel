// @ts-nocheck
// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileInformation, error } = await supabaseClient
// 		.from('profile')
// 		.select('information_sheet_choices,other_information_sheet')
// 		.eq('id', _session.user.id);
// 	if (null == profileInformation.information_sheet_choices) {
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
import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-sveltekit';

export const GET = async ({ locals, request }) =>
	withApiAuth(
		{
			redirectTo: '/auth/signin',
			user: locals.user
		},
		async () => {
			const { data: profileData, error } = await supabaseServerClient(request)
				.from('profile')
				.select('information_sheet_choices,other_information_sheet')
				.eq('id', locals.user.id);
			console.log('profileInformation', profileData);
			if (error) {
				console.log('error profileInformation:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileInformation = profileData[0];
				if (null == profileInformation.information_sheet_choices) {
					profileInformation.information_sheet_choices = [];
				}
				return {
					status: 200,
					body: { profileInformation }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
export const POST = async ({ locals, request }) =>
	withApiAuth(
		{
			redirectTo: '/auth/signin',
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			const { data: profileData, error } = await supabaseServerClient(request)
				.from('profile')
				.update({
					information_sheet_choices: body.getAll('information_sheet_choices'),
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
			if (profileData.length === 1) {
				let profileInformation = profileData[0];
				return {
					status: 200,
					body: { profileInformation }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
