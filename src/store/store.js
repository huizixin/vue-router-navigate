import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        keepArr:[]
    },
    getters:{
        keepArr:(state)=>state.keepArr
    },
    mutations:{
        setKeepArr(state, name){
            const hasIndex = state.keepArr.findIndex(item=>item===name)
            if(hasIndex===-1){
                state.keepArr.push(name)
                console.log("新增", name, state.keepArr);
            }
        },
        delKeepArr(state, name){
            const hasIndex = state.keepArr.findIndex(item=>item===name)
            if(hasIndex>-1){
                state.keepArr.splice(hasIndex, 1)
                console.log("删除", name, state.keepArr);
            }
        },
        clearKeepArr(state){
            state.keepArr=[]
            console.log("清空", state.keepArr);
        }
    },

    actions:{
        setKeepArr({commit}, name){
            commit('setKeepArr', name)
        },

        delKeepArr({commit}, name){
            commit('delKeepArr', name)
        },

        clearKeepArr({commit}){
            commit('clearKeepArr', [])
        }
    }
})