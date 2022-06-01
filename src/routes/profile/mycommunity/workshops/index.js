import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileWorkshops, error } = await db
		.from('profile')
		.select(
			'community_workshop_choices,other_community_workshop,will_run_community_workshops'
		)
		.eq('id', _session.user.id);
	if (null == profileWorkshops[0].community_workshop_choices) {
		profileWorkshops[0].community_workshop_choices = [];
	}
	console.log('profileWorkshops:', profileWorkshops);
	if (error) {
		console.log('error profileWorkshops:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileWorkshops }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileWorkshops, error } = await db
		.from('profile')
		.update({
			community_workshop_choices: body.get('community_workshop_choices'),
			other_community_workshop: body.get('other_community_workshop'),
			will_run_community_workshops: body.get('will_run_community_workshops')
		})
		.eq('id', _session.user.id);
	if (error) {
		console.log('update error profileWorkshops:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileWorkshops }
	};
}
