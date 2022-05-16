import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: profileMyPlace, error } = await db
		.from('profile')
		.select(
			'property_address_street,property_address_suburb,property_address_postcode,residency_profile,property_owned,agent_name,agent_phone,sign_posted,truck_access,other_access_information,residents0_18,residents19_50,residents51_70,residents71_,vulnerable_residents'
		)
		.eq('id', _session.user.id);
	if (error) {
		return {
			status: 400,
			body: { error }
		};
	}
	return {
		body: { profileMyPlace }
	};
}

export async function post({ request }) {
	const _session = db.auth.session();
	const body = await request.formData();
	const { data: profileMyPlace, error } = await db
		.from('profile')
		.update({
			property_address_street: body.get('property_address_street'),
			property_address_suburb: body.get('property_address_suburb'),
			property_address_postcode: body.get('property_address_postcode'),
			residency_profile: body.get('residency_profile'),
			property_owned: body.get('property_owned'),
			agent_name: body.get('agent_name'),
			agent_phone: body.get('agent_phone'),
			sign_posted: body.get('sign_posted'),
			truck_access: body.get('truck_access'),
			other_access_information: body.get('other_access_information'),
			residents0_18: body.get('residents0_18'),
			residents19_50: body.get('residents19_50'),
			residents51_70: body.get('residents51_70'),
			residents71_: body.get('residents71_'),
			vulnerable_residents: body.get('vulnerable_residents')
		})
		.eq('id', _session.user.id);
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
