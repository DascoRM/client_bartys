<template>
    <div @click="$router.go(-1)">
        event
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class EventPage extends Vue {
  }
</script>