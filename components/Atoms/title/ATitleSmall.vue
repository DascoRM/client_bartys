<template>
    <h3 class="text-small font-dynapuff" :class="`text-${colorText}`">{{ title }}</h3>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ATitleSmall extends Vue {
    @Prop() title!: string
    @Prop({default: "blueDark"}) colorText?: string
}
</script>

<style scoped>

</style>