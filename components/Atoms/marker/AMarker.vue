<template>
    <l-marker 
        v-if="marker.position" 
        :lat-lng="[+marker.position.lat, +marker.position.long]"
        >
        <l-icon :icon-url="icon.url" :icon-size="icon.size" />
        <l-popup @click.native="$emit('getPage', marker)">
            <div class="flex justify-start mb-2">
                <h1 class="font-bold">{{ marker.title }}</h1>
            </div>
            <div class="mb-4">
                <img class="w-44" :src="require('img/test.jpg')" alt="logo bartys" />
            </div>
            <div class="inline-flex items-center">
                <div :class="itsOpen ? 'bg-green-400': 'bg-red-400'" class="mb-2 rounded-full w-max h-auto p-2 mr-2">
                    <ATitleSmall :title="itsOpen ? 'Open': 'Close'" colorText="white" />
                </div>
                <div class="mb-2 bg-blue-400 rounded-full w-max h-auto p-2 mr-2">
                    <ATitleSmall title="4 Évenements" colorText="white" />
                </div>
            </div>
            <div>
                <ATitleSmall title="Horaires: " />
                <p>{{ marker.hours_opening }}</p>
            </div>
            <div class="h-10">
                <AButtonRedirect title="Plus d'info" :to='`/bar/${marker.id}`' color="shadow-button bg-blueLight px-2" />
            </div>
        </l-popup>
    </l-marker>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import { AMarkerType, IconMarker } from '../../../store/DTO/dtoComponent';
//Atoms
import { LMarker, LIcon, LPopup } from 'vue2-leaflet'
import ATitleSmall from '@/components/Atoms/title/ATitleSmall.vue'
import AButtonRedirect from '@/components/Atoms/button/AButtonRedirect.vue'

@Component({
    components: {
        LMarker,
        LIcon,
        LPopup,
        ATitleSmall,
        AButtonRedirect
    }
})
export default class AMarker extends Vue {
    @Prop() marker!: AMarkerType
    @Prop() icon!: IconMarker
    get itsOpen() {
        const value = true
        if(value) {
            return true
        }
        else return false
    }
}
</script>

<style scoped>
</style>