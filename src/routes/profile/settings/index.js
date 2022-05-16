import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileSettings, error } = await db
		.from('profile')
		.select(
			'stay_in_touch_choices,postal_address_street,postal_address_suburb,postal_address_postcode'
		)
		.eq('id', _session.user.id);
	console.log('profileSettings:', profileSettings);
	if (error) {
		console.log('error profileSettings:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileSettings }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileSettings, error } = await db
		.from('profile')
		.update({})
		.eq('id', _session.user.id);
	if (error) {
		console.log('update error profileSettings:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileSettings }
	};
}
