// @ts-nocheck
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
				.select('site_hazards,other_site_hazards,land_adjacent_hazard,other_hazards')
				.eq('id', locals.user.id);
			console.log('GET Data', profileData);
			if (error) {
				console.log('error profileHazards:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileHazards = profileData[0];
				if (null == profileHazards.site_hazards) {
					profileHazards.site_hazards = [];
				}
				return {
					status: 200,
					body: { profileHazards }
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
					site_hazards: body.getAll('site_hazards'),
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
			if (profileData.length === 1) {
				let profileHazards = profileData[0];
				return {
					status: 200,
					body: { profileHazards }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
