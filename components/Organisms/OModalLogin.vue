<template>
    <MModalLogin />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MModalLogin from '../Molecules/modal/MModalLogin.vue';

@Component({
    components: {
        MModalLogin
    }
})
export default class  extends Vue {
    
}
</script>

<style scoped>

</style>