import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  //Set up url
  const api_url = process.env.API_URL || 'http://localhost:1337/api'
  axiosInstance.setBaseURL(api_url)
  $axios = axiosInstance
}
   
export { $axios }