import { db } from '$lib/dbClient';
import { readable } from 'svelte/store';

export const dbUser = readable(null, (set) => {
	set(db.auth.user());
	const unsubscribe = db.auth.onAuthStateChange(async (event, _session) => {
		_session ? set(_session.user) : set(null);
	});
	return () => {
		unsubscribe.data.unsubscribe();
	};
});
