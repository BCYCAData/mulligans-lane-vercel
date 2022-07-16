import { c as create_ssr_component, d as add_attribute, k as each, e as add_classes, v as validate_component, f as escape } from "../../../../immutable/chunks/index-917ed570.js";
import { a as yesNoOptions, r as residencyOptions, l as accessOptions } from "../../../../immutable/chunks/profileOptions-1cfe764b.js";
/* empty css                                                                         */import { N as NumberInput } from "../../../../immutable/chunks/NumberInput-2262d600.js";
const Myplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileMyPlace } = $$props;
  if ($$props.profileMyPlace === void 0 && $$bindings.profileMyPlace && profileMyPlace !== void 0)
    $$bindings.profileMyPlace(profileMyPlace);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileMyPlaceForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/myplace"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileMyPlaceForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>
		
		<div class="${"flex flex-row mx-2"}"><div class="${"flex flex-col basis-full mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"property_address_street"}">Property address</label>
				<input type="${"text"}" name="${"property_address_street"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Street Address"}" autocomplete="${"street-address"}" style="${"text-transform:uppercase sm:text-lg"}"${add_attribute("value", profileMyPlace.property_address_street, 0)}></div>
			<div class="${"flex flex-col basis-3/12 mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"property_address_suburb"}">Suburb</label>
				<input type="${"text"}" name="${"property_address_suburb"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Suburb"}" autocomplete="${"address-level2"}" style="${"text-transform:uppercase sm:text-lg"}"${add_attribute("value", profileMyPlace.property_address_suburb, 0)}></div>
			<div class="${"flex flex-col basis-2/12 mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"property_address_postcode"}">Postcode</label>
				<input type="${"text"}" name="${"property_address_postcode"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Postcode"}" autocomplete="${"postal-code"}"${add_attribute("value", profileMyPlace.property_address_postcode, 0)}></div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"rented_list"}">Do you Own this property?</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"rented_list"}"><input name="${"property_rented"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.property_rented ? add_attribute("checked", true, 1) : ""}>
						<label for="${"property_rented"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>
		<div${add_classes((profileMyPlace.property_rented === true ? "hidden" : "").trim())}><div class="${"flex flex-row mx-2"}"><div class="${"flex flex-col basis-full mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"agent_name"}">Managing Agent</label>
					<input type="${"text"}" name="${"agent_name"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Managing Agent name"}" style="${"text-transform:titlecase sm:text-lg"}"${add_attribute("value", profileMyPlace.agent_name, 0)}></div>
				<div class="${"flex flex-col basis-5/12 mx-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"agent_phone"}">Phone</label>
					<input type="${"text"}" name="${"agent_phone"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" placeholder="${"Managing Agent phone"}" autocomplete="${""}" style="${"text-transform:uppercase sm:text-lg"}"${add_attribute("value", profileMyPlace.agent_phone, 0)}></div></div>
			</div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"residency_profile_list"}">Are you:</label>
			<ul style="${"column-count: 2;"}" class="${"rounded-lg bg-orange-50 p-1"}">${each(residencyOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"residency_profile_list"}"><input class="${"m-1"}" name="${"residency_profile"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.residency_profile ? add_attribute("checked", true, 1) : ""}>
						<label for="${"residency_profile"}">${escape(lable)}</label>
					</li>`;
    })}</ul></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"sign_posted_list"}">Is your property well sign_posted and numbered clearly from the road?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"sign_posted_list"}"><input name="${"sign_posted"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.sign_posted ? add_attribute("checked", true, 1) : ""}>
						<label for="${"sign_posted"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"text-lg font-bold mb-1"}" for="${"truck_access_list"}">Is there easy access to property and paddocks?
			</label>
			<div class="${"flex flex-col rounded-lg bg-orange-50 p-1"}">${each(accessOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"truck_access_list"}">${lable === "Other" ? `<input class="${"m-1"}" name="${"truck_access"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.truck_access ? add_attribute("checked", true, 1) : ""}>` : `<input name="${"truck_access"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.truck_access ? add_attribute("checked", true, 1) : ""}>`}
						<label for="${"truck_access"}">${escape(lable)}</label>
					</li>`;
    })}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" ${profileMyPlace.truck_access !== 4 ? "hidden" : ""} for="${"truck_access_other_information"}">Other Access Information:
			</label>
			<input type="${"text"}" class="${"border w-full border-orange-700 rounded bg-orange-50 py-1 sm:text-lg"}" ${profileMyPlace.truck_access !== 4 ? "hidden" : ""} id="${"truck_access_other_information"}" name="${"truck_access_other_information"}"${add_attribute("value", profileMyPlace.truck_access_other_information, 0)}></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"residents_profile"}">How many people usually live here:
			</label>
			<div class="${"flex flex-row justify-around list-none rounded-lg bg-orange-50 p-1 mx-2"}" name="${"residents_profile"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents0_18",
      lable: "0-18 years",
      lableClass: "text-orange-900 text-lg px-2 font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileMyPlace.residents0_18
    }, {
      inputValue: ($$value) => {
        profileMyPlace.residents0_18 = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents19_50",
      lable: "19-50 years",
      lableClass: "text-orange-900 text-lg px-2 font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileMyPlace.residents19_50
    }, {
      inputValue: ($$value) => {
        profileMyPlace.residents19_50 = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents51_70",
      lable: "51-70 years",
      lableClass: "text-orange-900 text-lg px-2 font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileMyPlace.residents51_70
    }, {
      inputValue: ($$value) => {
        profileMyPlace.residents51_70 = $$value;
        $$settled = false;
      }
    }, {})}
				${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents71_",
      lable: "71 years +",
      lableClass: "text-orange-900 text-lg px-2 font-bold mb-1",
      inputClass: "border border-orange-700 w-10 rounded py-1 sm:text-lg",
      inputValue: profileMyPlace.residents71_
    }, {
      inputValue: ($$value) => {
        profileMyPlace.residents71_ = $$value;
        $$settled = false;
      }
    }, {})}</div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"vulnerable_residents_list"}">Do you consider any person on the property to be vulnerable?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"vulnerable_residents_list"}"><input name="${"vulnerable_residents"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileMyPlace.vulnerable_residents ? add_attribute("checked", true, 1) : ""}>
						<label for="${"vulnerable_residents"}">${escape(lable)}</label>
					</li>`;
    })}</div></div></form></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Myplace as default
};
