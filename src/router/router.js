const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')


export default  [{
        path: '/home',
        component: home
    }]