import { db } from '$lib/dbClient';

export async function get() {
	const _session = db.auth.session();
	const { data: surveyResponses, error: errorsurveyResponses } = await db
		.from('profile')
		.select('*')
		.eq('id', _session.user.id);
	let surveyData = surveyResponses[0];
	console.log('surveyResponses:', surveyResponses[0]);
	if (null == surveyData.static_water_available) {
		surveyData.static_water_available = [];
	}
	if (null == surveyData.static_water_available) {
		surveyData.static_water_available = [];
	}
	if (null == surveyData.fireFightingAssets) {
		surveyData.fireFightingAssets = [];
	}
	if (null == surveyData.explosiveHazards) {
		surveyData.explosiveHazards = [];
	}
	if (null == surveyData.communityWorkshopChoices) {
		surveyData.communityWorkshopChoices = [];
	}
	if (null == surveyData.informationSheetChoices) {
		surveyData.informationSheetChoices = [];
	}
	if (null == surveyData.communityMeetingChoices) {
		surveyData.communityMeetingChoices = [];
	}
	if (null == surveyData.stayInTouchChoices) {
		surveyData.stayInTouchChoices = [];
	}

	if (errorsurveyResponses) {
		console.log('error:', errorsurveyResponses);
		return {
			status: 400,
			body: { errorsurveyResponses }
		};
	}
	return {
		body: { surveyData }
	};
}
