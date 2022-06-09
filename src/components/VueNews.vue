<template>
  <div id="news">
    <div class="titleBx">
      <span class="titleMain">HULAN</span><span class="titleSub">partners</span> 

      <div class="news_txt">NEWS</div>
    </div>
    <div class="test_bx" :class="{view: viewMoreVal}">
      <swiper loop :autoplay= 4000>
        <div class="swiper_items">
          <div class="test_items itmes1">
            <div class="img_bx"><a href="http://www.ikld.kr/news/articleView.html?idxno=251681" target="_blank"><img src="@/assets/news/1.jpg" alt=""></a></div>
            <div class="title"> 국토안전관리원, 안전점검의 날 맞이 ‘스마트 안전장비’ 운영 현황 점검 (사진=국토안전관리원) </div>
            <div class="data">2022.04</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes2">
            <div class="img_bx"><a href="http://www.enewstoday.co.kr/news/articleView.html?idxno=1549945" target="_blank"><img src="@/assets/news/2.png" alt=""></a></div>
            <div class="title"> 연수구, 인천지역 최초 공공건설현장 첫 스마트 안전장비 적용 </div>
            <div class="data">2022.02</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes3">
            <div class="img_bx"><a href="https://cnews.smartfn.co.kr/view.php?ud=2022012816152671651269d2b59_46" target="_blank"><img src="@/assets/news/3.jpg" alt=""></a></div>
            <div class="title"> 안성시, 대형 건설공사장 긴급 안전점검 실시 (사진=안성시) </div>
            <div class="data">2022.01</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes4">
            <div class="img_bx"><a href="https://www.ajunews.com/view/20220126172208229" target="_blank"><img src="@/assets/news/4.png" alt=""></a></div>
            <div class="title"> 휴랜, 기업 혁신성장 바우처 지원사업 우수사례 선정 </div>
            <div class="data">2022.01</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes5">
            <div class="img_bx"><a href="https://www.ajunews.com/view/20220105091436034" target="_blank"><img src="@/assets/news/5.jpg" alt=""></a></div>
            <div class="title"> 스마트 안전관리 플랫폼 기업 '휴랜', Pre-A 투자 유치 </div>
            <div class="data">2022.01</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes6">
            <div class="img_bx"><a href="https://www.dnews.co.kr/uhtml/view.jsp?idxno=202111191159030450318" target="_blank"><img src="@/assets/news/6.png" alt=""></a></div>
            <div class="title"> 중대재해 예방 위해 프리콘 단계부터 위험 요소 제거 필요 </div>
            <div class="data">2021.11</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes7">
            <div class="img_bx"><a href="https://www.ajunews.com/view/20211012092027804" target="_blank"><img src="@/assets/news/7.jpg" alt=""></a></div>
            <div class="title"> 휴랜-씨앤코, 스마트 출입 통제 시스템 업무협약 체결 </div>
            <div class="data">2021.10</div>
          </div>
        </div>
        <div class="swiper_items">
          <div class="test_items itmes8">
            <div class="img_bx"><a href="https://www.dnews.co.kr/uhtml/view.jsp?idxno=202109271452441350042" target="_blank"><img src="@/assets/news/8.jpg" alt=""></a></div>
            <div class="title"> [2021 스마트건설안전포럼] 스마트건설안전포럼 개최 </div>
            <div class="data">2021.09</div>
          </div>
        </div>
      </swiper>
      <div class="test_item_bx">
          <div class="test_item_bxs bx1">
            <div class="test_items itmes1">
              <div class="img_bx"><a href="http://www.ikld.kr/news/articleView.html?idxno=251681" target="_blank"><img src="@/assets/news/1.jpg" alt=""></a></div>
              <div class="title"> 국토안전관리원, 안전점검의 날 맞이 ‘스마트 안전장비’ 운영 현황 점검 (사진=국토안전관리원)</div>
              <div class="data">2022.04</div>
            </div>
            <div class="test_items itmes3">
              <div class="img_bx"><a href="https://cnews.smartfn.co.kr/view.php?ud=2022012816152671651269d2b59_46" target="_blank"><img src="@/assets/news/3.jpg" alt=""></a></div>
              <div class="title"> 안성시, 대형 건설공사장 긴급 안전점검 실시 (사진=안성시) </div>
              <div class="data">2022.01</div>
            </div>
            <div class="test_items itmes5">
              <div class="img_bx"><a href="https://www.ajunews.com/view/20220105091436034" target="_blank"><img src="@/assets/news/5.jpg" alt=""></a></div>
              <div class="title"> 스마트 안전관리 플랫폼 기업 '휴랜', Pre-A 투자 유치 </div>
              <div class="data">2022.01</div>
            </div>
            <div class="test_items itmes7">
              <div class="img_bx"><a href="https://www.ajunews.com/view/20211012092027804" target="_blank"><img src="@/assets/news/7.jpg" alt=""></a></div>
              <div class="title"> 휴랜-씨앤코, 스마트 출입 통제 시스템 업무협약 체결 </div>
              <div class="data">2021.10</div>
            </div>
          </div>
          <div class="test_item_bxs bx2">
            <div class="test_items itmes2">
              <div class="img_bx"><a href="http://www.enewstoday.co.kr/news/articleView.html?idxno=1549945" target="_blank"><img src="@/assets/news/2.png" alt=""></a></div>
              <div class="title"> 연수구, 인천지역 최초 공공건설현장 첫 스마트 안전장비 적용 </div>
              <div class="data">2022.02</div>
            </div>
            <div class="test_items itmes4">
              <div class="img_bx"><a href="https://www.ajunews.com/view/20220126172208229" target="_blank"><img src="@/assets/news/4.png" alt=""></a></div>
              <div class="title"> 휴랜, 기업 혁신성장 바우처 지원사업 우수사례 선정 </div>
              <div class="data">2022.01</div>
            </div>
            <div class="test_items itmes6">
              <div class="img_bx"><a href="https://www.dnews.co.kr/uhtml/view.jsp?idxno=202111191159030450318" target="_blank"><img src="@/assets/news/6.png" alt=""></a></div>
              <div class="title"> 중대재해 예방 위해 프리콘 단계부터 위험 요소 제거 필요 </div>
              <div class="data">2022.11</div>
            </div>
            <div class="test_items itmes8">
              <div class="img_bx"><a href="https://www.dnews.co.kr/uhtml/view.jsp?idxno=202109271452441350042" target="_blank"><img src="@/assets/news/8.jpg" alt=""></a></div>
              <div class="title"> [2021 스마트건설안전포럼] 스마트건설안전포럼 개최 </div>
            <div class="data">2022.09</div>
          </div>
        </div>
        <div class="view_more" v-on:click="viewMore" :class="{view: viewMoreVal}">view more ▼</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper} from 'vue2-swiper'
export default {
  components: {
    Swiper,
  },
  data: function() {
    return {
      viewMoreVal: false,
    }
  },
  methods: {
    viewMore: function() {
      this.viewMoreVal =! this.viewMoreVal

      if(this.viewMoreVal === true)  {
        document.querySelector(".view_more").innerHTML="view hidden ▲"
      } else {
        document.querySelector(".view_more").innerHTML="view more ▼"
      }
    }
  }
}
</script>

<style scoped>
.test_items {
    padding: 4%;
    margin: 1%;
}
.test_items .title {
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.test_item_bxs .title {
  font-size: 16px;
}
.img_bx img {
    border-radius: 5px;
    object-fit: cover;
    display: block;
    width: 100%;
    transition: .3s;
}
.swiper {
  overflow: hidden;
  flex: 1;
  height: 100%;
}
.view_more {
    position: absolute; 
    bottom: 248px;
    right: 3%;
    font-size: 13px;
    cursor: pointer;
    border-radius: 3px;
    padding: 2px;
    background: rgba(202, 202, 202, 0.603);
    transition: .3s;
}
.view_more:hover {
    background: rgba(173, 173, 173, 0.603);
}
.view_more.view {
    bottom: 2px;
}

swiper {width: 50%;}
/* right item Bx */
.test_item_bx {
  width: 50%;
  display: flex;
  height: 1050px;    /*view_more bottom    !!bx-more=400 */
  position: relative;
}
.test_item_bxs {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.test_items:hover img {
    transform: scale(1.1);
}
.img_bx{
    overflow: hidden;
    border-radius: 5px;
}
.test_bx {
    display: flex;
    height: 800px;
    overflow: hidden;
    max-width: 1300px;
    margin: 20px auto;
}
.test_bx.view {
    overflow: inherit;
    height: auto;
}
.test_bx.view .test_item_bx {
  height: 100%;
}

.swiper_items .test_items {
  padding: 2%;
}
.titleBx {
  margin: 10px 0 10px 15%;
}
.news_txt {
  margin: 30px 0;
  font-size: 16px;
  color: rgb(65, 65, 65);
  position: relative;
}
.news_txt::before {
  content: '';
  position: absolute;
  width: 5%;
  text-align: center;
  height: 2px;
  background: rgb(65, 65, 65);
  bottom: -10px;
}

@media screen and (max-width: 950px) {
  .swiper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }  
  .test_bx {
    display: flex;
    flex-direction: column;
    /* height: 200px; */
  }
  .test_item_bx {
      display: none;
  }
  .test_bx {
    height: 600px;
    margin: 20px auto 100px auto;
  }
  .titleBx {
    margin: 10px 0 10px 5%;
  }
  .news_txt::before {
    width: 10%;
  }
}
@media screen and (min-width: 951px) and (max-width: 1300px){
  .titleBx {
    margin: 10px 0 10px 2%;
  }
}
@media screen and (min-width: 750px) and (max-width: 949px){
  .itmes1 img,.itmes5 img {
    margin-bottom: -150px;
  }
}
@media screen and (max-width: 500px) {
  .test_bx {
    height: 400px;
  }
}
</style>