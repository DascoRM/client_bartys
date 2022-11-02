<template>
    <div class="flex flex-col justify-center items-center">
        <div @click="generateIcon" class="inline-flex">
            <span class="rotate_left">
                <img class="w-20" :src="require(`icon/${generateIcon}`)" alt="">
            </span>
            <span>
                <slot name="title"/>
            </span>
            <span class="rotate_right">
                <img class="w-20" :src="require(`icon/${generateIcon}`)" alt="">
            </span>
        </div>
        <div class="text-center my-10">
            <slot name="body"/>
        </div>
        <div>
            <slot name="button"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MOverlayLeft extends Vue {
    private icons = ['beer.png', 'club.png']

    /**
     * @function generateIcon
     * @description
     * return name icon for display random file
     */
    private get generateIcon() {
        const random = Math.floor(Math.random() * (this.icons.length))
        return this.icons[random]
    }
    
}
</script>

<style scoped>
.rotate_left {
    transform: rotate(-25deg);
    margin-right: 1rem;
}
.rotate_right {
    transform: rotate(25deg) scaleX(-1);
    margin-left: 1rem;
}
</style>