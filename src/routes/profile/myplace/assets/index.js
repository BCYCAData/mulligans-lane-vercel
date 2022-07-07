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
			const { data: profileData, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'static_water_available,have_stortz,stortz_size,fire_fighting_assets,fire_hazard_reduction'
				)
				.eq('id', locals.user.id);
			console.log('profileAssets', profileData);
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
export const post = async ({ locals, request }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			console.log('first_name', body.get('first_name'));
			const { data: profileAssets, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					static_water_available: body.get('static_water_available'),
					have_stortz: body.get('have_stortz'),
					stortz_size: body.get('stortz_size'),
					fire_fighting_assets: body.get('fire_fighting_assets'),
					fire_hazard_reduction: body.get('fire_hazard_reduction')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileAssets:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileAssets }
			};
		}
	);
