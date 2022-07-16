import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component, e as add_classes } from "../../immutable/chunks/index-917ed570.js";
import { p as page, s as session } from "../../immutable/chunks/stores-4e28f386.js";
import { s as supabaseClient } from "../../immutable/chunks/dbClient-64f7d521.js";
import { ENDPOINT_PREFIX } from "@supabase/auth-helpers-shared";
import "dequal";
import "@supabase/auth-helpers-sveltekit";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const initialValues = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null
};
const accessToken = writable(initialValues.accessToken);
const SupaAuthHelper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_accessToken;
  let $$unsubscribe_session;
  $$unsubscribe_accessToken = subscribe(accessToken, (value) => value);
  let { supabaseClient: supabaseClient2 } = $$props;
  let { endpointPrefix = ENDPOINT_PREFIX } = $$props;
  let { callbackUrl = `${endpointPrefix}/callback` } = $$props;
  let { profileUrl = `${endpointPrefix}/user` } = $$props;
  let { autoRefreshToken = true } = $$props;
  let { session: session2 } = $$props;
  $$unsubscribe_session = subscribe(session2, (value) => value);
  let { onUserUpdate = (user) => {
  } } = $$props;
  if ($$props.supabaseClient === void 0 && $$bindings.supabaseClient && supabaseClient2 !== void 0)
    $$bindings.supabaseClient(supabaseClient2);
  if ($$props.endpointPrefix === void 0 && $$bindings.endpointPrefix && endpointPrefix !== void 0)
    $$bindings.endpointPrefix(endpointPrefix);
  if ($$props.callbackUrl === void 0 && $$bindings.callbackUrl && callbackUrl !== void 0)
    $$bindings.callbackUrl(callbackUrl);
  if ($$props.profileUrl === void 0 && $$bindings.profileUrl && profileUrl !== void 0)
    $$bindings.profileUrl(profileUrl);
  if ($$props.autoRefreshToken === void 0 && $$bindings.autoRefreshToken && autoRefreshToken !== void 0)
    $$bindings.autoRefreshToken(autoRefreshToken);
  if ($$props.session === void 0 && $$bindings.session && session2 !== void 0)
    $$bindings.session(session2);
  if ($$props.onUserUpdate === void 0 && $$bindings.onUserUpdate && onUserUpdate !== void 0)
    $$bindings.onUserUpdate(onUserUpdate);
  $$unsubscribe_accessToken();
  $$unsubscribe_session();
  return `${slots.default ? slots.default({}) : ``}`;
});
const logo = "/_app/immutable/assets/hall_logo_image_90px-c8a9d17c.png";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><a class="${"absolute top-0"}" aria-label="${"Hall photo"}" href="${"https://www.facebook.com/Burrell-Creek-Youth-and-Community-Association-Inc-1584955455117833/?__tn__=-UC*F"}"><img class="${"rounded-full p-1"}"${add_attribute("src", logo, 0)} alt="${"BCYCA Inc"}"></a></div>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.active.svelte-173hj3l button.svelte-173hj3l{background-color:transparent;color:rgb(249, 115, 22)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `<nav class="${"container h-15 flex justify-around items-center mx-auto bg-orange-300"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
	
	<div class="${"flex ml-[89px] items-center"}"><div class="${"hidden md:block"}"><a sveltekit:prefetch href="${"/"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 font-semibold text-white bg-orange-500 rounded-xl svelte-173hj3l"}">Home</button></a>
			<a sveltekit:prefetch href="${"/about"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/about") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">About
				</button></a>
			<a sveltekit:prefetch href="${"/contact"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/contact") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">Contact Us
				</button></a></div></div>

	
	<div class="${"hidden md:flex items-center"}">${$session.user ? `<button href="${"/"}" class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"}">Sign Out
			</button>` : `<a sveltekit:prefetch href="${"/auth/signin"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/signin") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">Sign In
				</button></a>`}</div>
	<div class="${"text-sm pl-3 mb-4 mt-6 bg-orange-300 text-center z-50 font-extrabold text-orange-500 md:hidden"}">Strengthening Our Community
	</div>
	
	<div class="${"md:hidden flex items-center"}"><button class="${"outline-none bg-transparent mobile-menu-button"}"><svg class="${"w-6 h-6 text-orange-500 hover:text-purple-500 "}" x-show="${"!showMenu"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></div>

	
	<div class="${["bg-orange-300 absolute w-full mobile-menu", "hidden"].join(" ").trim()}"><ul class="${"space-y-2 list-none"}"><li><a sveltekit:prefetch href="${"/"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">Home
					</button></a></li>
			<li><a sveltekit:prefetch href="${"/about"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/about") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">About
					</button></a></li>
			<li><a sveltekit:prefetch href="${"/contact"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/contact") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">Contact Us
					</button></a></li>
			<li>${$session.user ? `<button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black"}">Sign Out
					</button>` : `<a sveltekit:prefetch href="${"/auth/signin"}" class="${["svelte-173hj3l", $page.url.pathname.endsWith("/signin") ? "active" : ""].join(" ").trim()}"><button class="${"py-2 px-2 text-white bg-orange-500 font-semibold rounded-xl outline-black svelte-173hj3l"}">Sign In
						</button></a>`}</li></ul></div>
</nav>`;
});
const app = "";
const __uno = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#wrapper.svelte-1jjqws8{grid-template-rows:auto 1fr auto}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const onUserUpdate = async (user) => {
    if (user) {
      if ($page.url.pathname.endsWith("/auth/updateuser")) {
        if (!$page.url.pathname.startsWith("/auth/updateuser")) {
          await goto("/auth/updateuser");
          location.reload();
        }
      } else if (!$page.url.pathname.startsWith("/profile")) {
        await goto("/profile");
        location.reload();
      }
    }
  };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SupaAuthHelper, "SupaAuthHelper").$$render($$result, { supabaseClient, session, onUserUpdate }, {}, {
    default: () => {
      return `<div class="${"grid w-11/12 mx-auto min-h-screen svelte-1jjqws8"}" id="${"wrapper"}"><header class="${"col-span-8 row-span-1"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>
		<main class="${"col-span-8 row-span-22"}">${slots.default ? slots.default({}) : ``}</main>
		${`<footer class="${"col-span-8 row-span-1 sticky bottom-0"}"><div class="${"flex content-center items-center justify-around bg-orange-600 text-light-600 w-full h-[45px]"}"><a sveltekit:prefetch href="${"/policies/termsofservice"}"${add_classes(($page.url.pathname.endsWith("/policies/termsofservice") ? "active" : "").trim())}>Terms of Service
					</a>
					<h3>Building a safer connected community</h3>
					<a sveltekit:prefetch href="${"/policies/privacy"}"${add_classes(($page.url.pathname.endsWith("/policies/privacy") ? "active" : "").trim())}>Privacy Policy
					</a></div></footer>`}</div>`;
    }
  })}`;
});
export {
  _layout as default
};
