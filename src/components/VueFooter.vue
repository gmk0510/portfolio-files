<template>
  <footer id="footer">
    <div class="footerContents">
      <div class="logo">HULAN</div>
      <div class="footer-contents">
        <div class="contLeft">
          <div class="footer-content">(주)휴랜 대표자 | 김춘상 사업자 번호 | 761-87-01070 <br /> | 032-719-8962</div>
          <div class="footer-content">TEL / 1666-3313</div>
          <div class="footer-content">Fax | 032-710-8962 Kakao | Safe114</div>
          <div class="footer-content">Email | hulan@hulan.co.kr</div>
        </div>
        <div class="contRight">
          <div class="footer-content address">주소 | 인천광역시 연수구 인천타워대로 99, 애니오션빌딩 9층</div>
          <div class="footer-content address">B-9F 99, Incheon tower-daero, Yeonsu-gu, Incheon</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background: black;
}
.logo {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
.footerContents {
  display: flex; 
  flex-direction: column;
  color: #fff;
  margin: -20px 10px -20px 5%;
  padding: 60px 0;
}
.footerContents .footer-contents {
  display: flex;
}
.footerContents .footer-content {
  margin: 5px 0;
}
.contLeft {
  margin-right: 5%;
}
.address {
  font-weight: 550;
}
@media screen and (max-width: 500px) {
  .footer-contents {
    flex-direction: column;
  }
  .contLeft, .contRight {
    margin: 20px 0;
  }
}
@media screen and (min-width: 1700px) {
  .footerContents {
    margin: -20px 10px -20px 15%;
  }
}
</style>