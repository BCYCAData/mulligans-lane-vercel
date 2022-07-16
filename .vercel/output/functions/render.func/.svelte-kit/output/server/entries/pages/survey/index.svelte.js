import { c as create_ssr_component, d as add_attribute, k as each, f as escape, v as validate_component } from "../../../immutable/chunks/index-917ed570.js";
import { a as yesNoOptions, l as accessOptions, r as residencyOptions, e as yesNoMaybeOptions, g as staticWaterOptions, h as fireFightingAssets, k as siteHazardsOptions, j as fireHazardReductionOptions, y as yesNoSendOptions, f as fireFightingExperienceOptions, s as stayGoOptions, d as communityWorkshopOptions, i as informationSheetOptions, c as communityMeetingOptions, b as stayInTouchOptions } from "../../../immutable/chunks/profileOptions-1cfe764b.js";
import { N as NumberInput } from "../../../immutable/chunks/NumberInput-2262d600.js";
import { T as TextAreaInput } from "../../../immutable/chunks/TextAreaInput-a0cc3933.js";
const Step1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h1 class="${"mx-auto text-center"}">Strengthening Our Community<br>
		Project Survey
	</h1>
	<h2 class="${"mb-1 sm:text-lg"}">Prepare Connect Rebound</h2>
	<p class="${"m-0 sm:text-lg"}">The project evolved from feedback provided by the community following the
		2019 bushfires and is funded through the state and federal Bushfire
		Community Resilience Recovery Fund.
	</p>
	<p class="${"pt-2 m-0 sm:text-lg"}">Your answers to this survey will provide an accurate image of our community,
		identifying areas of strength and also areas that need additional support.
	</p>
	<p class="${"pt-2 m-0 sm:text-lg"}">This information is confidential and will be owned and updated by you.
	</p>
	<p class="${"pt-2 m-0 sm:text-lg"}">Please complete this survey in one sitting; it should take about 10 minutes.
	</p>
	<p class="${"pt-2 m-0 sm:text-lg"}">With your help we can build a safer, connected community for us all.
	</p>
	<p class="${"pt-2 sm:text-lg"}">Thanks for your time and comments.</p></div>`;
});
const Step2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  let otherAccessChecked = surveyData.truck_access === 4 ? true : false;
  let rentingChecked = surveyData.property_rented;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  return `<h3 class="${"text-base sm:text-lg"}">What is your name?</h3>
<div class="${"p-2 rounded-lg bg-orange-300"}"><div class="${"flex flex-wrap w-full"}"><input type="${"text"}" id="${"first_name"}" name="${"first_name"}" class="${"w-5/12 border-2 border-orange-500 rounded sm:text-lg"}" placeholder="${"First Name"}" autocomplete="${"given-name"}" style="${"text-transform:uppercase"}"${add_attribute("value", surveyData.first_name, 0)}>
		<input type="${"text"}" id="${"family_name"}" name="${"family_name"}" class="${"w-6/12 ml-2 border-2 border-orange-500 rounded sm:text-lg"}" placeholder="${"Family Name"}" autocomplete="${"family_name"}" style="${"text-transform:uppercase"}"${add_attribute("value", surveyData.family_name, 0)}></div></div>

<h3 class="${"text-base sm:text-lg"}">What is your property address?</h3>
<div class="${"p-2 rounded-lg bg-orange-300"}"><input type="${"text"}" id="${"property_address_street"}" name="${"property_address_street"}" class="${"w-full border-2 border-orange-500 rounded sm:text-lg"}" placeholder="${"Street Address"}" autocomplete="${"street-address"}" style="${"text-transform:uppercase"}"${add_attribute("value", surveyData.property_address_street, 0)}>
	<div class="${"flex flex-wrap w-full"}"><input type="${"text"}" id="${"property_address_suburb"}" name="${"property_address_suburb"}" class="${"w-8/12 border-2 border-orange-500 rounded sm:text-lg"}" placeholder="${"Suburb"}" autocomplete="${"address-level2"}" style="${"text-transform:uppercase"}"${add_attribute("value", surveyData.property_address_suburb, 0)}>
		<input type="${"text"}" id="${"property_address_postcode"}" name="${"property_address_postcode"}" class="${"w-3/12 border-2 border-orange-500 rounded sm:text-lg"}" placeholder="${"Postcode"}" autocomplete="${"postal-code"}" style="${"text-transform:uppercase"}"${add_attribute("value", surveyData.property_address_postcode, 0)}></div></div>

<h3 class="${"text-base sm:text-lg"}">Are you renting this property?</h3>
<div class="${"p-2 flex flex-col justify-start rounded-lg bg-orange-300"}"><div class="${"pb-2 flex flex-row"}">${each(yesNoOptions, ({ value, lable }) => {
    return `${lable === "Yes" ? `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"property_rented"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.property_rented ? add_attribute("checked", true, 1) : ""}>
					<label for="${"property_rented"}">${escape(lable)}</label>
				</li>` : `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"property_rented"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.property_rented ? add_attribute("checked", true, 1) : ""}>
					<label for="${"property_rented"}">${escape(lable)}</label>
				</li>`}`;
  })}</div>
	<div class="${"flex flex-row sm:text-lg"}"><label class="${"pl-4"}" for="${"agent_name"}" ${rentingChecked === false ? "hidden" : ""}>Agent Name</label>
		<input type="${"text"}" class="${"border basis-7/12 border-orange-700 sm:text-lg rounded"}" id="${"agent_name"}" name="${"agent_name"}" ${rentingChecked === false ? "hidden" : ""}${add_attribute("value", surveyData.agent_name, 0)}>
		<label class="${"pl-4"}" for="${"agent_phone"}" ${rentingChecked === false ? "hidden" : ""}>Agent Phone</label>
		<input type="${"text"}" class="${"border basis-1/12 border-orange-700 sm:text-lg rounded"}" id="${"agent_phone"}" name="${"agent_phone"}" ${rentingChecked === false ? "hidden" : ""}${add_attribute("value", surveyData.agent_phone, 0)}></div></div>

<h3 class="${"text-base sm:text-lg"}">Is your property well sign-posted and numbered clearly from the road?
</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"sign_posted"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.sign_posted ? add_attribute("checked", true, 1) : ""}>
			<label for="${"sign_posted"}">${escape(lable)}</label>
		</li>`;
  })}</div>

<h3 class="${"text-base sm:text-lg"}">Is there easy truck access to the property and paddocks?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 m-0"}">${each(accessOptions, ({ value, lable }) => {
    return `${lable === "Other" ? `<li class="${"sm:text-lg pr-3"}"><div class="${"flex flex-row "}"><input name="${"truck_access"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.truck_access ? add_attribute("checked", true, 1) : ""}>
						<label class="${"ml-1"}" for="${"truck_access"}">${escape(lable)}</label>
						<input type="${"text"}" class="${"border w-full border-orange-700 rounded ml-2 sm:text-lg"}" id="${"truck_access_other_information"}" name="${"truck_access_other_information"}" ${otherAccessChecked === false ? "hidden" : ""}${add_attribute("value", surveyData.truck_access_other_information, 0)}></div>
				</li>` : `<li class="${"sm:text-lg pr-3"}"><input name="${"truck_access"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.truck_access ? add_attribute("checked", true, 1) : ""}>
					<label for="${"truck_access"}">${escape(lable)}</label>
				</li>`}`;
  })}</ul></div>

<h3 class="${"text-base sm:text-lg"}">What is your phone number?</h3>
<div class="${"p-2 rounded-lg bg-orange-300"}"><div class="${"flex flex-row sm:text-lg"}"><label class="${"p-2"}" for="${"mobile"}">Mobile</label>
		<input type="${"tel"}" class="${"border basis-5/12 border-orange-700 rounded mb-1 sm:text-lg"}" id="${"mobile"}" name="${"mobile"}" placeholder="${"Mobile 0XXX XXX XXX"}" autocomplete="${"off"}"${add_attribute("value", surveyData.mobile, 0)}>
		<label class="${"p-2"}" for="${"phone"}">Landline</label>
		<input type="${"tel"}" class="${"border basis-5/12 border-orange-700 rounded mb-1 sm:text-lg"}" id="${"phone"}" name="${"phone"}" placeholder="${"Landline XXXX XXXX"}" autocomplete="${"tel-local"}"${add_attribute("value", surveyData.phone, 0)}></div></div>

<h3 class="${"text-base sm:text-lg"}">What is the quality of your mobile reception at the property?</h3>
<div class="${"p-1 rounded-lg bg-orange-300"}"><ul class="${"flex my-0 items-center list-none sm:text-lg sm:w-1/2 sm:mx-auto"}"><div class="${"flex-auto font-semibold text-sm sm:text-base text-orange-700"}">Poor</div>
		${each(Array(5), (_, i) => {
    return `<li class="${"flex-auto"}"><input name="${"mobile_reception"}" type="${"radio"}"${add_attribute("value", i + 1, 0)}${i + 1 === surveyData.mobile_reception ? add_attribute("checked", true, 1) : ""}>
				<label class="${"inline-block"}" for="${"mobile_reception"}">${escape(i + 1)}</label>
			</li>`;
  })}
		<div class="${"flex-auto font-semibold text-sm sm:text-base text-orange-700"}">Excellent</div></ul></div>`;
});
const Step3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">Are you:</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0 "}">${each(residencyOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"residency_profile"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.residency_profile ? add_attribute("checked", true, 1) : ""}>
				<label for="${"residency_profile"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>

<h3 class="${"text-base sm:text-lg"}">Please record the number of people who usually live at this property:
</h3>
<div class="${"p-2 rounded-lg bg-orange-300"}"><ul class="${"flex pl-0 my-0 justify-start list-none sm:text-lg"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents0_18",
      lable: "0-18 years",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.residents0_18
    }, {
      inputValue: ($$value) => {
        surveyData.residents0_18 = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents19_50",
      lable: "19-50 years",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.residents19_50
    }, {
      inputValue: ($$value) => {
        surveyData.residents19_50 = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents51_70",
      lable: "51-70 years",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.residents51_70
    }, {
      inputValue: ($$value) => {
        surveyData.residents51_70 = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "residents71_",
      lable: "71 years +",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.residents71_
    }, {
      inputValue: ($$value) => {
        surveyData.residents71_ = $$value;
        $$settled = false;
      }
    }, {})}</ul></div>
<div><h3 class="${"text-base sm:text-lg"}">Do you consider any person on the property to be vulnerable?</h3>
	<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"vulnerable_residents"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.vulnerable_residents ? add_attribute("checked", true, 1) : ""}>
				<label for="${"vulnerable_residents"}">${escape(lable)}</label>
			</li>`;
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Step4_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-v4x3zk{margin-block-start:10px;margin-block-end:10px;padding-inline-start:20px}",
  map: null
};
const Step4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  let live_stock_present = surveyData.live_stock_present;
  let live_stock_safe_area = surveyData.live_stock_safe_area;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">Please record the number of pets you have on this property</h3>
<div class="${"p-2 rounded-lg bg-orange-300"}"><ul class="${"flex pl-0 m-0 justify-start list-none sm:text-lg svelte-v4x3zk"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_dogs",
      lable: "Dogs",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.number_dogs
    }, {
      inputValue: ($$value) => {
        surveyData.number_dogs = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_cats",
      lable: "Cats",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.number_cats
    }, {
      inputValue: ($$value) => {
        surveyData.number_cats = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_birds",
      lable: "Birds",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.number_birds
    }, {
      inputValue: ($$value) => {
        surveyData.number_birds = $$value;
        $$settled = false;
      }
    }, {})}
		${validate_component(NumberInput, "NumberInput").$$render($$result, {
      name: "number_other_pets",
      lable: "Other",
      lableClass: "sm:text-lg",
      inputClass: "border border-orange-700 w-20 rounded sm:text-lg",
      inputValue: surveyData.number_other_pets
    }, {
      inputValue: ($$value) => {
        surveyData.number_other_pets = $$value;
        $$settled = false;
      }
    }, {})}</ul></div>
<h3 class="${"text-base sm:text-lg"}">Do you have livestock?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"live_stock_present"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.live_stock_present ? add_attribute("checked", true, 1) : ""}>
			<label for="${"live_stock_present"}">${escape(lable)}</label>
		</li>`;
    })}</div>

${live_stock_present === true ? `<h3 class="${"text-base sm:text-lg"}">Do you have an area which would be safe for stock in the event of a bushfire or flood?
	</h3>
	<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"live_stock_safe_area"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.live_stock_safe_area ? add_attribute("checked", true, 1) : ""}>
				<label for="${"live_stock_safe_area"}">${escape(lable)}</label>
			</li>`;
    })}</div>
	${live_stock_present && live_stock_safe_area != "N" ? `<h3 class="${"text-base sm:text-lg"}">Would you be happy for other people to leave their stock on your property, in your safe area,
			for a short period in an emergency?
		</h3>
		<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"share_livestock_safe_area"}" type="${"radio"}" live_stock_present${add_attribute("value", value, 0)}${value === surveyData.share_livestock_safe_area ? add_attribute("checked", true, 1) : ""}>
					<label for="${"share_livestock_safe_area"}">${escape(lable)}</label>
				</li>`;
    })}</div>` : ``}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Step5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  let have_stortzChecked = surveyData.have_stortz;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  return `<h3 class="${"text-base sm:text-lg"}">Are there any static water supplies on the property?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(staticWaterOptions, ({ value, lable }) => {
    return `${value < 5 ? `<li class="${"sm:text-lg pr-3"}"><input name="${"static_water_available"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.static_water_available.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
					<label for="${"static_water_available"}">${escape(lable)}</label>
				</li>` : `<li class="${"sm:text-lg pr-3"}"><input name="${"static_water_available"}" type="${"checkbox"}"${add_attribute("value", value, 0)} ${""}${~surveyData.static_water_available.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
					<label for="${"static_water_available"}">${escape(lable)}</label>
				</li>`}`;
  })}</ul></div>

<h3 class="${"text-base sm:text-lg"}">Do you have a Stortz fitting attached to a water tank?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"have_stortz"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.have_stortz ? add_attribute("checked", true, 1) : ""}>
			<label for="${"have_stortz"}">${escape(lable)}</label>
		</li>`;
  })}</div>
${have_stortzChecked ? `<h3>Please include the size</h3>
	<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><label class="${"flex-none mr-2 sm:text-lg"}" for="${"stortz_size"}">Size (mm)</label>
		<input type="${"number"}" id="${"stortz_size"}" name="${"stortz_size"}" class="${"border border-orange-700 w-half rounded sm:text-lg"}"${add_attribute("value", surveyData.stortz_size, 0)}></div>` : ``}
<h3 class="${"text-base sm:text-lg"}">Do you have any of the following at this property?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(fireFightingAssets, ({ value, lable }) => {
    return `<li class="${"sm:text-lg pr-3"}"><input name="${"fire_fighting_assets"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.fire_fighting_assets.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"fire_fighting_assets"}">${escape(lable)}</label>
			</li>`;
  })}</ul></div>`;
});
const Step6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">Do you have any of the following on your property?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(siteHazardsOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"site_hazards"}" type="${"checkbox"}"${add_attribute("value", value, 0)}>
				<label for="${"site_hazards"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>
${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "Are there any other hazards on the property that should be noted?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_site_hazards",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_site_hazards
    }, {
      inputValue: ($$value) => {
        surveyData.other_site_hazards = $$value;
        $$settled = false;
      }
    }, {})}
<h3 class="${"text-base sm:text-lg"}">Does your property have?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(fireHazardReductionOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"fire_hazard_reduction"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.fire_hazard_reduction.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"fire_hazard_reduction"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>
<h3 class="${"text-base sm:text-lg"}">Does any adjoining land represent a hazard?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoMaybeOptions, ({ value, lable }) => {
      return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"land_adjacent_hazard"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.land_adjacent_hazard ? add_attribute("checked", true, 1) : ""}>
			<label for="${"land_adjacent_hazard"}">${escape(lable)}</label>
		</li>`;
    })}</div>
${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "Are there other areas that concern you or represent a potential threat?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_hazards",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_hazards
    }, {
      inputValue: ($$value) => {
        surveyData.other_hazards = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Step7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  return `<h3 class="${"text-base sm:text-lg"}">Have you completed a RFS Bushfire survival plan?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoSendOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"rfs_survival_plan"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.rfs_survival_plan ? add_attribute("checked", true, 1) : ""}>
			<label for="${"rfs_survival_plan"}">${escape(lable)}</label>
		</li>`;
  })}</div>
<h3 class="${"text-base sm:text-lg"}">What is your level of firefighting experience?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(fireFightingExperienceOptions, ({ value, lable }) => {
    return `<li class="${"sm:text-lg pr-3"}"><input name="${"fire_fighting_experience"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.fire_fighting_experience ? add_attribute("checked", true, 1) : ""}>
				<label for="${"fire_fighting_experience"}">${escape(lable)}</label>
			</li>`;
  })}</ul></div>
<h3 class="${"text-base sm:text-lg"}">Have you had unpleasant traumatic experience of bushfire?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}">${each(yesNoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-lg pr-3"}"><input name="${"fire_trauma"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.fire_trauma ? add_attribute("checked", true, 1) : ""}>
			<label for="${"fire_trauma"}">${escape(lable)}</label>
		</li>`;
  })}</div>
<h3 class="${"text-base sm:text-lg"}">If your property is threatened by fire, are you:</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(stayGoOptions, ({ value, lable }) => {
    return `<li class="${"sm:text-lg pr-3"}"><input name="${"plan_to_leave_before_fire"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.plan_to_leave_before_fire ? add_attribute("checked", true, 1) : ""}>
				<label for="${"plan_to_leave_before_fire"}">${escape(lable)}</label>
			</li>`;
  })}</ul></div>
<h3 class="${"text-base sm:text-lg"}">If your property is threatened by flood, are you:</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(stayGoOptions, ({ value, lable }) => {
    return `<li class="${"sm:text-lg pr-3"}"><input name="${"plan_to_leave_before_flood"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === surveyData.plan_to_leave_before_flood ? add_attribute("checked", true, 1) : ""}>
				<label for="${"plan_to_leave_before_flood"}">${escape(lable)}</label>
			</li>`;
  })}</ul></div>`;
});
const Step8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">Which of these community initiated workshops would be useful to you?
</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(communityWorkshopOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"community_workshop_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.community_workshop_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"community_workshop_choices"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>
${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "If there are other workshops that you would like to see run, please add\r\n			the details here",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_community_workshop",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_community_workshop
    }, {
      inputValue: ($$value) => {
        surveyData.other_community_workshop = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "If you would like to help run any of the workshops, please indicate which\r\n			ones below.",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "will_run_community_workshops",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.will_run_community_workshops
    }, {
      inputValue: ($$value) => {
        surveyData.will_run_community_workshops = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Step9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">What information sheets would be useful to you?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(informationSheetOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"information_sheet_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.information_sheet_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"information_sheet_choices"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>

${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "Are there other information sheets that you would find useful?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_information_sheet",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_information_sheet
    }, {
      inputValue: ($$value) => {
        surveyData.other_information_sheet = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Step10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">What community meetings would be useful to you?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(communityMeetingOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"community_meeting_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.community_meeting_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"community_meeting_choices"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>
${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "If there are other events you would be interested in, please add them\r\n			below.",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_community_meeting",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_community_meeting
    }, {
      inputValue: ($$value) => {
        surveyData.other_community_meeting = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Step11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h3 class="${"text-base sm:text-lg"}">How would you prefer to stay in touch?</h3>
<div class="${"p-2 flex justify-start rounded-lg bg-orange-300"}"><ul class="${"list-none w-full pl-0 my-0"}">${each(stayInTouchOptions, ({ value, lable }) => {
      return `<li class="${"sm:text-lg pr-3"}"><input name="${"stay_in_touch_choices"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~surveyData.stay_in_touch_choices.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
				<label for="${"stay_in_touch_choices"}">${escape(lable)}</label>
			</li>`;
    })}</ul></div>

${validate_component(TextAreaInput, "TextAreaInput").$$render($$result, {
      lableClass: "font-bold text-base sm:text-lg",
      headingText: "Do you have any other comments that you would like to add?",
      divClass: "px-4 rounded-lg bg-orange-300 sm:text-lg",
      nameText: "other_comments",
      textAreaClass: "w-full resize-y sm:text-lg",
      inputValue: surveyData.other_comments
    }, {
      inputValue: ($$value) => {
        surveyData.other_comments = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const Step12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pt-5 lg:ml-10 lg:mr-10 md:ml-30 md:mr-30 lg:ml-50 lg:mr-50"}"><h2 class="${"text-center sm:text-lg"}">Thank you for completing the questionnaire.
	</h2>
	<p>The information you have provided will be used to create a digital &quot;map&quot; of
		the area providing information which will be useful to emergency responders
		in time of need. <br> <br>
		We will keep you up to date with progress on the project through our email mailouts,
		the Burrell Creek Notes and Facebook posts. <br> <br></p>
	<p class="${"text-center sm:text-lg"}">If you have any suggestions or questions don&#39;t hesitate to contact either
	</p>
	<p class="${"text-center sm:text-lg"}"><span class="${"font-semibold"}">Helen on 0424 515 963</span><br>or<br>
		<span class="${"font-semibold"}">Christine on 0488 288 661</span><br></p>
	<p class="${"text-center sm:text-lg"}">With your help we can build a safer, connected community for us all.
	</p>
	<br></div>`;
});
const SurveyFormContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active_step } = $$props;
  let { surveyData } = $$props;
  if ($$props.active_step === void 0 && $$bindings.active_step && active_step !== void 0)
    $$bindings.active_step(active_step);
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  return `<div class="${"p-1 text-center text-orange-700"}" ${active_step == "1" || active_step == "12" ? "hidden" : ""}>Please complete all steps and tap <span class="${"p-1 rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}">Save My Answers
	</span>
	 at Step 12
</div>
<form method="${"post"}" action="${"/survey"}" id="${"surveyForm"}"><div ${active_step != "1" ? "hidden" : ""}>${validate_component(Step1, "Step1").$$render($$result, {}, {}, {})}</div>
	<div ${active_step != "2" ? "hidden" : ""}>${validate_component(Step2, "Step2").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "3" ? "hidden" : ""}>${validate_component(Step3, "Step3").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "4" ? "hidden" : ""}>${validate_component(Step4, "Step4").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "5" ? "hidden" : ""}>${validate_component(Step5, "Step5").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "6" ? "hidden" : ""}>${validate_component(Step6, "Step6").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "7" ? "hidden" : ""}>${validate_component(Step7, "Step7").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "8" ? "hidden" : ""}>${validate_component(Step8, "Step8").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "9" ? "hidden" : ""}>${validate_component(Step9, "Step9").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "10" ? "hidden" : ""}>${validate_component(Step10, "Step10").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "11" ? "hidden" : ""}>${validate_component(Step11, "Step11").$$render($$result, { surveyData }, {}, {})}</div>
	<div ${active_step != "12" ? "hidden" : ""}>${validate_component(Step12, "Step12").$$render($$result, { surveyData }, {}, {})}</div>
	<div class="${"flex flex-col justify-center items-center sm:text-lg"}"><button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${active_step != "12" ? "hidden" : ""} type="${"submit"}" form="${"surveyForm"}">Save My Answers
		</button></div></form>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress-container.svelte-95ggu7{display:flex;justify-content:space-between;position:relative;margin-top:30px;margin-bottom:10px}.progress-container.svelte-95ggu7::before{content:'';background-color:#e0e0e0;position:absolute;top:50%;left:0;transform:translateY(-50%);height:4px;width:100%;z-index:-1}.progress.svelte-95ggu7{background-color:#fdba74;position:absolute;top:50%;left:0;transform:translateY(-50%);height:4px;width:0%;z-index:-1;transition:0.4s ease}.circle.svelte-95ggu7{background-color:#fff;color:#999;border-radius:50%;height:15px;width:15px;display:flex;align-items:center;justify-content:center;border:3px solid #e0e0e0;transition:0.4s ease;cursor:pointer}.circle.svelte-95ggu7::after{content:attr(data-title) ' ';position:absolute;bottom:20px;color:#999;transition:0.4s ease}.circle.active.svelte-95ggu7::after{color:#f97316}.circle.active.svelte-95ggu7{border-color:#f97316}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { steps = [] } = $$props;
  let { currentActive = 1 } = $$props;
  let circles, progress;
  const handleProgress = (stepIncrement) => {
    circles = document.querySelectorAll(".circle");
    if (stepIncrement == 1) {
      currentActive++;
      if (currentActive > circles.length) {
        currentActive = circles.length;
      }
    } else {
      currentActive--;
      if (currentActive < 1) {
        currentActive = 1;
      }
    }
    update();
  };
  function update() {
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
  }
  const skipTo = (e) => {
    circles = document.querySelectorAll(".circle");
    currentActive = e.currentTarget.attributes["data-title"].value;
    update();
  };
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  if ($$props.currentActive === void 0 && $$bindings.currentActive && currentActive !== void 0)
    $$bindings.currentActive(currentActive);
  if ($$props.handleProgress === void 0 && $$bindings.handleProgress && handleProgress !== void 0)
    $$bindings.handleProgress(handleProgress);
  if ($$props.skipTo === void 0 && $$bindings.skipTo && skipTo !== void 0)
    $$bindings.skipTo(skipTo);
  $$result.css.add(css);
  return `<div class="${"progress-container z-50 svelte-95ggu7"}"><div class="${"progress svelte-95ggu7"}"${add_attribute("this", progress, 0)}></div>
	${each(steps, (step, i) => {
    return `<div class="${"circle " + escape(i == 0 ? "active" : "", true) + " svelte-95ggu7"}"${add_attribute("data-title", step, 0)}>.
		</div>`;
  })}
</div>`;
});
const Survey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let currentActive = 1;
  let progressBar;
  let { surveyData } = $$props;
  if ($$props.surveyData === void 0 && $$bindings.surveyData && surveyData !== void 0)
    $$bindings.surveyData(surveyData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"container mx-auto h-full w-full sm:w-8/12 text-gray-800"}">${validate_component(SurveyFormContainer, "SurveyFormContainer").$$render($$result, {
      active_step: steps[currentActive - 1],
      surveyData
    }, {}, {})}
	${validate_component(ProgressBar, "ProgressBar").$$render($$result, { steps, currentActive, this: progressBar }, {
      currentActive: ($$value) => {
        currentActive = $$value;
        $$settled = false;
      },
      this: ($$value) => {
        progressBar = $$value;
        $$settled = false;
      }
    }, {})}
	<div class="${"mt-1 text-center"}"><button class="${"px-[20px] py-[6px] text-white bg-orange-500 rounded-xl focus:outline-none active:transform scale 98 disabled:cursor-not-allowed disabled:bg-slate-300"}" ${currentActive == 1 ? "disabled" : ""}>Prev
		</button>
		<button class="${"px-[20px] py-[6px] text-white bg-orange-500 rounded-xl focus:outline-none active:transform scale 98 disabled:cursor-not-allowed disabled:bg-slate-300"}" ${currentActive == steps.length ? "hidden" : ""}>Next
		</button></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Survey as default
};
