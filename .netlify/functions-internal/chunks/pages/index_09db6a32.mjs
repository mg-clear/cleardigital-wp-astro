import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, h as renderHead, i as renderSlot, m as maybeRenderHead, g as renderComponent } from '../astro_fb3c1bda.mjs';
import 'clsx';
/* empty css                           */import { c as $$Head } from './banner-blade_ee4c0e8a.mjs';

const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/layouts/Layout/Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-rmhoundz><a${addAttribute(href, "href")} data-astro-cid-rmhoundz><h2 data-astro-cid-rmhoundz>${title}<span data-astro-cid-rmhoundz>&rarr;</span></h2><p data-astro-cid-rmhoundz>${body}</p></a></li>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/Card.astro", void 0);

const $$Astro$b = createAstro();
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$a;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6><path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path><defs data-astro-cid-j7pv25f6><linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6><stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop><stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop></linearGradient></defs></svg><h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1><p class="instructions" data-astro-cid-j7pv25f6>
To get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
</p><ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "data-astro-cid-j7pv25f6": true })}</ul></main>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/index.astro", void 0);

const $$file$a = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/index.astro";
const $$url$a = "";

const index$a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$a,
	file: $$file$a,
	url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$BlankTemplate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlankTemplate;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">${renderComponent($$result, "Head", $$Head, { "title": title, "metadescription": "" })}${maybeRenderHead()}<body><main>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/layouts/BlankTemplate/BlankTemplate.astro", void 0);

const $$Astro$9 = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$9;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 1" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="blade-content container"><h1 class="h4">Set 1 Templates</h1><ol class="body-large"><li><a href="/set-1/homepage">Homepage</a><ul><li><a href="https://www.figma.com/file/hXWJSw8uarb9d77nJgNKEZ/Clear-Development?type=design&node-id=271-694&mode=design" target="_blank">Design</a></li><li><a href="https://docs.google.com/spreadsheets/d/1RpQmv1CiuLnbgZER3UudKB6zys8mLWhyaCssTjuj40g/edit#gid=0" target="_blank">Build Doc</a></li></ul></li><li><a href="/ui">UI Kit</a><ul><li><a href="https://www.figma.com/file/1T5HSD64E5uNvMGbFFBCl1/Clear-Digital-UI-Kit?type=design&node-id=253-299&mode=design" target="_blank">Design</a></li></ul></li></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/index.astro", void 0);

const $$file$9 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/index.astro";
const $$url$9 = "/set-1";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$9,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 2" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 2 Templates</h1><ol class="body-large"><li><a href="/set-2/services-overview">Services (Overview)</a><ul><li><a href="https://www.figma.com/file/hXWJSw8uarb9d77nJgNKEZ/Clear-Development?type=design&node-id=1448-1653&mode=design&t=8e06rcxjnfXbXolI-0" target="_blank">Design</a></li><li><a href="https://docs.google.com/spreadsheets/d/1RpQmv1CiuLnbgZER3UudKB6zys8mLWhyaCssTjuj40g/edit#gid=1764215774" target="_blank">Build Doc</a></li></ul></li><li><a href="/set-2/services-detail">Service (Detail)</a><ul><li><a href="https://www.figma.com/file/hXWJSw8uarb9d77nJgNKEZ/Clear-Development?type=design&node-id=1448-1653&mode=design&t=8e06rcxjnfXbXolI-0" target="_blank">Design</a></li><li><a href="https://docs.google.com/spreadsheets/d/1RpQmv1CiuLnbgZER3UudKB6zys8mLWhyaCssTjuj40g/edit#gid=1085769795" target="_blank">Build Doc</a></li></ul></li><li><a href="/set-2/work">Our Work</a><ul><li><a href="https://www.figma.com/file/hXWJSw8uarb9d77nJgNKEZ/Clear-Development?type=design&node-id=1448-1653&mode=design&t=8e06rcxjnfXbXolI-0" target="_blank">Design</a></li><li><a href="https://docs.google.com/spreadsheets/d/1RpQmv1CiuLnbgZER3UudKB6zys8mLWhyaCssTjuj40g/edit#gid=1988708652" target="_blank">Build Doc</a></li></ul></li></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/index.astro", void 0);

const $$file$8 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-2/index.astro";
const $$url$8 = "/set-2";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$8,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 3" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 3 Templates</h1><ol class="body-large"><li><a href="/set-3/case-studies-overview">Case Studies (Overview)</a><ul><li><a href="https://www.figma.com/file/hGABWRJZVyzzexUtbzDf8X/Clear-Design?type=design&node-id=824-1787&mode=design&t=hW4aq9479LOjrnMc-0" target="_blank">Design</a></li><li><a href="#" target="_blank">Build Doc</a></li></ul></li><li><a href="/set-3/case-studies-detail">Case Studies (Detail)</a><ul><li><a href="https://www.figma.com/file/hGABWRJZVyzzexUtbzDf8X/Clear-Design?type=design&node-id=824-1787&mode=design&t=hW4aq9479LOjrnMc-0" target="_blank">Design</a></li><li><a href="#" target="_blank">Build Doc</a></li></ul></li><li><a href="/set-3/clients">Clients</a><ul><li><a href="https://www.figma.com/file/hGABWRJZVyzzexUtbzDf8X/Clear-Design?type=design&node-id=824-1787&mode=design&t=hW4aq9479LOjrnMc-0" target="_blank">Design</a></li><li><a href="#" target="_blank">Build Doc</a></li></ul></li></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/index.astro", void 0);

const $$file$7 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/index.astro";
const $$url$7 = "/set-3";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$7,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 4" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 4 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-4/index.astro", void 0);

const $$file$6 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-4/index.astro";
const $$url$6 = "/set-4";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$6,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 5" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 5 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-5/index.astro", void 0);

const $$file$5 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-5/index.astro";
const $$url$5 = "/set-5";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 6 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-6/index.astro", void 0);

const $$file$4 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-6/index.astro";
const $$url$4 = "/set-6";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 7" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 7 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-7/index.astro", void 0);

const $$file$3 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-7/index.astro";
const $$url$3 = "/set-7";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 8" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 8 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-8/index.astro", void 0);

const $$file$2 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-8/index.astro";
const $$url$2 = "/set-8";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "Set 9" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="blade has-grid-bg"><div class="container"><h1 class="h4">Set 9 Templates</h1><ol class="body-large"></ol></div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-9/index.astro", void 0);

const $$file$1 = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-9/index.astro";
const $$url$1 = "/set-9";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BlankTemplate", $$BlankTemplate, { "title": "UI Kit" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><h1>Heading 1<br>Second line</h1>
-5% letter spacing / 110% line height<br>
140 @1600, scale proportionally from 1200+<br>
120 @768-1199<br>
80 @767-
</div></section><section class="blade dark not-screen-height has-grid-bg"><div class="blade-content"><h2>Heading 2<br>Second line</h2>
-2% letter spacing / 110% line height<br>
75 @1600, scale proportionally from 1200+<br>
65 @768-1199<br>
40 @767-
</div></section><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><h3>Heading 3<br>Second line</h3>
-2% letter spacing / 110% line height<br>
55 @1600, scale proportionally from 1200+<br>
50 @768-1199<br>
30 @767-
</div></section><section class="blade dark not-screen-height has-grid-bg"><div class="blade-content"><h4>Heading 4<br>Second line</h4>
0% letter spacing / 130% line height<br>
30 @1600, scale proportionally from 1200+<br>
24 @1199-
</div></section><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><div class="subtitle">Subtitle<br>Second line</div>
0% letter spacing / 100% line height<br>
25 @1600, scale proportionally from 1200+<br>
20 @1199-
</div></section><section class="blade dark not-screen-height has-grid-bg"><div class="blade-content"><div class="body-large">Body large<br>Second line</div>
0% letter spacing / 150% line height<br>
20 @1600, scale proportionally from 1200+<br>
18 @1199-
</div></section><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><div class="body-medium">Body medium<br>Second line</div>
0% letter spacing / 150% line height<br>
18 @1600, scale proportionally from 1200+<br>
16 @1199-
</div></section><section class="blade dark not-screen-height has-grid-bg"><div class="blade-content"><div class="body-default">Body default<br>Second line</div>
0% letter spacing / 150% line height<br>
16 @1600, scale proportionally from 1200+<br>
16 @1199-
</div></section><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><div class="button-large">Button large<br>Second line</div>
0% letter spacing / 100% line height<br>
20 @1600, scale proportionally from 1200+<br>
16 @1199-
</div></section><section class="blade dark not-screen-height has-grid-bg"><div class="blade-content"><div class="button-small">Button small<br>Second line</div>
0% letter spacing / 100% line height<br>
16 @1600, scale proportionally from 1200+<br>
16 @1199-
</div></section><section class="blade not-screen-height has-grid-bg"><div class="blade-content"><div class="footer-links-small">Footer links small<br>Second line</div>
0% letter spacing / 100% line height<br>
14 @1600, scale proportionally from 1200+<br>
12 @1199-
</div></section></main>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/ui/index.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/ui/index.astro";
const $$url = "/ui";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$9 as a, index$8 as b, index$7 as c, index$6 as d, index$5 as e, index$4 as f, index$3 as g, index$2 as h, index$a as i, index$1 as j, index as k };
