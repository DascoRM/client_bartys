<template>
    <div class="bg-transparent h-screen w-24 flex flex-col items-center justify-start pt-5">
        <div class="bg-white h-screen w-24 opacity-70 z-0 absolute"></div>
        <div class="z-10">
            <div class="mb-20">
                Logo
            </div>
            <div v-for="(item, index) in itemsMenu" :key="index">
                <div class="mb-10">
                    <component @click.native="clickToCall(item)"  class="icons" :is="item.component" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { activitieModule } from '@/store'
import { ActivitieStatut } from '~/store/activitie'

@Component
export default class OSidebar extends Vue {
    public active = false

    public get itemsMenu() {
        return activitieModule.activitiesStatut
    }
    public clickToCall(item: ActivitieStatut) {
        activitieModule.changeStatut(item)
    }
}
</script>

<style scoped>
.icons {
    width: 50px;
    height: 50px;
}
</style>