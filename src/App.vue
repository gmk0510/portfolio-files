<template>
<main id="ContainerWrap">
    <vue-header></vue-header>
        <section id="wrap">
            <vue-home></vue-home>
            <vue-technology @MoveImg1="techLeft1" @MoveImg2="techLeft2" @MoveImg3="techLeft3" @MoveImg4="techLeft4" @MoveImg5="techLeft5"></vue-technology>
            <vue-accessory v-bind:sendLeftActive="isLeftActive" v-bind:sendRightActive="isRightActive" @rightMove="testRight" @leftMove="testLeft"></vue-accessory>
            <vue-work-bg></vue-work-bg>
            <vue-news></vue-news>
            <vue-find></vue-find>
            <vue-license></vue-license>
            <vue-history></vue-history>
            <vue-partners></vue-partners>
            <vue-video></vue-video>
            <vue-map></vue-map>
        </section>
    <vue-footer></vue-footer>
</main>
</template>

<script>
import VueHeader from './components/VueHeader.vue'
import VueHome from './components/VueHome.vue'
import VueTechnology from './components/VueTechnology.vue'
import VueAccessory from './components/VueAccessory.vue'
import VueWorkBg from './components/VueWorkBg.vue'
import VueNews from './components/VueNews.vue'
import VueFind from './components/VueFind.vue'
import VueLicense from './components/VueLicense.vue'
import VueHistory from './components/VueHistory.vue'
import VuePartners from './components/VuePartners.vue'
import VueVideo from './components/VueVideo.vue'
import VueMap from './components/VueMap.vue'
import VueFooter from './components/VueFooter.vue'


export default {
    components: {
        'vue-header': VueHeader,
        'vue-home': VueHome,  
        'vue-technology': VueTechnology,  
        'vue-accessory': VueAccessory,
        'vue-work-bg': VueWorkBg,
        'vue-news': VueNews,
        'vue-find': VueFind,
        'vue-license': VueLicense,
        'vue-history': VueHistory,
        'vue-partners': VuePartners,
        'vue-video': VueVideo,
        'vue-map': VueMap,
        'vue-footer': VueFooter,
    },
    data: function() {
        return {
            isLeftActive: true,
            isRightActive: false,
            stopVal: 0,
            clickVal: 5,
        }
    },
    methods: {
        techLeft1: function() {
            document.querySelector('.techSlider').style.left = 0 +'%';
            document.querySelector('.btnBar1').style.width= 60 + "%";

            document.querySelector('.btnBar2').style.width= 100 + "%";
            document.querySelector('.btnBar3').style.width= 100 + "%";
            document.querySelector('.btnBar4').style.width= 100 + "%";
            document.querySelector('.btnBar5').style.width= 100 + "%";
        },
        techLeft2: function() {
            document.querySelector('.techSlider').style.left = -100 +'%';
            document.querySelector('.btnBar2').style.width= 60 + "%";

            document.querySelector('.btnBar1').style.width= 100 + "%";
            document.querySelector('.btnBar3').style.width= 100 + "%";
            document.querySelector('.btnBar4').style.width= 100 + "%";
            document.querySelector('.btnBar5').style.width= 100 + "%";
        },
        techLeft3: function() {
            document.querySelector('.techSlider').style.left = -200 +'%';
            document.querySelector('.btnBar3').style.width= 60 + "%";

            document.querySelector('.btnBar2').style.width= 100 + "%";
            document.querySelector('.btnBar1').style.width= 100 + "%";
            document.querySelector('.btnBar4').style.width= 100 + "%";
            document.querySelector('.btnBar5').style.width= 100 + "%";
        },
        techLeft4: function() {
            document.querySelector('.techSlider').style.left = -300 +'%';
            document.querySelector('.btnBar4').style.width= 60 + "%";

            document.querySelector('.btnBar2').style.width= 100 + "%";
            document.querySelector('.btnBar3').style.width= 100 + "%";
            document.querySelector('.btnBar1').style.width= 100 + "%";
            document.querySelector('.btnBar5').style.width= 100 + "%";
        },
        techLeft5: function() {
            document.querySelector('.techSlider').style.left = -400 +'%';
            document.querySelector('.btnBar5').style.width= 60 + "%";

            document.querySelector('.btnBar2').style.width= 100 + "%";
            document.querySelector('.btnBar3').style.width= 100 + "%";
            document.querySelector('.btnBar4').style.width= 100 + "%";
            document.querySelector('.btnBar1').style.width= 100 + "%";
        },
        testRight: function() {
            this.stopVal += 1;
            this.isLeftActive = !this.isLeftActive;

            if (matchMedia("screen and (min-width: 900px)").matches) { 
              // ?px 이상에서 사용할 스크립트 
              this.clickVal = 5;
            } else { 
              // ?px 미만에서 사용할 스크립트
              this.clickVal = 7;
            }
            if (this.stopVal !== 0) this.isLeftActive = false
            if (this.stopVal === this.clickVal) this.isRightActive = true
        },
        testLeft: function() {
            this.stopVal -= 1;

            if (matchMedia("screen and (min-width: 900px)").matches) { 
                // ?px 이상에서 사용할 스크립트 
                this.clickVal = 5;
            } else { 
                // ?px 미만에서 사용할 스크립트
                this.clickVal = 7;
            }

            if (this.stopVal === 0) this.isLeftActive = true
            else {
                this.isRightActive = false
            }
        },
    }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}
a {
    text-decoration: none;
    color: black;
}
li {
    list-style: none;
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
.titleMain {
  font-size: 24px;
  font-weight: 600;
}
.titleSub{
  font-size: 24px;
  font-weight: 300;
}
.titleBx span {
    margin-right: 5px;
}
.ContainerWrap {position: relative;}

/* 재선언 */
.topBtn {
    position: absolute;z-index: 1;
}
.navigation {
    z-index: 100; 
}
</style>