import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index.js";
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
            redirect:'/test-menu1/test-menu1-sub1',
            children:[
                {
                    name:'TestMenu1',
                    path:'/test-menu1/test-menu1-sub1',
                    component:()=>import('./view/menu1.vue'),  
                    redirect: '/test-menu1/test-menu1-sub1/test-menu1-sub1-sub1',
                    children:[
                        {
                            name:'TestMenu1',
                            path:'/test-menu1/test-menu1-sub1/test-menu1-sub1-sub1',
                            component:()=>import('./view/menu1.vue'),  
                        }
                    ]
                }
            ]
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


let jumpType=''

router.beforeEach((to, from, next) => {
    switch(jumpType){
        case 'navigateTo':
            break;
        case 'redirectTo':
            // 删除跳转方
            store.dispatch('delKeepArr', from.name)
            break;
        case 'reLaunch':
            store.dispatch('clearKeepArr')
            break;
        case 'navigateBack':
            // 删除跳转方
            store.dispatch('delKeepArr', from.name)
            break;
        default:
            break;
    }

    next()
})

router.afterEach((to) => {
    store.dispatch('setKeepArr', to.name)
})


// 保留当前页面，跳转到应用内的某个页面
router.navigateTo = (...args)=>{
    jumpType="navigateTo"
    router.push(...args)
}

// 关闭当前页面，跳转到应用内的某个页面。
router.redirectTo = (...args)=>{
    jumpType="redirectTo"
    router.push(...args)
}

// 关闭所有页面，打开到应用内的某个页面。
router.reLaunch = (...args)=>{
    jumpType="reLaunch"
    router.push(...args)
}

router.navigateBack = ()=>{
    jumpType="navigateBack"
    router.back()
}


export default router;