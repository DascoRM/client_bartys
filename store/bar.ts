import { Action, Mutation, VuexModule, Module } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { MetaResponse } from './DTO/dtoComponent'

export interface ResponseBar {
  data: BarResponse[]
  meta?: MetaResponse
}
export interface BarResponse {
  attributes: Bar
  id: number
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
@Module({ namespaced: true, name: 'bar' })
export default class BarModule extends VuexModule {
  bar!: Bar
  bars: BarResponse[] = []

  @Mutation
  saveAll(bars: BarResponse[]) {
    this.bars = bars
  }
  @Mutation
  saveOne(bar: Bar) {
    this.bar = {...this.bar, ...bar}
  }

  @Action({ commit: 'saveAll'})
  async fetchAll():Promise<ResponseBar> {
    const { data } = await $axios.get('/bars')
    return data.data
  }

  @Action({ commit: 'saveOne' })
  async fetchOne(id: number):Promise<ResponseBar> {
    const { data } = await $axios.get(`/bars/${id}`)
    return data.data
  }

}