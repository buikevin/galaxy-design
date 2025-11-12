import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      component: () => import('@/views/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/dashboard/HomeView.vue'),
        },
        {
          path: 'forms',
          name: 'Forms',
          component: () => import('@/views/dashboard/FormsView.vue'),
        },
        {
          path: 'data',
          name: 'Data',
          component: () => import('@/views/dashboard/DataView.vue'),
        },
        {
          path: 'feedback',
          name: 'Feedback',
          component: () => import('@/views/dashboard/FeedbackView.vue'),
        },
        {
          path: 'navigation',
          name: 'Navigation',
          component: () => import('@/views/dashboard/NavigationView.vue'),
        },
        {
          path: 'layout',
          name: 'Layout',
          component: () => import('@/views/dashboard/LayoutView.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const { isLoggedIn } = useAuth();

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    next('/login');
  } else if (to.meta.requiresGuest && isLoggedIn.value) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
