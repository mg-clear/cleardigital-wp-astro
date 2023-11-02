import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { $ as $$Headline, a as $$CTAButton, b as $$Page } from './banner-blade_ee4c0e8a.mjs';
import { $ as $$Image, a as $$HeroBanner } from './case-studies-detail_229a6519.mjs';
/* empty css                                        *//* empty css                                        */
const $$Astro$5 = createAstro();
const $$ImageTwoBlockBackgroundImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ImageTwoBlockBackgroundImage;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="figure" data-astro-cid-ojck2z36><img class="figure-image lazyload"${addAttribute(src, "src")} width="800" height="1090" alt="Background Image" data-astro-cid-ojck2z36></figure>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ImageTwoBlock/Partials/ImageTwoBlockBackgroundImage.astro", void 0);

const $$Astro$4 = createAstro();
const $$ImageTwoBlockBackgroundVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ImageTwoBlockBackgroundVideo;
  const { poster, videoUrl, videoType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video class="video" width="640" height="640" aria-hidden="true" autoplay muted loop${addAttribute(poster, "poster")} data-astro-cid-kg37lcqw><source${addAttribute(videoUrl, "src")}${addAttribute("video/" + videoType, "type")} data-astro-cid-kg37lcqw></video>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ImageTwoBlock/Partials/ImageTwoBlockBackgroundVideo.astro", void 0);

const $$Astro$3 = createAstro();
const $$ImageTwoBlockSlide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ImageTwoBlockSlide;
  const {
    slideLogo = {
      altText: "",
      sourceUrl: ""
    },
    slideHeadline = "",
    slideCtaText = "",
    slideCtaUrl = "",
    slideBackgroundImage = {
      sourceUrl: ""
    },
    slideBackgroundVideoUrl = "",
    slideBackgroundVideoType = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="column swiper-slide" data-astro-cid-4kaut7jy>${() => {
    if (slideBackgroundVideoUrl) {
      return renderTemplate`${renderComponent($$result, "ImageTwoBlockBackgroundVideo", $$ImageTwoBlockBackgroundVideo, { "poster": slideBackgroundImage.sourceUrl, "videoUrl": slideBackgroundVideoUrl, "videoType": slideBackgroundVideoType, "data-astro-cid-4kaut7jy": true })}`;
    } else {
      return renderTemplate`${renderComponent($$result, "ImageTwoBlockBackgroundImage", $$ImageTwoBlockBackgroundImage, { "src": slideBackgroundImage.sourceUrl, "data-astro-cid-4kaut7jy": true })}`;
    }
  }}<div class="content" data-astro-cid-4kaut7jy>${slideLogo && renderTemplate`<div class="logo" data-astro-cid-4kaut7jy><img class="logo-image lazyload"${addAttribute(slideLogo.sourceUrl, "src")} width="290" height="61"${addAttribute(slideLogo.altText, "alt")} data-astro-cid-4kaut7jy></div>`}<!-- <h2 class="h3">
			<span class="art art--circleWhite">27%</span>
			 increase on click-through rates.
		</h2> -->${renderComponent($$result, "Headline", $$Headline, { "tag": "h2", "content": slideHeadline, "typography": "h3", "data-astro-cid-4kaut7jy": true })}${renderComponent($$result, "CTAButton", $$CTAButton, { "label": slideCtaText, "href": slideCtaUrl, "target": "_self", "style": "text", "class": "", "data-astro-cid-4kaut7jy": true })}</div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ImageTwoBlock/Partials/ImageTwoBlockSlide.astro", void 0);

const $$Astro$2 = createAstro();
const $$ImageTwoBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageTwoBlock;
  const {
    bladeCssId = "",
    fieldGroupName = "",
    bladeExtraClasses = "",
    slideItems = []
  } = Astro2.props;
  return renderTemplate`<!-- <section class="image-two-block blade dark">
	<div class="container blade-content">
		ImageTwoBlock.astro
	</div>
</section> -->${maybeRenderHead()}<div${addAttribute(["flyntComponent componentSpacing", bladeExtraClasses], "class:list")}${addAttribute(bladeCssId, "id")} is="flynt-block-image-two-col" data-astro-cid-roigbdzt><div class="columns-outer swiper" data-astro-cid-roigbdzt><div class="columns swiper-wrapper" data-astro-cid-roigbdzt>${slideItems.map((item) => {
    return renderTemplate`${renderComponent($$result, "ImageTwoBlockSlide", $$ImageTwoBlockSlide, { ...item, "data-astro-cid-roigbdzt": true })}`;
  })}<!-- <div class="column swiper-slide">
				<figure class="figure">
					<img class="figure-image lazyload" src="/man-holding-phone.webp" width="800" height="1090" alt="Background Image">
				</figure>
				<div class="content">
					<div class="logo">
						<img class="logo-image lazyload" src="/logo-digimarc.webp" width="290" height="61" alt="Logo">
					</div>
					<h2 class="h3">
						<span class="art art--circleWhite">27%</span>
						increase on click-through rates.
					</h2>
					<CTAButton
						label = "View Case Study"
						href = "/"
						target = "_self"
						class = ""
					/>
				</div>
			</div>
			<div class="column swiper-slide">
				<figure class="figure">
					<img class="figure-image lazyload" src="/office-discussion.webp" width="800" height="1090" alt="Background Image">
				</figure>
				<div class="content">
					<div class="logo">
						<img class="logo-image lazyload" src="/logo-leadspace.webp" width="290" height="61" alt="Logo">
					</div>
					<h2 class="h3">53%
						<span class="marker marker--crossout">increase</span>
						on engagement metrics.</h2>
						<CTAButton
						label = "View Case Study"
						href = "/"
						target = "_self"
						class = ""
					/>
				</div>
			</div>
			<div class="column swiper-slide">
				<video class="video" width="640" height="640" aria-hidden="true" autoplay muted loop poster={girlInVrHeadset.src}>
					<source src="/videos/video-dummy.mp4" type="video/mp4">
					<source src="/videos/video-dummy.webm" type="video/webm">
				</video>
				<div class="content">
					<div class="logo">
						<img class="logo-image lazyload" src="/logo-digimarc.webp" width="290" height="61" alt="Logo">
					</div>
					<h2 class="h3">
						<span class="art art--circleWhite">27%</span>
						increase on click-through rates.
					</h2>
					<CTAButton
						label = "View Case Study"
						href = "/"
						target = "_self"
						class = ""
					/>
				</div>
			</div> --></div><div class="swiper-button-prev" data-astro-cid-roigbdzt></div><div class="swiper-button-next" data-astro-cid-roigbdzt></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/ImageTwoBlock/ImageTwoBlock.astro", void 0);

const logoCisco = {"src":"/_astro/logo-cisco.ed71def9.svg","width":210,"height":84,"format":"svg"};

const logoVmware = {"src":"/_astro/logo-vmware.50cd7304.svg","width":210,"height":84,"format":"svg"};

const logoMcafee = {"src":"/_astro/logo-mcafee.669f6449.svg","width":210,"height":84,"format":"svg"};

const logoTenable = {"src":"/_astro/logo-tenable.6a071042.svg","width":210,"height":84,"format":"svg"};

const logoStanford = {"src":"/_astro/logo-stanford.80af41f2.svg","width":210,"height":84,"format":"svg"};

const logoCohesity = {"src":"/_astro/logo-cohesity.c6b4823d.svg","width":157,"height":22,"format":"svg"};

const patternHexagonGreenImage = {"src":"/_astro/pattern-hexagon-green.76267d86.webp","width":570,"height":491,"format":"webp"};

const $$Astro$1 = createAstro();
const $$SliderWithContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SliderWithContent;
  return renderTemplate`${renderComponent($$result, "astro-slider-quote", "astro-slider-quote", { "class": "astroComponent componentSpacing", "data-theme": "dark", "data-astro-cid-lm4ahkni": true }, { "default": () => renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-lm4ahkni><div class="testimonials-slider swiper" data-astro-cid-lm4ahkni><div class="testimonials swiper-wrapper" data-astro-cid-lm4ahkni><div class="testimonial-outer swiper-slide" data-astro-cid-lm4ahkni><div class="testimonial" data-astro-cid-lm4ahkni><div class="testimonial-image" data-astro-cid-lm4ahkni><figure class="testimonial-figure" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "testimonial-figureImage", "src": patternHexagonGreenImage, "alt": "Quote Image", "data-astro-cid-lm4ahkni": true })}</figure></div><div class="testimonial-content" data-astro-cid-lm4ahkni><span class="art art--arrowWhite" data-astro-cid-lm4ahkni></span><span class="art art--quote" data-astro-cid-lm4ahkni></span><blockquote class="testimonial-text" data-astro-cid-lm4ahkni><h3 data-astro-cid-lm4ahkni>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3></blockquote><p class="testimonial-author" data-astro-cid-lm4ahkni><strong data-astro-cid-lm4ahkni>Jane Doe</strong>, <span data-astro-cid-lm4ahkni>CEO</span></p><div class="testimonial-author-logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "src": logoCohesity, "alt": "Author Company", "data-astro-cid-lm4ahkni": true })}</div><a href="/" class="testimonial-link button button--text" data-astro-cid-lm4ahkni>View case study</a></div></div></div><div class="testimonial-outer swiper-slide" data-astro-cid-lm4ahkni><div class="testimonial" data-astro-cid-lm4ahkni><div class="testimonial-statistics" data-astro-cid-lm4ahkni><div class="testimonial-counter" data-astro-cid-lm4ahkni><span class="testimonial-counterPrefix" data-astro-cid-lm4ahkni></span><span class="testimonial-counterNumber h1" data-astro-cid-lm4ahkni>113</span><span class="testimonial-counterSuffix h1" data-astro-cid-lm4ahkni>%</span></div><p class="h6" data-astro-cid-lm4ahkni>Aenean aliquet malesuada quam et placerat.</p></div><div class="testimonial-content" data-astro-cid-lm4ahkni><span class="art art--arrowWhite" data-astro-cid-lm4ahkni></span><span class="art art--quote" data-astro-cid-lm4ahkni></span><blockquote class="testimonial-text" data-astro-cid-lm4ahkni><h3 data-astro-cid-lm4ahkni>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3></blockquote><p class="testimonial-author" data-astro-cid-lm4ahkni><strong data-astro-cid-lm4ahkni>Jane Doe</strong>, <span data-astro-cid-lm4ahkni>CEO</span></p><div class="testimonial-author-logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "src": logoCohesity, "alt": "Author Company", "data-astro-cid-lm4ahkni": true })}</div><a href="/" class="testimonial-link button button--text" data-astro-cid-lm4ahkni>View case study</a></div></div></div><div class="testimonial-outer swiper-slide" data-astro-cid-lm4ahkni><div class="testimonial" data-astro-cid-lm4ahkni><div class="testimonial-content" data-astro-cid-lm4ahkni><span class="art art--arrowWhite" data-astro-cid-lm4ahkni></span><span class="art art--quote" data-astro-cid-lm4ahkni></span><blockquote class="testimonial-text" data-astro-cid-lm4ahkni><h3 data-astro-cid-lm4ahkni>Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.</h3></blockquote><p class="testimonial-author" data-astro-cid-lm4ahkni><strong data-astro-cid-lm4ahkni>Jane Doe</strong>, <span data-astro-cid-lm4ahkni>CEO</span></p><div class="testimonial-author-logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "src": logoCohesity, "alt": "Author Company", "data-astro-cid-lm4ahkni": true })}</div><a href="/" class="testimonial-link button button--text" data-astro-cid-lm4ahkni>View case study</a></div></div></div></div><div class="testimonial-sliderProgressbar swiper-pagination" data-astro-cid-lm4ahkni></div><div class="testimonial-sliderArrow testimonial-sliderArrow--prev swiper-button-prev" data-astro-cid-lm4ahkni></div><div class="testimonial-sliderArrow testimonial-sliderArrow--next swiper-button-next" data-astro-cid-lm4ahkni></div></div></div><div class="logos swiperLogos" data-astro-cid-lm4ahkni><ul class="logos-list swiper-wrapper" data-astro-cid-lm4ahkni><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoCisco, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoVmware, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoMcafee, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoTenable, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoStanford, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoCisco, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoVmware, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoMcafee, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoTenable, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoStanford, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoCisco, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoVmware, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoMcafee, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoTenable, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoStanford, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoCisco, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoVmware, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoMcafee, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoTenable, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li><li class="logos-item swiper-slide" data-astro-cid-lm4ahkni><div class="logo" data-astro-cid-lm4ahkni>${renderComponent($$result, "Image", $$Image, { "class": "logo-image", "src": logoStanford, "alt": "Logo", "data-astro-cid-lm4ahkni": true })}</div></li></ul></div>` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/SliderWithContent/SliderWithContent.astro", void 0);

const $$Astro = createAstro();
const $$CaseStudiesOverview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudiesOverview;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Case Studies", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "Case in point \u2014<br/><span class='marker-effect marker-underline'>great</span> results.", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "headlineTag": "h1", "headlineTypography": "h1", "ctaText": "Read story", "ctaStyle": "button", "ctaUrl": "/story", "backgroundImage": {
    sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/11/case-studies-bg.webp"
  } })}${renderComponent($$result2, "ImageTwoBlock", $$ImageTwoBlock, { "slideItems": [
    {
      slideLogo: {
        altText: "digimarc",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-digimarc.webp"
      },
      slideHeadline: "27% increase on click-through rates.",
      slideCtaText: "View case study",
      slideCtaUrl: "/case-study-1",
      slideBackgroundImage: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/man-holding-phone.webp"
      },
      slideBackgroundVideoUrl: "",
      slideBackgroundVideoType: ""
    },
    {
      slideLogo: {
        altText: "leadspace",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-leadspace.webp"
      },
      slideHeadline: "53% increase on engagement metrics.",
      slideCtaText: "View case study",
      slideCtaUrl: "/case-study-2",
      slideBackgroundImage: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/office-discussion.webp"
      },
      slideBackgroundVideoUrl: "",
      slideBackgroundVideoType: ""
    },
    {
      slideLogo: {
        altText: "digimarc",
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/logo-digimarc.webp"
      },
      slideHeadline: "27% increase on click-through rates.",
      slideCtaText: "View case study",
      slideCtaUrl: "/case-study-1",
      slideBackgroundImage: {
        sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/man-holding-phone.webp"
      },
      slideBackgroundVideoUrl: "",
      slideBackgroundVideoType: ""
    }
  ] })}${renderComponent($$result2, "SliderWithContent", $$SliderWithContent, {})}${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "headline": "Let\u2019s talk.", "eyebrow": "Lorem ipsum dolor", "ctaText": "Contact us", "ctaStyle": "button", "ctaUrl": "/contact", "headlineTag": "h2", "headlineTypography": "h1", "backgroundImage": {
    sourceUrl: "https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/cta-bg.webp"
  } })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/case-studies-overview.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-3/case-studies-overview.astro";
const $$url = "/set-3/case-studies-overview";

const caseStudiesOverview = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CaseStudiesOverview,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ImageTwoBlock as $, $$SliderWithContent as a, caseStudiesOverview as c };
