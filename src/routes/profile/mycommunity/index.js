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
				.select(
					'stay_in_touch_choices,postal_address_street,postal_address_suburb,postal_address_postcode,other_comments'
				)
				.eq('id', locals.user.id);
			console.log('profileCommunity', profileData);
			if (error) {
				console.log('error profileCommunity:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileCommunity = profileData[0];
				if (null == profileCommunity.stay_in_touch_choices) {
					profileCommunity.stay_in_touch_choices = [];
				}
				return {
					status: 200,
					body: { profileCommunity }
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
			const { data: profileData, error } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.update({
					stay_in_touch_choices: body.getAll('stay_in_touch_choices'),
					postal_address_street: body.get('postal_address_street'),
					postal_address_suburb: body.get('postal_address_suburb'),
					postal_address_postcode: body.get('postal_address_postcode'),
					other_comments: body.get('other_comments')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileCommunity:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileCommunity = profileData[0];
				return {
					status: 200,
					body: { profileCommunity }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
