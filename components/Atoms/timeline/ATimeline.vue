<template>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
        <li v-for="(item, key) in timelines" :key="key" class="mb-10 ml-4">
            <div class="">
                <component class="icon rounded-full border boder-black p-1" :is="item.category" />                
            </div>
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ item.date }}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ parseDescription(item.description) }}</p>
            <a v-if="item.link" :href="item.link" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blueLight rounded-lg border border-gray-200 hover:bg-blue-800 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:bg-blue-800 focus:ring-blue-200 focus:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                En savoir plus 
                <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>
    </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '~/store/DTO/dtoCard';

@Component
export default class ATimeline extends Vue {
    @Prop() timelines!: Card

    public parseDescription(string: string) {
        // console.log(this.card.description.split(' ').slice(0, 5).join(' '))
        const phrase = string!.substring(0,120) + ' ...'
        return phrase
    }
}
</script>

<style scoped>

</style>