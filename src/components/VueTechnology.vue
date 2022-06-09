<template>
  <div id="technology">
    <div class="techSliderWrap">
      <div class="techSlider">
        <div class="sliderImg" :style="sliderImg1">
          <div class="sliderTextBx">
            <p class="productTitle">IMOS (Innovative Monitoring On Smart) 시스템</p>
            <p class="productContent">상황실 관제 모니터링</p>
            <p class="productContent">통합 관제 모니터링</p>
            <p class="productContent">영상 통합 관제</p>
          </div>
        </div>
        <div class="sliderImg" :style="sliderImg2">
          <div class="sliderTextBx">
            <p class="productTitle">IMOS (Innovative Monitoring On Smart) 시스템</p>
            <p class="productContent">상황실 관제 모니터링</p>
            <p class="productContent">통합 관제 모니터링</p>
            <p class="productContent">영상 통합 관제</p>
          </div>
        </div>
        <div class="sliderImg" :style="sliderImg3">
          <div class="sliderTextBx">
            <p class="productTitle">IMOS (Innovative Monitoring On Smart) 시스템</p>
            <p class="productContent">상황실 관제 모니터링</p>
            <p class="productContent">통합 관제 모니터링</p>
            <p class="productContent">영상 통합 관제</p>
          </div>
        </div>
        <div class="sliderImg" :style="sliderImg4">
          <div class="sliderTextBx">
            <p class="productTitle">IMOS (Innovative Monitoring On Smart) 시스템</p>
            <p class="productContent">상황실 관제 모니터링</p>
            <p class="productContent">통합 관제 모니터링</p>
            <p class="productContent">영상 통합 관제</p>
          </div>
        </div>
        <div class="sliderImg" :style="sliderImg5">
          <div class="sliderTextBx">
            <p class="productTitle">IMOS (Innovative Monitoring On Smart) 시스템</p>
            <p class="productContent">상황실 관제 모니터링</p>
            <p class="productContent">통합 관제 모니터링</p>
            <p class="productContent">영상 통합 관제</p>
          </div>
        </div>
      </div>
    </div>  
    <div class="techBtns">
        <div class="btns">
          <div class="btnTxt">IMOS 시스템</div>
          <div class="btnBarBx" v-on:click="MoveImg1">
            <div class="btnBar btnBar1"></div>
            <div class="btnBarEv"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btnTxt">근로자 위치 기반 안전 시스템</div>
          <div class="btnBarBx" v-on:click="MoveImg2">
            <div class="btnBar btnBar2"></div>
            <div class="btnBarEv"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btnTxt">영상 통합 관제</div>
          <div class="btnBarBx" v-on:click="MoveImg3">
            <div class="btnBar btnBar3"></div>
            <div class="btnBarEv"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btnTxt">맞춤형 장비 솔루션</div>
          <div class="btnBarBx" v-on:click="MoveImg4">
            <div class="btnBar btnBar4"></div>
            <div class="btnBarEv"></div>
          </div>
        </div>
        <div class="btns">
          <div class="btnTxt">환경 모니터링 시스템</div>
          <div class="btnBarBx" v-on:click="MoveImg5"> 
            <div class="btnBar btnBar5"></div>
            <div class="btnBarEv"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sliderImg1: {
        backgroundImage: `url(${require('@/assets/techImages/3_technology1.jpg')})`
      },
      sliderImg2: {
        backgroundImage: `url(${require('@/assets/techImages/3_technology2.jpg')})`
      },
      sliderImg3: {
        backgroundImage: `url(${require('@/assets/techImages/3_technology3.jpg')})`
      },
      sliderImg4: {
        backgroundImage: `url(${require('@/assets/techImages/3_technology4.jpg')})`
      },
      sliderImg5: {
        backgroundImage: `url(${require('@/assets/techImages/3_technology5.jpg')})`
      }
    }
  },
  methods: {
    MoveImg1: function() {
      this.$emit('MoveImg1')
    },
    MoveImg2: function() {
      this.$emit('MoveImg2')
    },
    MoveImg3: function() {
      this.$emit('MoveImg3')
    },
    MoveImg4: function() {
      this.$emit('MoveImg4')
    },
    MoveImg5: function() {
      this.$emit('MoveImg5')
    }
  }
}
</script>

<style scoped>
#technology {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.techSliderWrap {
  position: relative;
}
.techSlider {
  width: 500%;
  display: flex;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0; /*-100 -200 -300 -400*/ 
  transition: .5s;
}
.sliderImg {
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
}
.sliderTextBx {
  text-align: right;
  margin: 10% 5% 0 0;
}
.sliderTextBx .productTitle {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 5%!important;
  text-shadow: 1px 1px 5px rgb(82, 133, 192);
  padding: 3px 15px;
}
.sliderTextBx .productContent {
  text-shadow: 0 0 5px #000;
  padding: 3px 15px;
  font-weight: 700;
  font-size: 1.1em;
}
#technology {
  position: relative;
}
.techBtns {
  position: absolute;
  bottom: 20%;
  left: 50%; transform: translateX(-50%);
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
}
.techBtns .btnTxt {
  font-size: 12px;
  color: #fff;
  margin-bottom: 4%;
}
.techBtns .btnBarBx {
  position: relative;
  cursor: pointer;
}
.techBtns .btnBarBx .btnBar {
  width: 100%;
  /* width: 60%; */
  height: 5px;
  background: #fff;
  position: absolute;
  top: 0; left: 0;
  transition: .3s;
}
.techBtns .btnBarBx .btnBarEv {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.726);
}

@media screen and (max-width: 780px) {
  .techBtns {
    flex-wrap: wrap;
  }
  .btns {
    margin: 5%;
  }
}
@media screen and (min-width: 1450px) {
  .techBtns {
    bottom: 10%;
  }
}
</style>