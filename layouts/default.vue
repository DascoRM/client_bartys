<template>
    <div>
        <OSidebar class="z-50 absolute" />
        <Nuxt class="z-0 relative"/>
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