<template>
    <div>
        Contact
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactPage extends Vue {
    layout() {
        return 'split'
    }
}
</script>

<style scoped></style>