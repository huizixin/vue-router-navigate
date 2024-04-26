


export function registerRouter(router, store, options){
    let jumpType=''
    router.beforeEach((to, from, next) => {
        switch(jumpType){
            case 'navigateTo':
                break;
            case 'redirectTo':
                // 删除跳转方
                store.dispatch(options.storeModuleName + '/delKeepRouter', from.name)
                break;
            case 'reLaunch':
                store.dispatch(options.storeModuleName + '/clearKeepRouter')
                break;
            case 'navigateBack':
                // 删除跳转方
                store.dispatch(options.storeModuleName + '/delKeepRouter', from.name)
                break;
            default:
                break;
        }
    
        next()
    })
    
    router.afterEach((to) => {
        store.dispatch(options.storeModuleName + '/setKeepRouter', to.name)
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
}
