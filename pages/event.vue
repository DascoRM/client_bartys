<template>
    <div>
      <div class="font-dynapuff flex justify-end p-5 text-title">
        Evenement à venir
      </div>
     <div class="flex justify-center flex-col sm:flex-row">
       <!-- BestMoments -->
       <MCardBasic class="w-full md:w-2/6" :bestMoment="bestMoment" />
        <!-- END BestMoments -->
         <!-- ClubMoments -->
       <MCardBasic class="w-full md:w-2/6" :bestMoment="clubMoment" />
        <!-- END ClubMoments -->
        <!-- Association -->
        <MCardBasic class="w-full md:w-2/6" :bestMoment="assoMoment" />
        <!-- END Association -->
     </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Card, EnumColor } from '~/store/DTO/dtoCard';
import MCardBasic from '../components/Molecules/card/MCardBasic.vue'

@Component({
    components: {
      MCardBasic
    }
})
export default class EventPage extends Vue {
  public bestMoment: Card = {
    category: 'Bar bie est de sortie',
    title: 'Soirée de folie',
    style: {
      color: EnumColor.Yellow
    },
    date: '21/10/2022' 
  }

  public clubMoment: Card = {
    category: 'Club in the space',
    title: 'Let s go',
    style: {
      color:  EnumColor.Green
    },
    date: '21/10/2022' 
  }

  public assoMoment: Card = {
    category: 'Asso à tous pris',
    title: 'L art avant tous',
    style: {
      color:  EnumColor.Blue
    },
    date: '21/10/2022' 
  }

}
</script>