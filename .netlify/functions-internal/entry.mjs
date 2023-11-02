import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_f8b74ed0.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_fb3c1bda.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_a08b2e2a.mjs');
const _page1  = () => import('./chunks/index_591c6bca.mjs');
const _page2  = () => import('./chunks/banner-blade_0256154a.mjs');
const _page3  = () => import('./chunks/vector-logo_4dd61232.mjs');
const _page4  = () => import('./chunks/homepage_b5450c36.mjs');
const _page5  = () => import('./chunks/graphql_2705e517.mjs');
const _page6  = () => import('./chunks/rest_b34359e2.mjs');
const _page7  = () => import('./chunks/index_16b437c0.mjs');
const _page8  = () => import('./chunks/homepage-integrate_ef24f640.mjs');
const _page9  = () => import('./chunks/homepage_94be6072.mjs');
const _page10  = () => import('./chunks/index_7eaedf92.mjs');
const _page11  = () => import('./chunks/services-overview-integrate_a3cc5eaf.mjs');
const _page12  = () => import('./chunks/services-overview_832626c3.mjs');
const _page13  = () => import('./chunks/services-detail_c4d71d1a.mjs');
const _page14  = () => import('./chunks/work_ad893371.mjs');
const _page15  = () => import('./chunks/index_ee1a7de5.mjs');
const _page16  = () => import('./chunks/case-studies-overview_5580b1d2.mjs');
const _page17  = () => import('./chunks/case-studies-detail_e6e1810f.mjs');
const _page18  = () => import('./chunks/clients_feabf363.mjs');
const _page19  = () => import('./chunks/index_71f867d0.mjs');
const _page20  = () => import('./chunks/index_49a87999.mjs');
const _page21  = () => import('./chunks/index_ce9de4ef.mjs');
const _page22  = () => import('./chunks/index_5a361628.mjs');
const _page23  = () => import('./chunks/index_1ffb6007.mjs');
const _page24  = () => import('./chunks/index_a13ede46.mjs');
const _page25  = () => import('./chunks/index_0e3c8242.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/000testing/banner-blade.astro", _page2],["src/pages/000testing/vector-logo.astro", _page3],["src/pages/000testing/homepage.astro", _page4],["src/pages/000testing/graphql.astro", _page5],["src/pages/000testing/rest.astro", _page6],["src/pages/set-1/index.astro", _page7],["src/pages/set-1/homepage-integrate.astro", _page8],["src/pages/set-1/homepage.astro", _page9],["src/pages/set-2/index.astro", _page10],["src/pages/set-2/services-overview-integrate.astro", _page11],["src/pages/set-2/services-overview.astro", _page12],["src/pages/set-2/services-detail.astro", _page13],["src/pages/set-2/work.astro", _page14],["src/pages/set-3/index.astro", _page15],["src/pages/set-3/case-studies-overview.astro", _page16],["src/pages/set-3/case-studies-detail.astro", _page17],["src/pages/set-3/clients.astro", _page18],["src/pages/set-4/index.astro", _page19],["src/pages/set-5/index.astro", _page20],["src/pages/set-6/index.astro", _page21],["src/pages/set-7/index.astro", _page22],["src/pages/set-8/index.astro", _page23],["src/pages/set-9/index.astro", _page24],["src/pages/ui/index.astro", _page25]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
