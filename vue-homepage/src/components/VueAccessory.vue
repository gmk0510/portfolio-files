<template>
  <div id="accessory">
    <div id="wrapSlider">
      <div class="titleBx">
        <span class="titleMain">SMART</span><span class="titleSub">Accessory</span> 
      </div>
      <div class="SliderItemBx">
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory1_중장비접근경보기.png" alt="중장비접근경보기">
          <div class="sliderText">중장비 접근 경보기</div>
          <div class="hoverBx">
            <div class="hoverTitle">3축 기울기 감지 센서</div>
            <div class="hoverText">Gyro 센서가 탑재되었으며, 변이 좌굴 감지를 통하<br />여 설정 기울기 값 초과 시 즉각 알림을 발송한다.</div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory2_cctv.png" alt="cctv">
          <div class="sliderText">스마트 안전 이동형 CCTV</div>
          <div class="hoverBx">
            <div class="hoverTitle">스마트 안전 이동형 CCTV</div>
            <div class="hoverText"> 360˚ PTZ 돔 카메라로 4배 및 25배 줌까지 작동하며, 위험 구역 등에 가설 후 실시간 현장 모니터링이 가능하고, 별도의 배관·배선이나 모니터링 인력이 필요 없다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory3_유해가스탐지기_삼각대.png" alt="유해가스탐지기_삼각대">
          <div class="sliderText">복합 가스 측정기</div>
          <div class="hoverBx">
            <div class="hoverTitle">복합 가스 측정기</div>
            <div class="hoverText"> 온도, 습도, 산소, 유해가스(황화수소, 일산화탄소, 메탄)가 기준 농도 이상 및 미만일 경우 관리자(감독자)에 실시간 경보 알림이 전송되어 밀폐공간 작업 근로자의 질식사고를 방지한다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory4_축기울기감지센서.png" alt="축기울기감지센서">
          <div class="sliderText">3축 기울기 감지 센서</div>
          <div class="hoverBx">
            <div class="hoverTitle">3축 기울기 감지 센서</div>
            <div class="hoverText"> Gyro 센서가 탑재되었으며, 변이 좌굴 감지를 통하여 설정 기울기 값 초과 시 즉각 알림을 발송한다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory5_개구부개폐위험알림경보기.png" alt="개구부개폐위험알림경보기">
          <div class="sliderText">개구부 개폐 위험 알림 경보기</div>
          <div class="hoverBx">
            <div class="hoverTitle">개구부 개폐 위험 알림 경보기</div>
            <div class="hoverText"> 마그네틱 센서 방식으로 개구부 덮개에 부착하여 개구부 개폐 여부와 근접 거리 내 접근 근로자 확인이 가능하다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory6_.png" alt="6">
          <div class="sliderText">중량물 낙하 위험 경보기</div>
          <div class="hoverBx">
            <div class="hoverTitle">중량물 낙하 위험 경보기</div>
            <div class="hoverText"> 위험 및 작업구역에 간단하게 설치하여 해당 구역에 근로자 접근 시 실시간 경보 알림이 작동하며, 400m 거리 안의 관리자가 리모컨으로 조작 가능하다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory7_위험센서.png" alt="위험센서">
          <div class="sliderText">AP기기(위험센서)</div>
          <div class="hoverBx">
            <div class="hoverTitle">AP기기(위험센서)</div>
            <div class="hoverText"> 근로자의 위험구역 접근을 실시간으로 관제하며, 동시에 IMOS시스템/관리자 모바일/근로자 모바일로 경고 알림이 전송된다. </div>
          </div>
        </div>
        <div class="SliderItems">
          <img src="@/assets/accessory/4_accessory8_일반센서.png" alt="일반센서">
          <div class="sliderText">AP기기(일반센서)</div>
          <div class="hoverBx">
            <div class="hoverTitle">AP기기(일반센서)</div>
            <div class="hoverText"> 센서 반경 1m 이내 접근 근로자의 위치를 관제하며, 감지 반경은 5m에서 30m까지 설정 가능하다. </div>
          </div>
        </div>
      </div>
      <div class="btnBx">
        <button v-on:click="leftBtnClick" class="leftBtn" v-bind:class="{none: $props.sendLeftActive}"><img src="@/assets/accessory/leftBtn.png" alt="왼쪽버튼"></button>
        <button v-on:click="rightBtnClick" class="rightBtn" v-bind:class="{none: $props.sendRightActive}"><img src="@/assets/accessory/rightBtn.png" alt="오른쪽버튼"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['sendLeftActive', 'sendRightActive'],
    data: function() {
        return {
            leftVal: 0,
            leftValP: '%',
            clickMoveVal: 33,
            oneUse: 1,
            width: 0,
        }
    },
    methods: {
        rightBtnClick: function() {
            this.$emit('rightMove');

            if (matchMedia("screen and (min-width: 900px)").matches) { 
                // ?px 이상에서 사용할 스크립트 
                this.clickMoveVal = 33;
            } else { 
                // ?px 미만에서 사용할 스크립트
                this.clickMoveVal = 100;
            }

            this.leftVal -= this.clickMoveVal; /* ?%   33*/
            document.querySelector('.SliderItemBx').style.left=this.leftVal+this.leftValP;
        },
        leftBtnClick: function() {
            this.$emit('leftMove');

            if (matchMedia("screen and (min-width: 900px)").matches) { 
                // ?px 이상에서 사용할 스크립트 
            } else { 
                // ?px 미만에서 사용할 스크립트
              this.clickMoveVal = 100;
            }

            this.leftVal += this.clickMoveVal; /* ?% */
            document.querySelector('.SliderItemBx').style.left=this.leftVal+this.leftValP;
        },
        handleResize() {
            this.width = window.innerWidth;
            if (this.width <= 900 && this.width >= 600) {
                location.reload();
            }
        },
    },
    mounted() {
        // console.log("ready...");
        window.addEventListener('resize', this.handleResize);
	},
    beforeDestroy() {
        // console.log("beforeDestroy...");
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style scoped>
.SliderItems:hover .hoverBx {
  display: block;
  width: 100%;
}
.SliderItems:hover .sliderText {
  display: none;
}
.hoverBx .hoverTitle {
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
}
.hoverBx .hoverText {
  font-size: 15px;
  padding: 10px;
}
.hoverBx {
  color: #fff;
  display: none;
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  text-align: center;
  background: rgba(61, 61, 61, 0.486);
}
#accessory {
  height: 80vh;
  position: relative;
}
#wrapSlider {
    overflow: hidden;
    width: 93%; /*body width100% 의 ?%*/
    position: absolute; 
    top: 65%; left: 50%;
    transform: translate(-50%, -70%);
    height: 400px;
    margin: 0 auto;
    height: 70vh;
}
.SliderItemBx {
    transition: .5s;
      display: flex;
    width: 264%; /*?% x 8*/     /*@media 800%  800/264> 3.030....*/        
    align-items: center;
    /* justify-content: space-around; */ 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    /* left: -50%; */
}
.SliderItems{
    background: #fff;
    width: 33%; margin: 0 .5%;
    height: 350px;
    position: relative;
    z-index: 10;
    border: .1px solid rgb(194, 194, 194);
    border-radius: 5px;
}
.sliderText {
  position: absolute;
  left: 50%; transform: translateX(-50%);
  width: 100%;
  text-align: center;
  bottom: 8%;
  font-size: 18px;
  font-weight: 600;
}
@media screen and (max-width: 440px){
  .sliderText {
    font-size: 14px;
  }
}
.btnBx .leftBtn {
  position: absolute;
  left: -1%; top: 50%;
}
.btnBx .rightBtn {
  position: absolute;
  right: 0; top: 50%;
}
.btnBx button {
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
}
.btnBx button:hover img{
  filter: invert(30%);
}
.leftBtn, .rightBtn {
    transition: .4s;
}
.none{display: none; transition: .4s;}
.SliderItems img {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -60%);
    max-width: 192px;
    z-index: 10;
    /* width: 281px; */
    /* height: 387px; */
}
.titleBx {
  /* position: absolute; */
  /* top: 10%;  수정 필요*/
  margin: 20px 0 20px 0;
}
.titleMain {
  font-size: 24px;
  font-weight: 600;
}
.titleSub{
  font-size: 24px;
  font-weight: 300;
}
@media screen and (max-width: 900px){
    .SliderItemBx {
        width: 800%;
    }
}
@media screen and (min-width: 901px){
    .SliderItemBx {
        width: 264%;
    }
}
@media screen and (min-width: 1400px) {
  .titleBx {
  /* position: absolute; */
  top: 18%;
}
}
</style>