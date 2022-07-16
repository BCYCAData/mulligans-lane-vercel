import { c as create_ssr_component } from "../../../immutable/chunks/index-917ed570.js";
import "../../../immutable/chunks/dbClient-64f7d521.js";
import "@supabase/auth-helpers-sveltekit";
const Signout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center bg-white p-6 max-w-sm max-w-screen-xsm mx-auto"}"><h1 class="${"mb-8 text-3xl text-center"}">Thankyou for Participating</h1>
	
	<form><button type="${"submit"}" class="${"min-w-full w-80 text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"}">Sign Out
		</button></form></div>`;
});
export {
  Signout as default
};
