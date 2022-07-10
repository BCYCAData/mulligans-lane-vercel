// @ts-nocheck
import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-sveltekit';

export const get = async ({ locals }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profileData, error } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.select('id')
				.eq('id', locals.user.id);

			if (error) {
				console.log('error profileSettings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileSettings = profileData[0];
				console.log('GET', profileSettings);
				return {
					status: 200,
					body: { profileSettings }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
export const post = async ({ locals, request }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			console.log('first_name', body.get('first_name'));
			const { data: profileData, error } = await supabaseServerClient(locals.accessToken)
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
			if (profileData.length === 1) {
				let profileSettings = profileData[0];
				console.log('PUT', profileSettings);
				return {
					status: 200,
					body: { profileSettings }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
