<template>    
    <div class="relative mx-5 mb-5  md:max-w-sm bg-white rounded-default shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="absolute right-2 top-2">
            <component class="icon rounded-full border border-black p-1" :is="card.category" />
          </div>
        <a href="#">
            <img class="rounded-t-default" :src="require(`img/${card.pathImg}.jpg`)" :alt="card.title" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ card.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ parseDescription }}</p>
            <a :href="card.link" class="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blueLight rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                En savoir plus
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '~/store/DTO/dtoCard';

@Component
export default class ACard extends Vue {
    @Prop() card!: Card

    public get parseDescription() {
        // console.log(this.card.description.split(' ').slice(0, 5).join(' '))
        const phrase = this.card.description!.substring(0,50) + ' ...'
        return phrase
    }
    
}
</script>

<style scoped>

</style>