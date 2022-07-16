import { c as create_ssr_component, d as add_attribute, k as each, f as escape } from "../../../../immutable/chunks/index-917ed570.js";
import { y as yesNoSendOptions, f as fireFightingExperienceOptions, a as yesNoOptions, s as stayGoOptions } from "../../../../immutable/chunks/profileOptions-1cfe764b.js";
/* empty css                                                                         */const Aboutme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileAboutMe } = $$props;
  if ($$props.profileAboutMe === void 0 && $$bindings.profileAboutMe && profileAboutMe !== void 0)
    $$bindings.profileAboutMe(profileAboutMe);
  return `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileAboutMeForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/aboutme"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileAboutMeForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row mx-2"}"><div class="${"flex flex-col basis-full mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"fullname"}">First name:</label>
				<input type="${"text"}" name="${"first_name"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"First Name"}" autocomplete="${"given-name"}"${add_attribute("value", profileAboutMe.first_name, 0)}></div>
			<div class="${"flex flex-col basis-full mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"family_name"}">Family name:</label>
				<input type="${"text"}" name="${"family_name"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Family Name"}" autocomplete="${"family_name"}" style="${"text-transform:capitalize"}"${add_attribute("value", profileAboutMe.family_name, 0)}></div></div>

		
		<div class="${"flex flex-row justify-between items-center py-2 mx-2"}"><label class="${"text-lg font-bold mx-2"}" for="${"phone"}">Landline:</label>
			<input type="${"tel"}" name="${"phone"}" class="${"border w-full border-orange-700 rounded py-1 mx-2 sm:text-lg"}" placeholder="${"Landline XXXX XXXX"}"${add_attribute("value", profileAboutMe.phone, 0)}>
			
			<label class="${"text-lg font-bold mx-2"}" for="${"mobile"}">Mobile:</label>
			<input type="${"tel"}" name="${"mobile"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 mx-2 sm:text-lg"}" placeholder="${"Mobile 0XXX XXX XXX"}"${add_attribute("value", profileAboutMe.mobile, 0)}>
			</div>

		
		<div class="${"flex flex-row justify-around items-center mx-2"}"><label class="${"justify-end text-lg font-bold"}" for="${"mobile_reception_list"}">Mobile Reception:
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50"}" style="${"align-items: center"}"><div class="${"font-semibold text-sm px-4 sm:text-base text-orange-900"}">Poor</div>
				${each(Array(5), (_, i) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:px-5"}" name="${"mobile_reception_list"}"><label class="${"pl-2"}" for="${"mobile_reception"}">${escape(i + 1)}
							<br>
							<input name="${"mobile_reception"}" type="${"radio"}"${add_attribute("value", i + 1, 0)}${i + 1 === profileAboutMe.mobile_reception ? add_attribute("checked", true, 1) : ""}></label>
					</li>`;
  })}
				<div class="${"font-semibold text-sm px-4 sm:text-base text-orange-900"}">Excellent</div></div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"rfs_survival_plan_list"}">Have you made an RFS Bushfire survival plan?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1"}">${each(yesNoSendOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"live_stock_safe_area_list"}"><input name="${"rfs_survival_plan"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAboutMe.rfs_survival_plan ? add_attribute("checked", true, 1) : ""}>
						<label for="${"rfs_survival_plan"}">${escape(lable)}</label>
					</li>`;
  })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"fire_fighting_experience_list"}">What is your level of firefighting experience?
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(fireFightingExperienceOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"fire_fighting_experience_list"}"><input name="${"fire_fighting_experience"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAboutMe.fire_fighting_experience ? add_attribute("checked", true, 1) : ""}>
						<label for="${"fire_fighting_experience"}">${escape(lable)}</label>
					</li>`;
  })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"fire_trauma_list"}">Have you had unpleasant traumatic experience of bushfire?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50"}">${each(yesNoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"fire_trauma_list"}"><label class="${"pl-2"}" for="${"fire_trauma"}">${escape(lable)}
							<input name="${"fire_trauma"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAboutMe.fire_trauma ? add_attribute("checked", true, 1) : ""}></label>
					</li>`;
  })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"plan_to_leave_before_fire_list"}">If your property is threatened by fire, are you:
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(stayGoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"plan_to_leave_before_fire_list"}"><input name="${"plan_to_leave_before_fire"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAboutMe.plan_to_leave_before_fire ? add_attribute("checked", true, 1) : ""}>
						<label for="${"plan_to_leave_before_fire"}">${escape(lable)}</label>
					</li>`;
  })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"plan_to_leave_before_flood_list"}">If your property is threatened by flood, are you:
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(stayGoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"plan_to_leave_before_flood_list"}"><input name="${"plan_to_leave_before_flood"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAboutMe.plan_to_leave_before_flood ? add_attribute("checked", true, 1) : ""}>
						<label for="${"plan_to_leave_before_flood"}">${escape(lable)}</label>
					</li>`;
  })}</div></div></form></section>`;
});
export {
  Aboutme as default
};
