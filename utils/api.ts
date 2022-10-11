import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  //Set up url
  const api_domain = process.env.APP_DOMAIN || 'http://api.docker.localhost:1337/api'
  axiosInstance.setBaseURL(api_domain)
  $axios = axiosInstance
}
   
export { $axios }