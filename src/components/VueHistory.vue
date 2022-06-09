<template>
  <div id="history" :style="homeBackImg">
    <div id="wrap">
      <div class="titleBx">
        <span class="titleMain">HULAN</span><span class="titleSub">history</span> 
      </div>
      <div class="history">
        <div class="historyItemBx year2022" :class="{'activeHeight': change2022}">
          <div class="year">2022</div>
          <dv class="month">
            <div class="content">
              <div class="conMonth">3월</div>
              <div class="text">인천대학교 산업협력단 가족회사 인증</div>
            </div>
            <div class="content">
              <div class="conMonth">2월</div>
              <div class="text">인천광역시 현장실습 선도기업 인증</div>
            </div>
            <div class="content">
              <div class="conMonth">1월</div>
              <div class="text">Pre-A 투자 유치 - 신용보증기금</div>
            </div>
            <div class="content">
              <div class="conMonth">1월</div>
              <div class="text">2021년 인천지역 기업 혁신성장 바우처 지원사업 우수사례 선정</div>
            </div>
          </dv>
          <div class="dropBtn" :class="{'btnActive': change2022}" v-on:click="BtnClick2022">▼</div>
        </div>
        <div class="historyItemBx year2021" :class="{'activeHeight': change2021}">
          <div class="year">2021</div>
          <div class="month">
            <div class="content">
              <div class="conMonth">11월</div>
              <div class="text">스마트건설 챌린지 2021 스마트안전분야 혁신상 (국토안전관리원 원장상) 수상</div>
            </div>
            <div class="content">
              <div class="conMonth">9월</div>
              <div class="text">2021년 인천지역 기업 혁신성장 바우처 지원사업 우수사례 선정</div>
            </div>
            <div class="content">
              <div class="conMonth">9월</div>
              <div class="text"> 제5회 월드 스마트시티 엑스포 SOC-ICT 건설부문 국토교통부 장관상 수상 </div>
            </div>
            <div class="content">
              <div class="conMonth">7월</div>
              <div class="text"> 2021년 인천광역시 일자리창출 우수기업 인증 </div>
            </div>
            <div class="content">
              <div class="conMonth">4월</div>
              <div class="text">본사 확장 이전</div>
            </div>
            <div class="content">
              <div class="conMonth">3월</div>
              <div class="text">위치기반 서비스 사업자 신고</div>
            </div>
            <div class="content">
              <div class="conMonth">3월</div>
              <div class="text">퍼스트펭귄형 창업기업 선정</div>
            </div>
            <div class="content">
              <div class="conMonth">3월</div>
              <div class="text">스마트 안전 관리 업계 최고액 68억 수주 달성</div>
            </div>
          </div>
          <div class="dropBtn" :class="{'btnActive': change2021}" v-on:click="BtnClick2021">▼</div>
        </div>
        <div class="historyItemBx year2020" :class="{'activeHeight': change2020}">
          <div class="year">2020</div>
          <div class="month">
            <div class="content">
              <div class="conMonth">12월</div>
              <div class="text"> 중소기업중앙회 소프트웨어 직접생산확인 증명 </div>
            </div>
            <div class="content">
              <div class="conMonth">12월</div>
              <div class="text"> 방송통신위원회 개인위치정보사업 허가 </div>
            </div>
            <div class="content">
              <div class="conMonth">12월</div>
              <div class="text"> 한국건설기술연구원(KICT) 패밀리기업 인증 </div>
            </div>
            <div class="content">
              <div class="conMonth">11월</div>
              <div class="text"> 대림산업 2020 스마트 세이프티 경진대회 최우수상 수상 </div>
            </div>
            <div class="content">
              <div class="conMonth">11월</div>
              <div class="text"> LH 안전명품현장 만들기 경진대회 건설사 파트너십 최우수상&우수상 수상 </div>
            </div>
            <div class="content">
              <div class="conMonth">10월</div>
              <div class="text"> 한국산업기술진흥협회 기업부설연구소 인증 </div>
            </div>
            <div class="content">
              <div class="conMonth">10월</div>
              <div class="text"> 실시간 영상 AI 분석 MOU 체결 </div>
            </div>
            <div class="content">
              <div class="conMonth">9월</div>
              <div class="text"> 경비원 안전 보안 솔루션 MOU 체결 </div>
            </div>
            <div class="content">
              <div class="conMonth">7월</div>
              <div class="text"> 중소벤처기업진흥공단 벤처기업 인증 </div>
            </div>
            <div class="content">
              <div class="conMonth">5월</div>
              <div class="text"> LH 서울지역 Smart Leading Site 지정 </div>
            </div>
          </div>
          <div class="dropBtn" :class="{'btnActive': change2020}" v-on:click="BtnClick2020">▼</div>
        </div>
        <div class="historyItemBx year2019" :class="{'activeHeight': change2019}">
          <div class="year">2019</div>
          <div class="month">
            <div class="content">
              <div class="conMonth">11월</div>
              <div class="text"> 스마트건설 안전 NEXX 360 공급 MOU 체결 </div>
            </div>
            <div class="content">
              <div class="conMonth">11월</div>
              <div class="text"> 고용노동부 사회적기업 인증 </div>
            </div>
          </div>
          <div class="dropBtn" :class="{'btnActive': change2019}" v-on:click="BtnClick2019">▼</div>
        </div>
        <div class="historyItemBx year2018" :class="{'activeHeight': change2018}">
          <div class="year">2018</div>
          <div class="month">
            <div class="content">
              <div class="conMonth">6월</div>
              <div class="text"> 주식회사 휴랜 법인 설립 </div>
            </div>
          </div>
          <div class="dropBtn" :class="{'btnActive': change2018}" v-on:click="BtnClick2018">▼</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      change2022: true,
      change2021: false,
      change2020: false,
      change2019: false,
      change2018: false,
      homeBackImg: {
        backgroundImage: `url(${require('@/assets/history.png')})`
      },
    }
  },
  methods: {
    BtnClick2022() {
      this.change2022 ? this.change2022=false: this.change2022=true;
    },
    BtnClick2021() {
      this.change2021 ? this.change2021=false: this.change2021=true; 
    },
    BtnClick2020() {
      this.change2020 ? this.change2020=false: this.change2020=true; 
    },
    BtnClick2019() {
      this.change2019 ? this.change2019=false: this.change2019=true; 
    },
    BtnClick2018() {
      this.change2018 ? this.change2018=false: this.change2018=true; 
    }
  }
}
</script>

<style scoped>
#history { background-repeat: no-repeat; background-size: cover; background-position: 50%; color: #fff; padding-bottom: 10%;}
.history {width: 90%; margin: 0 auto;}
.dropBtn {position: absolute;right: 0;top: 20px; cursor: pointer;}
.year {border-bottom: 2px solid #fff; padding: 20px 0 5px 0; font-size: 20px; font-weight: bold;}
.historyItemBx {
    height: 55px;
    overflow: hidden;
    transition: .3s;
    position: relative;
}
.historyItemBx.year2022.activeHeight {
  height: 400px;
}
.historyItemBx.year2021.activeHeight {
  height: 600px;
}
.historyItemBx.year2020.activeHeight {
  height: 770px;
}
.historyItemBx.activeHeight {
  height: 200px;
}
.btnActive {
  transform: rotate(180deg);
}
.dropBtn {transition: .3s;}
.titleBx {
  margin: 20px 0 20px 5%;
  padding-top: 20px;
}
.content {
  display: flex;
  margin: 3% 1% 3% 1%;
}
.content .conMonth {
  margin-right: 2%;
}
@media screen and (max-width: 1200px){
  .historyItemBx.year2022.activeHeight {
   height: 300px;
  }
  .historyItemBx.year2021.activeHeight {
    height: 500px;
  }
  .historyItemBx.year2020.activeHeight {
    height: 670px;
  }
  .historyItemBx.activeHeight {
    height: 200px;
  }
}
@media screen and (max-width: 600px){
  .content {
    margin: 20px 1% 20px 1%;
  }
}
</style>