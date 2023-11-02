import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0b99be9b.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_fb3c1bda.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_48a23d4c.mjs');
const _page1  = () => import('./chunks/index_b390253b.mjs');
const _page2  = () => import('./chunks/banner-blade_7d917cc6.mjs');
const _page3  = () => import('./chunks/vector-logo_b2735bdf.mjs');
const _page4  = () => import('./chunks/homepage_26b64ffe.mjs');
const _page5  = () => import('./chunks/graphql_9ea0da49.mjs');
const _page6  = () => import('./chunks/rest_b34359e2.mjs');
const _page7  = () => import('./chunks/index_89b83010.mjs');
const _page8  = () => import('./chunks/homepage-integrate_65b7caa9.mjs');
const _page9  = () => import('./chunks/homepage_c2881044.mjs');
const _page10  = () => import('./chunks/index_6b04c9b9.mjs');
const _page11  = () => import('./chunks/services-overview-integrate_ed857acd.mjs');
const _page12  = () => import('./chunks/services-overview_6c3449fd.mjs');
const _page13  = () => import('./chunks/services-detail_7bf6df51.mjs');
const _page14  = () => import('./chunks/work_01fe255d.mjs');
const _page15  = () => import('./chunks/index_27d62106.mjs');
const _page16  = () => import('./chunks/case-studies-overview_ffffa0a2.mjs');
const _page17  = () => import('./chunks/case-studies-detail_c9feccb0.mjs');
const _page18  = () => import('./chunks/clients_ec1d87f0.mjs');
const _page19  = () => import('./chunks/index_67af8331.mjs');
const _page20  = () => import('./chunks/index_31da877d.mjs');
const _page21  = () => import('./chunks/index_cae64969.mjs');
const _page22  = () => import('./chunks/index_e73ddcaa.mjs');
const _page23  = () => import('./chunks/index_339cf46e.mjs');
const _page24  = () => import('./chunks/index_50d9321f.mjs');
const _page25  = () => import('./chunks/index_59a32f44.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/000testing/banner-blade.astro", _page2],["src/pages/000testing/vector-logo.astro", _page3],["src/pages/000testing/homepage.astro", _page4],["src/pages/000testing/graphql.astro", _page5],["src/pages/000testing/rest.astro", _page6],["src/pages/set-1/index.astro", _page7],["src/pages/set-1/homepage-integrate.astro", _page8],["src/pages/set-1/homepage.astro", _page9],["src/pages/set-2/index.astro", _page10],["src/pages/set-2/services-overview-integrate.astro", _page11],["src/pages/set-2/services-overview.astro", _page12],["src/pages/set-2/services-detail.astro", _page13],["src/pages/set-2/work.astro", _page14],["src/pages/set-3/index.astro", _page15],["src/pages/set-3/case-studies-overview.astro", _page16],["src/pages/set-3/case-studies-detail.astro", _page17],["src/pages/set-3/clients.astro", _page18],["src/pages/set-4/index.astro", _page19],["src/pages/set-5/index.astro", _page20],["src/pages/set-6/index.astro", _page21],["src/pages/set-7/index.astro", _page22],["src/pages/set-8/index.astro", _page23],["src/pages/set-9/index.astro", _page24],["src/pages/ui/index.astro", _page25]]);
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
