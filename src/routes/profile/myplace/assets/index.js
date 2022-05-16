import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileAssets, error } = await db
		.from('profile')
		.select(
			'static_water_available,have_stortz,stortz_size,fire_fighting_assets,fire_hazard_reduction'
		)
		.eq('id', _session.user.id);
	console.log('profileAssets:', profileAssets);
	if (error) {
		console.log('error profileAssets:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileAssets }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileAssets, error } = await db
		.from('profile')
		.update({
			static_water_available: body.get('static_water_available'),
			have_stortz: body.get('have_stortz'),
			stortz_size: body.get('stortz_size'),
			fire_fighting_assets: body.get('fire_fighting_assets'),
			fire_hazard_reduction: body.get('fire_hazard_reduction')
		})
		.eq('id', _session.user.id);
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
