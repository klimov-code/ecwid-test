import { createRouter, createWebHistory, RouteLocation } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
  },
  {
    path: '/products',
    redirect: { name: 'products' },
    props: true,
    children: [
      {
        path: ':categoryId([\\w-]+-c\\d+)?',
        name: 'products',
        component: () => import('./ProductsPage.vue'),
        props: ({ params }: RouteLocation) => {
          if (params.categoryId && typeof params.categoryId === 'string') {
            const categoryId = params.categoryId.match(/c(?<id>\d+)$/)?.groups?.id ?? '';

            return {
              categoryId,
            };
          }

          return {
            categoryId: '',
          };
        },
      },
      {
        path: ':productId([\\w-]+-p\\d+)',
        name: 'product',
        component: () => import('./ProductPage.vue'),
        props: ({ params }: RouteLocation) => {
          if (params.productId && typeof params.productId === 'string') {
            const productId = params.productId.match(/p(?<id>\d+)$/)?.groups?.id ?? '';

            return {
              productId,
            };
          }
        },
      },
    ],
  },
  { path: '/cart', name: 'cart', component: () => import('./ShoppingCartPage.vue'), props: true },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('./404Page.vue') },
];

const router = createRouter({ routes, history: createWebHistory(), strict: true });

export default router;
