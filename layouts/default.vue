<template>
    <div class="">
        <OSidebar class="z-40 fixed w-3/12 md:w-1/12" />
        <AMenuAction :itemsMenu="itemsMenu" />
        <Nuxt class="z-0 absolute top-0 right-0 w-full" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import OSidebar from '../components/Organisms/OSideBar.vue'
import AMenuAction from '../components/Atoms/menu/AMenuAction.vue'
import { Sidebar } from '~/store/DTO/dtoComponent';

@Component({
    components: {
        OSidebar,
        AMenuAction
    }
})
export default class LayoutDefault  extends Vue {
    public itemsMenu: Sidebar[] = [
        {
            name: 'Profil',
            icon: 'fas fa-user',
            color: '#A6CEF7',
            path: '/profil'
        },
        {
            name: 'Account',
            icon: 'fas fa-user',
            color: '#A6CEF7',
            path: '/account'
        }
    ]
}
</script>

<style scoped>

</style>