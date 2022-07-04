// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileAboutMe, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'first_name,family_name,mobile,phone,mobile_reception,rfs_survival_plan,send_rfs_survival_plan,fire_fighting_experience,fire_trauma,plan_to_leave_before_fire,plan_to_leave_before_flood'
// 		)
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('error profileAboutMe:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileAboutMe }
// 	};
// }

// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	console.log('first_name', body.get('first_name'));
// 	const { data: profileAboutMe, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			first_name: body.get('first_name'),
// 			family_name: body.get('family_name'),
// 			phone: body.get('phone'),
// 			mobile: body.get('mobile'),
// 			mobile_reception: body.get('mobile_reception'),
// 			rfs_survival_plan: body.get('rfs_survival_plan'),
// 			fire_fighting_experience: body.get('fire_fighting_experience'),
// 			plan_to_leave_before_fire: body.get('plan_to_leave_before_fire'),
// 			plan_to_leave_before_flood: body.get('plan_to_leave_before_flood')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileAboutMe:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileAboutMe }
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
			const { data: profileAboutMe, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'first_name,family_name,mobile,phone,mobile_reception,rfs_survival_plan,send_rfs_survival_plan,fire_fighting_experience,fire_trauma,plan_to_leave_before_fire,plan_to_leave_before_flood'
				)
				.eq('id', locals.user.id);
			console.log('profileAboutMe', profileAboutMe);
			if (error) {
				console.log('error profileAboutMe:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileAboutMe }
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
			const { data: profileAboutMe, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					first_name: body.get('first_name'),
					family_name: body.get('family_name'),
					phone: body.get('phone'),
					mobile: body.get('mobile'),
					mobile_reception: body.get('mobile_reception'),
					rfs_survival_plan: body.get('rfs_survival_plan'),
					fire_fighting_experience: body.get('fire_fighting_experience'),
					plan_to_leave_before_fire: body.get('plan_to_leave_before_fire'),
					plan_to_leave_before_flood: body.get('plan_to_leave_before_flood')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileAboutMe:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileAboutMe }
			};
		}
	);
