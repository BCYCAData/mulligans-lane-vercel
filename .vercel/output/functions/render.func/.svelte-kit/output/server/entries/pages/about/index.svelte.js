import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-917ed570.js";
const BasicMap_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';",
  map: null
};
const BasicMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"map"}" class="${"m-4 h-1/2 w-3/4 "}"></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<section class="${"flex flex-col items-center mx-auto mt-10 sm:mt-1 h-full max-w-3xl text-gray-800 text-center"}"><h1>About this app</h1>

	<h3>We have a project</h3>
	<p>Our aim is to <br>
		Prepare<br>
		Connect<br>
		Rebound
	</p>
	${validate_component(BasicMap, "BasicMap").$$render($$result, {}, {}, {})}</section>`;
});
export {
  About as default
};
