import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Index.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'category',
		path: '/category',
		component: () => import('@/views/category/Index.vue')
	},
	{
		name: 'cart',
		path: '/cart',
		component: () => import('@/views/carts/Index.vue')
	},
	{
		name: 'wishlist',
		path: '/wishlist',
		component: () => import('@/views/wishlist/Index.vue')
	},
	{
		name: 'checkout',
		path: '/checkout',
		component: () => import('@/views/checkout/Index.vue')
	},
	{
		name: 'order-confirmation',
		path: '/order-confirmation',
		component: () => import('@/views/checkout/Orderconfirmation.vue')
	},
	{
		name: 'order-tracking',
		path: '/order-tracking',
		component: () => import('@/views/tracking/Index.vue')
	},
	{
		name: 'aboutus',
		path: '/aboutus',
		component: () => import('@/views/aboutus/Index.vue')
	},
	{
		name: 'contact-us',
		path: '/contact-us',
		component: () => import('@/views/contactus/Index.vue')
	},
	{
		name: 'privacy-policy',
		path: '/privacy-policy',
		component: () => import('@/views/privacy/Index.vue')
	},
	{
		name: 'refund-returns',
		path: '/refund-returns',
		component: () => import('@/views/refund/Index.vue')
	},
	{
		name: 'privacy-policy',
		path: '/privacy-policy',
		component: () => import('@/views/privacy/Index.vue')
	},
	{
		name: 'myaccount',
		path: '/myaccount',
		component: () => import('@/views/auth/Index.vue')
	},
	{
		name: 'forgot-password',
		path: '/forgot-password',
		component: () => import('@/views/auth/Forgotpassword.vue')
	},
	{
		name: 'faq',
		path: '/faq',
		component: () => import('@/views/faq/Index.vue')
	},
	{
		name: 'userdashboard',
		path: '/userdashboard',
		component: () => import('@/views/dashboard/Index.vue')
	},
	{
		name: 'shipping',
		path: '/shipping',
		component: () => import('@/views/dashboard/Shipping.vue')
	},
	{
		name: 'orders',
		path: '/orders',
		component: () => import('@/views/dashboard/Orders.vue')
	},
	{
		name: 'order-detail',
		path: '/order-detail',
		component: () => import('@/views/dashboard/OrderDetail.vue')
	},
	{
		name: 'account',
		path: '/account',
		component: () => import('@/views/dashboard/Account.vue')
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
