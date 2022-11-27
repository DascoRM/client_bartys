<template>
    <h1 class="text-bigMobile md:text-big font-dynapuff" :class="`text-${colorText}`">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ATitleBase extends Vue {
    @Prop() title!: string
    @Prop({default: "blueDark"}) colorText?: string
}
</script>

<style scoped>

</style>