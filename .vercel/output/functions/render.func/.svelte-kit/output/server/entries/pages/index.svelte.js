import { c as create_ssr_component, b as subscribe } from "../../_app/immutable/chunks/index-9cfba6ed.js";
import { p as page } from "../../_app/immutable/chunks/stores-4aaf17d4.js";
/* empty css                                                                        */import "../../_app/immutable/chunks/dbClient-7d0ef1f9.js";
/* empty css                                                                          */import "@supabase/auth-helpers-sveltekit";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url;
  $$unsubscribe_page();
  return `


${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"flex flex-col items-center text-center mt-5 sm:mt-1 mx-auto h-full max-w-3xl text-gray-800"}"><h1 class="${"title-font font-bold underline hidden sm:block sm:text-2xl text-orange-600"}">Strengthening OUR Community
	</h1>
	<p class="${"text-base mt-3 mb-0 sm:text-lg "}">This project, funded by the Bushfire Community Recovery Resilience Fund, is a response to the
		community\u2019s feedback following the 2019 bushfires.
	</p>
	<p class="${"text-base sm:text-lg mt-1 mb-0"}">As a community we share the same environment.\xA0 We want our community to feel prepared for
		future challenges and be armed with knowledge that helps us to tackle whatever natural disaster
		comes our way.
	</p>
	${``}
	<p class="${"text-base text-gray-900 font-semibold md:text-xl mt-1 mb-0"}">Above all, we want our community to feel prepared, safe and connected.
	</p>
	<p class="${"text-base md:text-lg text-red-500 font-semibold mt-1 mb-0"}">Will you join us?</p>
	<p class="${"cursor-pointer max-w-80 no-underline hover:underline mt-1 p-2 font-semibold text-white bg-orange-500 rounded-xl"}">Tap here to find out if you qualify
	</p>
	
	<p class="${"text-sm md:text-lg mt-1 font-semibold"}">Want more information?</p>
	<p class="${"text-sm md:text-lg mt-0 font-semibold"}">Call Helen 0424 515 963</p></section>`;
});
export {
  Routes as default
};
