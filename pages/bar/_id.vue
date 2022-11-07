<template>
    <div v-if="bar">
        <OPagePatternEtablishment :etablishment.sync="bar" />
    </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import { Component, Vue, Watch } from 'vue-property-decorator'
import BarModule, { Bar, BarResponse } from '~/store/bar'
//Organisms
import OPagePatternEtablishment from '@/components/Organisms/OPagePatternEtablishment.vue'

@Component({
    components: {
        OPagePatternEtablishment
    }
})
export default class BarId extends Vue {
    public barModule = getModule(BarModule, this.$store)
    public bar = {} as Bar
    created() {
        this.getBar()
    }
    public async getBar() {
        await this.barModule.fetchOne(this.$route.params.id)
    }
    @Watch('barModule.bar', { immediate: true })
    onChange() {
        this.bar = this.barModule.bar.attributes
    }
    destoyed() {
        this.barModule.clearBar()
    }

}
</script>

<style scoped></style>