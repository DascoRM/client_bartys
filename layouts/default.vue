<template>
    <div class="">
        <OSidebar class="z-40 fixed w-3/12 md:w-1/12" />
        <OMenuAction />
        <OModalLogin class="z-50 relative" v-if="!authentified" />
        <Nuxt class="z-0 absolute top-0 right-0 w-full" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import OSidebar from '../components/Organisms/OSideBar.vue'
import OMenuAction from '../components/Organisms/OMenuAction.vue'
import OModalLogin from '~/components/Organisms/OModalLogin.vue';
//Store
import { authentificationModule } from '@/utils/store-accessor'

@Component({
    components: {
        OSidebar,
        OMenuAction,
        OModalLogin
    }
})
export default class LayoutDefault  extends Vue {
    public get authentified() {
        return authentificationModule.isAuthentified
    }
}
</script>

<style scoped>

</style>