<template>
    <div class="flex justify-center">
        <div class="bg-blueDark w-1/3 h-screen">
            blue
        </div>
        <div class="bg-white w-2/3 h-screen">
            <MContact class="w-full" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//Molecules
import MContact from '@/components/Molecules/contact/MContact.vue'


@Component({
    components: {
        MContact
    }
})
export default class OContact extends Vue {
    
}
</script>

<style scoped>

</style>