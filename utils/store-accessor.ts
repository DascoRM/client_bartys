import { Store } from 'vuex'
import { getModule, config } from 'vuex-module-decorators'
import UserModule from '~/store/userModule'

// Set rawError to true by default on all @Action decorators
config.rawError = true

let userModule!: UserModule

function initialiseStores(store: Store<any>): void {
  userModule = getModule(UserModule, store)
}

export { 
  initialiseStores, 
  userModule
}