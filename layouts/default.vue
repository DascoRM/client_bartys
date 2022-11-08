<template>
    <div class="bg-white">
        <OMenu class="z-40 w-full fixed md:relative bottom-0 md:top-0 md:bottom-auto" />
        <OMenuAction />
        <!-- <OModalLogin class="z-50 relative" v-if="!authentified" /> -->
        <Nuxt class="z-0 relative top-0 right-0 w-10/12 my-auto mx-auto text-blueDark" />
        <MFooter />
    </div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import OMenu from '../components/Organisms/OMenu.vue'
import OMenuAction from '../components/Organisms/OMenuAction.vue'
import OModalLogin from '~/components/Organisms/OModalLogin.vue'
//Molecules
import MFooter from '~/components/Molecules/footer/MFooter.vue'
//Store
import AuthetificationModule from '~/store/authentification'

@Component({
    components: {
        OMenu,
        OMenuAction,
        OModalLogin,
        MFooter
    }
})
export default class LayoutDefault  extends Vue {
    public authentificationModule = getModule(AuthetificationModule, this.$store)
    public get authentified() {
        return this.authentificationModule.isAuthentified
    }
    transition(){
        return 'fade'
    }
}
</script>

<style></style>