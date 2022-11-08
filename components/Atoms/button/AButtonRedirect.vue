<template>
    <button 
        :type="type"
        :class="color"
        class="h-10 text-white align-center focus:ring-4 font-medium rounded-default text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <NuxtLink :to="to">
                <p :class="colorText" class="font-dynapuff">{{ title }}</p>
            </NuxtLink>
        </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AButtonRedirect extends Vue {
    @Prop() title!: string
    @Prop() type?: string
    @Prop({ default: 'bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 px-5 py-2.5 '}) color?: string
    @Prop({ default: 'text-white'}) colorText?: string
    @Prop({ default: "/" }) to?:string
}
</script>

<style scoped>

</style>