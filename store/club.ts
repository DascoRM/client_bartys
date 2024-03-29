import { Action, Mutation, VuexModule, Module } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { MetaResponse } from './DTO/dtoComponent'

export interface ResponseClub {
  data: ClubResponse[]
  meta?: MetaResponse
}
export interface ClubResponse {
  attributes: Club
  id: number
}
export interface Club {
  title: string
  hours_opening: string
  position: Position
  adress: string
  categories: string[]
  social_network: string[]
}
export interface Position {
  lat: number
  long: number
}
@Module({ namespaced: true, name: 'club' })
export default class ClubModule extends VuexModule {
  club = {} as ClubResponse
  clubs: ClubResponse[] = []

  @Mutation
  saveAll(clubs: ClubResponse[]) {
    this.clubs = clubs
  }
  @Mutation
  saveOne(club: ClubResponse) {
    this.club = {...this.club, ...club}
  }
  @Mutation
  clearClub() {
    this.club = {} as ClubResponse
  }

  //Todo change limite=-1
  // Create an algo for check position screen (on a map (lat and long)) and check bar and club they have a same position (dans les disaine)
 /**
  * @exemple
  * find lat and log chambéry
  * lat 45.5666667
  * long 5.916666666666667
  * 
  * Check bars and club they hare a same possition
  * lat: 45.56
  * long: 5.91
  */
  @Action({ commit: 'saveAll'})
  async fetchAll():Promise<ResponseClub> {
    const { data } = await $axios.get('/clubs?pagination[limit]=-1')
    return data.data
  }

  @Action({ commit: 'saveOne' })
  async fetchOne(id: string):Promise<ResponseClub> {
    const { data } = await $axios.get(`/clubs/${id}`)
    return data.data
  }

}