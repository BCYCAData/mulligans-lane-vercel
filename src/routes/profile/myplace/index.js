// import { supabaseClient } from '$lib/dbClient';

// export async function get() {
// 	const _session = supabaseClient.auth.session();
// 	const { data: profileMyPlace, error } = await supabaseClient
// 		.from('profile')
// 		.select(
// 			'property_address_street,property_address_suburb,property_address_postcode,residency_profile,property_rented,agent_name,agent_phone,sign_posted,truck_access,truck_access_other_information,residents0_18,residents19_50,residents51_70,residents71_,vulnerable_residents'
// 		)
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileMyPlace }
// 	};
// }

// export async function post({ request }) {
// 	const _session = supabaseClient.auth.session();
// 	const body = await request.formData();
// 	const { data: profileMyPlace, error } = await supabaseClient
// 		.from('profile')
// 		.update({
// 			property_address_street: body.get('property_address_street'),
// 			property_address_suburb: body.get('property_address_suburb'),
// 			property_address_postcode: body.get('property_address_postcode'),
// 			residency_profile: body.get('residency_profile'),
// 			property_rented: body.get('property_rented'),
// 			agent_name: body.get('agent_name'),
// 			agent_phone: body.get('agent_phone'),
// 			sign_posted: body.get('sign_posted'),
// 			truck_access: body.get('truck_access'),
// 			truck_access_other_information: body.get('truck_access_other_information'),
// 			residents0_18: body.get('residents0_18'),
// 			residents19_50: body.get('residents19_50'),
// 			residents51_70: body.get('residents51_70'),
// 			residents71_: body.get('residents71_'),
// 			vulnerable_residents: body.get('vulnerable_residents')
// 		})
// 		.eq('id', _session.user.id);
// 	if (error) {
// 		console.log('update error profileMyPlace:', error);
// 		return {
// 			status: 400,
// 			body: { error }
// 		};
// 	}
// 	return {
// 		body: { profileMyPlace }
// 	};
// }
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
			const { data: profileMyPlace, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select(
					'property_address_street,property_address_suburb,property_address_postcode,residency_profile,property_rented,agent_name,agent_phone,sign_posted,truck_access,truck_access_other_information,residents0_18,residents19_50,residents51_70,residents71_,vulnerable_residents'
				)
				.eq('id', locals.user.id);
			console.log('data', profileMyPlace);
			if (error) {
				console.log('error profileMyPlace:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				status: 200,
				body: { profileMyPlace }
			};
		}
	);
export const post = async ({ locals, request }) =>
	withPageAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			console.log('first_name', body.get('first_name'));
			const { data: profileMyPlace, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					property_address_street: body.get('property_address_street'),
					property_address_suburb: body.get('property_address_suburb'),
					property_address_postcode: body.get('property_address_postcode'),
					residency_profile: body.get('residency_profile'),
					property_rented: body.get('property_rented'),
					agent_name: body.get('agent_name'),
					agent_phone: body.get('agent_phone'),
					sign_posted: body.get('sign_posted'),
					truck_access: body.get('truck_access'),
					truck_access_other_information: body.get(
						'truck_access_other_information'
					),
					residents0_18: body.get('residents0_18'),
					residents19_50: body.get('residents19_50'),
					residents51_70: body.get('residents51_70'),
					residents71_: body.get('residents71_'),
					vulnerable_residents: body.get('vulnerable_residents')
				})
				.eq('id', locals.user.id);
			if (error) {
				console.log('update error profileMyPlace:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			return {
				body: { profileMyPlace }
			};
		}
	);
