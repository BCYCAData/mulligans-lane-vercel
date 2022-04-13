import { db } from '$lib/dbClient';

export async function get() {
	const { data: survey_responses, error } = await db
		.from('survey_responses')
		.select('*')
		.eq('emailAddress', 'bcycadata@outlook.com');
	console.log('survey_responses:', survey_responses);
	if (error) {
		console.log('error:', error);
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { survey_responses }
	};
}
