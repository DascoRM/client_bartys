<template>
    <h1 class="text-title font-dynapuff" :class="`text-${colorText}`">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ASubtitle extends Vue {
    @Prop() title!: string
    @Prop({default: "white"}) colorText?: string
}
</script>

<style scoped>

</style>