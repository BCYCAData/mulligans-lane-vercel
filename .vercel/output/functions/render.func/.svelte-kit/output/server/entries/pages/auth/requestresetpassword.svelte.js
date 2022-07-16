import { c as create_ssr_component } from "../../../immutable/chunks/index-917ed570.js";
import "../../../immutable/chunks/dbClient-64f7d521.js";
import "@supabase/auth-helpers-sveltekit";
const Requestresetpassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto"}"><div class="${"bg-white p-6 ml-1.5 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"}"><form action="${"/api/auth/resetpassword"}" method="${"POST"}">
			<h1 class="${"mb-8 text-3xl text-center"}">Reset Password</h1>
			<input id="${"email"}" type="${"email"}" class="${"block text-xl border border-orange-700 w-full py-3 rounded mb-4"}" name="${"email"}" ${"required"} placeholder="${"Email"}" autocomplete="${"email"}">
			${`<button type="${"submit"}" class="${"w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"}">Send Password Reset Link
				</button>`}</form></div></div>`;
});
export {
  Requestresetpassword as default
};
