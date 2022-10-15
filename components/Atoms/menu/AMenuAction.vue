<template>
    <nav class="menu" @click="activeMenu">
        <label class="menu-open-button z-50" :class="{'menu-open-button-active' : active }">
            <span 
                v-for="index in 3"
                :key="index" class="lines" 
                :class="active ? `line-${index}-active` : `line-${index}`" >
            </span>
        </label>
        <ul class="absolute z-0">
            <NuxtLink
                v-for="(item, index) in itemsMenu" 
                :key="index"    
                :to="item.path"
                tag="li"
                class="menu-item" 
                :class="{ 'menu-item-active' : active }"
                :style="`background: ${item.color}`">
                <font-awesome-icon class="icon mt-2" :icon="item.icon" />
            </NuxtLink>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { authentificationModule } from '~/store';
import { Sidebar } from '~/store/DTO/dtoComponent';


@Component
export default class AMenuAction extends Vue {
    @Prop() itemsMenu!: Sidebar
    public active = false
    /**
     * @function toggle
     */
    public activeMenu() {
        this.active = !this.active
        this.itemsMenu.forEach((item: any) => {
         if(item.name === 'Login') {
            authentificationModule.changeAuthenficated()
            console.log(authentificationModule.isAuthentified)
         }
        });
    }
}
</script>

<style scoped>
.menu {
   z-index: 1001;
   margin: auto;
   position: fixed;
   bottom: 1rem;
   right: 1rem;
   width: 80px;
   height: 80px;
   text-align: center;
   box-sizing: border-box;
   font-size: 12px;
}

.menu-item,
.menu-open-button {
   background: #EEEEEE;
   border-radius: 100%;
   width: 60px;
   height: 60px;
   margin-left: -40px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
  line-height: 80px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;  
}
/**
* if active is at true 
*/
.menu-open-button-active {
   -webkit-transition-timing-function: linear;
   transition-timing-function: linear;
   -webkit-transition-duration: 200ms;
   transition-duration: 200ms;
   -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
   transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}
.lines {
   width: 25px;
   height: 3px;
   background: #596778;
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -12.5px;
   margin-top: -1.5px;
   -webkit-transition: -webkit-transform 200ms;
   transition: -webkit-transform 200ms;
   transition: transform 200ms;
   transition: transform 200ms, -webkit-transform 200ms;
}

.menu-open-button .line-1 {
   -webkit-transform: translate3d(0, -8px, 0);
   transform: translate3d(0, -8px, 0);
}
.menu-open-button .line-2 {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}

.menu-open-button .line-3 {
   -webkit-transform: translate3d(0, 8px, 0);
   transform: translate3d(0, 8px, 0);
}

.menu-open-button .line-1-active {
   -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open-button .line-2-active {
   -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open-button .line-3-active {
   -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
   transform: translate3d(0, 0, 0) rotate(-45deg);
}
/* End lines */
/* Start items menu */
.menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
   transform: translate3d(2.5rem,0,0);
}
.menu-item-active {
   -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
   transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.menu-item-active:nth-child(1) {
   transition-duration: 180ms;
   -webkit-transition-duration: 180ms;
   -webkit-transform: translate3d(65px, -68px, 0);
   transform: translate3d(65px, -68px, 0);
}
.menu-item-active:nth-child(2) {
    transition-duration: 280ms;
   -webkit-transition-duration: 280ms;
   -webkit-transform: translate3d(-11px, -46px, 0);
   transform: translate3d(-11px, -46px, 0);
}
.menu-item-active:nth-child(3) {
    transition-duration: 280ms;
   -webkit-transition-duration: 280ms;
   -webkit-transform: translate3d(-17px, 34px, 0);
   transform: translate3d(-17px, 34px, 0);
}
</style>