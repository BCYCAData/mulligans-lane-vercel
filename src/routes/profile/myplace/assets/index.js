// @ts-nocheck
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
				.select(
					'static_water_available,have_stortz,stortz_size,fire_fighting_assets,fire_hazard_reduction'
				)
				.eq('id', locals.user.id);

			if (error) {
				console.log('error profileAssets:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileAssets = profileData[0];
				if (null == profileAssets.static_water_available) {
					profileAssets.static_water_available = [];
				}
				if (null == profileAssets.fire_fighting_assets) {
					profileAssets.fire_fighting_assets = [];
				}
				if (null == profileAssets.fire_hazard_reduction) {
					profileAssets.fire_hazard_reduction = [];
				}
				console.log('GET profileAssets', profileAssets);
				return {
					status: 200,
					body: { profileAssets }
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
					static_water_available: body.getAll('static_water_available'),
					have_stortz: body.get('have_stortz'),
					stortz_size: parseInt(body.get('stortz_size')) || 0,
					fire_fighting_assets: body.getAll('fire_fighting_assets'),
					fire_hazard_reduction: body.getAll('fire_hazard_reduction')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileAssets:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profileData.length === 1) {
				let profileAssets = profileData[0];
				console.log('PUT profileAssets', profileAssets);
				return {
					status: 200,
					body: { profileAssets }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);
// function setArray(value) {
// 	if (value == null) {
// 		return [];
// 	} else if (Array.isArray(value)) {
// 		return value;
// 	}
// 	let result = new Array();
// 	result[0] = value;
// 	return result;
// }
