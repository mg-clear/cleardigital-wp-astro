import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { b as $$Page } from './banner-blade_4e7764d7.mjs';
import { a as $$HeroBanner } from './case-studies-detail_00bd90a5.mjs';
import { $ as $$ColThreeGrid } from './services-detail_7c2daf6d.mjs';
import { a as $$SliderWithContent } from './case-studies-overview_e06776ba.mjs';
/* empty css                                                 */
const $$Astro$1 = createAstro();
const $$AccordionDefault = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionDefault;
  return renderTemplate`${renderComponent($$result, "astro-accordion-default", "astro-accordion-default", { "class": "astroComponent componentSpacing", "data-theme": "light", "data-astro-cid-pka6y2nk": true }, { "default": () => renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-pka6y2nk><div class="intro" data-astro-cid-pka6y2nk><h3 class="intro-headline" data-astro-cid-pka6y2nk>FAQs</h3></div><div class="accordion" data-astro-cid-pka6y2nk><div class="accordion-item" data-astro-cid-pka6y2nk><h4 class="accordion-header" data-astro-cid-pka6y2nk><button class="accordion-button" type="button" data-astro-cid-pka6y2nk>Sed ut perspiciatis unde omnis iste natus error sit voluptate
            accusantium?</button></h4><div class="accordion-collapse collapse" data-astro-cid-pka6y2nk><div class="accordion-body" data-astro-cid-pka6y2nk><p data-astro-cid-pka6y2nk>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum.</p><p data-astro-cid-pka6y2nk>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p><a href="#" class="button button--outlined" data-astro-cid-pka6y2nk>Learn more</a></div></div></div><div class="accordion-item" data-astro-cid-pka6y2nk><h4 class="accordion-header" data-astro-cid-pka6y2nk><button class="accordion-button" type="button" aria-expanded="true" data-astro-cid-pka6y2nk>Corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur?</button></h4><div class="accordion-collapse collapse" data-astro-cid-pka6y2nk><div class="accordion-body" data-astro-cid-pka6y2nk><p data-astro-cid-pka6y2nk>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum.</p><p data-astro-cid-pka6y2nk>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p><a href="#" class="button button--outlined" data-astro-cid-pka6y2nk>Learn more</a></div></div></div><div class="accordion-item" data-astro-cid-pka6y2nk><h4 class="accordion-header" data-astro-cid-pka6y2nk><button class="accordion-button" type="button" aria-expanded="true" data-astro-cid-pka6y2nk>Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem?</button></h4><div class="accordion-collapse collapse" data-astro-cid-pka6y2nk><div class="accordion-body" data-astro-cid-pka6y2nk><p data-astro-cid-pka6y2nk>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum.</p><p data-astro-cid-pka6y2nk>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p><a href="#" class="button button--outlined" data-astro-cid-pka6y2nk>Learn more</a></div></div></div></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/AccordionDefault/AccordionDefault.astro", void 0);

const $$Astro = createAstro();
const $$ServicesOverviewIntegrate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesOverviewIntegrate;
  const response = await fetch("https://dev-clear-astro-wp.pantheonsite.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
	  	query NewQuery($id: ID = "8") {
  			page(id: $id, idType: DATABASE_ID) {
    			title
				astroPageContent {
					astroBlades {
						... on Page_Astropagecontent_AstroBlades_BannerBlade {
							bladeCssId
							bladeAdditionalCssClasses
							ctaLightboxVideoUrl
							ctaStyle
							ctaTarget
							ctaText
							ctaUrl
							description
							eyebrow
							fieldGroupName
							headline
							headlineTag
							headlineTypography
							hasGridBackgroundTexture
							backgroundVideoUrl
							backgroundVideoType
							backgroundTheme
							backgroundImage {
								sourceUrl
							}
						}
					}
				}
  			}
		}
      `
    })
  });
  const json = await response.json();
  const { astroBlades } = json.data.page.astroPageContent;
  const componentMapping = {
    //   'Page_Integrationtesting_Blades_BannerBlade': BannerBlade,
    //   'Page_Integrationtesting_Blades_ContentBlade': ContentBlade,
    "Page_Astropagecontent_AstroBlades_BannerBlade": {
      component: $$HeroBanner,
      fields: [
        "bladeCssId",
        "bladeAdditionalCssClasses",
        "ctaLightboxVideoUrl",
        "ctaStyle",
        "ctaTarget",
        "ctaText",
        "ctaUrl",
        "description",
        "eyebrow",
        "fieldGroupName",
        "headline",
        "headlineTag",
        "headlineTypography",
        "hasGridBackgroundTexture",
        "backgroundVideoUrl",
        "backgroundVideoType",
        "backgroundTheme",
        "backgroundImage"
      ]
    },
    "Page_Astropagecontent_AstroBlades_ColThreeGrid": {
      component: $$ColThreeGrid,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_AccordionDefault": {
      component: $$AccordionDefault,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_TestimonialsBlade": {
      component: $$SliderWithContent,
      fields: ``
    }
    // Add more layout types as needed
  };
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${astroBlades.map((blade) => {
    const layout = blade.fieldGroupName;
    const Component = componentMapping[layout].component;
    return renderTemplate`${renderComponent($$result2, "Component", Component, { ...blade })}`;
  })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-overview-integrate.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-overview-integrate.astro";
const $$url = "/set-2/services-overview-integrate";

const servicesOverviewIntegrate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServicesOverviewIntegrate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AccordionDefault as $, servicesOverviewIntegrate as s };
