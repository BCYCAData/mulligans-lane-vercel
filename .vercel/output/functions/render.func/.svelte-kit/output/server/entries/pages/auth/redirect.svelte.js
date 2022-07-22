import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-9cfba6ed.js";
import { p as page } from "../../../_app/immutable/chunks/stores-4aaf17d4.js";
import { P as PasswordEntry } from "../../../_app/immutable/chunks/PasswordEntry-da974511.js";
const Redirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const redirectType = new URLSearchParams($page.url.hash.substring(1)).get("type");
  const token = new URLSearchParams($page.url.hash.substring(1)).get("access_token");
  $$unsubscribe_page();
  return `


${redirectType === "invite" ? `${validate_component(PasswordEntry, "PasswordEntry").$$render($$result, { redirectType, token }, {}, {})}` : ``}`;
});
export {
  Redirect as default
};
