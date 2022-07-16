import { c as create_ssr_component, v as validate_component, k as each, e as add_classes, d as add_attribute, f as escape } from "../../../../../immutable/chunks/index-917ed570.js";
import { a as yesNoOptions, e as yesNoMaybeOptions } from "../../../../../immutable/chunks/profileOptions-1cfe764b.js";
import { N as NumberInput } from "../../../../../immutable/chunks/NumberInput-2262d600.js";
/* empty css                                                                            */const Animals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileAnimals } = $$props;
  if ($$props.profileAnimals === void 0 && $$bindings.profileAnimals && profileAnimals !== void 0)
    $$bindings.profileAnimals(profileAnimals);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileAnimalsForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/myplace/animals"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileAnimalsForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"animals_profile"}">How many pets do you usually have at this property:
			</label>
			<div class="${"flex flex-row justify-around list-none rounded-lg bg-orange-50 p-1 mx-2"}" name="${"animals_profile"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_dogs",
      lable: "Dogs",
      lableClass: "tracking-wide text-orange-900 px-2 text-l font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileAnimals.number_dogs
    }, {
      inputValue: ($$value) => {
        profileAnimals.number_dogs = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_cats",
      lable: "Cats",
      lableClass: "tracking-wide text-orange-900 px-2 text-l font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileAnimals.number_cats
    }, {
      inputValue: ($$value) => {
        profileAnimals.number_cats = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_birds",
      lable: "Birds",
      lableClass: "tracking-wide text-orange-900 px-2 text-l font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileAnimals.number_birds
    }, {
      inputValue: ($$value) => {
        profileAnimals.number_birds = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_other_pets",
      lable: "Other",
      lableClass: "tracking-wide text-orange-900 px-2 text-l font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileAnimals.number_other_pets
    }, {
      inputValue: ($$value) => {
        profileAnimals.number_other_pets = $$value;
        $$settled = false;
      }
    }, {})}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"live_stock_present_list"}">Do you have livestock?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"live_stock_present_list"}"><input name="${"live_stock_present"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAnimals.live_stock_present ? add_attribute("checked", true, 1) : ""}>
						<label for="${"live_stock_present"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		<div${add_classes((profileAnimals.live_stock_present != true ? "hidden" : "").trim())}><div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"live_stock_safe_area_list"}">Do you have a safe area for stock in the event of a bushfire or flood?
				</label>
				<div class="${"flex flex-row rounded-lg bg-orange-50 p-1"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"live_stock_safe_area_list"}"><input name="${"live_stock_safe_area"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAnimals.live_stock_safe_area ? add_attribute("checked", true, 1) : ""}>
							<label for="${"live_stock_safe_area"}">${escape(lable)}</label>
						</li>`;
    })}</div></div></div>

		
		<div${add_classes((profileAnimals.live_stock_safe_area !== "Y" ? "hidden" : "").trim())}><div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"share_livestock_safe_area_list"}">Would you let others leave their stock in your safe area, for a short time, in an
					emergency?
				</label>
				<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"share_livestock_safe_area_list"}"><input name="${"share_livestock_safe_area"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAnimals.share_livestock_safe_area ? add_attribute("checked", true, 1) : ""}>
							<label for="${"share_livestock_safe_area"}">${escape(lable)}</label>
						</li>`;
    })}</div></div></div></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Animals as default
};
