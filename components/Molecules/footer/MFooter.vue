<template>
    <footer class="p-4 bg-blueDark rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
            <NuxtLink class="flex items-center mb-4 sm:mb-0" to="/">
                <img class="rounded-t-default w-20" :src="require('img/logo_bartys_yellow.png')" alt="logo bartys" />
            </NuxtLink>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li v-for="(item, key) in footers" :key="key">
                    <NuxtLink :to="item.path" >
                        <p class="mr-4 hover:underline md:mr-6 ">{{ item.title }}</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ dateYear }} <a href="https://barty.fr/" class="hover:underline">Bartys</a>. Tous droits réservés.
        </span>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MFooter extends Vue {
    public footers = [
        {
            path: '/about',
            title: 'À propos'
        },
        {
            path: '/privacy_policie',
            title: 'Politique de confidentialité'
        },
        {
            path: '/contact',
            title: 'Contact'
        }
    ]
    public get dateYear() {
        const date = new Date
        return date.getFullYear()
    }

}
</script>

<style scoped>

</style>