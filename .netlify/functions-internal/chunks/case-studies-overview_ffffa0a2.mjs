export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/case-studies-overview_e06776ba.mjs').then(n => n.c);

export { page };
