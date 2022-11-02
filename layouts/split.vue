<template>
    <div class="">
        <OSidebar class="z-40 fixed w-3/12 md:w-1/12" />
        <Nuxt class="z-0 relative top-0 right-0 w-full" />
        <MFooter />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
//Organsims
import OSidebar from '../components/Organisms/OSideBar.vue'
//Molecules
import MFooter from '~/components/Molecules/footer/MFooter.vue'
@Component({
    components: {
        OSidebar,
        MFooter
    }
})
export default class LayoutSplit  extends Vue {

}
</script>

<style scoped>

</style>