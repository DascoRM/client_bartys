<template>
    <div>
        <font-awesome-icon class="z-50 absolute top-10 left-10" @click="activeSidebar" icon="fa-solid fa-burger" />

        <div v-if="active" class="bg-white h-screen w-24 flex flex-col items-center justify-start pt-5">
            <div class="mb-20 mt-20">
                Logo
            </div>
            <div v-for="(item, index) in itemsMenu" :key="index">
                <div class="mb-10">
                    <NuxtLink to="/">
                        <component @click.native="clickToCall(item)"  class="icons" :is="item.component" />
                    </NuxtLink>
                </div>
            </div>
            <div v-for="(item, key) in itemsMenuRoute" :key="key">
                <div class="mb-10">
                    <NuxtLink :to="item.path">
                        <component  class="icons" :is="item.component" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { activitieModule } from '@/store'
import { ActivitieStatut } from '~/store/activitie'
import AIconEvent from '../Atoms/icon/AIconEvent.vue'

@Component
export default class OSidebar extends Vue {
    public active = false

    public itemsMenuRoute = [
        {
            name: 'Evenement',
            path: '/event',
            component: AIconEvent
        }
    ]
    public get itemsMenu() {
        return activitieModule.activitiesStatut
    }
    public clickToCall(item: ActivitieStatut) {
        activitieModule.changeStatut(item)
    }


    public activeSidebar(): void {
        this.active = !this.active
    }
}
</script>

<style scoped>
.icons {
    width: 50px;
    height: 50px;
}
</style>