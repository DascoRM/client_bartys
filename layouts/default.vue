<template>
    <div class="">
        <OSidebar class="z-40 fixed w-3/12 md:w-1/12" />
        <Nuxt class="z-0 absolute top-0 right-0 w-full" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import OSidebar from '../components/Organisms/OSideBar.vue'

@Component({
    components: {
        OSidebar
    }
})
export default class LayoutDefault  extends Vue {

}
</script>

<style scoped>

</style>