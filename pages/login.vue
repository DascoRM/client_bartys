<template>
    <div>
        <OLogin />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OLogin from '@/components/Organisms/login/OLogin.vue'

@Component({
    components: {
        OLogin
    }
})
export default class LoginPage extends Vue {
    layout() {
        return 'split'
    }
}
</script>

<style scoped>

</style>