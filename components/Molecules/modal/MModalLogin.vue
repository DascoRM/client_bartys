<template>
    <div
        v-if="activeModal"
        class="bg-blueDarkOpacity w-full h-screen z-50">
        <!-- Main modal -->
        <div 
            id="authentication-modal" 
            tabindex="-1" 
            aria-hidden="true" 
            class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-default shadow dark:bg-gray-700">
                    <button
                        @click="activeModal = false"
                        type="button" 
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
                        data-modal-toggle="authentication-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Fermé modal</span>
                    </button>
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Connectez-vous !</h3>
                        <form class="space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre e-mail</label>
                                <input v-model="loginSync.identifier" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-default focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre mot de passe</label>
                                <input v-model="loginSync.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-default focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                            </div>
                            <div class="flex justify-between">
                                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Mot de pase perdu ?</a>
                            </div>
                            <AButtonBase @click.native="$emit('sendLogged', loginSync)" type="button" title="Connectez-vous" />
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Pas enregistré ? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Créer un compte</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Auth } from '~/store/authentification'
import AButtonBase from '../../Atoms/button/AButtonBase.vue'

@Component({
    components: {
        AButtonBase
    }
})
export default class MModalLogin extends Vue {
    public activeModal = true
    public loginSync: Auth = { identifier: '', password: ''}
}
</script>

<style scoped>

</style>