import { compileTemplate } from "@vue/compiler-sfc"

export const loginModule = {
    state () {
        return {
          count: 0
        }
      },
      actions:{
        updateLoginAction({commit}, payload){
            commit('updateLogin',payload)
        }
      },
      mutations: {
        updateLogin (state,payload) {
          state.username = payload
        }
      }
}