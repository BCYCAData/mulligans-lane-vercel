import { c as create_ssr_component, d as add_attribute } from "../../../_app/immutable/chunks/index-9cfba6ed.js";
import "../../../_app/immutable/chunks/dbClient-0cf002cd.js";
/* empty css                                                                           *//* empty css                                                                             */import "@supabase/auth-helpers-sveltekit";
const Signin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  return `<div class="${"flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto"}"><div class="${"bg-white p-6 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"}"><h1 class="${"text-2xl text-center"}">Welcome Back</h1>
		<form>
			<input id="${"email"}" type="${"email"}" class="${"block text-xl border border-orange-700 w-full py-3 rounded mb-4"}" name="${"email"}" ${"required"} placeholder="${"Email"}" autocomplete="${"email"}"${add_attribute("value", email, 0)}>
			<input id="${"password"}" type="${"password"}" class="${"block text-xl border border-orange-700 w-full py-3 rounded mb-4"}" name="${"password"}" ${"required"} placeholder="${"Password"}" autocomplete="${"current-password"}"${add_attribute("value", password, 0)}>
			<div class="${"flex justify-between mt-4 mb-3"}"><a href="${"/auth/requestresetpassword"}" class="${"text-sm font-semibold text-orange-600 dark:text-gray-400 hover:underline"}">Forgot Your Password? &lt;&lt;&lt;
				</a></div>
			

			<button type="${"submit"}" class="${"w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"}">Sign In
			</button></form>
		${``}</div>
	<div class="${"text-grey-dark mt-6"}">Not registered?
		<button class="${"text-center py-1 px-5 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"}">Create an account
		</button></div></div>`;
});
export {
  Signin as default
};
