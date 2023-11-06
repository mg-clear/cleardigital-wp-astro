import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, g as renderComponent } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { b as $$Page } from './banner-blade_a7bc46cc.mjs';
import { $ as $$Image, a as $$HeroBanner, b as $$TwoColWithLogo } from './case-studies-detail_46a6af55.mjs';
import { a as $$TwoGridSlider } from './homepage-integrate_e10d2cd4.mjs';
import { $ as $$ContentWithGrid } from './clients_b99b3392.mjs';
/* empty css                                     *//* empty css                                     */
const brandStrategyLogoImage = {"src":"/_astro/brand-strategy.b82d9e51.svg","width":100,"height":100,"format":"svg"};

const contentDevelopmentLogoImage = {"src":"/_astro/content-development.3d55deba.svg","width":75,"height":94,"format":"svg"};

const creativeServicesLogoImage = {"src":"/_astro/creative-services.daeed208.svg","width":100,"height":100,"format":"svg"};

const digitalMarketingLogoImage = {"src":"/_astro/digital-marketing.3c3a37f0.svg","width":100,"height":84,"format":"svg"};

const digitalStrategyLogoImage = {"src":"/_astro/digital-strategy.4bc65137.svg","width":65,"height":100,"format":"svg"};

const motionGraphicsLogoImage = {"src":"/_astro/motion-graphics.89a21188.svg","width":100,"height":100,"format":"svg"};

const systemsLogoImage = {"src":"/_astro/systems.975cd2e8.svg","width":126,"height":100,"format":"svg"};

const supportLogoImage = {"src":"/_astro/support.c744626c.svg","width":100,"height":100,"format":"svg"};

const webDevelopmentLogoImage = {"src":"/_astro/web-development.16c9b287.svg","width":75,"height":100,"format":"svg"};

const $$Astro$3 = createAstro();
const $$BackgroundMarqueeText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BackgroundMarqueeText;
  const {
    lines = null
  } = Astro2.props;
  return renderTemplate`${lines && lines.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-text-lines" data-astro-cid-j7lrq37x>${lines.map((line, i) => {
    return renderTemplate`<div${addAttribute(["marquee-text-line h1", i % 2 != 0 ? "even" : "odd"], "class:list")}${addAttribute((i + 1).toString(), "data-line")} data-astro-cid-j7lrq37x>${unescapeHTML(line.html + " " + line.html + " " + line.html + " " + line.html + " " + line.html)}</div>`;
  })}</div>`}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ColThreeGrid/Partials/BackgroundMarqueeText.astro", void 0);

const $$Astro$2 = createAstro();
const $$ColThreeGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ColThreeGrid;
  return renderTemplate`${maybeRenderHead()}<div class="colThreeGrid componentSpacing blade has-grid-bg" data-astro-cid-2x3hqjdd><div class="colThreeGrid-bg" data-astro-cid-2x3hqjdd><!-- <Image src={brandGraphicsSupportImage} alt=""></Image> -->${renderComponent($$result, "BackgroundMarqueeText", $$BackgroundMarqueeText, { "lines": [
    {
      "html": "Brand strategy & <strong>Website</strong>"
    },
    {
      "html": "<strong>Motion graphics</strong> & Content development>"
    },
    {
      "html": "<strong>Support subscriptions</strong> & Development"
    }
  ], "data-astro-cid-2x3hqjdd": true })}</div><div class="container" data-astro-cid-2x3hqjdd><div class="colThreeCards" data-astro-cid-2x3hqjdd><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": brandStrategyLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Brand strategy</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": contentDevelopmentLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Content development</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": creativeServicesLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Creative services</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": digitalMarketingLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Digital marketing</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": digitalStrategyLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Digital strategy</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": motionGraphicsLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Motion graphics</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": systemsLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Systems & support</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": supportLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Systems & support</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div><div class="colThreeCard-outer" data-astro-cid-2x3hqjdd><a class="colThreeCard" href="#" data-astro-cid-2x3hqjdd><div class="colThreeCard-logo" data-astro-cid-2x3hqjdd>${renderComponent($$result, "Image", $$Image, { "src": webDevelopmentLogoImage, "alt": "logo", "data-astro-cid-2x3hqjdd": true })}</div><h4 data-astro-cid-2x3hqjdd>Web development</h4><p data-astro-cid-2x3hqjdd>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><span class="colThreeCard-button button button--text" data-astro-cid-2x3hqjdd>Learn more</span></a></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ColThreeGrid/ColThreeGrid.astro", void 0);

const ourProcess = {"src":"/_astro/our-process.10f4c11c.png","width":800,"height":1090,"format":"png"};

const planing = {"src":"/_astro/planing.c88c7963.png","width":800,"height":1090,"format":"png"};

const designing = {"src":"/_astro/designing.4a1d5f62.png","width":800,"height":1090,"format":"png"};

const $$Astro$1 = createAstro();
const $$TwoColVerticalSlide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColVerticalSlide;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="TwoColVerticalSlide" is="TwoColVerticalSlide" data-astro-cid-vfexiokm><div class="item" data-astro-cid-vfexiokm><div class="image-holder" data-astro-cid-vfexiokm><div class="image-wrapper" data-astro-cid-vfexiokm>${renderComponent($$result, "Image", $$Image, { "src": ourProcess, "alt": "ourProcess image", "data-astro-cid-vfexiokm": true })}</div></div><div class="text-holder" data-astro-cid-vfexiokm><div class="text-holder-inner" data-astro-cid-vfexiokm><div class="heading-wrapper" data-astro-cid-vfexiokm><div class="subtitle" data-astro-cid-vfexiokm>Our process</div><h3 data-astro-cid-vfexiokm>Nisl pulvinar consectet nec set adipiscing</h3></div><div class="description-wrapper" data-astro-cid-vfexiokm><h5 data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur</h5><p data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero 
              non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. 
              Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.
</p></div></div></div></div><div class="item" data-astro-cid-vfexiokm><div class="image-holder" data-astro-cid-vfexiokm><div class="image-wrapper" data-astro-cid-vfexiokm>${renderComponent($$result, "Image", $$Image, { "src": planing, "alt": "ourProcess image", "data-astro-cid-vfexiokm": true })}</div></div><div class="text-holder" data-astro-cid-vfexiokm><div class="text-holder-inner" data-astro-cid-vfexiokm><div class="heading-wrapper" data-astro-cid-vfexiokm><div class="subtitle" data-astro-cid-vfexiokm>Our process</div><h3 data-astro-cid-vfexiokm>Nisl pulvinar consectet nec set adipiscing</h3></div><div class="description-wrapper" data-astro-cid-vfexiokm><h5 data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur</h5><p data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero 
              non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. 
              Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.
</p></div></div></div></div><div class="item" data-astro-cid-vfexiokm><div class="image-holder" data-astro-cid-vfexiokm><div class="image-wrapper" data-astro-cid-vfexiokm>${renderComponent($$result, "Image", $$Image, { "src": designing, "alt": "ourProcess image", "data-astro-cid-vfexiokm": true })}</div></div><div class="text-holder" data-astro-cid-vfexiokm><div class="text-holder-inner" data-astro-cid-vfexiokm><div class="heading-wrapper" data-astro-cid-vfexiokm><div class="subtitle" data-astro-cid-vfexiokm>Our process</div><h3 data-astro-cid-vfexiokm>Nisl pulvinar consectet nec set adipiscing</h3></div><div class="description-wrapper" data-astro-cid-vfexiokm><h5 data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur</h5><p data-astro-cid-vfexiokm>Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero 
              non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. 
              Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.
</p></div></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TwoColVerticalSlide/TwoColVerticalSlide.astro", void 0);

const $$Astro = createAstro();
const $$ServicesDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesDetail;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Service Detail | Set 2", "metadescription": "Homepage", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "workHeroBanner", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": null, "ctaTarget": "_self", "ctaText": "Let's get started", "ctaUrl": "/work/start", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "eyebrow": "Brand strategy", "headline": "Analytics and <span class='marker-effect marker-underline'>innovation</span> driving digital strategy.", "headlineTag": "h1", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "" }, "hasGridBackgroundTexture": true })}${renderComponent($$result2, "ContentWithGrid", $$ContentWithGrid, { "bladeCssId": "", "bladeExtraClasses": "", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.", "eyebrow": "Overview", "headline": "Great digital strategy answers critical questions", "headlineTag": "h2", "headlineTypography": "h2", "contentItems": [
    {
      image: {
        altText: "ov1",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-1.png"
      },
      headline: "Lorem ipsum amet dolor sit.",
      headlineTag: "h3",
      headlineTypography: "h4",
      description: "1Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.",
      linkUrl: "/?overview1"
    },
    {
      image: {
        altText: "ov2",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-2.png"
      },
      headline: "Lorem ipsum amet dolor sit.",
      headlineTag: "h3",
      headlineTypography: "h4",
      description: "2Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.",
      linkUrl: "/?overview2"
    },
    {
      image: {
        altText: "ov3",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/overview-3.png"
      },
      headline: "Lorem ipsum amet dolor sit.",
      headlineTag: "h3",
      headlineTypography: "h4",
      description: "3Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.",
      linkUrl: "/?overview3"
    }
  ] })}${renderComponent($$result2, "TwoColVerticalSlide", $$TwoColVerticalSlide, {})}${renderComponent($$result2, "TwoColWithLogo", $$TwoColWithLogo, {})}${renderComponent($$result2, "ColThreeGrid", $$ColThreeGrid, {})}${renderComponent($$result2, "TwoGridSlider", $$TwoGridSlider, { "headline": "dfgfdgdf", "headlineTag": "h2", "headlineTypography": "h2", "description": "Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.", "ctaUrl": "/", "ctaText": "View all insights", "ctaTarget": "_self", "ctaStyle": "button", "ctaLightboxVideoUrl": null, "featuredInGroup": {
    headline: "Featured In:",
    headlineTag: "h3",
    headlineTypography: "h3",
    featuredInLogos: [
      {
        logo: {
          sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-hyperbest.svg",
          altText: ""
        }
      },
      {
        logo: {
          sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-logoipsum.svg",
          altText: ""
        }
      },
      {
        logo: {
          sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-medium.svg",
          altText: ""
        }
      },
      {
        logo: {
          sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-forbes.svg",
          altText: ""
        }
      }
    ]
  }, "cards": [
    {
      ctaUrl: "/",
      cardHeadline: "Google Analytics 4 is Coming. Is Your B2B Ready?",
      cardDescription: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
      cardBackground: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
      }
    },
    {
      ctaUrl: "/",
      cardHeadline: "Google Analytics 4 is Coming. Is Your B2B Ready?",
      cardDescription: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
      cardBackground: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1358512588-1.webp"
      }
    },
    {
      ctaUrl: "/",
      cardHeadline: "Google Analytics 4 is Coming. Is Your B2B Ready?",
      cardDescription: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
      cardBackground: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
      }
    },
    {
      ctaUrl: "/",
      cardHeadline: "Google Analytics 4 is Coming. Is Your B2B Ready?",
      cardDescription: "Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.",
      cardBackground: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
      }
    }
  ] })}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "bladeCssId": "workCTA", "bladeAdditionalCssClasses": "", "ctaLightboxVideoUrl": null, "ctaStyle": "button", "ctaTarget": "_self", "ctaText": "Contact Us", "ctaUrl": "/contact/", "description": null, "eyebrow": "Lorem ipsum dolor.", "headline": "Let\u2019s talk.", "headlineTag": "h2", "headlineTypography": "h1", "backgroundTheme": "dark", "backgroundVideoType": "mp4", "backgroundVideoUrl": null, "backgroundImage": { sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp" }, "hasGridBackgroundTexture": true })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-detail.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/services-detail.astro";
const $$url = "/set-2/services-detail";

const servicesDetail = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ServicesDetail,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ColThreeGrid as $, servicesDetail as s };
