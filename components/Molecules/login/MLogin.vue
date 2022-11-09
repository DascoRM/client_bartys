<template>
    <div class="mx-34 my-20 flex items-center flex-col">
        <ATitleBase class="mb-12" colorText="blueDark" title="Écrivez-nous !!!" />
        <AInputField
            v-for="(item, index) in form"
            :key="index"
            :type="item.type"
            :label="item.label"
            :placeholder="item.placeholder"
            @update="item.update"
         />
         <AButtonBase 
            @click.native="$emit('submit', form)" 
            :title="button" 
            class="shadow-button" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
//Atoms
import AInputField from '@/components/Atoms/input/AInputFiled.vue'
import ATitleBase from '@/components/Atoms/title/ATitleBase.vue'
import ATextAreaField from '@/components/Atoms/textarea/ATextAreaField.vue'
import AButtonBase from '@/components/Atoms/button/AButtonBase.vue'
//Interface
export interface inputForm {
    type: string
    label: string
    placeHolder: string
    update: (a: string [ number]) =>  string | number

}
@Component({
    components: {
        ATitleBase,
        AInputField,
        ATextAreaField,
        AButtonBase
    }
})
export default class MLogin extends Vue {
  @Prop() form!: inputForm[]
  @Prop() button!: string
}
</script>

<style scoped>

</style>