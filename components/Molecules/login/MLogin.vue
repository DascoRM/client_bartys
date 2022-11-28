<template>
    <div class="mx-34 my-20 flex items-center flex-col">
        <ATitleBase class="text-center mb-12" colorText="blueDark" :title="phraseLog.titlePage" />
        <AInputField
            :type="form[0].type"
            :label="form[0].label"
            :placeholder="form[0].placeholder"
            @update="(item) => { loginData.identifier = item}"
        />
        <AInputField
            :type="form[1].type"
            :label="form[1].label"
            :placeholder="form[1].placeholder"
            @update="(item) => { loginData.password = item}"
        />
         <!-- If mobile -->
         <div class="my-5 md:hidden inline-flex">
            <p class="text-blueDark">{{ phraseLog.firstPart }}</p>
            <NuxtLink :to="phraseLog.pathRedirect">
                <p class="ml-2 text-blueLight font-bold">{{ phraseLog.secondPart }}</p>
            </NuxtLink>
         </div>
         <AButtonBase 
            @click.native="$emit('submit', loginData)" 
            :title="button" 
            class="shadow-button" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
//Atoms
import AInputField from '@/components/Atoms/input/AInputFiled.vue'
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import ATextAreaField from '@/components/Atoms/textarea/ATextAreaField.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'
//Store
import { Login } from '~/store/user'
//Interface
export interface inputForm {
    type: string
    label: string
    placeHolder: string
    update: (a: string [ number]) =>  string | number

}
@Component({
    components: {
        ATitleBase,
        AInputField,
        ATextAreaField,
        AButtonBase
    }
})
export default class MLogin extends Vue {
    @Prop() form!: inputForm[]
    @Prop() button!: string

    public loginData = {} as Login

    /**
     * @getter phraseLog
     * @description
     * Change phrase or word when path route is different
     * HTML compoennt is a pattern
     * Only for login and sigup
     * 
     */
    get phraseLog() {
        if(this.$route.path === '/login') 
        return {
                    titlePage: 'Connectez-vous!',
                    firstPart: 'Pas de compte ?',
                    secondPart: 'Inscrivez-vous',
                    pathRedirect: '/signup'
                }
        //todo delete this
        // if (this.$route.path === '/signup')
        // return {
        //             titlePage: 'Inscrivez-vous!',
        //             firstPart: 'Déjà un compte ?',
        //             secondPart: 'Connectez-vous',
        //             pathRedirect: '/login'
        //         }
    }


}
</script>

<style>

</style>