const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')
const search = r => require.ensure([], () => r(require('../components/search.vue')), 'search')
const searchResult = r => require.ensure([], () => r(require('../components/searchResult.vue')), 'searchResult')
const productList = r => require.ensure([], () => r(require('../components/productList.vue')), 'productList')
const cart = r => require.ensure([], () => r(require('../components/cart.vue')), 'cart')


export default  [{
        path: '/home',
        component: home
    },{
        path: '/search',
        component: search
    },{
        path: '/searchResult',
        component: searchResult
    },{
        path: '/productList',
        component: productList
    },{
        path: '/cart',
        component: cart
    }]