import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-9cfba6ed.js";
import { p as page } from "../../../_app/immutable/chunks/stores-4aaf17d4.js";
import { P as PasswordEntry } from "../../../_app/immutable/chunks/PasswordEntry-da974511.js";
const Updateuser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const redirectType = new URLSearchParams($page.url.hash.substring(1)).get("type");
  $$unsubscribe_page();
  return `





${redirectType === "invite" ? `<div class="${"flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto"}"><h3>Thank you for accepting our invitation.</h3>
		<h3>&#39;Please Set a Password&#39;</h3></div>

	${validate_component(PasswordEntry, "PasswordEntry").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Updateuser as default
};
