<template>
    <div class="bg-white text-blueDark inline-flex">
        <div class="hidden md:flex justify-around items-center w-1/3">
            <p class="font-dynapuff text-title">
                <NuxtLink to="/">
                    <img class="rounded-t-default w-20" :src="require('img/logo_color.png')" alt="logo bartys" />
                </NuxtLink>
            </p>
        </div>
        <div class="inline-flex justify-center items-center w-full my-1 md:my-5">
            <div 
                v-for="item in itemsMenu" 
                :key="item.id"
                class="w-full"
                >
                <div>
                    <NuxtLink class="flex flex-col items-center" to="/">
                        <component @click.native="clickToCall(item)"  class="icon" :is="item.component" />
                        <p class="text-xs font-dynapuff">{{ item.title }}</p>
                    </NuxtLink>
                </div>
            </div>
            
            <div 
                v-for="(item, index) in itemsMenuRoute" 
                :key="index"
                class="w-full">
                <div>
                    <NuxtLink class="flex flex-col items-center" :to="item.path">
                        <component  class="icon" :is="item.component" />
                        <p class="text-xs font-dynapuff">{{ item.title }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="hidden md:flex justify-center items-center mx-2">
            <AButtonRedirect to="/signup" class="w-1/auto" title="Insciption" color="bg-white border-blueLight text-blueLight" />
            <AButtonRedirect to="/login" class="w-1/auto" title="Connection" />
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

    public itemsMenuRoute = [
        {
            name: 'Events',
            path: '/event',
            title: 'Actus',
            component: AIconEvent
        }
    ]
    public get itemsMenu() {
        return this.activitieModule.activitiesStatut
    }
    public clickToCall(item: ActivitieStatut) {
        this.activitieModule.changeStatut(item)
    }
}
</script>

<style scoped>

</style>