import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../immutable/chunks/index-917ed570.js";
import { p as page } from "../../../immutable/chunks/stores-4e28f386.js";
import { P as PasswordEntry } from "../../../immutable/chunks/PasswordEntry-3aefb46f.js";
const Redirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const redirectType = new URLSearchParams($page.url.hash.substring(1)).get("type");
  new URLSearchParams($page.url.hash.substring(1)).get("id");
  const token = new URLSearchParams($page.url.hash.substring(1)).get("access_token");
  $page.url;
  $$unsubscribe_page();
  return `


${redirectType === "invite" ? `${validate_component(PasswordEntry, "PasswordEntry").$$render($$result, { redirectType, token }, {}, {})}` : ``}`;
});
export {
  Redirect as default
};
