<template>
     <div class="flex justify-center items-center flex-col w-2/3 md:w-1/3 mb-5">
        <label 
        :for="label"
        class="block mb-2 text-title font-dynapuff text-blueDark dark:text-gray-300">
            {{ label }}
        </label>
        <input 
            :type="type" 
            :id="label" 
            class="w-full bg-blueDark border border-gray-300 text-white text-sm rounded-default focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            :placeholder="placeholder" 
            required>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AInputField extends Vue {
    @Prop() type?: string
    @Prop() label!: string
    @Prop() placeholder!: string
}
</script>

<style scoped>

</style>