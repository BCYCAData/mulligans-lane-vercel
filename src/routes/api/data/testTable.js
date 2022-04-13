import { db } from '$lib/dbClient';

export async function post({ request }) {
	const body = await request.formData();
	// const user = dbAuth.user();
	// console.log(body.get(user));
	// const { data, error } = await db
	// 	.from('Test')
	// 	.insert([{ words: 'otherValue' }]);
	// console.log('error:', error);
	// console.log('data:', data);
	// const { data: working, error } = await db.from('working').select('words');
	const { data, error } = await db
		.from('working')
		.insert([{ words: 'thisValue' }]);
	console.log('error:', error);
	console.log('data:', data);
	return {};
}
