<template>
    <div>
        <ATimeline class="md:ml-5"  :timelines="timelines" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '~/store/DTO/dtoCard';
import ATimeline from '../../Atoms/timeline/ATimeline.vue';

@Component({
    components: {
        ATimeline
    }
})
export default class  extends Vue {
    @Prop() timelines!: Card
}
</script>

<style scoped>

</style>