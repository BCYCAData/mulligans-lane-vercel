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
				.select('community_meeting_choices,other_community_meeting')
				.eq('id', locals.user.id);
			console.log('profileMeetings', profileData);
			if (error) {
				console.log('error profileMeetings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileMeetings = profileData[0];
				if (null == profileMeetings.community_meeting_choices) {
					profileMeetings.community_meeting_choices = [];
				}
				return {
					status: 200,
					body: { profileMeetings }
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
				.update({
					community_meeting_choices: body.getAll('community_meeting_choices'),
					other_community_meeting: body.get('other_community_meeting')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileMeetings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileMeetings = profileData[0];
				return {
					status: 200,
					body: { profileMeetings }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
