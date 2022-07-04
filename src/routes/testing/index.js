import {
	supabaseServerClient,
	withPageAuth
} from '@supabase/auth-helpers-sveltekit';

export const get = async ({ locals, request }) =>
	withPageAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profile, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('*');
			console.log('data', profile);
			return {
				status: 200,
				body: { profile }
			};
		}
	);

// import {
// 	supabaseServerClient,
// 	withApiAuth
// } from '@supabase/auth-helpers-sveltekit';

// export const get = ({ locals, request }) =>
// 	withApiAuth({ user: locals.user }, async () => {
// 		// Run queries with RLS on the server
// 		const { data } = await supabaseServerClient(request)
// 			.from('profile')
// 			.select('*');
// 		return {
// 			status: 200,
// 			body: data
// 		};
// 	});
