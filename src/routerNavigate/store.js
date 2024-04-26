
export function registerStore(store, options){
    store.registerModule(options.storeModuleName, {
        namespaced: true,
        state:{
            keepRouter:[]
        },
        getters:{
            keepRouter:(state)=>state.keepRouter
        },
        mutations:{
            setKeepRouter(state, name){
                const hasIndex = state.keepRouter.findIndex(item=>item===name)
                if(hasIndex===-1){
                    state.keepRouter.push(name)
                    options.log && console.log("新增", name, state.keepRouter);
                }
            },
            delKeepRouter(state, name){
                const hasIndex = state.keepRouter.findIndex(item=>item===name)
                if(hasIndex>-1){
                    state.keepRouter.splice(hasIndex, 1)
                    options.log && console.log("删除", name, state.keepRouter);
                }
            },
            clearKeepRouter(state){
                state.keepRouter=[]
                options.log && console.log("清空", state.keepRouter);
            }
        },
    
        actions:{
            setKeepRouter({commit}, name){
                commit('setKeepRouter', name)
            },
    
            delKeepRouter({commit}, name){
                commit('delKeepRouter', name)
            },
    
            clearKeepRouter({commit}){
                commit('clearKeepRouter', [])
            }
        }
    })
}