<template>
    <div>
        <OPagePatternEtablishment :etablishment="barModule.bar.attributes" />
    </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'
import BarModule, { Bar } from '~/store/bar'
//Organisms
import OPagePatternEtablishment from '@/components/Organisms/OPagePatternEtablishment.vue'

@Component({
    components: {
        OPagePatternEtablishment
    }
})
export default class BarId extends Vue {
    public barModule = getModule(BarModule, this.$store)

    created() {
        this.getBar()
    }
    public async getBar() {
        await this.barModule.fetchOne(this.$route.params.id)
    }

}
</script>

<style scoped>

</style>