<template>
    <AMenuAction :itemsMenu="itemsMenu" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//Interface
import { Sidebar } from '~/store/DTO/dtoComponent';
//Atoms
import AMenuAction from '../Atoms/menu/AMenuAction.vue';

@Component({
    components: {
        AMenuAction
    }
})
export default class OMenuAction extends Vue {
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