<template>
    <MModalLogin @sendLogged="loggin" />
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator';
import { Component, Vue } from 'vue-property-decorator';
import AuthetificationModule, { Auth } from '~/store/authentification';
import MModalLogin from '../Molecules/modal/MModalLogin.vue';

@Component({
    components: {
        MModalLogin
    }
})
export default class OModalLogin  extends Vue {
    public authentificationModule = getModule(AuthetificationModule, this.$store)

    public async loggin(login: Auth) {
      await this.authentificationModule.login(login)
    }
}
</script>

<style scoped>

</style>