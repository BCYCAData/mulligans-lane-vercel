import { c as create_ssr_component, d as add_attribute, f as escape } from "./index-9cfba6ed.js";
const TextAreaInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lableClass } = $$props;
  let { headingText } = $$props;
  let { nameText } = $$props;
  let { divClass } = $$props;
  let { textAreaClass } = $$props;
  let { inputValue } = $$props;
  if ($$props.lableClass === void 0 && $$bindings.lableClass && lableClass !== void 0)
    $$bindings.lableClass(lableClass);
  if ($$props.headingText === void 0 && $$bindings.headingText && headingText !== void 0)
    $$bindings.headingText(headingText);
  if ($$props.nameText === void 0 && $$bindings.nameText && nameText !== void 0)
    $$bindings.nameText(nameText);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.textAreaClass === void 0 && $$bindings.textAreaClass && textAreaClass !== void 0)
    $$bindings.textAreaClass(textAreaClass);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  return `
<label${add_attribute("class", lableClass, 0)}${add_attribute("for", nameText, 0)}>${escape(headingText)}</label>
<div${add_attribute("class", divClass, 0)}><textarea${add_attribute("id", nameText, 0)}${add_attribute("name", nameText, 0)}${add_attribute("class", textAreaClass, 0)}>${escape(inputValue, true)}</textarea></div>
`;
});
export {
  TextAreaInput as T
};
