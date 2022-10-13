import { createStore } from 'vuex'
import {loginModule} from './login'

export const store = createStore({
    modules:{
        login:loginModule
    }
  })