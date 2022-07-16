import { c as create_ssr_component, k as each, e as add_classes, d as add_attribute, v as validate_component, f as escape } from "../../../../immutable/chunks/index-917ed570.js";
import { b as stayInTouchOptions } from "../../../../immutable/chunks/profileOptions-1cfe764b.js";
import { T as TextAreaInput } from "../../../../immutable/chunks/TextAreaInput-a0cc3933.js";
/* empty css                                                                         */const Mycommunity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileCommunity } = $$props;
  if ($$props.profileCommunity === void 0 && $$bindings.profileCommunity && profileCommunity !== void 0)
    $$bindings.profileCommunity(profileCommunity);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileCommunityForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/mycommunity"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileCommunityForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"stay_in_touch_choices_list"}">How would you prefer to stay in touch?
			</label>
			<div class="${"flex rounded-lg bg-orange-50 mx-3"}"><div class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"stay_in_touch_choices_list"}">${each(stayInTouchOptions, ({ value, lable }) => {
      return `<li><input name="${"stay_in_touch_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileCommunity.stay_in_touch_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
							<label for="${"stay_in_touch_choices"}">${escape(lable)}</label>
						</li>`;
    })}</div></div></div>

		
		<div${add_classes((!profileCommunity.stay_in_touch_choices.includes(5) ? "hidden" : "").trim())}><div class="${"flex flex-row mx-2"}"><div class="${"flex flex-col basis-7/12 mx-2"}"><label class="${"tracking-wide text-lg font-bold mb-1"}" for="${"postal_address_street"}">Postal address
					</label>
					<input type="${"text"}" name="${"postal_address_street"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Street Address"}" autocomplete="${"street-address"}" style="${"text-transform:uppercase sm:text-lg"}"${add_attribute("value", profileCommunity.postal_address_street, 0)}></div>
				<div class="${"flex flex-col basis-3/12 mx-2"}"><label class="${"tracking-wide text-lg font-bold mb-1"}" for="${"postal_address_suburb"}">Suburb
					</label>
					<input type="${"text"}" name="${"postal_address_suburb"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Suburb"}" autocomplete="${""}" style="${"text-transform:uppercase sm:text-lg"}"${add_attribute("value", profileCommunity.postal_address_suburb, 0)}></div>
				<div class="${"flex flex-col basis-2/12 mx-2"}"><label class="${"tracking-wide text-lg font-bold mb-1"}" for="${"postal_address_postcode"}">Postcode
					</label>
					<input type="${"text"}" name="${"postal_address_postcode"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Postcode"}" autocomplete="${""}"${add_attribute("value", profileCommunity.postal_address_postcode, 0)}></div></div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "If you have any other comments, add them here.",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_community_workshop",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileCommunity.other_comments
    }, {
      inputValue: ($$value) => {
        profileCommunity.other_comments = $$value;
        $$settled = false;
      }
    }, {})}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Mycommunity as default
};
