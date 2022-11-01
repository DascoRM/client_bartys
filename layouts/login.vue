<template>
    <div class="">
        <Nuxt class="z-0 relative top-0 right-0 w-full" />
        <MFooter />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
//Molecules
import MFooter from '~/components/Molecules/footer/MFooter.vue'
@Component({
    components: {
        MFooter
    }
})
export default class LayoutLogin  extends Vue {

}
</script>

<style scoped>

</style>