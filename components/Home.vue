<template>
    <OMap />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OMap from './Organisms/OMap.vue'

@Component({
    components: {
        OMap
    }
})
export default class HomePage extends Vue {
    
}
</script>

<style scoped>

</style>