import { c as create_ssr_component, d as add_attribute, f as escape } from "./index-917ed570.js";
const NumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { lable } = $$props;
  let { inputClass } = $$props;
  let { lableClass } = $$props;
  let { inputValue } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.lable === void 0 && $$bindings.lable && lable !== void 0)
    $$bindings.lable(lable);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.lableClass === void 0 && $$bindings.lableClass && lableClass !== void 0)
    $$bindings.lableClass(lableClass);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  return `<div class="${"flex flex-col justify-center items-center"}"><label${add_attribute("class", lableClass, 0)}${add_attribute("for", name, 0)}>${escape(lable)}</label>
	<input type="${"number"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("class", inputClass, 0)}${add_attribute("value", inputValue, 0)} min="${"0"}"></div>`;
});
export {
  NumberInput as N
};
