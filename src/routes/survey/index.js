import {
	supabaseServerClient,
	withApiAuth
} from '@supabase/auth-helpers-sveltekit';
import { getFormBody } from '$lib/utils';

export const get = async ({ locals }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profile, error } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('*');
			if (error) {
				console.log('error Get Profile:', error);
				return {
					status: 400,
					body: { error }
				};
			}
			if (profile.length === 1) {
				let surveyData = profile[0];
				if (null == surveyData.static_water_available) {
					surveyData.static_water_available = [];
				}
				if (null == surveyData.static_water_available) {
					surveyData.static_water_available = [];
				}
				if (null == surveyData.fire_fighting_assets) {
					surveyData.fire_fighting_assets = [];
				}
				if (null == surveyData.fire_hazard_reduction) {
					surveyData.fire_hazard_reduction = [];
				}
				if (null == surveyData.communityWorkshopChoices) {
					surveyData.community_workshop_choices = [];
				}
				if (null == surveyData.informationSheetChoices) {
					surveyData.information_sheet_choices = [];
				}
				if (null == surveyData.community_meeting_choices) {
					surveyData.community_meeting_choices = [];
				}
				if (null == surveyData.stay_in_touch_choices) {
					surveyData.stay_in_touch_choices = [];
				}
				return {
					status: 200,
					body: { surveyData }
				};
			}
			return {
				status: 400,
				body: {}
			};
		}
	);

export const post = async ({ locals, request }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const body = await request.formData();
			console.log('body', body.get('residents0_18'));
			const bodyObject = setMissing(getFormBody(body));
			console.log('bodyObject', bodyObject.residents0_18);
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
					truck_access: parseInt(bodyObject.truck_access),
					truck_access_other_information:
						bodyObject.truck_access_other_information,
					mobile: bodyObject.mobile,
					phone: bodyObject.phone,
					mobile_reception: parseInt(bodyObject.mobile_reception),
					residency_profile: parseInt(bodyObject.residency_profile),
					residents0_18: parseInt(bodyObject.residents0_18),
					residents19_50: parseInt(bodyObject.residents19_50),
					residents51_70: parseInt(bodyObject.residents51_70),
					residents71_: parseInt(bodyObject.residents71_),
					vulnerable_residents: bodyObject.vulnerable_residents,
					number_dogs: parseInt(bodyObject.number_dogs),
					number_cats: parseInt(bodyObject.number_cats),
					number_birds: parseInt(bodyObject.number_birds),
					number_other_pets: parseInt(bodyObject.number_other_pets),
					live_stock_present: bodyObject.live_stock_present,
					live_stock_safe_area: bodyObject.live_stock_safe_area,
					share_livestock_safe_area: bodyObject.share_livestock_safe_area,
					static_water_available: setArray(bodyObject.static_water_available),
					have_stortz: bodyObject.have_stortz,
					stortz_size: parseInt(bodyObject.stortz_size),
					fire_fighting_assets: setArray(bodyObject.fire_fighting_assets),
					site_hazards: setArray(bodyObject.site_hazards),
					other_site_hazards: bodyObject.other_site_hazards,
					fire_hazard_reduction: setArray(bodyObject.fire_hazard_reduction),
					land_adjacent_hazard: bodyObject.land_adjacent_hazard,
					other_hazards: bodyObject.other_hazards,
					rfs_survival_plan: bodyObject.rfs_survival_plan,
					send_rfs_survival_plan: bodyObject.send_rfs_survival_plan,
					fire_fighting_experience: parseInt(
						bodyObject.fire_fighting_experience
					),
					fire_trauma: bodyObject.fire_trauma,
					plan_to_leave_before_fire: parseInt(
						bodyObject.plan_to_leave_before_fire
					),
					plan_to_leave_before_flood: parseInt(
						bodyObject.plan_to_leave_before_flood
					),
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
				console.log('update error profileCommunity:', error);
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
