import { Action, Mutation, VuexModule, Module } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { MetaResponse } from './DTO/dtoComponent'

export interface AuthResponse {
    data: ResponseApiAuth
    meta?: MetaResponse
}
export interface Auth {
    identifier: string
    password: string
}

export interface ResponseApiAuth {
    jwt: string
	user: User
}
export interface User {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string
}

export interface CreateUser {
    username: string,
	email: string
	password: string
}
export interface ForgotPassword {
    password: string
    passwordConfirmation: string
    code: string
}

@Module({ namespaced: true, name: 'authentification' })
export default class AuthetificationModule extends VuexModule {
    public isAuthentified = false
    public loggedIn: boolean = true
    public user!: User
    public userMe!: ResponseApiAuth
    public forgottenPassword!: ForgotPassword

    public auth: Auth = {
        identifier: '',
        password: ''
    }

    @Mutation
    changeAuthenficated() {
        this.isAuthentified = !this.isAuthentified
    }
    @Mutation
    saveUser(userMe: ResponseApiAuth) {
        this.userMe = userMe
    }

    @Action({ commit: 'saveUser'})
    public async login(auth: Auth): Promise<ResponseApiAuth> {
        const { data } = await $axios.post('/auth/local', auth)
        console.log(data)
        return data
    }

    @Action({ commit: 'saveUser' })
    public async createUsers(user: CreateUser): Promise<ResponseApiAuth> {
        const { data } = await $axios.post('/auth/local/register', user)
        return data
    }

    @Action
    public async forgotPassword(email: string): Promise<string> {
        const { data } = await $axios.post('/auth/forgot-password', email)
        return data
    }

    @Action({ commit: 'saveUser'})
    public async resetPassword(forgottenPassword: ForgotPassword): Promise<ResponseApiAuth> {
        const { data } = await $axios.post('/auth/reset-password', forgottenPassword)
        return data
    }

}