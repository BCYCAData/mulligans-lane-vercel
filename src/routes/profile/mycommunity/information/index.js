import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileInformation, error } = await db
		.from('profile')
		.select('information_sheet_choices,other_information_sheet')
		.eq('id', _session.user.id);
	if (null == profileInformation[0].information_sheet_choices) {
		profileInformation[0].information_sheet_choices = [];
	}
	console.log('profileInformation:', profileInformation);
	if (error) {
		console.log('error profileInformation:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileInformation }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileInformation, error } = await db
		.from('profile')
		.update({
			information_sheet_choices: body.get('information_sheet_choices'),
			other_information_sheet: body.get('other_information_sheet')
		})
		.eq('id', _session.user.id);
	if (error) {
		console.log('update error profileInformation:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileInformation }
	};
}
