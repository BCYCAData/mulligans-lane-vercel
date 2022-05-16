export async function post({ request }) {
	const body = await request.formData;

	return {
		status: 302,
		headers: {
			location: '/profile'
		}
	};
}
