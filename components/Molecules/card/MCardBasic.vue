<template>
    <div>
      <!-- Card event -->
      <div>
        <div class=" flex justify-end p-3">
          <div class="font-dynapuff rounded-full border border-black w-1/2 text-subtitle flex justify-end pr-2">
            {{ bestMoment.category }}
          </div>
        </div>
        <div>
          <ACardBase :card="bestMoment"/>
        </div>
      </div>
      <!-- END Card event -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '~/store/DTO/dtoCard';
import ACardBase from '../../Atoms/card/ACardBase.vue';

@Component({
    components: {
      ACardBase
    }
})
export default class MCardBasic extends Vue {
    @Prop() bestMoment!: Card
}
</script>

<style scoped>

</style>