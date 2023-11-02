import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, e as addAttribute, u as unescapeHTML } from '../astro_fb3c1bda.mjs';
import 'clsx';
import { $ as $$Headline, a as $$CTAButton, b as $$Page } from './banner-blade_4e7764d7.mjs';
import { a as $$HeroBanner } from './case-studies-detail_00bd90a5.mjs';
import { $ as $$ImageTwoBlock, a as $$SliderWithContent } from './case-studies-overview_e06776ba.mjs';
import { $ as $$ContentWithGrid } from './clients_d41399b0.mjs';
/* empty css                                        *//* empty css                                        */
const $$Astro$5 = createAstro();
const $$PanelItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PanelItem;
  const {
    panelTitle = "",
    panelImage = {
      altText: "",
      sourceUrl: ""
    },
    panelHeadline = "",
    panelContent = "",
    ctaText = "",
    ctaUrl = "",
    ctaStyle = "",
    ctaTarget = "",
    ctaLightboxVideoUrl = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tabs-item"><div class="tab"><div class="tab-head" data-cursor-icon="plus" data-cursor-expand>${panelTitle && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "tag": "h3", "content": panelTitle, "typography": "h4" })}`}<span class="expand-btn"></span></div><div class="tab-body collapse"><div class="tab-bodyInner"><div class="tab-image"><picture class="tab-figure"><source${addAttribute(panelImage.sourceUrl, "srcset")}><img${addAttribute(panelImage.sourceUrl, "src")} width="894" height="1071"${addAttribute(panelImage.altText, "alt")}></picture></div><div class="tab-content">${panelHeadline && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "tag": "h4", "content": panelHeadline, "typography": "h4" })}`}<!-- <p class="body-default">
						Our content creators help you develop messaging and
						imagery that connect, engage, and guide your B2B
						customers to your solutions
					</p>
					<ul>
						<li>Content Strategy</li>
						<li>Copywriting / Copyediting</li>
						<li>Infographics</li>
						<li>Collateral</li>
						<li>Ebooks</li>
					</ul> --><div class="body-default">${panelContent}</div>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": ctaText, "href": ctaUrl, "target": ctaTarget, "style": ctaStyle })}<a data-cursor-expand href="/" class="button">Learn more</a></div><span class="tab-closeButton" aria-label="close button" data-cursor-icon="minus" data-cursor-expand></span></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TabsWithContent/Partials/PanelItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$PanelContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PanelContent;
  const {
    panelTitle = "",
    panelImage = {
      altText: "",
      sourceUrl: ""
    },
    panelHeadline = "",
    panelContent = "",
    ctaText = "",
    ctaUrl = "",
    ctaStyle = "",
    ctaTarget = "",
    ctaLightboxVideoUrl = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tab-body"><div class="tab-bodyInner"><div class="tab-image"><picture class="tab-figure"><source${addAttribute(panelImage.sourceUrl, "srcset")}><img${addAttribute(panelImage.sourceUrl, "src")} width="894" height="1071"${addAttribute(panelImage.altText, "alt")}></picture></div><div class="tab-content">${panelHeadline && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "tag": "h4", "content": panelHeadline, "typography": "h4" })}`}<div class="body-default">${unescapeHTML(panelContent)}</div>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": ctaText, "href": ctaUrl, "target": ctaTarget, "style": ctaStyle, "class": "margin-start-30" })}</div><span class="tab-closeButton" aria-label="close button" data-cursor-icon="minus" data-cursor-expand></span></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TabsWithContent/Partials/PanelContent.astro", void 0);

const $$Astro$3 = createAstro();
const $$TabsWithContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TabsWithContent;
  const {
    bladeCssId = "",
    bladeExtraClasses = "",
    headline = "",
    headlineTag = "",
    headlineTypography = "",
    contentItems = []
  } = Astro2.props;
  console.log();
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(bladeCssId, "id")}${addAttribute(["tabs-with-content blade", bladeExtraClasses], "class:list")}><div class="container blade-content"><div class="intro">${headline && renderTemplate`${renderComponent($$result, "Headline", $$Headline, { "tag": headlineTag, "content": headline, "typography": headlineTypography })}`}</div><div class="tabs-with-content-items"><div class="tabs-list">${contentItems.map((item) => {
    return renderTemplate`${renderComponent($$result, "PanelItem", $$PanelItem, { ...item })}`;
  })}<!-- <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Brand strategy</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Website design</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Motion graphics</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Creative services</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Digital strategy</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Web development</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Website design</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>UX/UI design</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Digital marketing</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs-item">
          <div class="tab">
            <div class="tab-head" data-cursor-icon="plus" data-cursor-expand>
              <h4>Support subscriptions</h4>
              <span class="expand-btn"></span>
            </div>
            <div class="tab-body collapse">
              <div class="tab-bodyInner">
                <div class="tab-image">
                  <picture class="tab-figure">
                    <source
                      srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
                    />
                    <img
                      src="/images/tabs-with-content/development-circle-pink-and-black.png"
                      width="894"
                      height="1071"
                      alt="black pink"
                    />
                  </picture>
                </div>
                <div class="tab-content">
                  <h4>Content development</h4>
                  <p class="body-default">
                    Our content creators help you develop messaging and imagery
                    that connect, engage, and guide your B2B customers to your
                    solutions
                  </p>
                  <ul>
                    <li>Content Strategy</li>
                    <li>Copywriting / Copyediting</li>
                    <li>Infographics</li>
                    <li>Collateral</li>
                    <li>Ebooks</li>
                  </ul>
                  <a data-cursor-expand href="/" class="button">Learn more</a>
                </div>
                <span
                  class="tab-closeButton"
                  aria-label="close button"
                  data-cursor-icon="minus"
                  data-cursor-expand></span>
              </div>
            </div>
          </div>
        </div> --></div></div><div class="tabs-with-content-content">${contentItems.map((item) => {
    return renderTemplate`${renderComponent($$result, "PanelContent", $$PanelContent, { ...item })}`;
  })}<!-- <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div>
      <div class="tab-body">
        <div class="tab-bodyInner">
          <div class="tab-image">
            <picture class="tab-figure">
              <source
                srcset="/images/tabs-with-content/development-circle-pink-and-black.png"
              />
              <img
                src="/images/tabs-with-content/development-circle-pink-and-black.png"
                width="894"
                height="1071"
                alt="black pink"
              />
            </picture>
          </div>
          <div class="tab-content">
            <h4>Content development</h4>
            <p class="body-default">
              Our content creators help you develop messaging and imagery that
              connect, engage, and guide your B2B customers to your solutions
            </p>
            <ul>
              <li>Content Strategy</li>
              <li>Copywriting / Copyediting</li>
              <li>Infographics</li>
              <li>Collateral</li>
              <li>Ebooks</li>
            </ul>
            <a data-cursor-expand href="/" class="button">Learn more</a>
          </div>
          <span
            class="tab-closeButton"
            aria-label="close button"
            data-cursor-icon="minus"
            data-cursor-expand></span>
        </div>
      </div> --></div></div></section>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TabsWithContent/TabsWithContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    ctaUrl = "",
    cardHeadline = "",
    cardDescription = "",
    cardBackground = {
      sourceUrl: ""
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="post-outer swiper-slide" data-astro-cid-56wxu5re><article class="post themeDark" data-astro-cid-56wxu5re><picture class="post-image" data-astro-cid-56wxu5re><img class="lazyload"${addAttribute(cardBackground.sourceUrl, "src")} width="570" height="540" alt="Post Image" data-astro-cid-56wxu5re></picture><div class="post-content boxPadding" data-astro-cid-56wxu5re><h4 class="text-white" data-astro-cid-56wxu5re>${cardHeadline}</h4><p class="body-default text-white mt-4 mt-lg-5" data-astro-cid-56wxu5re>${cardDescription}</p>${renderComponent($$result, "CTAButton", $$CTAButton, { "label": "Read More", "href": ctaUrl, "target": "_self", "style": "text", "data-astro-cid-56wxu5re": true })}</div></article></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TwoGridSlider/Partials/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$TwoGridSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoGridSlider;
  const {
    headline = "",
    headlineTag = "",
    headlineTypography = "",
    description = "",
    ctaUrl = "",
    ctaText = "",
    ctaTarget = "",
    ctaStyle = "",
    ctaLightboxVideoUrl = "",
    featuredInGroup = {
      headline: "",
      headlineTag: "",
      headlineTypography: "",
      featuredInLogos: []
    },
    cards = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="blade" is="flynt-slider-posts" data-theme="light" data-astro-cid-zeaupek4><div class="container" data-astro-cid-zeaupek4><div class="content" data-astro-cid-zeaupek4><div class="intro" data-astro-cid-zeaupek4>${renderComponent($$result, "Headline", $$Headline, { "tag": headlineTag, "content": headline, "typography": headlineTypography, "theme": "dark", "data-astro-cid-zeaupek4": true })}<!-- <h3>Clear Digital news, thoughts, and
					<span class="marker marker--underline">insights</span>.
				</h3> -->${description && renderTemplate`<p data-astro-cid-zeaupek4>${unescapeHTML(description)}</p>`}${ctaText && renderTemplate`${renderComponent($$result, "CTAButton", $$CTAButton, { "class": "margin-start-30", "label": ctaText, "href": ctaUrl, "target": ctaTarget, "style": ctaStyle, "lightboxVideo": ctaLightboxVideoUrl, "data-astro-cid-zeaupek4": true })}`}</div><div class="posts-outer slider swiper" data-astro-cid-zeaupek4><div class="posts swiper-wrapper" data-astro-cid-zeaupek4>${cards.map((card) => {
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { ...card, "data-astro-cid-zeaupek4": true })}`;
  })}</div><div class="swiper-pagination" data-astro-cid-zeaupek4></div><div class="swiper-button-prev" data-astro-cid-zeaupek4></div><div class="swiper-button-next" data-astro-cid-zeaupek4></div></div></div><div class="content content--logos row align-items-center mt-15 mt-lg-36" data-astro-cid-zeaupek4><div class="logos-heading" data-astro-cid-zeaupek4>${renderComponent($$result, "Headline", $$Headline, { "tag": featuredInGroup.headlineTag, "content": featuredInGroup.headline, "typography": featuredInGroup.headlineTypography, "data-astro-cid-zeaupek4": true })}</div><div class="logos" data-astro-cid-zeaupek4><ul class="logos-list" data-astro-cid-zeaupek4>${featuredInGroup.featuredInLogos.map((item) => {
    return renderTemplate`<li class="logos-item" data-astro-cid-zeaupek4><div class="logo" data-astro-cid-zeaupek4><img class="logo-image lazyload"${addAttribute(item.logo.sourceUrl, "src")} width="153" height="47"${addAttribute(item.logo.altText, "alt")} data-astro-cid-zeaupek4></div></li>`;
  })}</ul></div></div></div></div>`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/components/TwoGridSlider/TwoGridSlider.astro", void 0);

const $$Astro = createAstro();
const $$HomepageIntegrate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomepageIntegrate;
  const response = await fetch("https://dev-clear-astro-wp.pantheonsite.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
	  	query NewQuery($id: ID = "7") {
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
						... on Page_Astropagecontent_AstroBlades_LargeSliderBlade {
							bladeCssId
							fieldGroupName
							bladeExtraClasses
							slideItems {
								slideLogo {
									altText
									sourceUrl
								}
								slideHeadline
								slideCtaText
								slideCtaUrl
								slideBackgroundImage {
									sourceUrl
								}
								slideBackgroundVideoUrl
								slideBackgroundVideoType
							}
						}
						... on Page_Astropagecontent_AstroBlades_ContentWithThreeColumnGridSubcontentBlade {
							bladeCssId
							fieldGroupName
							bladeExtraClasses
							description
							eyebrow
							headline
							headlineTag
							headlineTypography
							contentItems {
								image {
									altText
									sourceUrl
								}
								headline
								headlineTag
								headlineTypography
								description
								linkUrl
							}
						}
						... on Page_Astropagecontent_AstroBlades_TwoColumnAccordionBlade {
							fieldGroupName
							bladeCssId
							bladeExtraClasses
							headline
							headlineTag
							headlineTypography
							contentItems {
								panelTitle
								panelImage {
									altText
									sourceUrl
								}
								panelHeadline
								panelContent
								ctaText
								ctaUrl
								ctaStyle
								ctaTarget
								ctaLightboxVideoUrl
							}
						}
						... on Page_Astropagecontent_AstroBlades_TestimonialsBlade {
							bladeCssId
							fieldGroupName
						}
						... on Page_Astropagecontent_AstroBlades_InsightsBlade {
							fieldGroupName
          					headline
							headlineTag
							headlineTypography
							description
							ctaUrl
							ctaText
							ctaTarget
							ctaStyle
							ctaLightboxVideoUrl
							featuredInGroup {
								headline
								headlineTag
								headlineTypography
								featuredInLogos {
									logo {
										altText
										sourceUrl
									}
								}
							}
							cards {
								ctaUrl
								cardHeadline
								cardDescription
								cardBackground {
									sourceUrl
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
    "Page_Astropagecontent_AstroBlades_LargeSliderBlade": {
      component: $$ImageTwoBlock,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_ContentWithThreeColumnGridSubcontentBlade": {
      component: $$ContentWithGrid,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_TwoColumnAccordionBlade": {
      component: $$TabsWithContent,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_TestimonialsBlade": {
      component: $$SliderWithContent,
      fields: ``
    },
    "Page_Astropagecontent_AstroBlades_InsightsBlade": {
      component: $$TwoGridSlider,
      fields: ``
    }
    // Add more layout types as needed
  };
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "", "metadescription": "", "ogimage": "" }, { "default": ($$result2) => renderTemplate`${astroBlades.map((blade) => {
    const layout = blade.fieldGroupName;
    const Component = componentMapping[layout].component;
    return renderTemplate`${renderComponent($$result2, "Component", Component, { ...blade })}`;
  })}` })}`;
}, "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/homepage-integrate.astro", void 0);

const $$file = "/Users/chander/Sites/cleardigital-wp-astro/src/pages/set-1/homepage-integrate.astro";
const $$url = "/set-1/homepage-integrate";

const homepageIntegrate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HomepageIntegrate,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$TabsWithContent as $, $$TwoGridSlider as a, homepageIntegrate as h };
