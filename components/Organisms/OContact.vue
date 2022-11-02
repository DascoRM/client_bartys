<template>
    <div class="flex justify-center">
        <div class="bg-blueDark w-1/3 h-screen hidden md:block">
            <div class="h-screen flex items-center">
                <MOverlayLeft>
                     <template v-slot:title>
                        <ATitleBase title="Contact"/>
                     </template>
                     <template v-slot:body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                     </template>
                </MOverlayLeft>
            </div>
        </div>
        <div class="bg-white h-screen w-full flex items-center md:w-2/3">
            <MContact @sendMessage="sendMessage" class="w-full" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//Atoms
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
//Molecules
import MContact, { Message } from '@/components/Molecules/contact/MContact.vue'
import MOverlayLeft from '@/components/Molecules/overlay/MOverlayLeft.vue'

@Component({
    components: {
        MOverlayLeft,
        ATitleBase,
        MContact
    }
})
export default class OContact extends Vue {
    public sendMessage(message: Message) {
        console.log(message)
    }
}
</script>

<style scoped>

</style>