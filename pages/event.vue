<template>
    <div>
      <div class="header z-0 h-96 w-full bg-white overflow-hidden flex justify-center md:justify-end">
        <img class="md:w-1/2 w-auto" :src="require('img/event.jpg')" alt="">
      </div>
      <h1 class="font-dynapuff md:top-40 md:left-40 md:absolute top-0 z-50 p-5 text-big">
        Evenement à venir
      </h1>
     <div class="flex justify-around flex-col sm:flex-row">
       <!-- BestMoments -->
       <MCardBasic :bestMoment="bestMoment" />
        <!-- END BestMoments -->
         <!-- ClubMoments -->
       <MCardBasic :bestMoment="clubMoment" />
        <!-- END ClubMoments -->
        <!-- Association -->
        <MCardBasic :bestMoment="assoMoment" />
        <!-- END Association -->
     </div>
     <div class="flex justify-start ml-10 flex-col sm:flex-row mt-10">
        <MTimelineEvent :timelines="timelines" />
     </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Card, EnumColor } from '~/store/DTO/dtoCard'
//Atoms
import ACard from '../components/Atoms/card/ACard.vue'
import ATimeline from '../components/Atoms/timeline/ATimeline.vue'
//Molecules
import MTimelineEvent from '../components/Molecules/timeline/MTimelineEvent.vue'
import MCardBasic from '../components/Molecules/card/MCardBasic.vue'
import AIconClub from '~/components/Atoms/icon/AIconClub.vue'
import AIconBar from '~/components/Atoms/icon/AIconBar.vue'
import AIconEvent from '~/components/Atoms/icon/AIconEvent.vue'

@Component({
    components: {
      ACard,
      ATimeline,
      MCardBasic,
      MTimelineEvent
    }
})
export default class EventPage extends Vue {
  public bestMoment: Card = {
    id: '0',
    category: AIconBar,
    nameCategory: 'Bar',
    title: 'Soirée de folie',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    pathImg: 'test',
    style: {
      color: EnumColor.Yellow
    },
    date: '21/10/2022',
    link: "#Bar" 
  }

  public clubMoment: Card = {
    id: '1',
    category: AIconClub,
    nameCategory: 'Club',
    title: 'Let s go',
    description: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    pathImg: 'test',
    style: {
      color:  EnumColor.Green
    },
    date: '21/10/2022',
    link: "#Club" 
  }

  public assoMoment: Card = {
    id: '2',
    category: AIconEvent,
    nameCategory: 'Event',
    title: 'L art avant tous',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
    pathImg: 'test',
    style: {
      color:  EnumColor.Blue
    },
    date: '21/10/2022',
    link: "#Event" 
  }
  // groupe list for timeline liust
  public get timelines () {
    let timelinesList: Card[] = []
    timelinesList.push(this.bestMoment, this.clubMoment, this.assoMoment)
    return timelinesList
  }

}
</script>