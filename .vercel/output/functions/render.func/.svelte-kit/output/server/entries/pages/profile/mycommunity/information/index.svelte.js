import { c as create_ssr_component, k as each, v as validate_component, d as add_attribute, f as escape } from "../../../../../_app/immutable/chunks/index-9cfba6ed.js";
import { i as informationSheetOptions } from "../../../../../_app/immutable/chunks/profileOptions-a101d701.js";
import { T as TextAreaInput } from "../../../../../_app/immutable/chunks/TextAreaInput-76e89ab9.js";
/* empty css                                                                                 */const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileInformation } = $$props;
  if ($$props.profileInformation === void 0 && $$bindings.profileInformation && profileInformation !== void 0)
    $$bindings.profileInformation(profileInformation);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileInformationForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/mycommunity/information"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileInformationForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-orange-900 text-l font-bold mb-1"}" for="${"information_sheet_choices_list"}">What information sheets would be useful to you?
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(informationSheetOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"information_sheet_choices_list"}"><input name="${"information_sheet_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileInformation.information_sheet_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
						<label for="${"information_sheet_choices"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "Are there other information sheets that you would find useful?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_information_sheet",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileInformation.other_information_sheet
    }, {
      inputValue: ($$value) => {
        profileInformation.other_information_sheet = $$value;
        $$settled = false;
      }
    }, {})}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Information as default
};
