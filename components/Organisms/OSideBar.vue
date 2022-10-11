<template>
    <div class="flex justify-center relative overflow-hidden" :class="[ active ? 'sidebarDown' : 'sidebarUp']">
        <div  class="flex justify-center items-center flex-col fixed z-50 w-24 h-16 text-white">
            <div>
                <font-awesome-icon class="icon mt-2" @click="activeSidebar" icon="fa-solid fa-burger" />
            </div>
            <div>
                <p class="font-dynapuff text-xl">
                    Click
                </p>
            </div>
        </div>

        <div class="bg-blueDark text-white w-50 h-50 rounded-borderDown flex flex-col items-center justify-start pt-20">
            <div 
                v-for="item in itemsMenu" 
                :key="item.id"
                class="mb-10 w-full"
                >
                <div>
                    <NuxtLink class="flex flex-col items-center" to="/">
                        <component @click.native="clickToCall(item)"  class="icon" :is="item.component" />
                        <p class="text-xs font-dynapuff">{{ item.title }}</p>
                    </NuxtLink>
                </div>
            </div>
            
            <div class="mb-10 w-full flex justify-center">
                <hr class="border-white w-1/2" />
            </div>
            
            <div v-for="item in itemsMenuRoute">
                <div class="mb-10">
                    <NuxtLink class="flex flex-col items-center" :to="item.path">
                        <component  class="icon" :is="item.component" />
                        <p class="text-xs font-dynapuff">{{ item.title }}</p>
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
    public active = true

    public itemsMenuRoute = [
        {
            name: 'Evenement',
            path: '/event',
            title: 'Évenement',
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
.sidebar {
    max-height: 50px;
}
.sidebarUp{
    animation: 2s ease-in-out both sidebarUp;
    transition: max-height 200ms;
}
.sidebarDown {
    animation: 2s ease-in-out reverse both sidebarDown;
    transition: max-height 200ms;
}
@keyframes sidebarUp {
    to{
       max-height: 80px;
    }
    from {
        max-height: 380px;
    }
}
@keyframes sidebarDown {
    to{
       max-height: 80px;
    }
    from {
        max-height: 380px;
    }
}

</style>