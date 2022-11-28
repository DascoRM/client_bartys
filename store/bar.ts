import { Action, Mutation, VuexModule, Module } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { MetaResponse } from './DTO/dtoComponent'

export interface ResponseBar {
  data: BarResponse[]
  meta?: MetaResponse
}
export interface BarResponse {
  attributes: Bar
  id: number | null
}
export interface Bar {
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
@Module({ namespaced: true, name: 'bar', stateFactory: true})
export default class BarModule extends VuexModule {
  bar = {} as BarResponse
  bars: BarResponse[] = []

  @Mutation
  saveAll(bars: BarResponse[]) {
    this.bars = bars
  }
  @Mutation
  saveOne(bar: BarResponse) {
    this.bar = { ...this.bar, ...bar }
  }
  @Mutation
  clearBar() {
    this.bar = {} as BarResponse
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
  async fetchAll():Promise<BarResponse> {
    const { data } = await $axios.get('/bars?pagination[limit]=-1')
    data.data.map((item: any) => {
    })
    return data.data
  }

  @Action({ commit: 'saveOne' })
  async fetchOne(id: string):Promise<BarResponse> {
    const { data } = await $axios.get(`/bars/${id}`)
    return data.data
  }

}