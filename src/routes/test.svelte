<script>
	import { residencyOptions, yesNoOptions } from '$lib/surveyOptions';

	import SurveyInput from '$components/form/inputs/SurveyInput.svelte';

	const headingClass = 'py-2 px-2 p-0 rounded-lg bg-[#FDBA74]';
	const ulClass = 'flex justify-center px-3';
	const liClass = 'flex-auto';
	const inputClass =
		'block border w-full max-w-3xl border-orange-700 p-1 rounded';
	const required = true;
</script>

<div class="w-screen py-3 px-3 p-0 bg-[#FFEFD5]">
	<SurveyInput
		headingText="What is your property address?"
		{headingClass}
		inputType="text"
		inputName="property_address"
		inputRequired={required}
		inputPlaceholder="Property Address"
		{inputClass}
	/>
	<SurveyInput
		headingText="Are you:"
		{headingClass}
		inputType="radio"
		inputName="residency_profile"
		inputRequired={required}
		{inputClass}
		optionsArray={residencyOptions}
	/>
	<SurveyInput
		headingText="Is your property well sign_posted and numbered clearly from the road?"
		{headingClass}
		inputType="radio"
		{ulClass}
		{liClass}
		inputName="sign_posted"
		inputRequired={required}
		{inputClass}
		optionsArray={yesNoOptions}
	/>
</div>
