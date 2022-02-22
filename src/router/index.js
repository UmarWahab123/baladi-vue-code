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
