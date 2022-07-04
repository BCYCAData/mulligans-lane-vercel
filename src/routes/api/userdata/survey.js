import {
	supabaseServerClient,
	withApiAuth
} from '@supabase/auth-helpers-sveltekit';
import { getFormBody } from '$lib/utils';

export const post = async ({ locals, request }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			const bodyObject = setMissing(getFormBody(body));
			const { data: surveyAnswers, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.update({
					first_name: bodyObject.first_name,
					family_name: bodyObject.family_name,
					property_address_street: bodyObject.property_address_street,
					property_address_suburb: bodyObject.property_address_suburb,
					property_address_postcode: bodyObject.property_address_postcode,
					property_rented: bodyObject.property_rented,
					agent_name: bodyObject.agent_name,
					agent_phone: bodyObject.agent_phone,
					sign_posted: bodyObject.sign_posted,
					truck_access: bodyObject.truck_access,
					truck_access_other_information:
						bodyObject.truck_access_other_information,
					mobile: bodyObject.mobile,
					phone: bodyObject.phone,
					mobile_reception: bodyObject.mobile_reception,
					residency_profile: bodyObject.residency_profile,
					residents0_18: bodyObject.residents0_18,
					residents19_50: bodyObject.residents19_50,
					residents51_70: bodyObject.residents51_70,
					residents71_: bodyObject.residents71_,
					vulnerable_residents: bodyObject.vulnerable_residents,
					number_dogs: bodyObject.number_dogs,
					number_cats: bodyObject.number_cats,
					number_birds: bodyObject.number_birds,
					number_other_pets: bodyObject.number_other_pets,
					live_stock_present: bodyObject.live_stock_present,
					live_stock_safe_area: bodyObject.live_stock_safe_area,
					share_livestock_safe_area: bodyObject.share_livestock_safe_area,
					static_water_available: setArray(bodyObject.static_water_available),
					have_stortz: bodyObject.have_stortz,
					stortz_size: bodyObject.stortz_size,
					fire_fighting_assets: setArray(bodyObject.fire_fighting_assets),
					site_hazards: setArray(bodyObject.site_hazards),
					other_site_hazards: bodyObject.other_site_hazards,
					fire_hazard_reduction: setArray(bodyObject.fire_hazard_reduction),
					land_adjacent_hazard: bodyObject.land_adjacent_hazard,
					other_hazards: bodyObject.other_hazards,
					rfs_survival_plan: bodyObject.rfs_survival_plan,
					send_rfs_survival_plan: bodyObject.send_rfs_survival_plan,
					fire_fighting_experience: bodyObject.fire_fighting_experience,
					fire_trauma: bodyObject.fire_trauma,
					community_workshop_choices: setArray(
						bodyObject.community_workshop_choices
					),
					other_community_workshop: bodyObject.other_community_workshop,
					will_run_community_workshops: bodyObject.will_run_community_workshops,
					information_sheet_choices: setArray(
						bodyObject.information_sheet_choices
					),
					other_information_sheet: bodyObject.other_information_sheet,
					community_meeting_choices: setArray(
						bodyObject.community_meeting_choices
					),
					other_community_meeting: bodyObject.other_community_meeting,
					stay_in_touch_choices: setArray(bodyObject.stay_in_touch_choices),
					other_comments: bodyObject.other_comments
				})
				.eq('id', locals.user.id);
			console.log('Body Object:  ', bodyObject);
			if (error) {
				console.log('update error survey answers:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			console.log('Data:  ', surveyAnswers);
			return {
				status: 200,
				body: { surveyAnswers }
			};
		}
	);

const check = [
	'first_name',
	'family_name',
	'property_address_street',
	'property_address_suburb',
	'property_address_postcode',
	'property_rented',
	'agent_name',
	'agent_phone',
	'sign_posted',
	'truck_access',
	'truck_access_other_information',
	'mobile',
	'phone',
	'mobile_reception',
	'residency_profile',
	'residents0_18',
	'residents19_50',
	'residents51_70',
	'residents71_',
	'vulnerable_residents',
	'number_dogs',
	'number_cats',
	'number_birds',
	'number_other_pets',
	'live_stock_present',
	'live_stock_safe_area',
	'share_livestock_safe_area',
	'static_water_available',
	'have_stortz',
	'stortz_size',
	'fire_fighting_assets',
	'site_hazards',
	'other_site_hazards',
	'fire_hazard_reduction',
	'land_adjacent_hazard',
	'other_hazards',
	'rfs_survival_plan',
	'send_rfs_survival_plan',
	'fire_fighting_experience',
	'fire_trauma',
	'community_workshop_choices',
	'other_community_workshop',
	'will_run_community_workshops',
	'information_sheet_choices',
	'other_information_sheet',
	'community_meeting_choices',
	'other_community_meeting',
	'stay_in_touch_choices',
	'other_comments'
];

function setMissing(data) {
	for (i = 0; i < check.length; i++) {
		if (!data.hasOwnProperty(check[i])) {
			data[check[i]] = null;
		}
	}
	return data;
}

function setArray(value) {
	if (value == null) {
		return [];
	} else if (Array.isArray(value)) {
		return value;
	}
	let result = new Array();
	result[0] = value;
	return result;
}
