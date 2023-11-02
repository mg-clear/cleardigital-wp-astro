import { c as createAstro, d as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, g as renderComponent, F as Fragment } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { b as $$Page } from './banner-blade_ee4c0e8a.mjs';
/* empty css                             */import 'html-escaper';
/* empty css                                        *//* empty css                                  *//* empty css                           *//* empty css                                  *//* empty css                                 */
const $$Astro$2 = createAstro();
const $$BannerBlade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BannerBlade;
  const { eyebrow, headline, ctaText, ctaUrl, backgroundImage } = Astro2.props;
  const cssImg = typeof backgroundImage === "object" && backgroundImage !== null ? `url(${backgroundImage.sourceUrl})` : "";
  const $$definedVars = defineStyleVars([{ cssImg }]);
  return renderTemplate`${maybeRenderHead()}<div class="blade banner-blade" data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}><div class="blade-content" data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}>${eyebrow && renderTemplate`<div class="h4" data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}>${eyebrow}</div>`}${headline && renderTemplate`<h2 class="h1" data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}>${unescapeHTML(headline)}</h2>`}${ctaUrl && ctaText && renderTemplate`<a${addAttribute(ctaUrl, "href")} data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}>${ctaText}</a>`}</div><div class="bg-container" data-astro-cid-d5xjqua2${addAttribute($$definedVars, "style")}></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Testing/BannerBlade.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentBlade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentBlade;
  const {
    textContent,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="blade content-blade" data-astro-cid-4hcb4r5s><div class="blade-content" data-astro-cid-4hcb4r5s>${image && renderTemplate`<img${addAttribute(image.sourceUrl, "src")}${addAttribute(image.altText, "alt")} data-astro-cid-4hcb4r5s>`}${textContent && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(textContent)}` })}`}</div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Testing/ContentBlade.astro", void 0);

const $$Astro = createAstro();
const $$Graphql = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Graphql;
  const response = await fetch("https://dev-clear-astro-wp.pantheonsite.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query NewQuery {
          pageBy(pageId: 87) {
            title
            integrationTesting {
              blades {
                ... on Page_Integrationtesting_Blades_BannerBlade {
                  ctaText
                  ctaUrl
                  eyebrow
                  fieldGroupName
                  headline
              backgroundImage {
                    sourceUrl
                  }
                }
                ... on Page_Integrationtesting_Blades_ContentBlade {
                  fieldGroupName
                  textContent
                  image {
                    altText
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
  const { blades } = json.data.pageBy.integrationTesting;
  const componentMapping = {
    "Page_Integrationtesting_Blades_BannerBlade": $$BannerBlade,
    "Page_Integrationtesting_Blades_ContentBlade": $$ContentBlade
    // Add more layout types as needed
  };
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${blades.map((blade) => {
    const layout = blade.fieldGroupName;
    const Component = componentMapping[layout];
    return renderTemplate`${renderComponent($$result2, "Component", Component, { ...blade })}`;
  })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/graphql.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/graphql.astro";
const $$url = "/000testing/graphql";

export { $$Graphql as default, $$file as file, $$url as url };
