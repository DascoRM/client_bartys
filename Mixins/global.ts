import Vue from "vue";

export default class MixinGloblal extends Vue {
    /**
     * @function parseEmptySpace
     * @param word 
     * @returns string
     * @exemple lala eu => lala-eu
     */
    public parseEmptySpace(word: string) {
        return word.split(' ').join('-')
    }
}