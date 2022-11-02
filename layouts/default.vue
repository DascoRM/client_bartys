<template>
    <div class="bg-blueDark">
        <OSidebar class="z-40 fixed w-3/12 md:w-1/12" />
        <OMenuAction />
        <!-- <OModalLogin class="z-50 relative" v-if="!authentified" /> -->
        <Nuxt class="z-0 relative top-0 right-0 w-10/12 my-auto mx-auto" />
        <MFooter />
    </div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import OSidebar from '../components/Organisms/OSideBar.vue'
import OMenuAction from '../components/Organisms/OMenuAction.vue'
import OModalLogin from '~/components/Organisms/OModalLogin.vue'
//Molecules
import MFooter from '~/components/Molecules/footer/MFooter.vue'
//Store
import AuthetificationModule from '~/store/authentification'

@Component({
    components: {
        OSidebar,
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
}
</script>

<style>
/* body {
    background: var(--blueDark);
} */
</style>