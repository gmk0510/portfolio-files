<template>
  <div id="work">
      <div class="work_wrap">
        <div class="titleBx">
          <span class="titleMain">SMART</span><span class="titleSub">Work</span> 
        </div>
        <div class="work_bx">

          <div class="work_col">
            <div class="work_col_bx" v-on:click="[showImg1(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/1_평택 고덕 A-54BL 아파트.jpg" alt="">
              </div>
              <div class="title">평택 고덕 A-54BL 아파트</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg2(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/2_안성 이현리 저온물류단창고.jpg" alt="">
              </div>
              <div class="title">안성 이현리 저온물류단창고</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg3(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/3_거창군 북상면 커뮤니티센터.jpg" alt="">
              </div>
              <div class="title">거창군 북상면 커뮤니티센터</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg4(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/4_국가철도공단 포항_삼척 영해역사 외 3개 역사.png" alt="">
              </div>
              <div class="title">국가철도공단 포항_삼척 영해역사 외 3개 역사</div>
            </div>
          </div>

          <div class="work_col work_col_none">
            <div class="work_col_bx" v-on:click="[showImg5(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/5_인천 구월 A-3BL 공공임대주택.jpg" alt="">
              </div>
              <div class="title">인천 구월 A-3BL 공공임대주택</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg6(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/6_전남광양황금택지지구26-1블록.jpg" alt="">
              </div>
              <div class="title">전남광양황금택지지구26-1블록</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg7(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/7_김해 내덕지구 한라비발디.png" alt="">
              </div>
              <div class="title">김해 내덕지구 한라비발디</div>
            </div>
            <div class="work_col_bx" v-on:click="[showImg8(), show_background()]">
              <div class="img_bx">
                <img src="@/assets/work/8_파주운정3 A-17BL.jpg" alt="">
              </div>
              <div class="title">파주운정3 A-17BL</div>
            </div>
          </div>

          
        </div>
      </div>

      <div class="active_show" >
        <div class="show_img_bx" :class="{'active': img1}">
          <div class="img_bx1">
            <img src="@/assets/work/1_평택 고덕 A-54BL 아파트.jpg" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img2}">
          <div class="img_bx2">
            <img src="@/assets/work/2_안성 이현리 저온물류단창고.jpg" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img3}">
          <div class="img_bx3">
            <img src="@/assets/work/3_거창군 북상면 커뮤니티센터.jpg" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img4}">
          <div class="img_bx4">
            <img src="@/assets/work/4_국가철도공단 포항_삼척 영해역사 외 3개 역사.png" alt="">
          </div>
        </div>

        <div class="show_img_bx" :class="{'active': img5}">
          <div class="img_bx5">
            <img src="@/assets/work/5_인천 구월 A-3BL 공공임대주택.jpg" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img6}">
          <div class="img_bx6">
            <img src="@/assets/work/6_전남광양황금택지지구26-1블록.jpg" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img7}">
          <div class="img_bx7">
            <img src="@/assets/work/7_김해 내덕지구 한라비발디.png" alt="">
          </div>
        </div>
        <div class="show_img_bx" :class="{'active': img8}">
          <div class="img_bx8">
            <img src="@/assets/work/8_파주운정3 A-17BL.jpg" alt="">
          </div>
        </div>


        
        <div class="show_img_background" :class="{'active': img_background}" v-on:click="closeImg1"></div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      img_background: false,
      img1: false,
      img2: false,
      img3: false,
      img4: false,
      img5: false,
      img6: false,
      img7: false,
      img8: false,
      img9: false,
      img10: false,
      img11: false,
      img12: false,
    }
  },
  methods: {
    show_background: function() {
      this.img_background = true;
    },
    closeImg1: function() {
      this.img_background = false;
      this.img1 = false;
      this.img2 = false;
      this.img3 = false;
      this.img4 = false;
      this.img5 = false;
      this.img6 = false;
      this.img7 = false;
      this.img8 = false;
      this.img9 = false;
      this.img10 = false;
      this.img11 = false;
      this.img12 = false;
    },

    showImg1: function() {
      this.img1 = true;
    },
    showImg2: function() {
      this.img2 = true;
    },
    showImg3: function() {
      this.img3 = true;
    },
    showImg4: function() {
      this.img4 = true;
    },
    showImg5: function() {
      this.img5 = true;
    },
    showImg6: function() {
      this.img6 = true;
    },
    showImg7: function() {
      this.img7 = true;
    },
    showImg8: function() {
      this.img8 = true;
    },
    showImg9: function() {
      this.img9 = true;
    },
    showImg10: function() {
      this.img10 = true;
    },
    showImg11: function() {
      this.img11 = true;
    },
    showImg12: function() {
      this.img12 = true;
    },
  }
}
</script>

<style scoped>
.show_img_background {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 0;
  top: 0; left: 0;
  background: rgba(32, 32, 32, 0.842);

  display: none; /*none -> block */
}
.img_bx1, .img_bx2, .img_bx3, .img_bx4, .img_bx5, .img_bx6, .img_bx7, .img_bx8, .img_bx9, .img_bx10, .img_bx11, .img_bx12{
  position: fixed;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  z-index: 1;
  transition: .2s;
  width: 65%;
  max-height: 70%;
  display: none; /*none -> block */
}
.show_img_bx.active .img_bx1, .show_img_bx.active .img_bx2, .show_img_bx.active .img_bx3, .show_img_bx.active .img_bx4, .show_img_bx.active .img_bx5, .show_img_bx.active .img_bx6
.show_img_bx.active .img_bx7, .show_img_bx.active .img_bx8, .show_img_bx.active .img_bx9, .show_img_bx.active .img_bx10, .show_img_bx.active .img_bx11, .show_img_bx.active .img_bx12 {
  display: block;
}

/*?/ */
.show_img_bx.active .img_bx7, .show_img_bx.active .img_bx6{display: block;}

.show_img_background.active {
  display: block;
}

.titleBx {max-width: 75%; margin: 0 auto 5% auto;}
#work {
  background: rgb(248, 248, 248);
  padding-top: 40px;
  margin-top: -100px;
  padding-bottom: 200px;
}
img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: .3s;
}
.work_bx {
  display: flex;
  margin: 0 auto;
  max-width: 75%;
}
.work_bx .work_col {
  flex: 1;
  flex-wrap: nowrap;
}
.work_bx .work_col .work_col_bx {
  margin: 2% 2% 6% 2%;
  cursor: pointer;
}
.work_bx .work_col .work_col_bx .title {
  font-weight: 600;
}
.img_bx {
  border-radius: 5px;
  overflow: hidden;
}
.work_col_bx:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 900px) {
  .work_bx {
    flex-direction: column;
  }
  .work_col_none{display: none;}
}
@media screen and (min-width: 700px) {
  .img_bx1, .img_bx2, .img_bx3, .img_bx4, .img_bx5, .img_bx6, .img_bx7, .img_bx8, .img_bx9, .img_bx10, .img_bx11, .img_bx12 {
    width: 50%;
  }
  
}
</style>