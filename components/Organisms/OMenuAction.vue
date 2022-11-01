<template>
    <AMenuAction :itemsMenu="itemsMenu" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//Interface
import { Sidebar } from '~/store/DTO/dtoComponent';
//Atoms
import AMenuAction from '../Atoms/menu/AMenuAction.vue';
//Store
import AuthetificationModule from '~/store/authentification';
import { getModule } from 'nuxt-property-decorator';
@Component({
    components: {
        AMenuAction
    }
})
export default class OMenuAction extends Vue {
    public authentificationModule = getModule(AuthetificationModule, this.$store)
    public get itemsMenu(): Sidebar[] {
        let items: Sidebar[] = []

        if(this.authentificationModule.isAuthentified) {
            items.push({
            name: 'Profil',
            icon: 'fas fa-address-card',
            color: '#132A44',
            path: '/profil'
        },
        {
            name: 'Account',
            icon: 'fas fa-user',
            color: '#132A44',
            path: '/account',
        },
        {
            name: 'Logout',
            icon: 'fas fa-right-to-bracket',
            color: '#132A44',
            path: '/login',
        })
        return items
        }
        else {
            items.push(
        {
            name: 'Login',
            icon: 'fas fa-right-to-bracket',
            color: '#A6CEF7',
            path: '/login'
        })
        }
        return items
    }
}
</script>

<style scoped>

</style>