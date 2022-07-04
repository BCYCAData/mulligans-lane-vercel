// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileHazards, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'site_hazards,other_site_hazards,land_adjacent_hazard,other_hazards'
// 		)
// 		.eq('id', _session.user.id);
// 	console.log('profileHazards:', profileHazards);
// 	if (null == profileHazards[0].site_hazards) {
// 		profileHazards[0].site_hazards = [];
// 	}
// 	if (error) {
// 		console.log('error profileHazards:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileHazards }
// 	};
// }

// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileHazards, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			site_hazards: body.get('site_hazards'),
// 			other_site_hazards: body.get('other_site_hazards'),
// 			land_adjacent_hazard: body.get('land_adjacent_hazard'),
// 			other_hazards: body.get('other_hazards')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileHazards:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileHazards }
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
			const { data: profileHazards, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'site_hazards,other_site_hazards,land_adjacent_hazard,other_hazards'
				)
				.eq('id', locals.user.id);
			console.log('data', profileHazards);
			if (null == profileHazards[0].site_hazards) {
				profileHazards[0].site_hazards = [];
			}
			if (error) {
				console.log('error profileHazards:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileHazards }
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
			const { data: profileHazards, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					site_hazards: body.get('site_hazards'),
					other_site_hazards: body.get('other_site_hazards'),
					land_adjacent_hazard: body.get('land_adjacent_hazard'),
					other_hazards: body.get('other_hazards')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileHazards:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileHazards }
			};
		}
	);
