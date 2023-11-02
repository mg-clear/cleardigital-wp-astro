import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { a as $$CTAButton, b as $$Page } from './banner-blade_4e7764d7.mjs';
import { a as $$HeroBanner } from './case-studies-detail_00bd90a5.mjs';
import { $ as $$ImageTwoBlock, a as $$SliderWithContent } from './case-studies-overview_e06776ba.mjs';
import { $ as $$ContentWithGrid } from './clients_d41399b0.mjs';
import { $ as $$TabsWithContent, a as $$TwoGridSlider } from './homepage-integrate_c023f436.mjs';

const $$Astro$3 = createAstro();
const $$Eyebrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Eyebrow;
  const { text, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("eyebrow" + (className ? " " + className : ""), "class")}>${text}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/Eyebrow.astro", void 0);

const $$Astro$2 = createAstro();
const $$BladeHeroBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BladeHeroBanner;
  const { eyebrow, headline, ctaLabel, ctaHref, ctaTarget, backgroundVideoUrl, backgroundVideoMediaType = "video/mp4" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="blade dark has-grid-bg has-video-bg"><div class="blade-content">${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "className": "subtitle" })}<h1>${headline}</h1>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": ctaLabel, "href": ctaHref, "target": ctaTarget })}</div><div class="bg-container overlay"><video class="video-bg overlay" autoplay loop muted><source${addAttribute(backgroundVideoUrl, "src")}${addAttribute(backgroundVideoMediaType, "type")}></video></div></section>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Testing/BladeHeroBanner.astro", void 0);

const $$Astro$1 = createAstro();
const $$Homepage$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Homepage$1;
  const res = await fetch(
    `https://dev-clear-astro-wp.pantheonsite.io/graphql`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query HomepageQuery($id: ID! = "cG9zdDo3") {
          page(id: $id) {
            id
            title
            homepageBlades {
              homepageBlades {
                ... on Page_Homepageblades_HomepageBlades_HeroBanner {
                  ctaLabel
                  ctaTarget
                  ctaUrl
                  eyebrow
                  headline
                  fieldGroupName
                }
                ... on Page_Homepageblades_HomepageBlades_Section1 {
                  field1
                  field2
                  fieldGroupName
                }
              }
            }
            seo {
              metaDesc
              opengraphTitle
              opengraphImage {
                sourceUrl
              }
            }
          }
        }
      `,
        variables: {
          id: "cG9zdDo3"
        }
      })
    }
  );
  const json = await res.json();
  const page = json.data.page;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "metadescription": page.seo.metaDesc, "ogimage": page.seo.opengraphImage.sourceUrl, "title": page.title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BladeHeroBanner", $$BladeHeroBanner, { "eyebrow": "", "headline": "", "ctaLabel": "", "ctaHref": "", "ctaTarget": "_blank", "backgroundVideoUrl": "https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&k=20&c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=", "backgroundVideoMediaType": "video/mp4" })}${maybeRenderHead()}<section class="blade has-grid-bg"><div class="blade-content"><h1>This is an H1 headline.</h1></div></section><section class="blade dark has-grid-bg"><div class="blade-content"><h3>This is an H3 headline with a large amount of copy underneath.</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam voluptates placeat earum necessitatibus officiis illo voluptate pariatur aperiam consequatur in, illum optio, non inventore facilis, veritatis mollitia ducimus. Repellat ab dolores dolorem at inventore pariatur autem odit ullam amet? Perspiciatis ipsam repellat quidem tenetur laboriosam, mollitia laborum sequi saepe error adipisci assumenda, vel hic voluptate cumque commodi excepturi maiores ex labore reprehenderit nemo inventore. Dignissimos, nemo facere eos necessitatibus tempora eaque ex obcaecati totam quae repellat ipsam similique sint fuga quasi iusto aliquam et. Perspiciatis velit quas impedit excepturi autem sapiente totam, atque placeat, iure pariatur nisi soluta cumque?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio autem soluta consequatur eius. Animi rerum, repellendus molestiae doloribus eveniet, dolorem distinctio praesentium quo laboriosam cupiditate qui reiciendis impedit! Quibusdam molestiae repudiandae odit et modi sunt aperiam corrupti quam. Dolores quidem temporibus cupiditate porro ad quod omnis minima necessitatibus, neque expedita!</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod labore ea sed sint nulla ullam itaque id consequuntur eveniet, veniam, excepturi eligendi, soluta exercitationem harum! Accusantium officia dolorem fugiat consectetur asperiores blanditiis optio earum repellendus perferendis animi laudantium commodi sint itaque facilis vero voluptas aperiam debitis, et quam molestias quisquam facere totam inventore delectus. Aliquam necessitatibus corrupti autem quaerat rerum. Nulla quisquam consequatur quam perferendis minus laudantium est debitis similique exercitationem! A quia et eum quasi optio omnis. Possimus ipsa sequi eveniet dolores aliquam eius corrupti excepturi quo veritatis et molestias inventore, nulla rerum! Accusantium vel optio qui eos.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi, necessitatibus veniam ab neque atque officiis veritatis debitis iure voluptatum, expedita accusantium nulla. Nisi praesentium hic magni quisquam eligendi assumenda molestias asperiores veritatis adipisci neque alias, atque error ipsa obcaecati vel tempore ad consequatur officia qui? Nam repudiandae officiis maiores voluptatum explicabo, molestiae officia reiciendis, delectus esse, fugiat quaerat iste hic id! Iusto repudiandae sunt voluptates sed corrupti cupiditate itaque!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, provident. Assumenda fuga incidunt quas soluta tempora commodi non veritatis debitis sunt reiciendis eum, quo aut adipisci quae vitae inventore amet voluptatem quod, omnis labore! Tempora quos dolorem ex nihil earum sint, perspiciatis magni, delectus voluptatum fugit placeat, totam iure vero. Debitis illum ullam ipsa nobis veritatis quis natus provident quod numquam asperiores autem neque cupiditate itaque cum quia, sapiente facere porro quasi quibusdam deleniti nihil exercitationem assumenda! Soluta aut sint expedita a quam excepturi blanditiis possimus maiores nemo nam. Aspernatur libero illum laboriosam ducimus ipsum vero expedita nam molestias. Debitis repellendus fugiat ducimus asperiores odit repellat sequi hic totam quibusdam accusantium, neque dolore necessitatibus. Saepe ducimus atque minus, recusandae sint maxime culpa eos ullam quos numquam natus quis laboriosam alias id, fugit doloremque magnam vero doloribus ea veritatis est iste aperiam nam. Eum facilis exercitationem, ipsa dolor et, quaerat architecto minima vero enim facere, consequatur qui in eaque nostrum praesentium. Dolorem laboriosam, labore laborum nulla nihil porro. Sit minima autem amet optio? Natus eveniet dicta, amet eaque reprehenderit, hic illum eligendi, nisi qui quam velit ipsum temporibus labore modi ullam laboriosam incidunt fugit voluptatum odit odio maiores itaque aliquid quidem!</p></div></section>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/homepage.astro", void 0);

const $$file$1 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/homepage.astro";
const $$url$1 = "/000testing/homepage";

const homepage$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Homepage$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Homepage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Homepage;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Homepage | Set 1", "metadescription": "Homepage", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "homeHero", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": null, "ctaTarget": "_self", "ctaText": "Our Approach", "ctaUrl": "/approach/", "description": null, "eyebrow": "Hello! We are Clear Digital.", "headline": "We build B2B websites and <span class='marker-effect marker-underline'>digital</span> brand experiences.", "headlineTag": "h1", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": "https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&k=20&c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=", "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp" }, "hasGridBackgroundTexture": true })}${renderComponent($$result2, "ImageTwoBlock", $$ImageTwoBlock, {})}${renderComponent($$result2, "ContentWithGrid", $$ContentWithGrid, { "bladeCssId": null, "bladeExtraClasses": null, "description": "Clear Digital is a Silicon Valley-based website design agency that helps you build and accelerate your web, brand, and digital marketing by providing expert, strategic, and data-informed solutions that deliver results.", "eyebrow": "20+ years of success.", "headline": "We deliver results-driven digital experiences that get you to what\u2019s <span class='marker-effect marker-underline'></ContentWithGrid>next</span>.", "headlineTag": "h2", ",": true, "headlineTypography": "h2", ",": true, "contentItems": [
    {
      "image": {
        "altText": "alt1",
        "sourceUrl": "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-1.png"
      },
      "headline": "Collaboration focus lorem ipsum.",
      "headlineTag": "h3",
      "headlineTypography": "h4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.",
      "linkUrl": "/?a=1"
    },
    {
      "image": {
        "altText": "alt1",
        "sourceUrl": "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-2.png"
      },
      "headline": "Collaboration focus lorem ipsum.",
      "headlineTag": "h3",
      "headlineTypography": "h4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.",
      "linkUrl": "/?a=2"
    },
    {
      "image": {
        "altText": "alt1",
        "sourceUrl": "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-3.png"
      },
      "headline": "Collaboration focus lorem ipsum.",
      "headlineTag": "h3",
      "headlineTypography": "h4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet expedita! Quis magnam quos odit earum quidem quod voluptates? Ex.",
      "linkUrl": "/?a=3"
    }
  ] })}${renderComponent($$result2, "TabsWithContent", $$TabsWithContent, {})}${renderComponent($$result2, "SliderWithContent", $$SliderWithContent, {})}${renderComponent($$result2, "TwoGridSlider", $$TwoGridSlider, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "homeCTA", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": "button", "ctaTarget": "_self", "ctaText": "Contact Us", "ctaUrl": "/contact/", "description": null, "eyebrow": "Lorem ipsum dolor.", "headline": "Let\u2019s talk.", "headlineTag": "h2", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp" }, "hasGridBackgroundTexture": true })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/homepage.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/homepage.astro";
const $$url = "/set-1/homepage";

const homepage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Homepage,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { homepage as a, homepage$1 as h };
