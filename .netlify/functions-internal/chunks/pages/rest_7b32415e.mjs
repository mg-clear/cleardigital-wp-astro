import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, F as Fragment } from '../astro_fb3c1bda.mjs';
import 'clsx';
import 'html-escaper';

const $$Astro = createAstro();
const $$Rest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rest;
  const endpoint = "https://dev-clear-astro-wp.pantheonsite.io/graphql";
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${endpoint}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/rest.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/rest.astro";
const $$url = "/000testing/rest";

export { $$Rest as default, $$file as file, $$url as url };
