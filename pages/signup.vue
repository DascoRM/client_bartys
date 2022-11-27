<template>
    <div>
        <OSignup />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OSignup from '@/components/Organisms/signup/OSignup.vue'

@Component({
    components: {
        OSignup
    }
})
export default class signup extends Vue {
     layout() {
        return 'split'
    }
}
</script>

<style scoped></style>