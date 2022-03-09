import supabaseConnection from '$lib/dbClient';

export async function post({ request }) {
	const { error } = await supabaseConnection.auth.signOut();

	if (error) {
		// return validation errors
		return {
			status: 400,
			body: { error }
		};
	}

	// redirect to the newly created item
	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
}
