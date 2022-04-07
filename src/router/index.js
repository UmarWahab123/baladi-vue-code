import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Index.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('@/views/category/Index.vue'),
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/views/carts/Index.vue'),
  },
  {
    name: 'wishlist',
    path: '/wishlist',
    component: () => import('@/views/wishlist/Index.vue'),
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: () => import('@/views/checkout/Index.vue'),
  },
  {
    name: 'order-confirmation',
    path: '/order-confirmation',
    component: () => import('@/views/checkout/Orderconfirmation.vue'),
  },
  {
    name: 'order-tracking',
    path: '/order-tracking',
    component: () => import('@/views/tracking/Index.vue'),
  },
  {
    name: 'aboutus',
    path: '/aboutus',
    component: () => import('@/views/aboutus/Index.vue'),
  },
  {
    name: 'contact-us',
    path: '/contact-us',
    component: () => import('@/views/contactus/Index.vue'),
  },
  {
    name: 'privacy-policy',
    path: '/privacy-policy',
    component: () => import('@/views/privacy/Index.vue'),
  },
  {
    name: 'refund-returns',
    path: '/refund-returns',
    component: () => import('@/views/refund/Index.vue'),
  },
  {
    name: 'privacy-policy',
    path: '/privacy-policy',
    component: () => import('@/views/privacy/Index.vue'),
  },
  {
    name: 'myaccount',
    path: '/myaccount',
    component: () => import('@/views/auth/Index.vue'),
  },
  {
    name: 'forgot-password',
    path: '/forgot-password',
    component: () => import('@/views/auth/Forgotpassword.vue'),
  },
  {
    name: 'faq',
    path: '/faq',
    component: () => import('@/views/faq/Index.vue'),
  },
  {
    name: 'userdashboard',
    path: '/userdashboard',
    component: () => import('@/views/dashboard/Index.vue'),
  },
  {
    name: 'shipping',
    path: '/shipping',
    component: () => import('@/views/dashboard/Shipping.vue'),
  },
  {
    name: 'orders',
    path: '/orders',
    component: () => import('@/views/dashboard/Orders.vue'),
  },
  {
    name: 'order-detail',
    path: '/order-detail',
    component: () => import('@/views/dashboard/OrderDetail.vue'),
  },
  {
    name: 'product-detail',
    path: '/product-detail',
    component: () => import('@/views/category/Productdetail.vue'),
  },
  {
    name: 'account',
    path: '/account',
    component: () => import('@/views/dashboard/Account.vue'),
  },
  {
    name: 'my-wallet',
    path: '/my-wallet',
    component: () => import('@/views/dashboard/Wallet.vue'),
  },
  {
    name: 'voucher',
    path: '/voucher',
    component: () => import('@/views/dashboard/Voucher.vue'),
  },
  {
    name: 'reward-points',
    path: '/reward-points',
    component: () => import('@/views/dashboard/Rewardpoints.vue'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    name: 'Blank',
    path: '/blank',
    component: () => import('@/views/Blank.vue'),
  },
  {
    name: 'Blog',
    path: '/blog',
    component: () => import('@/views/blog/index.vue'),
  },
  {
    name: 'blog-detail',
    path: '/blog-detail',
    component: () => import('@/views/blog/blog-detail.vue'),
  },
  {
    name: 'terms',
    path: '/terms',
    component: () => import('@/views/Terms.vue'),
  },
  {
    name: 'helpcenter',
    path: '/helpcenter',
    component: () => import('@/views/helpcenter/index.vue'),
  },
  {
    name: 'replacement',
    path: '/replacement',
    component: () => import('@/views/helpcenter/replacement.vue'),
  },
  {
    name: 'privacypolicy',
    path: '/privacypolicy',
    component: () => import('@/views/helpcenter/privacypolicy.vue'),
  },
  {
    name: 'shoppingrates',
    path: '/shoppingrates',
    component: () => import('@/views/helpcenter/shoppingrates.vue'),
  },
  {
    name: 'termscondition',
    path: '/termscondition',
    component: () => import('@/views/helpcenter/terms.vue'),
  },
  {
    name: 'covidhelp',
    path: '/covidhelp',
    component: () => import('@/views/helpcenter/covid.vue'),
  },
  {
    name: 'refund',
    path: '/refund',
    component: () => import('@/views/helpcenter/refund.vue'),
  },
  {
    name: 'covid-19',
    path: '/covid-19',
    component: () => import('@/views/covid/index.vue'),
  },
   {
    name: 'review',
    path: '/review',
    component: () => import('@/views/review/index.vue'),
  },
   {
    name: 'all_categories',
    path: '/all_categories',
    component: () => import('@/views/category/all_categories.vue'),
  },
  {
    name: 'brands',
    path: '/brands',
    component: () => import('@/views/category/brands.vue'),
  },
  {
    name: 'careers',
    path: '/careers',
    component: () => import('@/views/careers/index.vue'),
  },
   {
    name: 'thankyou',
    path: '/thankyou',
    component: () => import('@/views/thankyou/thankyou.vue'),
  },
    {
    name: 'order-track2',
    path: '/order-track2',
    component: () => import('@/views/tracking/order-track2.vue'),
  },
      {
    name: 'testpost',
    path: '/testpost',
    component: () => import('@/views/home/postrequestapi.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
