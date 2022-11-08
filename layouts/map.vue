<template>
    <div>
        <OMenu class="z-40 w-full fixed md:relativexed bottom-0 md:top-0 md:bottom-auto" />
        <OMenuAction />
        <!-- <OModalLogin class="z-50 relative" v-if="!authentified" /> -->
        <Nuxt class="z-0 relative top-0 right-0 w-full" />
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
export default class LayoutMap  extends Vue {
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