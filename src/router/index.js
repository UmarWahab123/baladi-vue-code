import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Index.vue";
var url = window.location.href;
var params = url.split("/")[3];
var main_url = document.location.href;
let text = document.location.pathname.split("/");
var langCode = localStorage.getItem("lang");
var url = main_url.replace(text[1], langCode);
if (langCode != null) {
    if (langCode !== params) {
        location.href = url;
    }
} else {
    langCode = "en";
}
// var params = url.split("/")[3];
// var params = localStorage.getItem("lang");
const routes = [{
        name: "Home",
        path: "/" + langCode,
        // path: "/",
        component: Home,
        // component: () =>
        // import ("@/views/category/Index.vue"),
    },
    {
        name: "category",
        path: "/" + langCode + "/category/:id?",
        component: () =>
            import ("@/views/category/Index.vue"),
    },
    {
        name: "cart",
        path: "/" + langCode + "/cart",
        component: () =>
            import ("@/views/carts/Index.vue"),
    },
    {
        name: "wishlist",
        path: "/" + langCode + "/wishlist",
        component: () =>
            import ("@/views/wishlist/Index.vue"),
    },
    {
        name: "customerwishlist",
        path: "/" + langCode + "/customerwishlist",
        component: () =>
            import ("@/views/dashboard/Wishlist.vue"),
    },
    {
        name: "checkout",
        path: "/" + langCode + "/checkout",
        component: () =>
            import ("@/views/checkout/Index.vue"),
    },
    {
        name: "order-confirmation",
        path: "/" + langCode + "/order-confirmation/:id?",
        component: () =>
            import ("@/views/checkout/Orderconfirmation.vue"),
    },
    {
        name: "order-tracking",
        path: "/" + langCode + "/order-tracking",
        component: () =>
            import ("@/views/tracking/Index.vue"),
    },
    {
        name: "aboutus",
        path: "/" + langCode + "/aboutus",
        component: () =>
            import ("@/views/aboutus/Index.vue"),
    },
    {
        name: "contact-us",
        path: "/" + langCode + "/contact-us",
        component: () =>
            import ("@/views/contactus/Index.vue"),
    },
    {
        name: "privacy-policy",
        path: "/" + langCode + "/privacy-policy",
        component: () =>
            import ("@/views/privacy/Index.vue"),
    },
    {
        name: "refund-returns",
        path: "/" + langCode + "/refund-returns",
        component: () =>
            import ("@/views/refund/Index.vue"),
    },
    {
        name: "privacy-policy",
        path: "/" + langCode + "/privacy-policy",
        component: () =>
            import ("@/views/privacy/Index.vue"),
    },
    {
        name: "myaccount",
        path: "/" + langCode + "/myaccount",
        component: () =>
            import ("@/views/auth/Index.vue"),
    },
    {
        name: "forgot-password",
        path: "/" + langCode + "/forgot-password",
        component: () =>
            import ("@/views/auth/Forgotpassword.vue"),
    },
    {
        name: "verifycode",
        path: "/" + langCode + "/verifycode",
        component: () =>
            import ("@/views/auth/Verifycode.vue"),
    },
    {
        name: "updatepassword",
        path: "/" + langCode + "/updatepassword",
        component: () =>
            import ("@/views/auth/Updatepassword.vue"),
    },
    {
        name: "faq",
        path: "/" + langCode + "/faq",
        component: () =>
            import ("@/views/faq/Index.vue"),
    },
    {
        name: "userdashboard",
        path: "/" + langCode + "/userdashboard",
        component: () =>
            import ("@/views/dashboard/Index.vue"),
    },
    {
        name: "edit-address",
        path: "/" + langCode + "/edit-address",
        component: () =>
            import ("@/views/dashboard/Address.vue"),
    },
    {
        name: "shipping",
        path: "/" + langCode + "/shipping/:id?",
        component: () =>
            import ("@/views/dashboard/Shipping.vue"),
    },

    {
        name: "orders",
        path: "/" + langCode + "/orders",
        component: () =>
            import ("@/views/dashboard/Orders.vue"),
    },
    {
        name: "order-detail",
        path: "/" + langCode + "/order-detail/:id?",
        component: () =>
            import ("@/views/dashboard/OrderDetail.vue"),
    },
    {
        name: "product-detail",
        path: "/" + langCode + "/product-detail/:id?",
        component: () =>
            import ("@/views/category/Productdetail.vue"),
    },
    {
        name: "account",
        path: "/" + langCode + "/account/",
        component: () =>
            import ("@/views/dashboard/Account.vue"),
    },
    {
        name: "my-wallet",
        path: "/" + langCode + "/my-wallet",
        component: () =>
            import ("@/views/dashboard/Wallet.vue"),
    },
    {
        name: "voucher",
        path: "/" + langCode + "/voucher",
        component: () =>
            import ("@/views/dashboard/Voucher.vue"),
    },
    {
        name: "reward-points",
        path: "/" + langCode + "/reward-points/",
        component: () =>
            import ("@/views/dashboard/Rewardpoints.vue"),
    },
    {
        name: "About",
        path: "/" + langCode + "/about",
        component: () =>
            import ("@/views/About.vue"),
    },
    {
        name: "Blank",
        path: "/" + langCode + "/blank",
        component: () =>
            import ("@/views/Blank.vue"),
    },
    {
        name: "Blog",
        path: "/" + langCode + "/blog",
        component: () =>
            import ("@/views/blog/index.vue"),
    },
    {
        name: "blog-detail",
        path: "/" + langCode + "/blog-detail/:id?",
        component: () =>
            import ("@/views/blog/blog-detail.vue"),
    },
    {
        name: "terms",
        path: "/" + langCode + "/terms",
        component: () =>
            import ("@/views/Terms.vue"),
    },
    {
        name: "helpcenter",
        path: "/" + langCode + "/helpcenter",
        component: () =>
            import ("@/views/helpcenter/index.vue"),
    },
    {
        name: "replacement",
        path: "/" + langCode + "/replacement",
        component: () =>
            import ("@/views/helpcenter/replacement.vue"),
    },
    {
        name: "privacypolicy",
        path: "/" + langCode + "/privacypolicy",
        component: () =>
            import ("@/views/helpcenter/privacypolicy.vue"),
    },
    {
        name: "shoppingrates",
        path: "/" + langCode + "/shoppingrates",
        component: () =>
            import ("@/views/helpcenter/shoppingrates.vue"),
    },
    {
        name: "termscondition",
        path: "/" + langCode + "/termscondition",
        component: () =>
            import ("@/views/helpcenter/terms.vue"),
    },
    {
        name: "covidhelp",
        path: "/" + langCode + "/covidhelp",
        component: () =>
            import ("@/views/helpcenter/covid.vue"),
    },
    {
        name: "refund",
        path: "/" + langCode + "/refund",
        component: () =>
            import ("@/views/helpcenter/refund.vue"),
    },
    {
        name: "covid-19",
        path: "/" + langCode + "/covid-19",
        component: () =>
            import ("@/views/covid/index.vue"),
    },
    {
        name: "all_categories",
        path: "/" + langCode + "/all_categories/:id?",
        component: () =>
            import ("@/views/category/all_categories.vue"),
    },
    {
        name: "brands",
        path: "/" + langCode + "/brands",
        component: () =>
            import ("@/views/category/brands.vue"),
    },
    {
        name: "brandsProduct",
        path: "/" + langCode + "/brandsProduct/:id?",

        component: () =>
            import ("@/views/category/brandsProduct.vue"),
    },
    {
        name: "careers",
        path: "/" + langCode + "/careers",
        component: () =>
            import ("@/views/careers/index.vue"),
    },
    {
        name: "thankyou",
        path: "/" + langCode + "/thankyou",
        component: () =>
            import ("@/views/thankyou/thankyou.vue"),
    },
    {
        name: "order-track2",
        path: "/" + langCode + "/order-track2/:id?",
        component: () =>
            import ("@/views/tracking/order-track2.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
//use this bellow function when you click on any links an scroll up the page
router.afterEach(() => {
    window.scrollTo(0, 0);
});
export default router;