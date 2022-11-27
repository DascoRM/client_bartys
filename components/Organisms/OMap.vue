<template>
    <div id="map-wrap" style="height: 100vh">
     <client-only>
       <l-map ref="refMap" :zoom="map.zoom" :zoomAnimation="true" :center="map.position">
        <!-- Map -->
         <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
         <!-- Provider -->
         <l-tile-layer :url="provider.url" :attribution="provider.attribution"></l-tile-layer>
         <!-- Check status from store activitieModule -->
                <!-- activitiesStatut[0] === bar -->
                <!-- Start Bar -->
                <div v-if="activitieStatus[0].status">
                    {{ bars }}
                    <div v-for="bar in bars" :key="bar.id">
                        <AMarker
                            @getPage="returnPageBar"
                            :marker="{ position: bar.attributes.position, title: bar.attributes.title, hours_opening: bar.attributes.hours_opening, id: bar.id }" 
                            :icon="iconBar"
                        />
                    </div>
                </div>
                <!-- End Bar -->
                <!-- Start Club -->
                <div v-if="activitieStatus[1].status">
                    <div v-for="(club, key) in clubs" :key="key">
                        <AMarker
                            @getPage="returnPageClub"
                            :marker="{ position: club.attributes.position, title: club.attributes.title, hours_opening: club.attributes.hours_opening, id: club.id }" 
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
    import { Component, getModule, Vue} from 'nuxt-property-decorator'
    import BarModule, { BarResponse } from '~/store/bar'
    import ClubModule, { ClubResponse } from '~/store/club'
    //Interfaces
    import ActivitiesModule, { ActivitieStatut } from '~/store/activitie'
    //Atoms
    import AMarker from '../Atoms/marker/AMarker.vue'
    import MixinGloblal from '@/Mixins/global'
    
    @Component({
        components: {
            AMarker
        }
    })
    export default class OMap extends MixinGloblal {
        public barModule = getModule(BarModule, this.$store)
        public clubModule = getModule(ClubModule, this.$store)
        public activitieModule = getModule(ActivitiesModule, this.$store)


        public refMap = this.$refs.refMap
        //todo check in
        //https://leaflet-extras.github.io/leaflet-providers/preview/
        /**
         * https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png
         * https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}
         * https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?
         * https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}
         * https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}
         * black
         * https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}
         * https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png  dark
         */
        public map = {
            zoom: 16,
            position: [45.5667,5.92079],
            url:'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
            attribution: 'Bartys'
        }
        //todo check in
        /**
         * https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.png
         * https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png
         */
        public provider = {
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd'
        }
        public bars: BarResponse[] = []
        public clubs: ClubResponse[] = []
        public activitiesStatut: ActivitieStatut[] = []
    
        public markerBarLatLng: number[] = []
        //Bar
        public iconBar = {
            url: '/marker/bar.png',
            size: [40,40]
        }
        //Club
        public iconClub = {
            url: '/marker/club.png',
            size: [40,40]
        }
        async created() {
           await Promise.all([
                this.barModule.fetchAll(),
                this.clubModule.fetchAll()
            ])
            //inject inside variables
            this.bars = this.barModule.bars
            this.clubs = this.clubModule.clubs
            this.activitiesStatut = this.activitieModule.activitiesStatut
        }
        public get activitieStatus() {
            return this.activitieModule.activitiesStatut
        }

        public returnPageBar(marker: any) {
            this.$router.push(`/bar/${marker.id}`)
        }
        public returnPageClub(marker: any) {
            this.$router.push(`/club/${marker.id}`)
        }
        
    }
    </script>