import { handleUser, handleCallback } from '@supabase/auth-helpers-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
	handleCallback({
		cookieOptions: { lifetime: 1 * 365 * 24 * 60 * 60 }
	}),
	handleUser({
		cookieOptions: { lifetime: 1 * 365 * 24 * 60 * 60 }
	})
);

export const getSession = async (event) => {
	const { user, accessToken, error } = event.locals;
	return {
		user,
		accessToken,
		error
	};
};
