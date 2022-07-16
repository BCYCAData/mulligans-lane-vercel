import { c as create_ssr_component, k as each, v as validate_component, d as add_attribute, f as escape } from "../../../../../immutable/chunks/index-917ed570.js";
import { k as siteHazardsOptions, e as yesNoMaybeOptions } from "../../../../../immutable/chunks/profileOptions-1cfe764b.js";
/* empty css                                                                            */import { T as TextAreaInput } from "../../../../../immutable/chunks/TextAreaInput-a0cc3933.js";
const Hazards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileHazards } = $$props;
  if ($$props.profileHazards === void 0 && $$bindings.profileHazards && profileHazards !== void 0)
    $$bindings.profileHazards(profileHazards);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileHazardsForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/myplace/hazards"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileHazardsForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-orange-900 text-l font-bold mb-1"}" for="${"site_hazards_list"}">Do you have any of the following on your property?
			</label>
			<div class="${"flex rounded-lg bg-orange-50 mx-3"}"><div class="${"tracking-wide text-lg font-bold mb-1"}" name="${"site_hazards_list"}">${each(siteHazardsOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"site_hazards_list"}"><input name="${"site_hazards"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileHazards.site_hazards.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
							<label for="${"site_hazards"}">${escape(lable)}</label>
						</li>`;
    })}</div></div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "Are there any other hazards on the property that should be noted?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_site_hazards",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileHazards.other_site_hazards
    }, {
      inputValue: ($$value) => {
        profileHazards.other_site_hazards = $$value;
        $$settled = false;
      }
    }, {})}

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"land_adjacent_hazard_list"}">Does any adjoining land represent a hazard?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"land_adjacent_hazard_list"}"><input name="${"land_adjacent_hazard"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileHazards.land_adjacent_hazard ? add_attribute("checked", true, 1) : ""}>
						<label for="${"land_adjacent_hazard"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "Are there other areas that concern you or represent a potential threat?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_hazards",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileHazards.other_hazards
    }, {
      inputValue: ($$value) => {
        profileHazards.other_hazards = $$value;
        $$settled = false;
      }
    }, {})}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Hazards as default
};
