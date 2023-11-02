import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, u as unescapeHTML, m as maybeRenderHead, f as defineStyleVars, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_fb3c1bda.mjs';
import 'clsx';
/* empty css                                        *//* empty css                                  *//* empty css                           *//* empty css                                  *//* empty css                                 */
const $$Astro$e = createAstro();
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Headline;
  const { content = "", tag = "h2", typography = "", theme = "" } = Astro2.props;
  return renderTemplate`${() => {
    switch (tag) {
      case "h1":
        return renderTemplate`${maybeRenderHead()}<h1${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h1>`;
      case "h2":
        return renderTemplate`<h2${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h2>`;
      case "h3":
        return renderTemplate`<h3${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h3>`;
      case "h4":
        return renderTemplate`<h4${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h4>`;
      case "h5":
        return renderTemplate`<h5${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h5>`;
      case "h6":
        return renderTemplate`<h6${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h6>`;
      default:
        return renderTemplate`<h2${addAttribute([typography, theme], "class:list")} data-astro-cid-mn5gggo5>${unescapeHTML(content)}</h2>`;
    }
  }}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/Headline.astro", void 0);

const $$Astro$d = createAstro();
const $$CTALink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CTALink;
  const {
    text,
    type = "text",
    href = null,
    action = null,
    target = "_self"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["cta-button", type], "class:list")}${addAttribute(target, "target")}${addAttribute(action, "data-action")} data-astro-cid-vpzxt2et>${text}</a>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/CTALink.astro", void 0);

const $$Astro$c = createAstro();
const $$BladeBackground = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BladeBackground;
  const {
    image,
    video = null,
    videoType = null
  } = Astro2.props;
  const cssImg = "url(" + image + ")";
  const $$definedVars = defineStyleVars([{ cssImg }]);
  return renderTemplate`${maybeRenderHead()}<div class="bg-container overlay" data-astro-cid-6gyr6ruf${addAttribute($$definedVars, "style")}>${() => {
    if (video !== null) {
      return renderTemplate`<video class="video-bg overlay"${addAttribute(image, "poster")} autoplay loop muted data-astro-cid-6gyr6ruf${addAttribute($$definedVars, "style")}><source${addAttribute(video, "src")}${addAttribute(videoType, "type")} data-astro-cid-6gyr6ruf${addAttribute($$definedVars, "style")}></video>`;
    }
  }}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Testing/BladeBackground.astro", void 0);

const $$Astro$b = createAstro();
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Banner;
  const {
    theme = "dark",
    eyebrow = null,
    headline = null,
    headlineTag = "h2",
    headlineStyle = null,
    description = null,
    ctaText = null,
    ctaType = "text",
    ctaURL = null,
    ctaAction = null,
    ctaTarget = "_self",
    backgroundGrid = true,
    backgroundImage = null,
    backgroundVideo = null,
    backgroundVideoType = null
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["banner blade", theme, { "has-grid-bg": backgroundGrid, "has-video-bg": backgroundVideo !== null }], "class:list")} data-astro-cid-tyouttno><div class="container blade-content" data-astro-cid-tyouttno><div class="content-wrap" data-astro-cid-tyouttno>${() => {
    if (eyebrow !== null) {
      return renderTemplate`<div class="subtitle" data-astro-cid-tyouttno>${eyebrow}</div>`;
    }
  }}${() => {
    if (headline !== null) {
      return renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "tag": headlineTag, "style": headlineStyle, "data-astro-cid-tyouttno": true }, { "default": ($$result2) => renderTemplate`${unescapeHTML(headline)}` })}`;
    }
  }}${() => {
    if (description !== null) {
      return renderTemplate`<div class="description body-large" data-astro-cid-tyouttno>${unescapeHTML(description)}</div>`;
    }
  }}${() => {
    if (ctaText !== null) {
      return renderTemplate`${renderComponent($$result, "CTALink", $$CTALink, { "text": ctaText, "type": ctaType, "href": ctaURL, "action": ctaAction, "target": ctaTarget, "data-astro-cid-tyouttno": true })}`;
    }
  }}</div></div>${() => {
    if (backgroundImage !== null) {
      return renderTemplate`${renderComponent($$result, "BladeBackground", $$BladeBackground, { "image": backgroundImage, "video": backgroundVideo, "videoType": backgroundVideoType, "data-astro-cid-tyouttno": true })}`;
    }
  }}</div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Testing/Banner.astro", void 0);

const scrollSmooth = "html,\nbody {\n  scroll-behavior: smooth;\n}\n";

const fontSmoothing = "body {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n";

const borderBox = "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n";

const removeAllMargins = "* {\n  margin: 0;\n}\n";

const fontSystem = "body {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n";

const scrollBarKeep = "body {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n";

const breakWords = "p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n";

const consistentFont = "input, button, textarea, select {\n  font: inherit;\n}\n";

const unstyleNavList = "nav ul {\n  padding: 0;\n  list-style-type: none;\n}\n";

const accessibleLineHeight = "body {\n  line-height: 1.5;\n}\n";

const $$Astro$a = createAstro();
const $$Resets = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Resets;
  const props = { ...Astro2.props };
  const rawStylesCSS = [
    props.removeAllMargins === false ? null : removeAllMargins,
    props.fontSmoothing === false ? null : fontSmoothing,
    props.fontSystem === false ? null : fontSystem,
    props.scrollSmooth === false ? null : scrollSmooth,
    props.borderBox === false ? null : borderBox,
    // props.svg === false ? null : svg,
    props.scrollBarKeep === false ? null : scrollBarKeep,
    props.breakWords === false ? null : breakWords,
    props.consistentFont === false ? null : consistentFont,
    props.unstyleNavList === false ? null : unstyleNavList,
    props.accessibleLineHeight === false ? null : accessibleLineHeight
  ].join("\n");
  return renderTemplate`<!-- Resets --><style>${unescapeHTML(rawStylesCSS)}</style>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/node_modules/@julian_cataldo/astro-resets/Resets.astro", void 0);

const $$Astro$9 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, metadescription, ogimage } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description"${addAttribute(metadescription, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1,user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(ogimage, "content")}>${renderComponent($$result, "Resets", $$Resets, { "removeAllMargins": true, "fontSmoothing": true, "fontSystem": true, "scrollSmooth": true, "borderBox": true, "scrollBarKeep": true, "breakWords": true, "consistentFont": true, "unstyleNavList": true, "accessibleLineHeight": true })}<title>${title}</title>${renderHead()}</head>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/Head.astro", void 0);

const $$Astro$8 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<header class="main-navigation" data-astro-cid-qeuzrdtb><div class="container" data-astro-cid-qeuzrdtb><div class="main-navigation-items" data-astro-cid-qeuzrdtb><div class="site-logo" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb><svg version="1.1" class="clear-logo-vector" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 341.2 115" style="enable-background:new 0 0 341.2 115;" xml:space="preserve" data-astro-cid-qeuzrdtb><g id="Logo" data-astro-cid-qeuzrdtb><path class="st0 clear-logo-vector--clear" d="M44.5,45.4c5.1,0,9.8,1.5,14.5,4.7c2.9,2,7,1.4,9.3-1.3l7.4-8.5c-8.6-8.4-18.2-12.2-31.1-12.2
		c-23.5,0-41.2,17.5-41.2,40.8v0.2c0,23.1,17.4,40.6,40.5,40.6c13.6,0,22.9-4.1,32.3-14.1l0.5-0.4l-7.9-7.3c-2.5-2.3-6.2-2.4-9-0.4
		c-4.4,3.3-9,5.1-15.3,5.1c-12.4,0-21.7-10.2-21.7-23.6v-0.2C22.8,55.4,32.1,45.4,44.5,45.4z" data-astro-cid-qeuzrdtb></path><path class="st0 clear-logo-vector--clear" d="M101.7,7.7c-2-1.9-4.3-2.8-7.1-2.8H83.1v104.8h21.5l0.1-95C104.7,11.9,103.7,9.6,101.7,7.7z" data-astro-cid-qeuzrdtb></path><path class="st0 clear-logo-vector--clear" d="M178.3,38.5c-6.8-7.2-16.4-10.7-28.9-10.7c-11.8,0-21.1,3.6-27.7,10.9c-6.4,7.1-9.6,17-9.6,29.6
		c0,13.2,3.4,23.4,10,30.5c6.6,7.3,15.9,10.9,27.7,10.9c9.8,0,17.9-2.3,24.3-6.8c6.5-4.3,10.8-10.6,13.1-18.9h-13.3
		c-3.7,0-7.2,1.7-9.8,4.3c-2.2,2.1-6.1,4.3-13,4.3c-5.4,0-9.4-1.5-12.1-4.7c-2.9-2.9-4.5-7.5-4.7-13.6h53.8c0,0,0.3-2.4,0.3-3.4
		h-0.1v-0.4C188.3,57.5,184.9,45.8,178.3,38.5z M134.2,60.8c0.2-5.1,1.8-9,4.7-11.8c2.9-2.7,6.6-4.1,11.2-4.1c5,0,8.8,1.4,11.4,4.1
		c2.5,2.5,4,6.5,4.4,11.8H134.2z" data-astro-cid-qeuzrdtb></path><path class="st0 clear-logo-vector--clear" d="M229.1,58.7c-1.9,0.2-8.7,1.2-8.7,1.2c-7.9,1.2-14.4,3.5-19.5,7.1c-5.1,3.5-7.6,9.4-7.6,17.7
		c0,8.9,2.8,15.3,8.4,19.1c5.6,3.9,12.1,5.5,19.6,5.8c6.1,0.2,11.7,0.1,14.3-0.3c4.9-0.7,10.4-2.4,14.3-4.4c4.4-2.8,6.2-4.3,8.9-7.8
		c3.2-4.3,4.5-10.6,4.5-18.5l-0.1-28.8c0-7.1-3-12.7-9-16.6c-5.8-3.7-14.5-5.6-26.1-5.6c-10.4,0-18.4,2.3-24,6.8
		c-5,4-7.9,9-8.7,15.1h20.9c1.1-2.1,2.7-3.6,5-4.4c2.3-0.8,4.9-1.2,7.8-1.2c2.7,0,5.7,0.4,8.9,1.3c3.2,0.9,4.8,2.8,4.8,5.8
		C242.8,55,238.2,57.5,229.1,58.7z M243.1,68.5v7.4c0,5.5,0.1,9.8-3.2,13c-3.7,3.5-6.6,4.7-15.5,4.7c-3.5,0-6.2-0.8-8.1-2.4
		c-1.9-1.8-2.8-4.1-2.8-7.1c0-2.2,0.6-4.4,2.2-6.5c1.7-2.3,4.4-2.8,8.1-3.8l7.2-1.5C237.7,71.1,240.2,69.9,243.1,68.5z" data-astro-cid-qeuzrdtb></path><path class="st0 clear-logo-vector--clear" d="M298.1,30.1c-5.3,1.4-10,3.5-13.9,6.5c-4.2,3.2-7.4,7.4-9.8,12.6c-2.4,5.3-3.6,11.7-3.6,19.4v41h11.1
		c5.9,0,10.7-4.5,10.7-10.1V66.3c0-5.9,1.5-10.2,4.4-13c2.9-2.7,7.4-4.1,13.4-4.1h7.1V28h-3.1C308.8,28,303.4,28.7,298.1,30.1z" data-astro-cid-qeuzrdtb></path></g><g id="Rectangle" data-astro-cid-qeuzrdtb><path class="st1 clear-logo-vector--background" d="M243.1,68.5c-2.9,1.4-5.4,2.6-12.1,3.8l-7.2,1.5c-3.7,1-6.4,1.5-8.1,3.8c-1.6,2.1-2.2,4.3-2.2,6.5
		c0,3,0.9,5.3,2.8,7.1c1.9,1.6,4.6,2.4,8.1,2.4c8.9,0,11.8-1.2,15.5-4.7c3.3-3.2,3.2-7.5,3.2-13V68.5z" data-astro-cid-qeuzrdtb></path><path class="st1 clear-logo-vector--background" d="M0.2,0v115h341V0H0.2z M76.2,95.6c-9.4,10-18.7,14.1-32.3,14.1c-23.1,0-40.5-17.5-40.5-40.6v-0.2
		c0-23.3,17.7-40.8,41.2-40.8c12.9,0,22.5,3.8,31.1,12.2l-7.4,8.5c-2.3,2.7-6.4,3.3-9.3,1.3c-4.7-3.2-9.4-4.7-14.5-4.7
		c-12.4,0-21.7,10-21.7,23.4V69c0,13.4,9.3,23.6,21.7,23.6c6.3,0,10.9-1.8,15.3-5.1c2.8-2,6.5-1.9,9,0.4l7.9,7.3L76.2,95.6z
		 M104.6,109.7H83.1V4.9h11.5c2.8,0,5.1,0.9,7.1,2.8s3,4.2,3,7L104.6,109.7L104.6,109.7z M188.4,70.9c0,1-0.3,3.4-0.3,3.4h-53.8
		c0.2,6.1,1.8,10.7,4.7,13.6c2.7,3.2,6.7,4.7,12.1,4.7c6.9,0,10.8-2.2,13-4.3c2.6-2.6,6.1-4.3,9.8-4.3h13.3
		c-2.3,8.3-6.6,14.6-13.1,18.9c-6.4,4.5-14.5,6.8-24.3,6.8c-11.8,0-21.1-3.6-27.7-10.9c-6.6-7.1-10-17.3-10-30.5
		c0-12.6,3.2-22.5,9.6-29.6c6.6-7.3,15.9-10.9,27.7-10.9c12.5,0,22.1,3.5,28.9,10.7c6.6,7.3,10,19,10,32v0.4
		C188.3,70.9,188.4,70.9,188.4,70.9z M263.3,78.6c0,7.9-1.3,14.2-4.5,18.5c-2.7,3.5-4.5,5-8.9,7.8c-3.9,2-9.4,3.7-14.3,4.4
		c-2.6,0.4-8.2,0.5-14.3,0.3c-7.5-0.3-14-1.9-19.6-5.8c-5.6-3.8-8.4-10.2-8.4-19.1c0-8.3,2.5-14.2,7.6-17.7
		c5.1-3.6,11.6-5.9,19.5-7.1c0,0,6.8-1,8.7-1.2c9.1-1.2,13.7-3.7,13.7-7.7c0-3-1.6-4.9-4.8-5.8s-6.2-1.3-8.9-1.3
		c-2.9,0-5.5,0.4-7.8,1.2s-3.9,2.3-5,4.4h-20.9c0.8-6.1,3.7-11.1,8.7-15.1c5.6-4.5,13.6-6.8,24-6.8c11.6,0,20.3,1.9,26.1,5.6
		c6,3.9,9,9.5,9,16.6L263.3,78.6L263.3,78.6z M317.6,49.2h-7.2c-6,0-10.5,1.4-13.4,4.1c-2.9,2.8-4.4,7.1-4.4,13v33.2
		c0,5.6-4.8,10.1-10.7,10.1h-11.1v-41c0-7.7,1.2-14.1,3.6-19.4c2.4-5.2,5.6-9.4,9.8-12.6c3.9-3,8.6-5.1,13.9-6.5s10.7-2.1,16.3-2.1
		h3.1v21.2L317.6,49.2L317.6,49.2z" data-astro-cid-qeuzrdtb></path><path class="st1 clear-logo-vector--background" d="M150.1,44.9c-4.6,0-8.3,1.4-11.2,4.1c-2.9,2.8-4.5,6.7-4.7,11.8h31.7c-0.4-5.3-1.9-9.3-4.4-11.8
		C158.9,46.3,155.1,44.9,150.1,44.9z" data-astro-cid-qeuzrdtb></path></g><g id="Dot" data-astro-cid-qeuzrdtb><path class="st2 clear-logo-vector--circle" d="M321.6,77.5c-9,0-16,7-16,16c0,9.1,7,16.3,16,16.3c9.1,0,16.3-7.1,16.3-16.3C337.9,84.5,330.8,77.5,321.6,77.5
		z M329.7,93.5c0,4.6-3.4,8-8,8c-4.4,0-7.8-3.5-7.8-8c0-4.3,3.4-7.8,7.8-7.8S329.7,89.1,329.7,93.5z" data-astro-cid-qeuzrdtb></path></g></svg></a></div><nav class="" data-astro-cid-qeuzrdtb><ul class="main-menu" data-astro-cid-qeuzrdtb><li class="main-menu-item" data-astro-cid-qeuzrdtb><div class="main-menu-item-inner" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/work" class="link" data-astro-cid-qeuzrdtb>Work</a><span class="expand-btn" data-astro-cid-qeuzrdtb></span></div><div class="megamenu megamenu-dropdown collapse" data-astro-cid-qeuzrdtb><span class="side-bg side-bg--left" data-astro-cid-qeuzrdtb></span><div class="container" data-astro-cid-qeuzrdtb><div class="megamenu-items" data-astro-cid-qeuzrdtb><div class="megamenu-content-outer" data-astro-cid-qeuzrdtb><div class="megamenu-content" data-astro-cid-qeuzrdtb><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-qeuzrdtb>Work</h2><p data-astro-cid-qeuzrdtb>
Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non,
                        tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.
</p><a class="button button--text" href="/" data-astro-cid-qeuzrdtb>Overview</a></div></div><div class="megamenu-link-lists-outer" data-astro-cid-qeuzrdtb><div class="megamenu-link-lists" data-astro-cid-qeuzrdtb><div class="megamenu-links-outer" data-astro-cid-qeuzrdtb><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Case Studies</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Clients</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Industry Focus</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Outcomes</a></li></ul></div></div></div></div></div></div><span class="side-bg side-bg--right" data-astro-cid-qeuzrdtb></span></div></li><li class="main-menu-item" data-astro-cid-qeuzrdtb><div class="main-menu-item-inner" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/approach" data-astro-cid-qeuzrdtb>Approach</a><span class="expand-btn" data-astro-cid-qeuzrdtb></span></div><div class="megamenu megamenu-dropdown collapse" data-astro-cid-qeuzrdtb><div class="container" data-astro-cid-qeuzrdtb><div class="megamenu-items" data-astro-cid-qeuzrdtb><div class="megamenu-content-outer" data-astro-cid-qeuzrdtb><div class="megamenu-content" data-astro-cid-qeuzrdtb><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-qeuzrdtb>Approach</h2><p data-astro-cid-qeuzrdtb>
Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non,
                        tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.
</p><a class="button button--text" href="/" data-astro-cid-qeuzrdtb>Overview</a></div></div><div class="megamenu-link-lists-outer" data-astro-cid-qeuzrdtb><div class="megamenu-link-lists" data-astro-cid-qeuzrdtb><div class="megamenu-links-outer" data-astro-cid-qeuzrdtb><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Collaboration Focus</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Driving B2B Results</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Design & Development Excellence</a></li></ul></div></div></div></div></div></div></div></li><li class="main-menu-item" data-astro-cid-qeuzrdtb><div class="main-menu-item-inner" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/services" data-astro-cid-qeuzrdtb>Services</a><span class="expand-btn" data-astro-cid-qeuzrdtb></span></div><div class="megamenu megamenu-dropdown collapse" data-astro-cid-qeuzrdtb><div class="container" data-astro-cid-qeuzrdtb><div class="megamenu-items" data-astro-cid-qeuzrdtb><div class="megamenu-content-outer" data-astro-cid-qeuzrdtb><div class="megamenu-content" data-astro-cid-qeuzrdtb><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-qeuzrdtb>Services</h2><p data-astro-cid-qeuzrdtb>
Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non,
                        tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.
</p><a class="button button--text" href="/" data-astro-cid-qeuzrdtb>Overview</a></div></div><div class="megamenu-link-lists-outer" data-astro-cid-qeuzrdtb><div class="megamenu-link-lists" data-astro-cid-qeuzrdtb><div class="megamenu-links-outer" data-astro-cid-qeuzrdtb><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Brand Strategy</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Content Development</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Creative Services</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Digital Marketing</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Digital Strategy</a></li></ul></div><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Motion Graphics</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Systems Support</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>UX/UI Design</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Web Development</a></li></ul></div></div></div></div></div></div></div></li><li class="main-menu-item" data-astro-cid-qeuzrdtb><div class="main-menu-item-inner" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/insights" data-astro-cid-qeuzrdtb>Insights</a><span class="expand-btn" data-astro-cid-qeuzrdtb></span></div><div class="megamenu megamenu-dropdown collapse" data-astro-cid-qeuzrdtb><div class="container" data-astro-cid-qeuzrdtb><div class="megamenu-items" data-astro-cid-qeuzrdtb><div class="megamenu-content-outer" data-astro-cid-qeuzrdtb><div class="megamenu-content" data-astro-cid-qeuzrdtb><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-qeuzrdtb>Insights</h2><p data-astro-cid-qeuzrdtb>
Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non,
                        tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.
</p><a class="button button--text" href="/" data-astro-cid-qeuzrdtb>Overview</a></div></div><div class="megamenu-link-lists-outer" data-astro-cid-qeuzrdtb><div class="megamenu-link-lists" data-astro-cid-qeuzrdtb><div class="row megamenu-links-outer" data-astro-cid-qeuzrdtb><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>White Papers</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Videos</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Infographics</a></li></ul></div><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Podcasts</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Client in the News</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Press Releases</a></li></ul></div></div></div></div></div></div></div></li><li class="main-menu-item" data-astro-cid-qeuzrdtb><div class="main-menu-item-inner" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/about" data-astro-cid-qeuzrdtb>About</a><span class="expand-btn" data-astro-cid-qeuzrdtb></span></div><div class="megamenu megamenu-dropdown collapse" data-astro-cid-qeuzrdtb><div class="container" data-astro-cid-qeuzrdtb><div class="megamenu-items" data-astro-cid-qeuzrdtb><div class="megamenu-content-outer" data-astro-cid-qeuzrdtb><div class="megamenu-content" data-astro-cid-qeuzrdtb><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-qeuzrdtb>About Clear</h2><p data-astro-cid-qeuzrdtb>
Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel nunc non,
                        tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.
</p><a class="button button--text" href="/" data-astro-cid-qeuzrdtb>Overview</a></div></div><div class="megamenu-link-lists-outer" data-astro-cid-qeuzrdtb><div class="megamenu-link-lists" data-astro-cid-qeuzrdtb><div class="megamenu-links-outer" data-astro-cid-qeuzrdtb><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Brand Story</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>History</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Team</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Awards</a></li></ul></div><div class="megamenu-links" data-astro-cid-qeuzrdtb><ul class="menu" data-astro-cid-qeuzrdtb><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Partners</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>News</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Careers</a></li><li class="menu-item" data-astro-cid-qeuzrdtb><a data-cursor-expand href="/" data-astro-cid-qeuzrdtb>Contact Us</a></li></ul></div></div></div></div></div></div></div></li></ul><div class="main-menu-action" data-astro-cid-qeuzrdtb><a href="/" class="button button-large" data-astro-cid-qeuzrdtb>Let's Talk</a></div></nav><div class="hamburger" data-astro-cid-qeuzrdtb><span data-astro-cid-qeuzrdtb></span><span data-astro-cid-qeuzrdtb></span><span data-astro-cid-qeuzrdtb></span></div></div></div></header>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Navigation/Navigation.astro", void 0);

const $$Astro$7 = createAstro();
const $$CTAButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CTAButton;
  const { label, href, target = "_self", style, lightboxVideo, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["cta-button button-large", style, className], "class:list")}${addAttribute(target, "target")} data-astro-cid-se6vzaun>${label}</a>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/CTAButton.astro", void 0);

const $$Astro$6 = createAstro();
const $$FooterClearDigital = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FooterClearDigital;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-clear-digital" data-astro-cid-wjqgby4n><div class="container" data-astro-cid-wjqgby4n><div class="outer-wrap" data-astro-cid-wjqgby4n><div class="item small" data-astro-cid-wjqgby4n><div class="img-wrap" data-astro-cid-wjqgby4n><a href="/" data-cursor-expand data-astro-cid-wjqgby4n><img src="/cleardigital-logo.png" alt="Cleardigital Logo" data-astro-cid-wjqgby4n></a></div><div class="location-wrap" data-astro-cid-wjqgby4n><div class="icon-wrap" data-astro-cid-wjqgby4n><a href="" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>Address</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FA198C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wjqgby4n></path><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FA198C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wjqgby4n></path></svg></a></div><div class="location-title" data-astro-cid-wjqgby4n><p class="body-default" data-astro-cid-wjqgby4n>1570 The Alameda #330, San Jose, CA 95126</p></div></div><div class="contact-wrap" data-astro-cid-wjqgby4n><div class="icon-wrap" data-astro-cid-wjqgby4n><a href="" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>Telephone</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#FA198C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wjqgby4n></path><path d="M12 18H12.01" stroke="#FA198C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wjqgby4n></path></svg></a></div><div class="contact-title" data-astro-cid-wjqgby4n><a href="tel:408.246.0000" class="contact-link text-white body-default" data-astro-cid-wjqgby4n> 408.246.0000</a></div></div><div class="social-icons" data-astro-cid-wjqgby4n><a href="https://www.facebook.com/cleardigitalinc" target="_blank" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>Facebook</span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z" fill="#989898" data-astro-cid-wjqgby4n></path></svg></a><a href="https://www.instagram.com/cleardigitalinc/" target="_blank" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>Instagram</span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M14.8926 12.5C14.8926 13.8214 13.8214 14.8926 12.5 14.8926C11.1786 14.8926 10.1074 13.8214 10.1074 12.5C10.1074 11.1786 11.1786 10.1074 12.5 10.1074C13.8214 10.1074 14.8926 11.1786 14.8926 12.5Z" fill="#989898" data-astro-cid-wjqgby4n></path><path d="M18.0954 8.26716C17.9804 7.9555 17.7969 7.6734 17.5585 7.44185C17.327 7.20343 17.0451 7.01994 16.7332 6.90493C16.4803 6.8067 16.1003 6.68978 15.4005 6.65793C14.6435 6.62341 14.4165 6.61597 12.5 6.61597C10.5833 6.61597 10.3564 6.62321 9.59953 6.65774C8.89972 6.68978 8.51958 6.8067 8.26686 6.90493C7.95501 7.01994 7.67291 7.20343 7.44155 7.44185C7.20313 7.6734 7.01965 7.95531 6.90444 8.26716C6.80621 8.52007 6.68929 8.90021 6.65744 9.60001C6.62292 10.3568 6.61548 10.5838 6.61548 12.5005C6.61548 14.417 6.62292 14.644 6.65744 15.401C6.68929 16.1008 6.80621 16.4808 6.90444 16.7337C7.01965 17.0455 7.20294 17.3274 7.44136 17.559C7.67291 17.7974 7.95482 17.9809 8.26667 18.0959C8.51958 18.1943 8.89972 18.3113 9.59953 18.3431C10.3564 18.3776 10.5831 18.3849 12.4998 18.3849C14.4167 18.3849 14.6437 18.3776 15.4003 18.3431C16.1002 18.3113 16.4803 18.1943 16.7332 18.0959C17.3592 17.8544 17.854 17.3597 18.0954 16.7337C18.1937 16.4808 18.3106 16.1008 18.3426 15.401C18.3771 14.644 18.3844 14.417 18.3844 12.5005C18.3844 10.5838 18.3771 10.3568 18.3426 9.60001C18.3108 8.90021 18.1938 8.52007 18.0954 8.26716ZM12.5 16.1861C10.4643 16.1861 8.81408 14.536 8.81408 12.5003C8.81408 10.4646 10.4643 8.81457 12.5 8.81457C14.5356 8.81457 16.1858 10.4646 16.1858 12.5003C16.1858 14.536 14.5356 16.1861 12.5 16.1861ZM16.3315 9.53021C15.8558 9.53021 15.4702 9.14454 15.4702 8.66885C15.4702 8.19315 15.8558 7.80749 16.3315 7.80749C16.8072 7.80749 17.1929 8.19315 17.1929 8.66885C17.1927 9.14454 16.8072 9.53021 16.3315 9.53021Z" fill="#989898" data-astro-cid-wjqgby4n></path><path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM19.6344 15.4593C19.5997 16.2233 19.4782 16.745 19.3008 17.2016C18.928 18.1658 18.1658 18.928 17.2016 19.3008C16.7452 19.4782 16.2233 19.5995 15.4594 19.6344C14.694 19.6693 14.4495 19.6777 12.5002 19.6777C10.5507 19.6777 10.3064 19.6693 9.54075 19.6344C8.77686 19.5995 8.255 19.4782 7.79858 19.3008C7.31945 19.1206 6.88572 18.8381 6.52714 18.4729C6.16207 18.1145 5.87959 17.6805 5.69935 17.2016C5.52197 16.7452 5.40047 16.2233 5.36575 15.4594C5.33047 14.6938 5.32227 14.4493 5.32227 12.5C5.32227 10.5507 5.33047 10.3062 5.36556 9.54075C5.40028 8.77666 5.52158 8.255 5.69897 7.79839C5.87921 7.31945 6.16188 6.88553 6.52714 6.52714C6.88553 6.16188 7.31945 5.8794 7.79839 5.69916C8.255 5.52177 8.77666 5.40047 9.54075 5.36556C10.3062 5.33066 10.5507 5.32227 12.5 5.32227C14.4493 5.32227 14.6938 5.33066 15.4593 5.36575C16.2233 5.40047 16.745 5.52177 17.2016 5.69897C17.6805 5.87921 18.1145 6.16188 18.4731 6.52714C18.8381 6.88572 19.1208 7.31945 19.3008 7.79839C19.4784 8.255 19.5997 8.77666 19.6346 9.54075C19.6695 10.3062 19.6777 10.5507 19.6777 12.5C19.6777 14.4493 19.6695 14.6938 19.6344 15.4593Z" fill="#989898" data-astro-cid-wjqgby4n></path></svg></a><a href="https://www.linkedin.com/company/cleardigitalinc" target="_blank" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>LinkedIn</span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71645C0.00541602 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0ZM8.86514 19.0789H6.13816V10.2944H8.86514V19.0789ZM7.5 9.09539C7.18617 9.09669 6.87899 9.00491 6.6173 8.83167C6.35561 8.65842 6.15115 8.41148 6.02978 8.12206C5.9084 7.83264 5.87555 7.51373 5.93539 7.20565C5.99522 6.89756 6.14505 6.61413 6.36593 6.39118C6.58681 6.16823 6.86883 6.01577 7.17635 5.95306C7.48386 5.89036 7.80306 5.92023 8.0936 6.03891C8.38414 6.15758 8.63298 6.35972 8.80865 6.61979C8.98433 6.87985 9.07897 7.18616 9.0806 7.5C9.08148 7.92083 8.9157 8.3249 8.61952 8.62386C8.32333 8.92282 7.92083 9.09235 7.5 9.09539ZM19.0789 19.0789H16.3536V14.8026C16.3536 13.7829 16.3339 12.4753 14.9359 12.4753C13.5378 12.4753 13.2911 13.5839 13.2911 14.7286V19.0789H10.5757V10.2944H13.1924V11.4918H13.2303C13.5938 10.801 14.4836 10.0724 15.8109 10.0724C18.5707 10.0724 19.0789 11.8914 19.0789 14.2533V19.0789Z" fill="#989898" data-astro-cid-wjqgby4n></path></svg></a><a href="https://twitter.com/cleardigitalinc" target="_blank" class="icon" data-cursor-expand="" data-astro-cid-wjqgby4n><span class="sr-only" data-astro-cid-wjqgby4n>Twitter</span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-wjqgby4n><path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z" fill="#989898" data-astro-cid-wjqgby4n></path></svg></a></div></div><div class="item medium" data-astro-cid-wjqgby4n><div class="list-item" data-astro-cid-wjqgby4n><ul data-astro-cid-wjqgby4n><li data-astro-cid-wjqgby4n><a href="" class="subtitle text-white" data-cursor-expand="" data-astro-cid-wjqgby4n>Work </a></li><li data-astro-cid-wjqgby4n><a href="" class="subtitle text-white" data-cursor-expand="" data-astro-cid-wjqgby4n>Approach</a></li><li data-astro-cid-wjqgby4n><a href="" class="subtitle text-white" data-cursor-expand="" data-astro-cid-wjqgby4n>Services </a></li><li data-astro-cid-wjqgby4n><a href="" class="subtitle text-white" data-cursor-expand="" data-astro-cid-wjqgby4n>About </a></li><li data-astro-cid-wjqgby4n><a href="" class="subtitle text-white" data-cursor-expand="" data-astro-cid-wjqgby4n>Contact Us</a></li></ul></div></div><div class="item large" data-astro-cid-wjqgby4n><div class="content-wrap" data-astro-cid-wjqgby4n><div class="img-box" data-astro-cid-wjqgby4n><div class="bg-img" data-astro-cid-wjqgby4n><img src="/red_circle.png" alt="Red Circle" data-astro-cid-wjqgby4n></div></div><div class="intro" data-astro-cid-wjqgby4n><h2 class="h4 text-white" data-astro-cid-wjqgby4n>2023 Fortune 500 B2B Homepage Rankings Report</h2><p class="body-default" data-astro-cid-wjqgby4n>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
                            nunc non, tempus
                            blandit enim. Vivamus gravida velit lorem ipsum dolor sit amet.</p><div class="bten-wrap" data-astro-cid-wjqgby4n>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": "Download", "href": "/", "target": "_self", "data-astro-cid-wjqgby4n": true })}</div></div></div></div></div><div class="wrapper" data-astro-cid-wjqgby4n><div class="title-wrap" data-astro-cid-wjqgby4n><h4 data-astro-cid-wjqgby4n>Confidently navigating <span class="text-pink" data-astro-cid-wjqgby4n>change</span>.</h4></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Footer/Partials/FooterClearDigital.astro", void 0);

const $$Astro$5 = createAstro();
const $$FooterMyrious = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FooterMyrious;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-myrious" data-astro-cid-x62lw4sq><div class="container" data-astro-cid-x62lw4sq><div class="content-wrapper" data-astro-cid-x62lw4sq><div class="logo-wrap" data-astro-cid-x62lw4sq><a href="/" data-cursor-expand="" data-astro-cid-x62lw4sq><img src="/myrious_logo.png" alt="Myrious" data-astro-cid-x62lw4sq></a></div><div class="title-wrap" data-astro-cid-x62lw4sq><p class="subtitle" data-astro-cid-x62lw4sq>Clear Digital is a founding member of Myrious Group’s expertise-driven agencies.</p><p class="body-default" data-astro-cid-x62lw4sq>Myrious Group is an independent holding company enabling forward-thinking brands
                    to achieve breakthrough performance through power of orchestration. </p><div class="bten-wrap" data-astro-cid-x62lw4sq>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": "Learn More", "href": "/", "target": "_self", "data-astro-cid-x62lw4sq": true })}</div></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Footer/Partials/FooterMyrious.astro", void 0);

const $$Astro$4 = createAstro();
const $$FooterBottom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterBottom;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-bottom" data-astro-cid-6wurpnbb><div class="container" data-astro-cid-6wurpnbb><div class="wrapper" data-astro-cid-6wurpnbb><div class="logo-outer" data-astro-cid-6wurpnbb><div class="logo-inner-wrap" data-astro-cid-6wurpnbb><a href="/" data-cursor-expand="" data-astro-cid-6wurpnbb><img src="/clear.svg" alt="clear" data-astro-cid-6wurpnbb></a></div></div><div class="copyright-list" data-astro-cid-6wurpnbb><ul data-astro-cid-6wurpnbb><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>© 2023 Clear Digital , Inc.</a></li><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>Email Subscriptions</a></li><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>Terms of Use </a></li><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>Privacy </a></li><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>Cookie Policy</a></li><li data-astro-cid-6wurpnbb><a href="" class="footer-links-small" data-cursor-expand="" data-astro-cid-6wurpnbb>Cookie Settings</a></li></ul></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Footer/Partials/FooterBottom.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-ak3upacl>${renderComponent($$result, "FooterClearDigital", $$FooterClearDigital, { "data-astro-cid-ak3upacl": true })}${renderComponent($$result, "FooterMyrious", $$FooterMyrious, { "data-astro-cid-ak3upacl": true })}${renderComponent($$result, "FooterBottom", $$FooterBottom, { "data-astro-cid-ak3upacl": true })}</footer>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Footer/Footer.astro", void 0);

const iconX = {"src":"/_astro/x.36a5095c.svg","width":30,"height":30,"format":"svg"};

const iconPlay = {"src":"/_astro/play.e87f6628.svg","width":30,"height":31,"format":"svg"};

const iconArrowRight = {"src":"/_astro/arrow-right.0648d463.svg","width":35,"height":35,"format":"svg"};

const iconArrowLeft = {"src":"/_astro/arrow-left.ea3a66ba.svg","width":35,"height":35,"format":"svg"};

const iconPlus = {"src":"/_astro/plus.2912eecf.svg","width":30,"height":30,"format":"svg"};

const iconMinus = {"src":"/_astro/minus.5c682f45.svg","width":30,"height":30,"format":"svg"};

const $$Astro$2 = createAstro();
const $$MouseCursor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MouseCursor;
  const cssVars = {
    iconX: `url(${iconX.src})`,
    iconPlay: `url(${iconPlay.src})`,
    iconArrowRight: `url(${iconArrowRight.src})`,
    iconArrowLeft: `url(${iconArrowLeft.src})`,
    iconPlus: `url(${iconPlus.src})`,
    iconMinus: `url(${iconMinus.src})`
  };
  const $$definedVars = defineStyleVars([cssVars]);
  return renderTemplate`${maybeRenderHead()}<div id="cursor" data-circle-expand="false" data-icon="" data-astro-cid-p3qwgfac${addAttribute($$definedVars, "style")}><div id="cursorCircle" data-astro-cid-p3qwgfac${addAttribute($$definedVars, "style")}></div><div id="cursorIcon" data-astro-cid-p3qwgfac${addAttribute($$definedVars, "style")}></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/MouseCursor.astro", void 0);

const $$Astro$1 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { title, metadescription, ogimage } = Astro2.props;
  return renderTemplate`<html lang="en">${renderComponent($$result, "Head", $$Head, { "title": title, "metadescription": metadescription, "ogimage": ogimage })}${maybeRenderHead()}<body>${renderTemplate`${renderComponent($$result, "MouseCursor", $$MouseCursor, {})}`}<main>${renderComponent($$result, "Navigation", $$Navigation, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</main></body></html>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/layouts/Page/Page.astro", void 0);

const $$Astro = createAstro();
const $$BannerBlade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerBlade;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "metadescription": "", "ogimage": "", "title": "Testing Blades" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Banner, { "theme": "dark", ",": true, "eyebrow": "Eyebrow text here", "headline": "Headline HTML goes here.", "headlineTag": "h1", "headlineStyle": null, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit molestias reprehenderit corporis temporibus accusantium, provident, enim sint doloremque molestiae, exercitationem saepe! Accusamus aliquam nisi eaque vero necessitatibus delectus optio cupiditate.", "ctaText": "Click here", "ctaType": "button-large", "ctaURL": "/click-here-dest/", "ctaAction": "href", "ctaTarget": "_self", "backgroundGrid": true, "backgroundImage": "/office-discussion.webp", "backgroundVideo": "https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&k=20&c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=", "backgroundVideoType": "video/mp4" })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/banner-blade.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/banner-blade.astro";
const $$url = "/000testing/banner-blade";

const bannerBlade = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BannerBlade,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Headline as $, $$CTAButton as a, $$Page as b, $$Head as c, $$Footer as d, bannerBlade as e };
