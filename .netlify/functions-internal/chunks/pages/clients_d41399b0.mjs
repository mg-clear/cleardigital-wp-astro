import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, u as unescapeHTML, f as defineStyleVars, F as Fragment } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { $ as $$Headline, b as $$Page } from './banner-blade_4e7764d7.mjs';
import { $ as $$Image, a as $$HeroBanner } from './case-studies-detail_00bd90a5.mjs';
/* empty css                                        *//* empty css                             */
const $$Astro$b = createAstro();
const $$ContentGridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ContentGridItem;
  const {
    image = {
      altText: "",
      sourceUrl: ""
    },
    headline = "",
    headlineTag = "",
    headlineTypography = "",
    description = "",
    linkUrl = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature" data-astro-cid-zopmkgll><a${addAttribute(linkUrl, "href")} data-astro-cid-zopmkgll><div class="icon-wrap" data-astro-cid-zopmkgll><img${addAttribute(image.sourceUrl, "src")} width="80" height="80"${addAttribute(image.altText, "alt")} data-astro-cid-zopmkgll></div>${renderComponent($$result, "Headline", $$Headline, { "content": headline, "tag": headlineTag, "typography": headlineTypography, "data-astro-cid-zopmkgll": true })}<p class="body-large" data-astro-cid-zopmkgll>${unescapeHTML(description)}</p></a></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ContentWithGrid/Partials/ContentGridItem.astro", void 0);

const $$Astro$a = createAstro();
const $$ContentWithGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContentWithGrid;
  const {
    bladeCssId = "",
    bladeExtraClasses = "",
    description = "",
    eyebrow = "",
    headline = "",
    headlineTag = "",
    headlineTypography = "",
    contentItems = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(bladeCssId, "id")}${addAttribute(["content-with-grid has-grid-bg blade", { bladeExtraClasses }], "class:list")} is="flynt-block-three-col-content" data-astro-cid-jronyza2><div class="container" data-astro-cid-jronyza2><div class="intro" data-astro-cid-jronyza2>${eyebrow && renderTemplate`<div class="intro-eyebrow" data-astro-cid-jronyza2>${eyebrow}</div>`}${headline && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "content": headline, "tag": headlineTag, "typography": headlineTypography, "data-astro-cid-jronyza2": true })}`}${description && renderTemplate`<div class="intro-blurb" data-astro-cid-jronyza2>${unescapeHTML(description)}</div>`}</div>${null !== contentItems && Object.keys(contentItems).length > 0 && renderTemplate`<div class="features" data-astro-cid-jronyza2><span class="art art--arrow" data-astro-cid-jronyza2></span>${contentItems.map((item) => {
    return renderTemplate`${renderComponent($$result, "ContentGridItem", $$ContentGridItem, { "image": item.image, "headline": item.headline, "headlineTag": item.headlineTag, "headlineTypography": item.headlineTypography, "description": item.description, "linkUrl": item.linkUrl, "data-astro-cid-jronyza2": true })}`;
  })}</div>`}</div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ContentWithGrid/ContentWithGrid.astro", void 0);

const Check = {"src":"/_astro/check.ebd7fa1d.svg","width":24,"height":24,"format":"svg"};

const $$Astro$9 = createAstro();
const $$FilterTerm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FilterTerm;
  const {
    label,
    taxonomy,
    termId,
    slug
  } = Astro2.props;
  const cssVars = { checkImg: `url(${Check.src})` };
  const $$definedVars = defineStyleVars([cssVars]);
  return renderTemplate`${maybeRenderHead()}<label class="filter-term button-small" data-cursor-expand data-cursor-icon="plus" data-astro-cid-qmjt3e2i${addAttribute($$definedVars, "style")}><input type="checkbox"${addAttribute(`${taxonomy}-term-${termId}`, "name")}${addAttribute(taxonomy, "data-taxonomy")}${addAttribute(slug, "data-slug")}${addAttribute(termId, "data-term-id")} data-astro-cid-qmjt3e2i${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${label}` })}</label>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/FilterTerm.astro", void 0);

const $$Astro$8 = createAstro();
const $$FilterSectionChildren = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FilterSectionChildren;
  const { taxonomy, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="child-terms" data-astro-cid-mie7kyov>${children.map((term) => {
    return renderTemplate`${renderComponent($$result, "FilterTerm", $$FilterTerm, { ...{ taxonomy, ...term }, "data-astro-cid-mie7kyov": true })}`;
  })}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/FilterSectionChildren.astro", void 0);

const ChevronUp = {"src":"/_astro/chevron-up.d8919a5a.svg","width":24,"height":24,"format":"svg"};

const $$Astro$7 = createAstro();
const $$FilterSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FilterSection;
  const {
    label,
    taxonomy,
    termId,
    slug,
    children = null
  } = Astro2.props;
  const cssVars = { chevron: `url(${ChevronUp.src})` };
  const $$definedVars = defineStyleVars([cssVars]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["filter-section", { collapsable: children !== null }], "class:list")} data-astro-cid-6s25vwih${addAttribute($$definedVars, "style")}><div${addAttribute(["parent-row filter-checkbox-row", { "has-children": children !== null }], "class:list")} data-astro-cid-6s25vwih${addAttribute($$definedVars, "style")}>${renderComponent($$result, "FilterTerm", $$FilterTerm, { ...{ label, taxonomy, termId, slug }, "data-astro-cid-6s25vwih": true })}<button${addAttribute(["opener"], "class:list")} data-astro-cid-6s25vwih${addAttribute($$definedVars, "style")}>${unescapeHTML(`<span class="sr-only">Expand</span>`)}</button></div><div class="opener-target" data-astro-cid-6s25vwih${addAttribute($$definedVars, "style")}>${children && renderTemplate`${renderComponent($$result, "FilterSectionChildren", $$FilterSectionChildren, { ...{ taxonomy, children }, "data-astro-cid-6s25vwih": true })}`}</div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/FilterSection.astro", void 0);

const $$Astro$6 = createAstro();
const $$Filters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Filters;
  return renderTemplate`${maybeRenderHead()}<div class="client-filters" is="client-filters" data-astro-cid-puzvecjj><div class="filter-top filter-row" data-astro-cid-puzvecjj><h2 class="h4" data-astro-cid-puzvecjj>Filter all clients</h2><div class="client-count-clear-button container" data-astro-cid-puzvecjj><div class="client-count" data-astro-cid-puzvecjj>
500 clients
</div><button class="clear-button" data-astro-cid-puzvecjj>
Clear all
</button></div></div><div class="filters" data-astro-cid-puzvecjj><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Techology", "taxonomy": "industry", "termId": "1111", "slug": "technology", "children": [
    {
      label: "SaaS",
      termId: "1112",
      slug: "saas"
    },
    {
      label: "Cyber Security",
      termId: "1113",
      slug: "cyber-security"
    },
    {
      label: "Big Data",
      termId: "1114",
      slug: "big-data"
    },
    {
      label: "ML/AI",
      termId: "1115",
      slug: "ml-ai"
    },
    {
      label: "Networking",
      termId: "1116",
      slug: "networking"
    },
    {
      label: "Cloud/Dev Ops",
      termId: "1117",
      slug: "cloud-dev-ops"
    },
    {
      label: "Services",
      termId: "1118",
      slug: "services"
    },
    {
      label: "Other",
      termId: "1119",
      slug: "other-technology"
    }
  ], "data-astro-cid-puzvecjj": true })}</div><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Healthcare", "taxonomy": "industry", "termId": "1222", "slug": "healthcare", "data-astro-cid-puzvecjj": true })}</div><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Financial Services", "taxonomy": "industry", "termId": "1333", "slug": "financia-services", "data-astro-cid-puzvecjj": true })}</div><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Insurance", "taxonomy": "industry", "termId": "1444", "slug": "insurance", "data-astro-cid-puzvecjj": true })}</div><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Non-profit", "taxonomy": "industry", "termId": "1555", "slug": "non-profit", "data-astro-cid-puzvecjj": true })}</div><div class="filter-row" data-astro-cid-puzvecjj>${renderComponent($$result, "FilterSection", $$FilterSection, { "label": "Other", "taxonomy": "industry", "termId": "1666", "slug": "other", "data-astro-cid-puzvecjj": true })}</div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/Filters.astro", void 0);

const CloseX = {"src":"/_astro/x-square.b7cbdc27.svg","width":24,"height":24,"format":"svg"};

const CloseXWhite = {"src":"/_astro/x-square-white.a6534c41.svg","width":24,"height":24,"format":"svg"};

const $$Astro$5 = createAstro();
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tag;
  const { label, slug, taxonomy, termId } = Astro2.props;
  const cssVars = { closex: `url(${CloseX.src})`, closexwhite: `url(${CloseXWhite.src})` };
  const $$definedVars = defineStyleVars([cssVars]);
  return renderTemplate`${maybeRenderHead()}<div class="taxonomy-tag button-small" is="taxonomy-tag" data-cursor-expand data-cursor-icon="x"${addAttribute(taxonomy, "data-taxonomy")}${addAttribute(termId, "data-term-id")}${addAttribute(slug, "data-term-slug")} data-astro-cid-zoisoso2${addAttribute($$definedVars, "style")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${label}` })}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/Tag.astro", void 0);

const $$Astro$4 = createAstro();
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tags;
  return renderTemplate`${maybeRenderHead()}<div class="client-tags" is="client-tags" data-astro-cid-zvzcq3lo>${renderComponent($$result, "Tag", $$Tag, { "label": "Label", "slug": "slug", "termId": "1", "taxonomy": "taxonomy", "data-astro-cid-zvzcq3lo": true })}${renderComponent($$result, "Tag", $$Tag, { "label": "Insurance", "slug": "insurance", "termId": "1444", "taxonomy": "industry", "data-astro-cid-zvzcq3lo": true })}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/Tags.astro", void 0);

const ArrowRight = {"src":"/_astro/arrow-right.b93f126c.svg","width":24,"height":24,"format":"svg"};

const $$Astro$3 = createAstro();
const $$ArrowLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowLink;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="case-study-arrow-link" data-cursor-expand data-cursor-icon="arrow-right" data-astro-cid-krdaotct><div class="case-study-arrow" data-astro-cid-krdaotct>${renderComponent($$result, "Image", $$Image, { "src": ArrowRight, "alt": "", "width": "24", "height": "24", "data-astro-cid-krdaotct": true })}</div></a>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/ArrowLink.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { sourceUrl, altText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="client-card" is="client-card" data-astro-cid-2jbbvzdl><div class="client-logo" data-astro-cid-2jbbvzdl>${renderComponent($$result, "Image", $$Image, { "src": sourceUrl, "alt": altText, "width": "210", "height": "84", "class": "client-logo", "data-astro-cid-2jbbvzdl": true })}</div>${renderComponent($$result, "ArrowLink", $$ArrowLink, { "href": "#", "data-astro-cid-2jbbvzdl": true })}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/Partials/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientsView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientsView;
  const response = await fetch("https://dev-clear-astro-wp.pantheonsite.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query ClientsQuery($status: PostStatusEnum = PUBLISH) {
            clients(where: {status: $status}, first: 100) {
                nodes {
                    title
                    clientSettings {
                        clientLogo {
                            altText
                            sourceUrl
                        }
                        clientCaseStudy {
                            ... on CaseStudy {
                                slug
                                databaseId
                            }
                        }
                    }
                    industries {
                        nodes {
                            slug
                            parentId
                            termTaxonomyId
                            parent {
                                node {
                                    termTaxonomyId
                                }
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
  const clients = json.data.clients.nodes;
  return renderTemplate`${maybeRenderHead()}<div class="clients-view blade" is="clients-view" data-astro-cid-fx42h7tj><div class="container" data-astro-cid-fx42h7tj><div class="filters" data-astro-cid-fx42h7tj>${renderComponent($$result, "Filters", $$Filters, { "data-astro-cid-fx42h7tj": true })}</div><div class="tags" data-astro-cid-fx42h7tj>${renderComponent($$result, "Tags", $$Tags, { "data-astro-cid-fx42h7tj": true })}</div><div class="cards" data-astro-cid-fx42h7tj>${clients.map((client) => {
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { ...client.clientSettings.clientLogo, "data-astro-cid-fx42h7tj": true })}`;
  })}</div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Clients/ClientsView.astro", void 0);

const $$Astro = createAstro();
const $$Clients = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clients;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Clients", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "<span class='marker-effect marker-underline'>Great</span> clients.<br/>Many industries.", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "headlineTag": "h1", "headlineTypography": "h1" })}${renderComponent($$result2, "ContentWithGrid", $$ContentWithGrid, { "eyebrow": "Customer impact", "headline": "Curabitur malesuada est tempor <span class='marker-effect marker-underline'>ullamcorper</span> maximus", "headlineTag": "h2", "headlineTypography": "h2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.", "contentItems": [
    {
      image: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/11/Cisco_Logo.svg",
        altText: "cisco"
      },
      headline: "2M",
      headlineTag: "h3",
      headlineTypography: "h1",
      description: "Torem ipsum dolor sit <a href='#'>amet</a>, consectetur adipiscing at elit.",
      linkUrl: ""
    },
    {
      image: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/11/Cisco_Logo.svg",
        altText: "intel"
      },
      headline: "90%",
      headlineTag: "h3",
      headlineTypography: "h1",
      description: "Torem ipsum dolor sit amet, consectetur <a href='#'>adipiscing</a> at elit.",
      linkUrl: ""
    },
    {
      image: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/11/Cisco_Logo.svg",
        altText: "citrix"
      },
      headline: "$1.5M",
      headlineTag: "h3",
      headlineTypography: "h1",
      description: "Torem ipsum dolor sit <a href='#'>amet</a>, consectetur adipiscing at elit.",
      linkUrl: ""
    }
  ] })}${renderComponent($$result2, "ClientsView", $$ClientsView, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "Let\u2019s talk.", "eyebrow": "Lorem ipsum dolor", "ctaText": "Contact us", "ctaStyle": "button", "ctaUrl": "/contact", "headlineTag": "h2", "headlineTypography": "h1", "backgroundImage": {
    sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp"
  } })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/clients.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/clients.astro";
const $$url = "/set-3/clients";

const clients = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Clients,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentWithGrid as $, clients as c };
