import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/test-menu1'
        },
        {
            name:'TestMenu1',
            path:'/test-menu1',
            component:()=>import('./view/menu1.vue'),
        },
        {
            name:'TestMenu2',
            path:'/test-menu2',
            component:()=>import('./view/menu2.vue')
        },
        {
            name:'TestSub1',
            path:'/test-sub1',
            component:()=>import('./view/sub1.vue')
        },
        {
            name:'TestSub2',
            path:'/test-sub2',
            component:()=>import('./view/sub2.vue')
        },
    ]
})


export default router;