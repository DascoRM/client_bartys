<template>
    <div class="mx-34 my-20 flex items-center flex-col">
        <ATitleBase class="mb-12" colorText="blueDark" title="Écrivez-nous !!!" />
        <AInputField
         type="name"
         label="Votre nom"
         placeholder="Jean mi"
        @update="(name) => {  contact.name = name }"
         />
        <AInputField
         type="mail"
         label="E-mail"
         placeholder="exemple@gmail.com"
         @update="(mail) => { contact.mail = mail }" />
        <ATextAreaField
         label="Message" 
         placeholder="Écrivez ce qu'il vous plait."
         @update="(message) => { contact.message = message }" />
        <AButtonBase @click.native="$emit('sendMessage', contact)" title="Envoyez" class="shadow-button" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//Atoms
import AInputField from '@/components/Atoms/input/AInputFiled.vue'
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import ATextAreaField from '@/components/Atoms/textarea/ATextAreaField.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'

export interface Message {
    name: string
    mail: string
    message: string
}
@Component({
    components: {
        ATitleBase,
        AInputField,
        ATextAreaField,
        AButtonBase
    }
})
export default class MContact extends Vue {
    public contact: Message = {
        name: '',
        mail: '',
        message: ''
    }
}
</script>

<style scoped>

</style>