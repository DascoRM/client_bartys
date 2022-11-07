<template>
    <div>
        <OPagePatternEtablishment :etablishment="clubModule.club.attributes" />
    </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'
//Organisms
import OPagePatternEtablishment from '@/components/Organisms/OPagePatternEtablishment.vue'
import ClubModule from '~/store/club'

@Component({
    components: {
        OPagePatternEtablishment
    }
})
export default class ClubId extends Vue {
    public clubModule = getModule(ClubModule, this.$store)

    created() {
        this.getBar()
    }
    public async getBar() {
        await this.clubModule.fetchOne(this.$route.params.id)
    }

}
</script>

<style scoped>

</style>