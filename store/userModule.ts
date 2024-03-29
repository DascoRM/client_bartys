import { Action, Mutation, VuexModule, Module } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'


export interface User {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: Date
    updatedAt: Date
}
@Module({ namespaced: true, name: 'user' })
export default class UserModule extends VuexModule {
    public user!: User

    @Mutation
    public saveUserMe(user: User) {
        this.user = user
    }

    @Action({ commit: 'saveUserMe' })
    public  async fetchUserMe(): Promise<User> {
        const { data } = await $axios.get('/users/me')
        return data
    }

    @Action({ commit: 'saveUserMe' })
    public  async fetchAllUsers(): Promise<User[]> {
        const { data } = await $axios.get('/users')
        return data
    }
}