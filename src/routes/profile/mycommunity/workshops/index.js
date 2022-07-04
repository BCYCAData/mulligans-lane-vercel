// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileWorkshops, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'community_workshop_choices,other_community_workshop,will_run_community_workshops'
// 		)
// 		.eq('id', _session.user.id);
// 	if (null == profileWorkshops[0].community_workshop_choices) {
// 		profileWorkshops[0].community_workshop_choices = [];
// 	}
// 	console.log('profileWorkshops:', profileWorkshops);
// 	if (error) {
// 		console.log('error profileWorkshops:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileWorkshops }
// 	};
// }
// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileWorkshops, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			community_workshop_choices: body.get('community_workshop_choices'),
// 			other_community_workshop: body.get('other_community_workshop'),
// 			will_run_community_workshops: body.get('will_run_community_workshops')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileWorkshops:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileWorkshops }
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
			const { data: profileWorkshops, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'community_workshop_choices,other_community_workshop,will_run_community_workshops'
				)
				.eq('id', locals.user.id);
			if (null == profileWorkshops[0].community_workshop_choices) {
				profileWorkshops[0].community_workshop_choices = [];
			}
			console.log('data', profileWorkshops);
			if (error) {
				console.log('error profileWorkshops:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileWorkshops }
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
			const { data: profileWorkshops, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					community_workshop_choices: body.get('community_workshop_choices'),
					other_community_workshop: body.get('other_community_workshop'),
					will_run_community_workshops: body.get('will_run_community_workshops')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileWorkshops:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileWorkshops }
			};
		}
	);
