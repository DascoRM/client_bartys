<template>
    <div>
        <OContact />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//Organism
import OContact from '@/components/Organisms/OContact.vue'
@Component({
    components: {
        OContact
    }
})
export default class ContactPage extends Vue {
    layout() {
        return 'split'
    }
}
</script>

<style scoped></style>