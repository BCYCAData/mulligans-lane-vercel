import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileMeetings, error } = await db
		.from('profile')
		.select('community_meeting_choices,other_community_meeting')
		.eq('id', _session.user.id);
	if (null == profileMeetings[0].community_meeting_choices) {
		profileMeetings[0].community_meeting_choices = [];
	}
	console.log('profileMeetings:', profileMeetings);
	if (error) {
		console.log('error profileMeetings:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileMeetings }
	};
}
export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileMeetings, error } = await db
		.from('profile')
		.update({
			community_meeting_choices: body.get('community_meeting_choices'),
			other_community_meeting: body.get('other_community_meeting')
		})
		.eq('id', _session.user.id);
	if (error) {
		console.log('update error profileMeetings:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileMeetings }
	};
}
