import { c as create_ssr_component, f as escape, d as add_attribute, v as validate_component } from "../../../../_app/immutable/chunks/index-9cfba6ed.js";
/* empty css                                                                              */import "../../../../_app/immutable/chunks/dbClient-7d0ef1f9.js";
/* empty css                                                                                */import "@supabase/auth-helpers-sveltekit";
const AuthErrorMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="${"bg-red-100 rounded-lg py-3 my-1 text-base text-red-700 inline-flex items-center w-full"}" role="${"alert"}"><svg aria-hidden="${"true"}" focusable="${"false"}" data-prefix="${"fas"}" data-icon="${"times-circle"}" class="${"w-4 h-4 m-2 fill-current"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path fill="${"currentColor"}" d="${"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}"></path></svg>
	${escape(message)}</div>`;
});
const Signin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  let { errorMessage = "" } = $$props;
  if ($$props.errorMessage === void 0 && $$bindings.errorMessage && errorMessage !== void 0)
    $$bindings.errorMessage(errorMessage);
  return `<div class="${"flex flex-col items-center max-w-sm max-w-screen-xsm mx-auto"}"><div class="${"bg-white p-6 sm:ml-0 rounded shadow-md text-black w-5/6 sm:w-full"}"><h1 class="${"text-2xl text-center"}">Welcome Back</h1>
		
		<form method="${"POST"}"><input id="${"email"}" type="${"email"}" class="${"block text-xl border border-orange-700 w-full py-3 rounded mb-4"}" name="${"email"}" ${"required"} placeholder="${"Email"}" autocomplete="${"email"}"${add_attribute("value", email, 0)}>
			<input id="${"password"}" type="${"password"}" class="${"block text-xl border border-orange-700 w-full py-3 rounded mb-4"}" name="${"password"}" ${"required"} placeholder="${"Password"}" autocomplete="${"current-password"}"${add_attribute("value", password, 0)}>
			<div class="${"flex justify-between mt-4 mb-3"}"><a href="${"/auth/requestresetpassword"}" class="${"text-sm font-semibold text-orange-600 dark:text-gray-400 hover:underline"}">Forgot Your Password? &lt;&lt;&lt;
				</a></div>
			${errorMessage !== "" ? `${validate_component(AuthErrorMessage, "AuthErrorMessage").$$render($$result, { message: errorMessage }, {}, {})}` : ``}
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
