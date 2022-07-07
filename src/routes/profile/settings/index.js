import {
	supabaseServerClient,
	withApiAuth
} from '@supabase/auth-helpers-sveltekit';

export const get = async ({ locals }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profileSettings, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('id')
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
	withApiAuth(
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
