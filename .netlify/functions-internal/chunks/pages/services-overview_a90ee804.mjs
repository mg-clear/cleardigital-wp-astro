import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { b as $$Page } from './banner-blade_4e7764d7.mjs';
import { a as $$HeroBanner } from './case-studies-detail_00bd90a5.mjs';
/* empty css                                       */import { $ as $$ColThreeGrid } from './services-detail_7c2daf6d.mjs';
import { $ as $$AccordionDefault } from './services-overview-integrate_82567cd5.mjs';
import { a as $$SliderWithContent } from './case-studies-overview_e06776ba.mjs';
import 'html-escaper';
/* empty css                                        *//* empty css                                  *//* empty css                           *//* empty css                                  *//* empty css                                 */import '@astrojs/internal-helpers/path';
/* empty css                                        */import '../astro-assets-services_6b3983ce.mjs';
/* empty css                                     */import './homepage-integrate_c023f436.mjs';
import './clients_d41399b0.mjs';
/* empty css                                        *//* empty css                             *//* empty css                                        *//* empty css                                        *//* empty css                                     *//* empty css                                     *//* empty css                                                 *//* empty css                                        *//* empty css                                        */
const $$Astro$1 = createAstro();
const $$StickyNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StickyNav;
  return renderTemplate`${maybeRenderHead()}<div class="stickyNav" data-astro-cid-saprxedy><div class="container" data-astro-cid-saprxedy><ul class="stickyNav-menu" data-astro-cid-saprxedy><li class="stickyNav-menuItem" data-astro-cid-saprxedy><a class="paragraph active" href="#" data-astro-cid-saprxedy>Services</a></li><li class="stickyNav-menuItem" data-astro-cid-saprxedy><a class="paragraph" href="#" data-astro-cid-saprxedy>Velocity Workshop</a></li><li class="stickyNav-menuItem" data-astro-cid-saprxedy><a class="paragraph" href="#" data-astro-cid-saprxedy>Case Studies</a></li><li class="stickyNav-menuItem" data-astro-cid-saprxedy><a class="paragraph" href="#" data-astro-cid-saprxedy>FAQ</a></li></ul></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/StickyNav/StickyNav.astro", void 0);

const $$Astro = createAstro();
const $$ServicesOverview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesOverview;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Services | Set 2", "metadescription": "meta", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "workHeroBanner", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": null, "ctaTarget": "_self", "ctaText": null, "ctaUrl": null, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "eyebrow": "Our Services", "headline": "A <span class='marker-effect marker-underline'>solution</span> for every challenge.", "headlineTag": "h1", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/services-overview-bg.png" }, "hasGridBackgroundTexture": true })}${renderComponent($$result2, "StickyNav", $$StickyNav, {})}${renderComponent($$result2, "ColThreeGrid", $$ColThreeGrid, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "velocity-workshop", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": "button", "ctaTarget": "_self", "ctaText": "Learn more", "ctaUrl": "/", "description": "The Clear Digital Velocity Workshops is our unique and dynamic methodology that flips the traditional agency models by transforming project discovery conversations into focused project planning and road mapping exercises.", "eyebrow": null, "headline": "Velocity Workshop", "headlineTag": "h2", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": null, "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/velocity-workshop.webp" }, "hasGridBackgroundTexture": false })}${renderComponent($$result2, "SliderWithContent", $$SliderWithContent, {})}${renderComponent($$result2, "AccordionDefault", $$AccordionDefault, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "workCTA", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": "button", "ctaTarget": "_self", "ctaText": "Contact Us", "ctaUrl": "/contact/", "description": null, "eyebrow": "Lorem ipsum dolor.", "headline": "Let\u2019s talk.", "headlineTag": "h2", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp" }, "hasGridBackgroundTexture": true })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-overview.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-overview.astro";
const $$url = "/set-2/services-overview";

export { $$ServicesOverview as default, $$file as file, $$url as url };
