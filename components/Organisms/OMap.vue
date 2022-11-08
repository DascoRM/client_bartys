<template>
    <div id="map-wrap" style="height: 100vh">
     <client-only>
       <l-map ref="refMap" :zoom="map.zoom" :center="map.position">
         <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
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
    
        public map = {
            zoom: 15,
            position: [45.5667,5.92079],
            url:'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
            attribution: 'Hello my friend'
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