export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/clients_9022010e.mjs').then(n => n.c);

export { page };
