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

  @Action({ commit: 'saveAll'})
  async fetchAll():Promise<BarResponse> {
    const { data } = await $axios.get('/bars')
    return data.data
  }

  @Action({ commit: 'saveOne' })
  async fetchOne(id: string):Promise<BarResponse> {
    const { data } = await $axios.get(`/bars/${id}`)
    return data.data
  }

}