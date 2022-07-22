// @ts-nocheck
import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-sveltekit';

export const GET = async ({ locals }) =>
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { data: profile, error: errorProfile } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.select('*')
				.eq('id', locals.user.id);
			if (errorProfile) {
				console.log('error Get Profile:', errorProfile);
				return {
					status: 400,
					body: { errorProfile }
				};
			}
			if (!profile[0]) {
				const { error: errorAddProfile } = await supabaseServerClient(locals.accessToken)
					.from('profile')
					.insert([{ id: locals.user.id }]);
				if (errorAddProfile) {
					console.log('error Add Profile:', errorAddProfile);
					return {
						status: 400,
						body: { errorAddProfile }
					};
				}
				// const { data: surveyData, error: errorSurveyData } = await db
				const { data: surveyData, error: errorSurveyData } = await supabaseServerClient(
					locals.accessToken
				)
					.from('survey_responses')
					.select('*')
					.eq('email_address', locals.user.email);
				if (errorSurveyData) {
					console.log('error Get Survey Data:', errorSurveyData);
					return {
						status: 400,
						body: { errorSurveyData }
					};
				}
				if (surveyData[0]) {
					resetProfile(surveyData[0], locals.user.id);
				}
			}
			const { data: profileComments, error: errorComments } = await supabaseServerClient(
				locals.accessToken
			)
				.from('profile')
				.select('other_comments')
				.eq('id', locals.user.id);
			if (errorComments) {
				console.log('error Get Other Comments:', errorComments);
				return {
					status: 400,
					body: { errorComments }
				};
			}
			return {
				body: { profileComments }
			};
		}
	);

async function resetProfile(survey, id) {
	let stayInTouchChoices = [survey.stayInTouchChoices];
	withApiAuth(
		{
			user: locals.user
		},
		async () => {
			const { error } = await supabaseServerClient(locals.accessToken)
				.from('profile')
				.update({
					property_address_street: survey.property_address,
					property_address_suburb: survey.suburb,
					residency_profile: survey.residencyProfile,
					sign_posted: survey.signPosted,
					truck_access: survey.truckAccess,
					truck_access_other_information: survey.truckAccessOther,
					mobile: survey.mobile,
					phone: survey.phone,
					mobile_reception: survey.mobileReception,
					residents0_18: survey.residents0_18,
					residents19_50: survey.residents19_50,
					residents51_70: survey.residents51_70,
					residents71_: survey.residents71_,
					vulnerable_residents: survey.vulnerableResidents,
					number_dogs: survey.numberDogs,
					number_cats: survey.numberCats,
					number_birds: survey.numberBirds,
					number_other_pets: survey.numberOtherPets,
					live_stock_present: survey.liveStockPresent,
					live_stock_safe_area: survey.liveStockSafeArea,
					share_livestock_safe_area: survey.shareLiveStockSafeArea,
					static_water_available: survey.staticWaterAvailable,
					have_stortz: survey.haveStortz,
					stortz_size: survey.stortzSize,
					fire_fighting_assets: survey.fireFightingAssets,
					site_hazards: survey.explosiveHazards,
					other_site_hazards: survey.otherSiteHazards,
					fire_hazard_reduction: survey.fireHazardReduction,
					land_adjacent_hazard: survey.landAdjacentHazard,
					other_hazards: survey.otherHazards,
					rfs_survival_plan: survey.rfsSurvivalPlan,
					fire_fighting_experience: survey.fireFightingExperience,
					plan_to_leave_before_fire: survey.planToLeaveBeforeFire,
					plan_to_leave_before_flood: survey.planToLeaveBeforeFlood,
					community_workshop_choices: survey.communityWorkshopChoices,
					other_community_workshop: survey.otherCommunityWorkshop,
					will_run_community_workshops: survey.willRunCommunityWorkshops,
					information_sheet_choices: survey.informationSheetChoices,
					other_information_sheet: survey.otherInformationSheet,
					community_meeting_choices: survey.communityMeetingChoices,
					other_community_meeting: survey.communityMeeting,
					stay_in_touch_choices: stayInTouchChoices,
					other_comments: survey.otherComments
				})
				.eq('id', id);
			if (error) {
				console.log('error Update Profile:', error);
				return {
					status: 400,
					body: { error }
				};
			}
		}
	);
}
