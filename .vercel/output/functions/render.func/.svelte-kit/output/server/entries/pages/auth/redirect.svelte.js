import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-9cfba6ed.js";
import { p as page } from "../../../_app/immutable/chunks/stores-4aaf17d4.js";
import { P as PasswordEntry } from "../../../_app/immutable/chunks/PasswordEntry-3884837d.js";
const Redirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  new URLSearchParams($page.url.hash.substring(1));
  const redirectType = new URLSearchParams($page.url.hash.substring(1)).get("type");
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Redirect</title>`, ""}`, ""}



${redirectType === "invite" ? `
	${validate_component(PasswordEntry, "PasswordEntry").$$render($$result, { redirectType }, {}, {})}` : `${redirectType === "signup" ? `<section class="${"flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl"}"><h1 class="${"title-font mt-2 font-bold underline hidden sm:block sm:text-2xl text-orange-600"}">Thank you for signing up to Strengthen OUR Community
		</h1>
		<p class="${"text-base mt-3 mb-0 sm:text-lg "}">We have a spiel here about why you need to do the Survey
		</p>
		<a type="${"button"}" class="${"no-underline w-1/3 text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1 disabled:opacity-25"}" href="${"/survey"}">Complete the Survey
		</a></section>` : `<section class="${"flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl"}"><h1 class="${"title-font font-bold underline hidden sm:block sm:text-2xl text-orange-600"}">Strengthening OUR Community
		</h1>
		<div class="${"bg-green-100 rounded-lg mt-2 text-gray-800 items-center w-full"}"><p class="${"my-1 text-xl"}">Your request has been lodged.</p>
			<p class="${"my-1 text-xl"}">Please check you email inbox to confirm your details.</p>
			<p>You may need to &#39;Send/Receive&#39;.</p>
			<p>If nothing is showing check your &#39;Spam&#39; folder.</p></div></section>`}`}`;
});
export {
  Redirect as default
};
