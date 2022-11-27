<template>
    <div class="flex justify-center">
        <div class="bg-white h-screen w-full flex items-center md:w-2/3">
            <MLogin :form="form" button="Valider" @submit="submitLogin" class="w-full" />
        </div>
        <div class="bg-blueDark w-1/3 h-screen hidden md:block">
            <div class="h-screen flex items-center">
                <MOverlayLeft>
                     <template v-slot:title>
                        <ATitleBase colorText="white" title="Inscription"/>
                     </template>
                     <template v-slot:body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                     </template>
                     <template v-slot:button>
                        <AButtonBase 
                            @click.native="$router.push('/signup')" 
                            title="Inscription"
                            color="bg-white hover:ring-blue-300 focus:outline-none focus:ring-blue-300 text-blueLight" />
                     </template>
                </MOverlayLeft>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
//Atoms
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'
//Molecules
import MLogin from '@/components/Molecules/login/MLogin.vue'
import MOverlayLeft from '@/components/Molecules/overlay/MOverlayLeft.vue'

@Component({
    components: {
        MOverlayLeft,
        ATitleBase,
        AButtonBase,
        MLogin
    }
})
export default class OLogin extends Vue {
    public form = [
        {
            type: 'mail',
            label: 'E-mail',
            placeholder: 'ladoucevie@paradise.fr',
            update: () => {}
        },
        {
            type: 'password',
            label: 'Mot de passe',
            placeholder: '*************',
            update: () => {}
        }
    ]

    public submitLogin() {
        //Todo add request
        return
    }
}
</script>

<style scoped>

</style>