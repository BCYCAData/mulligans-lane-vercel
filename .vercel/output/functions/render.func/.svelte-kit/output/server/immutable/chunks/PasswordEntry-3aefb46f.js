import { c as create_ssr_component, f as escape, d as add_attribute } from "./index-917ed570.js";
const PasswordEntry_svelte_svelte_type_style_lang = "";
const css = {
  code: ".strength.svelte-tnumgw{display:flex;height:15px;width:100%}.bar.svelte-tnumgw{margin-right:2px;border-radius:5px;height:100%;width:25%;transition:box-shadow 500ms;box-shadow:inset 0px 20px #f2f1f1}.bar-show.svelte-tnumgw{box-shadow:none}.bar-1.svelte-tnumgw{background:linear-gradient(to right, red, orangered)}.bar-2.svelte-tnumgw{background:linear-gradient(to right, orangered, yellow)}.bar-3.svelte-tnumgw{background:linear-gradient(to right, yellow, yellowgreen)}.bar-4.svelte-tnumgw{background:linear-gradient(to right, yellowgreen, green)}.bar.svelte-tnumgw:last-child{margin-right:0}",
  map: null
};
const PasswordEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let password;
  let confirmPassword;
  let canGo;
  let strength = 0;
  $$result.css.add(css);
  password = "";
  confirmPassword = "";
  canGo = password === confirmPassword && strength === 4;
  return `<div class="${"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"}"><div class="${"bg-white px-6 py-8 rounded shadow-md text-black w-full"}">
		<form action="${"/api/auth/updateuser"}" method="${"POST"}"><label class="${"inline uppercase tracking-wide text-orange-900 text-xs font-bold"}" for="${"password"}">Password:
				<span class="${"toggle-password text-3xl text-gray-700 font-normal ml-3 align-middle "}">${escape("\u{1F441}")}</span></label>
			<input id="${"password"}"${add_attribute("type", "password", 0)} class="${"block border border-orange-700 w-full py-3 rounded mb-4"}" name="${"password"}" ${"required"} placeholder="${"New Password"}" autocomplete="${"new-password"}"${add_attribute("value", password, 0)}>
			<label class="${"inline uppercase tracking-wide text-orange-900 text-xs font-bold"}" for="${"confirmPassword"}">Confirm Password:
				<span class="${"toggle-password text-3xl text-gray-700 font-normal ml-3 align-middle "}">${escape("\u{1F441}")}</span></label>

			<input id="${"confirmPassword"}"${add_attribute("type", "password", 0)} class="${"block border border-orange-700 w-full py-3 rounded mb-4"}" name="${"confirmPassword"}" ${"required"} placeholder="${"Confirm New Password"}" autocomplete="${"new-password"}"${add_attribute("value", confirmPassword, 0)}>
			<div class="${"strength svelte-tnumgw"}"><span class="${["bar bar-1 svelte-tnumgw", ""].join(" ").trim()}"></span>
				<span class="${["bar bar-2 svelte-tnumgw", ""].join(" ").trim()}"></span>
				<span class="${["bar bar-3 svelte-tnumgw", ""].join(" ").trim()}"></span>
				<span class="${["bar bar-4 svelte-tnumgw", ""].join(" ").trim()}"></span></div>

			<ul><li><span class="${"text-xs"}">${escape("\u274C")}</span>
					<span class="${"text-sm"}">must be at least 5 characters</span></li>
				<li><span class="${"text-xs"}">${escape("\u274C")}</span>
					<span class="${"text-sm"}">must contain a capital letter</span></li>
				<li><span class="${"text-xs"}">${escape("\u274C")}</span>
					<span class="${"text-sm"}">must contain a number</span></li>
				<li><span class="${"text-xs"}">${escape("\u274C")}</span>
					<span class="${"text-sm"}">must contain one symbol ($&amp;+,:;=?#^!)</span></li></ul>

			<button type="${"submit"}" class="${"w-full text-center text-xl py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"}" ${!canGo ? "disabled" : ""}></button></form></div>
</div>`;
});
export {
  PasswordEntry as P
};
