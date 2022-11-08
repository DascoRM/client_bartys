<template>
    <Home class="z-30" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class IndexPage extends Vue {
  layout() {
    return 'map'
  }
}
</script>
