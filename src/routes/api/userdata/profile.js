import { db } from '$lib/dbClient';

export async function get() {
	const { data: survey_responses, error } = await db
		.from('survey_responses')
		.select('*')
		.eq('email_address', 'bcycadata@outlook.com');
	console.log(data);
	return {
		body: { data }
	};
}
