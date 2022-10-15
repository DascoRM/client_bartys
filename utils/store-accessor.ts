import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import BarModule from '~/store/bar'
import ActivitiesModule from '~/store/activitie'
import ClubModule from '~/store/club'
import AuthetificationModule from '~/store/authentification'

// Set rawError to true by default on all @Action decorators
// config.rawError = true

let barModule!: BarModule
let clubModule: ClubModule
let activitieModule: ActivitiesModule
let authentificationModule: AuthetificationModule

function initialiseStores(store: Store<any>): void {
  barModule = getModule(BarModule, store)
  clubModule = getModule(ClubModule, store)
  activitieModule = getModule(ActivitiesModule, store)
  authentificationModule = getModule(AuthetificationModule, store)
}

export { 
  initialiseStores, 
  barModule, 
  clubModule, 
  activitieModule,
  authentificationModule
}