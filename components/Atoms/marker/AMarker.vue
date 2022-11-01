<template>
    <l-marker 
        v-if="marker.position" 
        :lat-lng="[+marker.position.lat, +marker.position.long]"
        >
        <l-icon :icon-url="icon.url" :icon-size="icon.size" />
        <l-popup>
            <div class="flex justify-center">
                <h1 class="font-bold">{{ marker.title }}</h1>
            </div>
            <div>
                <p>{{ marker.hours_opening }}</p>
            </div>
        </l-popup>
    </l-marker>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import { AMarkerType, IconMarker } from '../../../store/DTO/dtoComponent';
//Atoms
import { LMarker, LIcon, LPopup } from 'vue2-leaflet'

@Component({
    components: {
        LMarker,
        LIcon,
        LPopup
    }
})
export default class AMarker extends Vue {
    @Prop() marker!: AMarkerType
    @Prop() icon!: IconMarker
}
</script>

<style scoped>
</style>