export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/homepage-integrate_8d372221.mjs').then(n => n.h);

export { page };
