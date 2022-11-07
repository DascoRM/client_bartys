<template>
    <div v-show="club">
        <OPagePatternEtablishment :etablishment.sync="club" />
    </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import { Component, Vue, Watch } from 'vue-property-decorator'
//Organisms
import OPagePatternEtablishment from '@/components/Organisms/OPagePatternEtablishment.vue'
import ClubModule, { Club } from '~/store/club'

@Component({
    components: {
        OPagePatternEtablishment
    }
})
export default class ClubId extends Vue {
    public clubModule = getModule(ClubModule, this.$store)
    public club = {} as Club
    created() {
        this.getClub()
    }
    public async getClub() {
        await this.clubModule.fetchOne(this.$route.params.id)
    }
    @Watch('clubModule.club', { immediate: true })
    onChange() {
        this.club = this.clubModule.club.attributes
    }
    destroyed() {
        this.clubModule.clearClub()
    }
    


}
</script>

<style scoped>

</style>