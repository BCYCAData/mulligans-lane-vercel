import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileHazards, error } = await db
		.from('profile')
		.select(
			'site_hazards,other_site_hazards,land_adjacent_hazard,other_hazards'
		)
		.eq('id', _session.user.id);
	if (error) {
		console.log('error profileHazards:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileHazards }
	};
}

export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileHazards, error } = await db
		.from('profile')
		.update({
			site_hazards: body.get('site_hazards'),
			other_site_hazards: body.get('other_site_hazards'),
			land_adjacent_hazard: body.get('land_adjacent_hazard'),
			other_hazards: body.get('other_hazards')
		})
		.eq('id', _session.user.id);
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
