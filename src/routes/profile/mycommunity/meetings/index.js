// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileMeetings, error } = await supabaseClient
// 		.from('profile')
// 		.select('community_meeting_choices,other_community_meeting')
// 		.eq('id', _session.user.id);
// 	if (null == profileMeetings[0].community_meeting_choices) {
// 		profileMeetings[0].community_meeting_choices = [];
// 	}
// 	console.log('profileMeetings:', profileMeetings);
// 	if (error) {
// 		console.log('error profileMeetings:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileMeetings }
// 	};
// }
// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileMeetings, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			community_meeting_choices: body.get('community_meeting_choices'),
// 			other_community_meeting: body.get('other_community_meeting')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileMeetings:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileMeetings }
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
			const { data: profileMeetings, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('community_meeting_choices,other_community_meeting')
				.eq('id', locals.user.id);
			if (null == profileMeetings[0].community_meeting_choices) {
				profileMeetings[0].community_meeting_choices = [];
			}
			console.log('data', profileMeetings);
			if (error) {
				console.log('error profileMeetings:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileMeetings }
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
			const { data: profileMeetings, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					community_meeting_choices: body.get('community_meeting_choices'),
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
			return {
				body: { profileMeetings }
			};
		}
	);
