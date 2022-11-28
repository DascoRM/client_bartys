<template>
    <div class="flex justify-center">
        <div class="bg-blueDark w-1/3 h-screen hidden md:block">
            <div class="h-screen flex items-center">
                <MOverlayLeft>
                     <template v-slot:title>
                        <ATitleBase colorText="white" title="Connection"/>
                     </template>
                     <template v-slot:body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                     </template>
                     <template v-slot:button>
                        <AButtonBase 
                            @click.native="$router.push('/login')" 
                            title="Connection"
                            color="bg-white hover:ring-blue-300 focus:outline-none focus:ring-blue-300 text-blueLight" />
                     </template>
                </MOverlayLeft>
            </div>
        </div>
        <div class="bg-white h-screen w-full flex items-center md:w-2/3">
            <MSignup :form="form" button="Inscription" @submit="createAccount" class="w-full" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
//Atoms
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'
//Molecules
import MSignup from '@/components/Molecules/login/MSignup.vue'
import MOverlayLeft from '@/components/Molecules/overlay/MOverlayLeft.vue'
import UserModule, { Signup } from '~/store/user'

@Component({
    components: {
        MOverlayLeft,
        ATitleBase,
        AButtonBase,
        MSignup
    }
})
export default class OSignup extends Vue {
    public userModule = getModule(UserModule, this.$store)

    public form = [
         {
            type: 'name',
            label: 'Nom d\'utilisateur',
            placeholder: '*************',
        },
        {
            type: 'email',
            label: 'E-mail',
            placeholder: 'ladoucevie@paradise.fr',
        },
        {
            type: 'password',
            label: 'Mot de passe',
            placeholder: '*************',
        }
    ]

    public async createAccount(signupData: Signup) {
        await this.userModule.register(signupData)
    }
}
</script>

<style scoped></style>