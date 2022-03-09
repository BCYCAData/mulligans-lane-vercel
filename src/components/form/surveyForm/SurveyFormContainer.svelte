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

	export let active_step;
</script>

<div class:hidden={active_step != '1'}>
	<Step1 />
</div>
<div class:hidden={active_step != '13'}>
	<Step12 />
</div>
<form method="post" action="/api/userdata/survey">
	<div class:hidden={active_step != '2'}>
		<Step2 />
	</div>
	<div class:hidden={active_step != '3'}>
		<Step3 />
	</div>
	<div class:hidden={active_step != '4'}>
		<Step4 />
	</div>
	<div class:hidden={active_step != '5'}>
		<Step5 />
	</div>
	<div class:hidden={active_step != '6'}>
		<Step6 />
	</div>
	<div class:hidden={active_step != '7'}>
		<Step7 />
	</div>
	<div class:hidden={active_step != '8'}>
		<Step8 />
	</div>
	<div class:hidden={active_step != '9'}>
		<Step9 />
	</div>
	<div class:hidden={active_step != '10'}>
		<Step10 />
	</div>
	<div class:hidden={active_step != '11'}>
		<Step11 />
	</div>
	<div class:hidden={active_step != '12'}>
		<Step12 />
	</div>
</form>
