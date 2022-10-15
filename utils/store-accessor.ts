import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import BarModule from '~/store/bar'
import ActivitiesModule from '~/store/activitie'
import ClubModule from '~/store/club'
import AuthetificationModule from '~/store/authentification'
import UserModule from '~/store/userModule'

// Set rawError to true by default on all @Action decorators
// config.rawError = true

let barModule!: BarModule
let clubModule: ClubModule
let activitieModule: ActivitiesModule
let authentificationModule: AuthetificationModule
let userModule: UserModule

function initialiseStores(store: Store<any>): void {
  barModule = getModule(BarModule, store)
  clubModule = getModule(ClubModule, store)
  activitieModule = getModule(ActivitiesModule, store)
  authentificationModule = getModule(AuthetificationModule, store)
  userModule = getModule(UserModule, store)
}

export { 
  initialiseStores, 
  barModule, 
  clubModule, 
  activitieModule,
  authentificationModule,
  userModule
}