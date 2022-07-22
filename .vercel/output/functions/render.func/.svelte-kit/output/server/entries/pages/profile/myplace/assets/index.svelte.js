import { c as create_ssr_component, k as each, e as add_classes, d as add_attribute, f as escape } from "../../../../../_app/immutable/chunks/index-9cfba6ed.js";
import { g as staticWaterOptions, a as yesNoOptions, h as fireFightingAssets, j as fireHazardReductionOptions } from "../../../../../_app/immutable/chunks/profileOptions-a101d701.js";
/* empty css                                                                                 */const Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { profileAssets } = $$props;
  if ($$props.profileAssets === void 0 && $$bindings.profileAssets && profileAssets !== void 0)
    $$bindings.profileAssets(profileAssets);
  return `<section class="${"min-h-full bg-orange-300"}">${``}
	<form id="${"profileAssetsForm"}" class="${"flex flex-col py-3 mx-auto min-h-full w-full text-orange-900 bg-orange-300"}" action="${"/profile/myplace/assets"}" method="${"POST"}"><div class="${"flex flex-row"}"><div class="${"w-1/3"}"></div>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"} type="${"submit"}" form="${"profileAssetsForm"}">Save My Answers
			</button>
			<button class="${"w-1/3 mx-auto rounded-lg text-base font-semibold bg-rose-100 text-rose-700 border-rose-700"}" ${"hidden"}>Cancel
			</button></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"static_water_available_list"}">Are there any static water supplies on the property?
			</label>
			<div class="${"flex rounded-lg bg-orange-50 mx-3"}"><div class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"static_water_available_list"}">${each(staticWaterOptions, ({ value, lable }) => {
    return `<li class="${"justify-start place-items-center"}" name="${"static_water_available_list"}">${value < 5 ? `<input name="${"static_water_available"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileAssets.static_water_available.indexOf(value) ? add_attribute("checked", true, 1) : ""}>` : `<input name="${"static_water_available"}" type="${"checkbox"}"${add_attribute("value", value, 0)} ${""}${~profileAssets.static_water_available.indexOf(value) ? add_attribute("checked", true, 1) : ""}>`}
							<label for="${"static_water_available"}">${escape(lable)}</label>
						</li>`;
  })}</div></div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"have_stortz_list"}">Do you have a Stortz fitting attached to a water tank?
			</label>
			<div class="${"flex flex-row rounded-lg bg-orange-50 p-1 mx-2"}">${each(yesNoOptions, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"have_stortz_list"}"><input name="${"have_stortz"}" type="${"radio"}"${add_attribute("value", value, 0)}${value === profileAssets.have_stortz ? add_attribute("checked", true, 1) : ""}>
						<label for="${"have_stortz"}">${escape(lable)}</label>
					</li>`;
  })}</div></div>

		
		<div${add_classes((profileAssets.have_stortz !== true ? "hidden" : "").trim())}><div class="${"flex flex-row justify-start items-center px-4 mt-2"}"><label class="${"mt-1 text-lg font-bold mb-1"}" for="${"stortz_size"}">Please include the size (mm)
				</label>
				<input type="${"number"}" id="${"stortz_size"}" name="${"stortz_size"}" class="${"border border-orange-700 w-20 rounded ml-4 py-1 sm:text-lg"}"${add_attribute("value", profileAssets.stortz_size, 0)}></div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"fire_fighting_assets_list"}">Do you have any of the following at this property?
			</label>
			<div class="${"flex rounded-lg bg-orange-50 mx-3"}"><div class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"fire_fighting_assets_list"}">${each(fireFightingAssets, ({ value, lable }) => {
    return `<li class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"fire_fighting_assets_list"}"><input name="${"fire_fighting_assets"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileAssets.fire_fighting_assets.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
							<label for="${"fire_fighting_assets"}">${escape(lable)}</label>
						</li>`;
  })}</div></div></div>

		
		<div class="${"flex flex-row justify-between items-center px-4 mt-2"}"><label class="${"tracking-wide mr-4 mt-1 text-lg font-bold mb-1"}" for="${"fire_hazard_reduction_list"}">Does your property have?
			</label>
			<div class="${"flex rounded-lg bg-orange-50 mx-3"}"><div class="${"list-none sm:text-base sm:font-semibold sm:p-1"}" name="${"fire_hazard_reduction_list"}">${each(fireHazardReductionOptions, ({ value, lable }) => {
    return `<li><input name="${"fire_hazard_reduction"}" type="${"checkbox"}"${add_attribute("value", value, 0)}${~profileAssets.fire_hazard_reduction.indexOf(value) ? add_attribute("checked", true, 1) : ""}>
							<label for="${"fire_hazard_reduction"}">${escape(lable)}</label>
						</li>`;
  })}</div></div></div></form></section>`;
});
export {
  Assets as default
};
