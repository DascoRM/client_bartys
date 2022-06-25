<template>
    <div class="">
        <OSidebar class="z-50 relative w-1/12" />
        <Nuxt class="z-0 absolute top-0 right-0 w-11/12"/>
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