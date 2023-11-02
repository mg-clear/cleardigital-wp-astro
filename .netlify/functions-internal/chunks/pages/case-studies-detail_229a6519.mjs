import '@astrojs/internal-helpers/path';
import { c as createAstro, d as createComponent, A as AstroError, j as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as defineStyleVars, g as renderComponent, u as unescapeHTML, F as Fragment } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { $ as $$Headline, a as $$CTAButton, b as $$Page } from './banner-blade_ee4c0e8a.mjs';
/* empty css                                        */import { g as getImage$1 } from '../astro-assets-services_6b3983ce.mjs';
/* empty css                                     */
const $$Astro$4 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/chander/Sites/cleardigital-wp-astro/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$3 = createAstro();
const $$BladeBackground = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BladeBackground;
  const {
    image,
    video = null,
    videoType = null
  } = Astro2.props;
  const cssImg = "url(" + image + ")";
  const $$definedVars = defineStyleVars([{ cssImg }]);
  return renderTemplate`${maybeRenderHead()}<div class="bg-container overlay" data-astro-cid-g47crtsm${addAttribute($$definedVars, "style")}>${() => {
    if (video !== null) {
      return renderTemplate`<video class="video-bg overlay"${addAttribute(image, "poster")} autoplay loop muted data-astro-cid-g47crtsm${addAttribute($$definedVars, "style")}><source${addAttribute(video, "src")}${addAttribute("video/" + videoType, "type")} data-astro-cid-g47crtsm${addAttribute($$definedVars, "style")}></video>`;
    }
  }}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/BladeBackground.astro", void 0);

const $$Astro$2 = createAstro();
const $$HeroBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroBanner;
  const {
    bladeCssId = null,
    bladeAdditionalCssClasses = null,
    ctaLightboxVideoUrl = null,
    ctaStyle = null,
    ctaTarget = null,
    ctaText = null,
    ctaUrl = null,
    description = null,
    eyebrow = null,
    headline = null,
    headlineTag = null,
    headlineTypography = null,
    backgroundTheme = "dark",
    backgroundVideoType = null,
    backgroundVideoUrl = null,
    backgroundImage = { sourceUrl: null },
    hasGridBackgroundTexture = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(bladeCssId, "id")}${addAttribute(["hero-banner blade has-video-bg", backgroundTheme, { "has-grid-bg": hasGridBackgroundTexture }, { bladeAdditionalCssClasses }], "class:list")} data-astro-cid-ptadmqhn><div class="container blade-content" data-astro-cid-ptadmqhn><div class="content-wrap" data-astro-cid-ptadmqhn>${eyebrow && renderTemplate`<div class="subtitle" data-astro-cid-ptadmqhn>${eyebrow}</div>`}${headline && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "content": headline, "tag": headlineTag, "typography": headlineTypography, "data-astro-cid-ptadmqhn": true })}`}${description && renderTemplate`<div class="description body-large" data-astro-cid-ptadmqhn>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(description)}` })}</div>`}${ctaText && renderTemplate`${renderComponent($$result, "CTAButton", $$CTAButton, { "class": "margin-start-30", "label": ctaText, "href": ctaUrl, "target": ctaTarget, "style": ctaStyle, "lightboxVideo": ctaLightboxVideoUrl, "data-astro-cid-ptadmqhn": true })}`}</div></div>${renderComponent($$result, "BladeBackground", $$BladeBackground, { "image": backgroundImage && (backgroundImage.sourceUrl ?? ""), "video": backgroundVideoUrl, "videoType": backgroundVideoType, "data-astro-cid-ptadmqhn": true })}</section><section class="video-overlay" data-astro-cid-ptadmqhn><div class="v-middle-inner" data-astro-cid-ptadmqhn><div class="v-middle" data-astro-cid-ptadmqhn><div class="video-wrap" data-astro-cid-ptadmqhn><div class="video-container" data-astro-cid-ptadmqhn><iframe src="" allow="autoplay" data-astro-cid-ptadmqhn></iframe></div><button class="closeVideo" data-astro-cid-ptadmqhn><!-- <img loading="eager" src="/wp-content/themes/cleardigital/templates/assets/images/cross-icon-white.svg" alt="clear"> --></button></div></div></div></section>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/HeroBanner/HeroBanner.astro", void 0);

const vmWareLogo = {"src":"/_astro/vmware-logo-black.fdd27a28.svg","width":177,"height":28,"format":"svg"};

const vmWareLogoWhite = {"src":"/_astro/vmware-logo-white.e953d343.svg","width":177,"height":28,"format":"svg"};

const mcafeeLogo = {"src":"/_astro/mc-afee-logo-black.150f05fc.svg","width":191,"height":55,"format":"svg"};

const mcafeeLogoWhite = {"src":"/_astro/mc-afee-logo-white.f82a514e.svg","width":191,"height":55,"format":"svg"};

const ciscoLogo = {"src":"/_astro/cisco-logo-black.708ffac4.svg","width":131,"height":70,"format":"svg"};

const ciscoLogoWhite = {"src":"/_astro/cisco-logo-white.74251126.svg","width":131,"height":70,"format":"svg"};

const backgroundImage = {"src":"/_astro/blue-bg.0fb90e54.png","width":1600,"height":363,"format":"png"};

const $$Astro$1 = createAstro();
const $$TwoColWithLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColWithLogo;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="twocolwithlogo blade" data-astro-cid-njmaf2hd><div class="container" data-astro-cid-njmaf2hd><div class="intro" data-astro-cid-njmaf2hd><div class="row" data-astro-cid-njmaf2hd><div class="intro__content-outer" data-astro-cid-njmaf2hd><div class="intro__content" data-astro-cid-njmaf2hd><span class="subtitle" data-astro-cid-njmaf2hd>
Case studies
</span><h3 data-astro-cid-njmaf2hd>Nisl <span class="marker marker--underline" data-astro-cid-njmaf2hd>pulvinar</span> consectet nec lipsum dolor</h3></div></div><div class="intro__action-outer" data-astro-cid-njmaf2hd><div class="intro__action" data-astro-cid-njmaf2hd><a href="/" class="button button-large" data-astro-cid-njmaf2hd>
View all case studies
</a></div></div></div></div></div><div class="twocolwithlogo__item" data-astro-cid-njmaf2hd><a href="/" class="twocolwithlogo__item-link" aria-label="card-link" data-astro-cid-njmaf2hd></a><div class="twocolwithlogo__bg-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__bg" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "bg Blue", "data-astro-cid-njmaf2hd": true })}</div></div><div class="container" data-astro-cid-njmaf2hd><div class="row twocolwithlogo__items-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-black", "src": vmWareLogo, "alt": "vmWareLogo", "data-astro-cid-njmaf2hd": true })}${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-white", "src": vmWareLogoWhite, "alt": "vmWareLogo", "data-astro-cid-njmaf2hd": true })}</div></div><div class="twocolwithlogo__content-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__content" data-astro-cid-njmaf2hd><h4 data-astro-cid-njmaf2hd>80% vel consequat est. Donec semper neque quam eget.</h4><p data-astro-cid-njmaf2hd>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p></div></div></div></div></div><div class="twocolwithlogo__item" data-astro-cid-njmaf2hd><a href="/" class="twocolwithlogo__item-link" aria-label="card-link" data-astro-cid-njmaf2hd></a><div class="twocolwithlogo__bg-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__bg" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "bg Blue", "data-astro-cid-njmaf2hd": true })}</div></div><div class="container" data-astro-cid-njmaf2hd><div class="row twocolwithlogo__items-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-black", "src": mcafeeLogo, "alt": "mcafeeLogo", "data-astro-cid-njmaf2hd": true })}${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-white", "src": mcafeeLogoWhite, "alt": "mcafeeLogo", "data-astro-cid-njmaf2hd": true })}</div></div><div class="twocolwithlogo__content-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__content" data-astro-cid-njmaf2hd><h4 data-astro-cid-njmaf2hd>80% vel consequat est. Donec semper neque quam eget.</h4><p data-astro-cid-njmaf2hd>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p></div></div></div></div></div><div class="twocolwithlogo__item" data-astro-cid-njmaf2hd><a href="/" class="twocolwithlogo__item-link" aria-label="card-link" data-astro-cid-njmaf2hd></a><div class="twocolwithlogo__bg-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__bg" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "bg Blue", "data-astro-cid-njmaf2hd": true })}</div></div><div class="container" data-astro-cid-njmaf2hd><div class="row twocolwithlogo__items-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-black", "src": ciscoLogo, "alt": "ciscoLogo", "data-astro-cid-njmaf2hd": true })}${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-white", "src": ciscoLogoWhite, "alt": "ciscoLogo", "data-astro-cid-njmaf2hd": true })}</div></div><div class="twocolwithlogo__content-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__content" data-astro-cid-njmaf2hd><h4 data-astro-cid-njmaf2hd>80% vel consequat est. Donec semper neque quam eget.</h4><p data-astro-cid-njmaf2hd>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p></div></div></div></div></div><div class="twocolwithlogo__item" data-astro-cid-njmaf2hd><a href="/" class="twocolwithlogo__item-link" aria-label="card-link" data-astro-cid-njmaf2hd></a><div class="twocolwithlogo__bg-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__bg" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "bg Blue", "data-astro-cid-njmaf2hd": true })}</div></div><div class="container" data-astro-cid-njmaf2hd><div class="row twocolwithlogo__items-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-black", "src": vmWareLogo, "alt": "vmWareLogo", "data-astro-cid-njmaf2hd": true })}${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-white", "src": vmWareLogoWhite, "alt": "vmWareLogo", "data-astro-cid-njmaf2hd": true })}</div></div><div class="twocolwithlogo__content-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__content" data-astro-cid-njmaf2hd><h4 data-astro-cid-njmaf2hd>80% vel consequat est. Donec semper neque quam eget.</h4><p data-astro-cid-njmaf2hd>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p></div></div></div></div></div><div class="twocolwithlogo__item" data-astro-cid-njmaf2hd><a href="/" class="twocolwithlogo__item-link" aria-label="card-link" data-astro-cid-njmaf2hd></a><div class="twocolwithlogo__bg-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__bg" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "src": backgroundImage, "alt": "bg Blue", "data-astro-cid-njmaf2hd": true })}</div></div><div class="container" data-astro-cid-njmaf2hd><div class="row twocolwithlogo__items-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__logo" data-astro-cid-njmaf2hd>${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-black", "src": mcafeeLogo, "alt": "mcafeeLogo", "data-astro-cid-njmaf2hd": true })}${renderComponent($$result, "Image", $$Image, { "class": "twocolwithlogo__logo-white", "src": mcafeeLogoWhite, "alt": "mcafeeLogo", "data-astro-cid-njmaf2hd": true })}</div></div><div class="twocolwithlogo__content-outer" data-astro-cid-njmaf2hd><div class="twocolwithlogo__content" data-astro-cid-njmaf2hd><h4 data-astro-cid-njmaf2hd>80% vel consequat est. Donec semper neque quam eget.</h4><p data-astro-cid-njmaf2hd>Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.</p></div></div></div></div></div></section>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TwoColWithLogo/TwoColWithLogo.astro", void 0);

const $$Astro = createAstro();
const $$CaseStudiesDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudiesDetail;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Case Studies Detail", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "Case in point \u2014<br/><span class='marker-effect marker-underline'>great</span> results.", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "headlineTag": "h1", "headlineTypography": "h1", "ctaText": "Read story", "ctaStyle": "button", "ctaUrl": "/story", "backgroundImage": {
    sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/11/case-studies-bg.webp"
  } })}${renderComponent($$result2, "TwoColWithLogo", $$TwoColWithLogo, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "Let\u2019s talk.", "eyebrow": "Lorem ipsum dolor", "ctaText": "Contact us", "ctaStyle": "button", "ctaUrl": "/contact", "headlineTag": "h2", "headlineTypography": "h1", "backgroundImage": {
    sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp"
  } })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/case-studies-detail.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/case-studies-detail.astro";
const $$url = "/set-3/case-studies-detail";

const caseStudiesDetail = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CaseStudiesDetail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, $$HeroBanner as a, $$TwoColWithLogo as b, caseStudiesDetail as c, imageConfig as i };
