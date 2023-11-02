export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/homepage_e10a337d.mjs').then(n => n.h);

export { page };
