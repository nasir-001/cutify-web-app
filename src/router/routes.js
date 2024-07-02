const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: '/contact',
        component: () => import('pages/ContactPage.vue'),
        name: 'contact'
      },
      {
        path: '/blog',
        component: () => import('pages/BlogPage.vue'),
        name: 'blog'
      },
      {
        path: '/signin',
        component: () => import('pages/auth/SignIn.vue'),
        name: 'signin'
      },
      {
        path: '/signup',
        component: () => import('pages/auth/SignUp.vue'),
        name: 'signup'
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
