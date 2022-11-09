<template>
    <div>
        <div class="pt-10 mb-10 block md:flex md:justify-between md:items-start">
            <div class="w-full">
              <ATitleBase class="z-50 relative text-shadow" :title="etablishmentSync.title" />
              <div class="z-0 absolute top-5 left-0 h-20 w-44 bg-green-400"></div>
              <p v-show="etablishmentSync.categories">
                  {{ etablishmentSync.categories }}
              </p>
              <p>{{ etablishmentSync.adress }}</p>
            </div>
            <div class="relative w-full hidden md:block">
              <img class="w-3/6 absolute" :src="require(`icon/bar.svg`)" alt="">
            </div>
        </div>
        <div class="mb-10">
            <ASubtitle title="Horaires:" />
            <p>{{ etablishmentSync.hours_opening }}</p>
        </div>
        <div class="mb-5 w-fullflex  md:inline-flex items-start">
            <div class="overflow-hidden w-full md:w-1/2">
                <ASubtitle title="Évenements:" />
                <ATimeLine :timelines="timelines" />
            </div>
            <div class="overflow-hidden w-full md:w-1/2">
                <ASubtitle title="Réseaux:" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'
//Atoms
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import ASubtitle from '@/components/Atoms/title/ASubtitle.vue'
import ATimeLine from '@/components/Atoms/timeline/ATimeline.vue'
//Interfaces
import { Bar } from '~/store/bar'
import { Club } from '~/store/club'
import AIconBar from '../Atoms/icon/AIconBar.vue'
import { Card, EnumColor } from '~/store/DTO/dtoCard'
import AIconClub from '../Atoms/icon/AIconClub.vue'
import AIconEvent from '../Atoms/icon/AIconEvent.vue'


@Component({
    components: {
        ATitleBase,
        ASubtitle,
        ATimeLine
    }
})
export default class OPagePatternEtablishment extends Vue {
    @PropSync('etablishment') etablishmentSync!: Bar | Club
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
  public get timelines () {
    let timelinesList: Card[] = []
    timelinesList.push(this.bestMoment, this.clubMoment, this.assoMoment)
    return timelinesList
  }

}
</script>

<style scoped>

</style>