import {registerRouter} from './router.js'
import {registerStore} from './store.js'


/**
 * @description 挂载RouterNavigate
 * @param router router 实例
 * @param store store 实例
 */
export function setupVueRouterNavigate(router, store, options={storeModuleName:'vueRouterNavigate', log: true}){
    registerRouter(router, store, options)
    registerStore(store, options)
}