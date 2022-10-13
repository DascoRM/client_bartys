<template>
    <div>
      <!-- Card event -->
      <div>
        <ACard :card="bestMoment" />
      </div>
      <!-- END Card event -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '~/store/DTO/dtoCard';
//Atoms
import ACard from '../../Atoms/card/ACard.vue';

@Component({
    components: {
      ACard
    }
})
export default class MCardBasic extends Vue {
    @Prop() bestMoment!: Card
}
</script>

<style scoped>

</style>