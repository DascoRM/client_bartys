import { Component } from 'vue'
import {VuexModule, Module, Mutation } from 'vuex-module-decorators'
//Icons
import AIconClub from '../components/Atoms/icon/AIconClub.vue'
import AIconBar from '../components/Atoms/icon/AIconBar.vue'

export interface ActivitieStatut {
  id: number
  title: string
  icon?: string
  component?: Component
  status: boolean
}
@Module({ namespaced: true, name: 'activitie' })
export default class ActivitiesModule extends VuexModule {

  activitiesStatut: ActivitieStatut[] = [
    {
      id: 0,
      title: 'Bars',
      icon: 'beer.png',
      component: AIconBar,
      status: true
    },
    {
      id: 1,
      title: 'Clubs',
      icon: 'club.png',
      component: AIconClub,
      status: true
    },
    {
      id: 2,
      title: 'Restos',
      icon: 'club.png',
      component: AIconClub,
      status: true
    }
  ]

  @Mutation
  public changeStatut(item: ActivitieStatut): void {
    for (const key in this.activitiesStatut) {
      try {
        if(item) {
          this.activitiesStatut[key].status = !this.activitiesStatut[key].status
          item.status = true
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

}