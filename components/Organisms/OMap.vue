<template>
<div id="map-wrap" style="height: 100vh">
 <client-only>
   <l-map ref="refMap" :zoom="map.zoom" :center="map.position">
     <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
     <!-- Check status from store activitieModule -->
            <!-- activitiesStatut[0] === bar -->
            <!-- Start Bar -->
            <div v-if="activitieStatus[0].status">
                <div v-for="(bar, key) in bars" :key="key">
                    <AMarker
                        :marker="{ position: bar.attributes.position, title: bar.attributes.title, hours_opening: bar.attributes.hours_opening }" 
                        :icon="iconBar"
                    />
                </div>
            </div>
            <!-- End Bar -->
            <!-- Start Club -->
            <div v-if="activitieStatus[1].status">
                <div v-for="(club, key) in clubs" :key="key">
                    <AMarker 
                        :marker="{ position: club.attributes.position, title: club.attributes.title, hours_opening: club.attributes.hours_opening }" 
                        :icon="iconClub"
                    />
                </div>
            </div>
            <!-- End Club -->
   </l-map>
 </client-only>
</div>
</template>
<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import { Bar } from '~/store/bar'
import { Club } from '~/store/club'
import { activitieModule, barModule, clubModule } from '~/utils/store-accessor'
//Interfaces
import { ActivitieStatut } from '../../../client/store/activitie'

//Atoms
import AMarker from '../Atoms/marker/AMarker.vue'

@Component({
    components: {
        AMarker
    }
})
export default class OMap extends Vue {
    public refMap = this.$refs.refMap

    public map = {
        zoom: 15,
        position: [45.5667,5.92079],
        url:'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
        attribution: 'Hello my friend'
    }
    public bars: Bar[] = []
    public clubs: Club[] = []
    public activitiesStatut: ActivitieStatut[] = []

    public markerBarLatLng: number[] = []
    //Bar
    public iconBar = {
        url: '/marker/beer.png',
        size: [30,30]
    }
    //Club
    public iconClub = {
        url: '/marker/club.png',
        size: [30,30]
    }
    async created() {
       await Promise.all([
            barModule.fetchAll(),
            clubModule.fetchAll()
        ])
        //inject inside variables
        this.bars = barModule.bars
        this.clubs = clubModule.clubs
        this.activitiesStatut = activitieModule.activitiesStatut
    }
    public get activitieStatus() {
        return activitieModule.activitiesStatut
    }
    
}
</script>