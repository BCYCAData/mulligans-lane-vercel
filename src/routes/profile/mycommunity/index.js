import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileCommunity, error } = await db
		.from('profile')
		.select(
			'stay_in_touch_choices,postal_address_street,postal_address_suburb,postal_address_postcode,other_comments'
		)
		.eq('id', _session.user.id);
	console.log('profileSettings:', profileCommunity);
	if (error) {
		console.log('error profileSettings:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileCommunity }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileCommunity, error } = await db
		.from('profile')
		.update({
			stay_in_touch_choices: body.get('stay_in_touch_choices'),
			postal_address_street: body.get('postal_address_street'),
			postal_address_suburb: body.get('postal_address_suburb'),
			postal_address_postcode: body.get('postal_address_postcode'),
			other_comments: body.get('other_comments')
		})
		.eq('id', _session.user.id);
	if (error) {
		console.log('update error profileCommunity:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileCommunity }
	};
}
