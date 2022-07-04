<script>
	import Step1 from '$components/form/surveyForm/Step1.svelte';
	import Step2 from '$components/form/surveyForm/Step2.svelte';
	import Step3 from '$components/form/surveyForm/Step3.svelte';
	import Step4 from '$components/form/surveyForm/Step4.svelte';
	import Step5 from '$components/form/surveyForm/Step5.svelte';
	import Step6 from '$components/form/surveyForm/Step6.svelte';
	import Step7 from '$components/form/surveyForm/Step7.svelte';
	import Step8 from '$components/form/surveyForm/Step8.svelte';
	import Step9 from '$components/form/surveyForm/Step9.svelte';
	import Step10 from '$components/form/surveyForm/Step10.svelte';
	import Step11 from '$components/form/surveyForm/Step11.svelte';
	import Step12 from '$components/form/surveyForm/Step12.svelte';

	const handleSubmit = async () => {};

	export let active_step;
	export let surveyData;
</script>

<div
	class="p-1 text-center text-orange-700"
	hidden={active_step == '1' || active_step == '12'}
>
	Please complete all steps and tap <span
		class="p-1 rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
		>Save My Answers</span
	> at Step 12
</div>
<form method="post" action="/survey" id="surveyForm">
	<div hidden={active_step != '1'}>
		<Step1 />
	</div>
	<div hidden={active_step != '2'}>
		<Step2 {surveyData} />
	</div>
	<div hidden={active_step != '3'}>
		<Step3 {surveyData} />
	</div>
	<div hidden={active_step != '4'}>
		<Step4 {surveyData} />
	</div>
	<div hidden={active_step != '5'}>
		<Step5 {surveyData} />
	</div>
	<div hidden={active_step != '6'}>
		<Step6 {surveyData} />
	</div>
	<div hidden={active_step != '7'}>
		<Step7 {surveyData} />
	</div>
	<div hidden={active_step != '8'}>
		<Step8 {surveyData} />
	</div>
	<div hidden={active_step != '9'}>
		<Step9 {surveyData} />
	</div>
	<div hidden={active_step != '10'}>
		<Step10 {surveyData} />
	</div>
	<div hidden={active_step != '11'}>
		<Step11 {surveyData} />
	</div>
	<div hidden={active_step != '12'}>
		<Step12 {surveyData} />
	</div>
	<div class="flex flex-col justify-center items-center sm:text-lg">
		<button
			class="w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"
			hidden={active_step != '12'}
			type="submit"
			form="surveyForm">Save My Answers</button
		>
	</div>
</form>
