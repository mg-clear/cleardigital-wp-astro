import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, i as renderSlot } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { c as $$Head, d as $$Footer } from './banner-blade_4e7764d7.mjs';
/* empty css                                 */import 'html-escaper';
/* empty css                                        *//* empty css                                  *//* empty css                           *//* empty css                                  *//* empty css                                 */
const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const query = `query NewQuery {
  pageBy(pageId: 107) {
    id
    mainNavigationPanels {
      items {
        ctaText
        ctaUrl
        description
        headline
        mainItemText
        mainItemUrl
      }
    }
  }
}`;
  const response = await fetch("https://dev-clear-astro-wp.pantheonsite.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query
    })
  });
  const json = await response.json();
  json.data.pageBy.mainNavigationPanels;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-2w66rqv5><div class="container" data-astro-cid-2w66rqv5><div class="img-wrap" data-astro-cid-2w66rqv5><a href="/set-1/homepage/" class="site-logo-link" data-cursor-expand data-astro-cid-2w66rqv5><img src="/Clear_black.svg" alt="Clear Digital" data-astro-cid-2w66rqv5><img src="/Clear_logo_pink.svg" alt="Cleardigital" data-astro-cid-2w66rqv5></a></div><div class="links-outer" data-astro-cid-2w66rqv5><nav data-astro-cid-2w66rqv5><ul data-astro-cid-2w66rqv5><li data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="/work" data-cursor-expand data-astro-cid-2w66rqv5>Work</a></span><div class="sub-menu" data-astro-cid-2w66rqv5><div class="outer-wrapper" data-astro-cid-2w66rqv5><div class="col-two" data-astro-cid-2w66rqv5><div class="title-description" data-astro-cid-2w66rqv5><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-2w66rqv5>Work</h2><p data-astro-cid-2w66rqv5>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
										nunc
										non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit
										amet.</p><a class="link-default link-black" href="#" data-cursor-expand data-astro-cid-2w66rqv5>Overview</a></div></div><div class="col-two" data-astro-cid-2w66rqv5><div class="links-container" data-astro-cid-2w66rqv5><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Case Studies</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Clients</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Industry Focus</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Outcomes</a></span></div></div></div></div></div></li><li data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="/approach" data-cursor-expand data-astro-cid-2w66rqv5>Approach</a></span><div class="sub-menu" data-astro-cid-2w66rqv5><div class="outer-wrapper" data-astro-cid-2w66rqv5><div class="col-two" data-astro-cid-2w66rqv5><div class="title-description" data-astro-cid-2w66rqv5><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-2w66rqv5>Approach</h2><p data-astro-cid-2w66rqv5>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
										nunc
										non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit
										amet.</p><a class="link-default link-black" href="#" data-cursor-expand data-astro-cid-2w66rqv5>Overview</a></div></div><div class="col-two" data-astro-cid-2w66rqv5><div class="links-container" data-astro-cid-2w66rqv5><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Collaboration Focus</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Driving B2B Results</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Design & Development Excellence</a></span></div></div></div></div></div></li><li data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="/services" data-cursor-expand data-astro-cid-2w66rqv5>Services</a></span><div class="sub-menu" data-astro-cid-2w66rqv5><div class="outer-wrapper" data-astro-cid-2w66rqv5><div class="col-two" data-astro-cid-2w66rqv5><div class="title-description" data-astro-cid-2w66rqv5><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-2w66rqv5>Services</h2><p data-astro-cid-2w66rqv5>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
										nunc
										non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit
										amet.</p><a class="link-default link-black" href="#" data-cursor-expand data-astro-cid-2w66rqv5>Overview</a></div></div><div class="col-two" data-astro-cid-2w66rqv5><div class="links-container" data-astro-cid-2w66rqv5><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Brand Strategy</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Content Development</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Creative Services</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Digital Marketing</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Digital Strategy</a></span></div><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Motion Graphics</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Systems Support</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>UX/UI Design</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Web Development</a></span></div></div></div></div></div></li><li data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="/insights" data-cursor-expand data-astro-cid-2w66rqv5>Insights</a></span><div class="sub-menu" data-astro-cid-2w66rqv5><div class="outer-wrapper" data-astro-cid-2w66rqv5><div class="col-two" data-astro-cid-2w66rqv5><div class="title-description" data-astro-cid-2w66rqv5><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-2w66rqv5>Insights</h2><p data-astro-cid-2w66rqv5>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
										nunc
										non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit
										amet.</p><a class="link-default link-black" href="#" data-cursor-expand data-astro-cid-2w66rqv5>Overview</a></div></div><div class="col-two" data-astro-cid-2w66rqv5><div class="links-container" data-astro-cid-2w66rqv5><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>White Papers</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Videos</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Infographics</a></span></div><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Podcasts</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Client in the News</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Press Releases</a></span></div></div></div></div></div></li><li data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="/about" data-cursor-expand data-astro-cid-2w66rqv5>About</a></span><div class="sub-menu" data-astro-cid-2w66rqv5><div class="outer-wrapper" data-astro-cid-2w66rqv5><div class="col-two" data-astro-cid-2w66rqv5><div class="title-description" data-astro-cid-2w66rqv5><h2 class="graphic-effect-underline" data-underline-image="black-1" data-astro-cid-2w66rqv5>About Clear</h2><p data-astro-cid-2w66rqv5>Sed sollicitudin odio ac ornare consequat. Ut massa justo, hendrerit vel
										nunc
										non, tempus blandit enim. Vivamus gravida velit lorem ipsum dolor sit
										amet.</p><a class="link-default link-black" href="#" data-cursor-expand data-astro-cid-2w66rqv5>Overview</a></div></div><div class="col-two" data-astro-cid-2w66rqv5><div class="links-container" data-astro-cid-2w66rqv5><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Brand Story</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>History</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Team</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Awards</a></span></div><div class="col-wrapper" data-astro-cid-2w66rqv5><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Partners</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>News</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Careers</a></span><span data-astro-cid-2w66rqv5><a href="#" data-cursor-expand data-astro-cid-2w66rqv5>Contact Us</a></span></div></div></div></div></div></li></ul><div class="btn-wrap" data-astro-cid-2w66rqv5><a href="#" class="btn-default" data-cursor-expand data-astro-cid-2w66rqv5>Let’s talk</a></div></nav></div><div id="toggleButton" class="toggler" data-astro-cid-2w66rqv5><svg width="35" height="35" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="open" data-astro-cid-2w66rqv5><rect x="5" width="30" height="4" rx="2" fill="white" data-astro-cid-2w66rqv5></rect><rect y="11" width="35" height="4" rx="2" fill="white" data-astro-cid-2w66rqv5></rect><rect x="11" y="22" width="24" height="4" rx="2" fill="white" data-astro-cid-2w66rqv5></rect></svg><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="close" data-astro-cid-2w66rqv5><path d="M26.25 8.75L8.75 26.25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2w66rqv5></path><path d="M8.75 8.75L26.25 26.25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2w66rqv5></path></svg></div></div></header>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/Header/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Page;
  const { title, metadescription, ogimage } = Astro2.props;
  return renderTemplate`<html lang="en">${renderComponent($$result, "Head", $$Head, { "title": title, "metadescription": metadescription, "ogimage": ogimage })}${maybeRenderHead()}<body><main>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</main></body></html>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/layouts/Page.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClearVectorLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClearVectorLogo;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?-->${maybeRenderHead()}<svg version="1.1" class="clear-logo-vector alternate" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 341.2 115" style="enable-background:new 0 0 341.2 115;" xml:space="preserve" data-astro-cid-gwefjaj5><g id="Logo" data-astro-cid-gwefjaj5><path class="st0 clear-logo-vector--clear" d="M44.5,45.4c5.1,0,9.8,1.5,14.5,4.7c2.9,2,7,1.4,9.3-1.3l7.4-8.5c-8.6-8.4-18.2-12.2-31.1-12.2
		c-23.5,0-41.2,17.5-41.2,40.8v0.2c0,23.1,17.4,40.6,40.5,40.6c13.6,0,22.9-4.1,32.3-14.1l0.5-0.4l-7.9-7.3c-2.5-2.3-6.2-2.4-9-0.4
		c-4.4,3.3-9,5.1-15.3,5.1c-12.4,0-21.7-10.2-21.7-23.6v-0.2C22.8,55.4,32.1,45.4,44.5,45.4z" data-astro-cid-gwefjaj5></path><path class="st0 clear-logo-vector--clear" d="M101.7,7.7c-2-1.9-4.3-2.8-7.1-2.8H83.1v104.8h21.5l0.1-95C104.7,11.9,103.7,9.6,101.7,7.7z" data-astro-cid-gwefjaj5></path><path class="st0 clear-logo-vector--clear" d="M178.3,38.5c-6.8-7.2-16.4-10.7-28.9-10.7c-11.8,0-21.1,3.6-27.7,10.9c-6.4,7.1-9.6,17-9.6,29.6
		c0,13.2,3.4,23.4,10,30.5c6.6,7.3,15.9,10.9,27.7,10.9c9.8,0,17.9-2.3,24.3-6.8c6.5-4.3,10.8-10.6,13.1-18.9h-13.3
		c-3.7,0-7.2,1.7-9.8,4.3c-2.2,2.1-6.1,4.3-13,4.3c-5.4,0-9.4-1.5-12.1-4.7c-2.9-2.9-4.5-7.5-4.7-13.6h53.8c0,0,0.3-2.4,0.3-3.4
		h-0.1v-0.4C188.3,57.5,184.9,45.8,178.3,38.5z M134.2,60.8c0.2-5.1,1.8-9,4.7-11.8c2.9-2.7,6.6-4.1,11.2-4.1c5,0,8.8,1.4,11.4,4.1
		c2.5,2.5,4,6.5,4.4,11.8H134.2z" data-astro-cid-gwefjaj5></path><path class="st0 clear-logo-vector--clear" d="M229.1,58.7c-1.9,0.2-8.7,1.2-8.7,1.2c-7.9,1.2-14.4,3.5-19.5,7.1c-5.1,3.5-7.6,9.4-7.6,17.7
		c0,8.9,2.8,15.3,8.4,19.1c5.6,3.9,12.1,5.5,19.6,5.8c6.1,0.2,11.7,0.1,14.3-0.3c4.9-0.7,10.4-2.4,14.3-4.4c4.4-2.8,6.2-4.3,8.9-7.8
		c3.2-4.3,4.5-10.6,4.5-18.5l-0.1-28.8c0-7.1-3-12.7-9-16.6c-5.8-3.7-14.5-5.6-26.1-5.6c-10.4,0-18.4,2.3-24,6.8
		c-5,4-7.9,9-8.7,15.1h20.9c1.1-2.1,2.7-3.6,5-4.4c2.3-0.8,4.9-1.2,7.8-1.2c2.7,0,5.7,0.4,8.9,1.3c3.2,0.9,4.8,2.8,4.8,5.8
		C242.8,55,238.2,57.5,229.1,58.7z M243.1,68.5v7.4c0,5.5,0.1,9.8-3.2,13c-3.7,3.5-6.6,4.7-15.5,4.7c-3.5,0-6.2-0.8-8.1-2.4
		c-1.9-1.8-2.8-4.1-2.8-7.1c0-2.2,0.6-4.4,2.2-6.5c1.7-2.3,4.4-2.8,8.1-3.8l7.2-1.5C237.7,71.1,240.2,69.9,243.1,68.5z" data-astro-cid-gwefjaj5></path><path class="st0 clear-logo-vector--clear" d="M298.1,30.1c-5.3,1.4-10,3.5-13.9,6.5c-4.2,3.2-7.4,7.4-9.8,12.6c-2.4,5.3-3.6,11.7-3.6,19.4v41h11.1
		c5.9,0,10.7-4.5,10.7-10.1V66.3c0-5.9,1.5-10.2,4.4-13c2.9-2.7,7.4-4.1,13.4-4.1h7.1V28h-3.1C308.8,28,303.4,28.7,298.1,30.1z" data-astro-cid-gwefjaj5></path></g><g id="Rectangle" data-astro-cid-gwefjaj5><path class="st1 clear-logo-vector--background" d="M243.1,68.5c-2.9,1.4-5.4,2.6-12.1,3.8l-7.2,1.5c-3.7,1-6.4,1.5-8.1,3.8c-1.6,2.1-2.2,4.3-2.2,6.5
		c0,3,0.9,5.3,2.8,7.1c1.9,1.6,4.6,2.4,8.1,2.4c8.9,0,11.8-1.2,15.5-4.7c3.3-3.2,3.2-7.5,3.2-13V68.5z" data-astro-cid-gwefjaj5></path><path class="st1 clear-logo-vector--background" d="M0.2,0v115h341V0H0.2z M76.2,95.6c-9.4,10-18.7,14.1-32.3,14.1c-23.1,0-40.5-17.5-40.5-40.6v-0.2
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
		h3.1v21.2L317.6,49.2L317.6,49.2z" data-astro-cid-gwefjaj5></path><path class="st1 clear-logo-vector--background" d="M150.1,44.9c-4.6,0-8.3,1.4-11.2,4.1c-2.9,2.8-4.5,6.7-4.7,11.8h31.7c-0.4-5.3-1.9-9.3-4.4-11.8
		C158.9,46.3,155.1,44.9,150.1,44.9z" data-astro-cid-gwefjaj5></path></g><g id="Dot" data-astro-cid-gwefjaj5><path class="st2 clear-logo-vector--circle" d="M321.6,77.5c-9,0-16,7-16,16c0,9.1,7,16.3,16,16.3c9.1,0,16.3-7.1,16.3-16.3C337.9,84.5,330.8,77.5,321.6,77.5
		z M329.7,93.5c0,4.6-3.4,8-8,8c-4.4,0-7.8-3.5-7.8-8c0-4.3,3.4-7.8,7.8-7.8S329.7,89.1,329.7,93.5z" data-astro-cid-gwefjaj5></path></g></svg>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/widgets/ClearVectorLogo.astro", void 0);

const $$Astro = createAstro();
const $$VectorLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VectorLogo;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "vector test", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div style="background-color: black; min-height: 100vh; display: flex; justify-content: center; align-items: center;"><div>${renderComponent($$result2, "ClearVectorLogo", $$ClearVectorLogo, {})}</div></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/vector-logo.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/000testing/vector-logo.astro";
const $$url = "/000testing/vector-logo";

export { $$VectorLogo as default, $$file as file, $$url as url };
