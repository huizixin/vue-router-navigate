import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter)

let router;

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