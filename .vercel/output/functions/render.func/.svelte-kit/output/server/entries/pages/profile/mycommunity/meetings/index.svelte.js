import { c as create_ssr_component, k as each, v as validate_component, d as add_attribute, f as escape } from "../../../../../_app/immutable/chunks/index-9cfba6ed.js";
import { c as communityMeetingOptions } from "../../../../../_app/immutable/chunks/profileOptions-a101d701.js";
import { T as TextAreaInput } from "../../../../../_app/immutable/chunks/TextAreaInput-76e89ab9.js";
/* empty css                                                                                 */const Meetings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileMeetings } = $$props;
  if ($$props.profileMeetings === void 0 && $$bindings.profileMeetings && profileMeetings !== void 0)
    $$bindings.profileMeetings(profileMeetings);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileMeetingsForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/mycommunity/meetings"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileMeetingsForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"community_meeting_choices_list"}">What community meetings would be useful to you?
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(communityMeetingOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"community_meeting_choices_list"}"><input name="${"community_meeting_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileMeetings.community_meeting_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
						<label for="${"community_meeting_choices"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold pl-4 pt-4 text-base sm:text-lg",
      headingText: "If there are other events you would be interested in, please add them\r\n			below.",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_community_meeting",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: profileMeetings.other_community_meeting
    }, {
      inputValue: ($$value) => {
        profileMeetings.other_community_meeting = $$value;
        $$settled = false;
      }
    }, {})}</form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Meetings as default
};
