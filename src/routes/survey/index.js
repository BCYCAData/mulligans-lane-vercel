import supabaseConnection from '$lib/dbClient';

// // params.id comes from route path/items/[id].js
// export async function get({ params }) {
// 	console.log('Params:  ', params);
// 	// const a = await supabaseConnection.get(params.id);
// 	const a = 'Bewdy';
// 	if (a) {
// 		return {
// 			body: { a }
// 		};
// 	}
// 	return {
// 		status: 404
// 	};
// }
export async function post({ request }) {
	const body = await request.formData();
	// console.log(request);
	// const items = [...body.entries()];
	// console.log(items);
	const bodyObject = getFormBody(body);
	console.log('Body:  ', bodyObject);

	// const { data, error } = await supabaseConnection
	// 	.from('tablename')
	// 	.insert([{ bodyObject }]); //{name: 'value', field: 'value'}
}
