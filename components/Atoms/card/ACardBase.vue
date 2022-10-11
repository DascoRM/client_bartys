<template>
    <div :style="`background:${card.style.color}`" class="rounded-default background-white shadow-xl h-card p-2 m-5 flex justify-space-arround relative">
        <div class="flex flex-col">
            <div class="text-title z-50">
                {{ card.title }}
            </div>
            <div>
                {{ card.date }}
            </div>
        </div>
        <div class="absolute h-auto w-full top-0 right-0 z-0">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { EnumColor, Card } from '@/store/DTO/dtoCard'

@Component
export default class ACardBase extends Vue {
    @Prop() card!: Card

    public colorCard = [
        { Yellow :'#F7F3A6' },
        { Blue : '#A6CEF7' },
        { Green : '#DAF7A6' }
    ]
    public colorTxts = [
        { White : '#ffff'},
        { Black : '#0000' }
    ]
    //use after 11/10/22
    public colorTxt = (color_txt: string) => {
        switch (color_txt) {
            case EnumColor.Blue:
                this.card.style.color_txt = this.colorTxts[0].White!
                break
            case EnumColor.Yellow:
                this.card.style.color_txt = this.colorTxts[0].White!
                break
            case this.colorCard[0].Green:
                this.card.style.color_txt = this.colorTxts[0].White!
                break
            default:
                this.card.style.color_txt = this.colorTxts[0].Black!
                break;
        }
    }
    //use after 11/10/22
    // Sort background random color
    get bgColors() {
        const randomColor = this.colorCard[Math.floor(Math.random() * this.colorCard.length)]
        return Object.values(randomColor)
    }
    
}
</script>

<style scoped>

</style>