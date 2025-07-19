import type { Handle, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => {
				const dir = locale === 'ar' ? 'rtl' : 'ltr';
				return html.replace('%lang%', locale).replace('%dir%', dir);
			}
		});
	});

const handlePocketBase: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	return resolve(event);
};

export const handle: Handle = sequence(handleParaglide, handlePocketBase);

export const handleError: HandleServerError = async ({ error }) => {
	console.log('From HandleServerError');
	console.log( error);

	return {
		message: 'Whoops'
	};
};
