import * as cookie from 'cookie';
// import { db } from '$lib/dbClient';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	if (cookies && cookies.user) {
		event.locals.user = cookies.user;
		event.locals.signInError = cookies.signInError;
		event.locals.authEvent = cookies.authEvent;
	} else {
		event.locals.user = 'guest';
		event.locals.signInError = '';
		event.locals.authenticated = false;
		event.locals.authEvent = '';
	}
	if (event.locals.user !== 'guest') {
		event.locals.authenticated = true;
	}

	const response = await resolve(event, {});

	return response;
}

export async function getSession(event) {
	return {
		user: event.locals.user,
		signInError: event.locals.signInError,
		authenticated: event.locals.authenticated,
		authEvent: event.locals.authEvent
	};
}
