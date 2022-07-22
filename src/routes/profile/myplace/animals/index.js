// @ts-nocheck
// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileAnimals, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'number_dogs,number_cats,number_birds,number_other_pets,live_stock_present,live_stock_safe_area,share_livestock_safe_area'
// 		)
// 		.eq('id', _session.user.id);
// 	console.log('profileAnimals:', profileAnimals);
// 	if (error) {
// 		console.log('error profileAnimals:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileAnimals }
// 	};
// }
// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileAnimals, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			number_dogs: body.get('number_dogs'),
// 			number_cats: body.get('number_cats'),
// 			number_birds: body.get('number_birds'),
// 			number_other_pets: body.get('number_other_pets'),
// 			live_stock_present: body.get('live_stock_present'),
// 			number_otlive_stock_safe_areaher_pets: body.get('live_stock_safe_area'),
// 			share_livestock_safe_area: body.get('share_livestock_safe_area')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileAnimals:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileAnimals }
// 	};
// }
import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-sveltekit';

export const GET = async ({ locals }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profileData, error } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.select(
					'number_dogs,number_cats,number_birds,number_other_pets,live_stock_present,live_stock_safe_area,share_livestock_safe_area'
				)
				.eq('id', locals.user.id);
			console.log('profileAnimals', profileData);
			if (error) {
				console.log('error profileAnimals:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileAnimals = profileData[0];
				return {
					status: 200,
					body: { profileAnimals }
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
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			const { data: profileData, error } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.update({
					number_dogs: parseInt(body.get('number_dogs')) || 0,
					number_cats: parseInt(body.get('number_cats')) || 0,
					number_birds: parseInt(body.get('number_birds')) || 0,
					number_other_pets: parseInt(body.get('number_other_pets')) || 0,
					live_stock_present: body.get('live_stock_present'),
					live_stock_safe_area: body.get('live_stock_safe_area'),
					share_livestock_safe_area: body.get('share_livestock_safe_area')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileAnimals:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileAnimals = profileData[0];
				return {
					status: 200,
					body: { profileAnimals }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
