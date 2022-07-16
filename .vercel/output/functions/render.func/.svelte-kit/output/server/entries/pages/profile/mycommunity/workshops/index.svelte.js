import { c as create_ssr_component, k as each, v as validate_component, d as add_attribute, f as escape } from "../../../../../immutable/chunks/index-917ed570.js";
import { d as communityWorkshopOptions } from "../../../../../immutable/chunks/profileOptions-1cfe764b.js";
import { T as TextAreaInput } from "../../../../../immutable/chunks/TextAreaInput-a0cc3933.js";
/* empty css                                                                            */const Workshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileWorkshops } = $$props;
  if ($$props.profileWorkshops === void 0 && $$bindings.profileWorkshops && profileWorkshops !== void 0)
    $$bindings.profileWorkshops(profileWorkshops);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileWorkshopsForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/mycommunity/workshops"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileWorkshopsForm"}">Save My Answers
			</button>

			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"community_workshop_choices_list"}">Which of these community initiated workshops <br>
				would be useful to you?
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(communityWorkshopOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"community_workshop_choices"}"><input name="${"community_workshop_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileWorkshops.community_workshop_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
						<label for="${"community_workshop_choices"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "If there are other workshops that you would like to see run, please add\r\n			the details here",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_community_workshop",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileWorkshops.other_community_workshop
    }, {
      inputValue: ($$value) => {
        profileWorkshops.other_community_workshop = $$value;
        $$settled = false;
      }
    }, {})}

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "If you would like to help run any of the workshops, please indicate which\r\n			ones below.",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "will_run_community_workshops",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileWorkshops.will_run_community_workshops
    }, {
      inputValue: ($$value) => {
        profileWorkshops.will_run_community_workshops = $$value;
        $$settled = false;
      }
    }, {})}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Workshops as default
};
