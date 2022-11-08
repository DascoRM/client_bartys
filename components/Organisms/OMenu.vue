<template>
    <div class="bg-white text-blueDark inline-flex shadow-lg">
        <div class="hidden md:flex justify-around items-center w-1/3">
            <p class="font-dynapuff text-title">
                <NuxtLink to="/">
                    <img class="rounded-t-default w-20" :src="require('img/logo_color.png')" alt="logo bartys" />
                </NuxtLink>
            </p>
        </div>
        <div class="inline-flex justify-center items-center w-full my-1 md:my-5">
            <div 
                v-for="(item, key) in itemsMenu" 
                :key="key"
                class="w-full"
                >
                <div>
                    <NuxtLink class="flex flex-col items-center" to="/">
                        <component @click.native="clickToCall(item)"  class="icon" :is="item.component" />
                        <p 
                            class="text-xs font-dynapuff" 
                            :class="item.status ? 'border-b-4 border-blueDark rounded-lg text-black-600' : 'text-gray-500'">
                            {{ item.title }}
                        </p>
                    </NuxtLink>
                </div>
            </div>
            
            <div 
                class="w-full">
                <div>
                    <NuxtLink class="flex flex-col items-center" :to="itemsMenuRoute.path">
                        <component @click.native="activePage"  class="icon" :is="itemsMenuRoute.component" />
                        <p 
                            class="text-xs font-dynapuff"
                            :class="itemsMenuRoute.status ? 'border-b-4 border-blueDark rounded-lg text-black-600' : 'text-gray-500'"
                            >{{ itemsMenuRoute.title }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="hidden md:flex justify-center items-center mx-2 px-5">
            <AButtonRedirect to="/signup" title="Insciption" color="w-1/auto bg-white border-blueLight text-blueLight w-1/auto" />
            <AButtonRedirect to="/login" title="Connection"  class="w-1/auto shadow-button" />
        </div>
        </div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import ActivitiesModule, { ActivitieStatut } from '~/store/activitie'
import AIconEvent from '../Atoms/icon/AIconEvent.vue'
import AButtonRedirect from '@/components/Atoms/button/AButtonRedirect.vue'

@Component({
    components: {
        AButtonRedirect
    }
})
export default class OMenu extends Vue {
    public activitieModule = getModule(ActivitiesModule, this.$store)

    public itemsMenuRoute = {
            name: 'Events',
            path: '/event',
            title: 'Actus',
            status: false,
            component: AIconEvent
        }

    public get itemsMenu() {
        return this.activitieModule.activitiesStatut
    }
    public clickToCall(item: ActivitieStatut) {
        this.activitieModule.changeStatut(item)
    }
    public activePage() {
        this.itemsMenuRoute.status = true
        this.activitieModule.statusOffIconMapMenu()
    }
}
</script>

<style scoped>

</style>