<template>
    <div class="mx-34 my-20 flex items-center flex-col">
        <ATitleBase class="mb-12" colorText="blueDark" title="Écrivez-nous !!!" />
        <AInputField :type="name" label="Votre nom" placeholder="Jean mi" />
        <AInputField :type="mail" label="E-mail" placeholder="exemple@gmail.com" />
        <ATextAreaField label="Message" placeholder="Écrivez ce qu'il vous plait." />
        <AButtonBase class="w-1/3" title="Envoyez"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//Atoms
import AInputField from '@/components/Atoms/input/AInputFiled.vue'
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import ATextAreaField from '@/components/Atoms/textarea/ATextAreaField.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'
@Component({
    components: {
        ATitleBase,
        AInputField,
        ATextAreaField,
        AButtonBase
    }
})
export default class MContact extends Vue {
    
}
</script>

<style scoped>

</style>