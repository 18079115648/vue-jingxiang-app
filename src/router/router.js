const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')
const search = r => require.ensure([], () => r(require('../components/search.vue')), 'search')
const searchResult = r => require.ensure([], () => r(require('../components/searchResult.vue')), 'searchResult')
const productList = r => require.ensure([], () => r(require('../components/productList.vue')), 'productList')
const cart = r => require.ensure([], () => r(require('../components/cart.vue')), 'cart')
const orderSubmit = r => require.ensure([], () => r(require('../components/orderSubmit.vue')), 'orderSubmit')
const demandSubmit = r => require.ensure([], () => r(require('../components/demandSubmit.vue')), 'demandSubmit')
const user = r => require.ensure([], () => r(require('../components/user.vue')), 'user')
const userInfo = r => require.ensure([], () => r(require('../components/userInfo.vue')), 'userInfo')
const nickName = r => require.ensure([], () => r(require('../components/nickName.vue')), 'nickName')
const bindMemberCard = r => require.ensure([], () => r(require('../components/bindMemberCard.vue')), 'bindMemberCard')
const identyAouth = r => require.ensure([], () => r(require('../components/identyAouth.vue')), 'identyAouth')
const openMember = r => require.ensure([], () => r(require('../components/openMember.vue')), 'openMember')
const myBalance = r => require.ensure([], () => r(require('../components/myBalance.vue')), 'myBalance')
const myIntergal = r => require.ensure([], () => r(require('../components/myIntergal.vue')), 'myIntergal')
const recharge = r => require.ensure([], () => r(require('../components/recharge.vue')), 'recharge')
const allOrders = r => require.ensure([], () => r(require('../components/allOrders.vue')), 'allOrders')
const orderDetail = r => require.ensure([], () => r(require('../components/orderDetail.vue')), 'orderDetail')
const evaluate = r => require.ensure([], () => r(require('../components/evaluate.vue')), 'evaluate')
const addressList = r => require.ensure([], () => r(require('../components/addressList.vue')), 'addressList')
const addressDetail = r => require.ensure([], () => r(require('../components/addressDetail.vue')), 'addressDetail')




const article = r => require.ensure([], () => r(require('../components/article.vue')), 'article')
const classification = r => require.ensure([], () => r(require('../components/classification.vue')), 'classification')
const information = r => require.ensure([], () => r(require('../components/information.vue')), 'information')
const shopdetails = r => require.ensure([], () => r(require('../components/shopdetails.vue')), 'shopdetails')
const reviewList = r => require.ensure([], () => r(require('../components/reviewList.vue')), 'reviewList')


const health = r => require.ensure([], () => r(require('../components/health.vue')), 'health')



export default  [{ 
    	path: '/',
    	redirect: '/home'
    },{
        path: '/home',
        component: home
    },{
        path: '/search',
        component: search
    },{
        path: '/searchResult',
        component: searchResult
    },{
        path: '/productList/:id',
        component: productList
    },{
        path: '/cart',
        component: cart
    },{
        path: '/orderSubmit',
        component: orderSubmit
    },{
        path: '/demandSubmit',
        component: demandSubmit
    },{
        path: '/user',
        component: user
    },{
        path: '/userInfo',
        component: userInfo
    },{
        path: '/nickName',
        component: nickName
    },{
        path: '/bindMemberCard',
        component: bindMemberCard
    },{
        path: '/identyAouth',
        component: identyAouth
    },{
        path: '/openMember',
        component: openMember
    },{
        path: '/article',
        component: article
    },{
        path: '/classification',
        component: classification
    },{
        path: '/information',
        component: information
    },{
        path: '/shopdetails/:id/:type',
        component: shopdetails
    },{
        path: '/myBalance',
        component: myBalance
    },{
        path: '/myIntergal',
        component: myIntergal
    },{
        path: '/recharge',
        component: recharge
    },{
        path: '/allOrders',
        component: allOrders
    },{
        path: '/orderDetail',
        component: orderDetail
    },{
        path: '/evaluate',
        component: evaluate
    },{
        path: '/addressList',
        component: addressList
    },{
        path: '/addressDetail',
        component: addressDetail
	},{
        path: '/reviewList',
        component: reviewList
    },{
        path: '/health',
        component: health
    }]