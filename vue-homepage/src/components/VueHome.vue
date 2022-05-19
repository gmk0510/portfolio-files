<template>
  <div class="banner" id="home" :style="homeBackImg">
    <div class="textBx">
      <div class="leftTxt">
        <div class="slideTxt" data-aos="fade-up" data-aos-duration="1000">We</div>
        <div class="slideTxt" data-aos="fade-up" data-aos-duration="2000">Change</div>
        <div class="slideTxt" data-aos="fade-up" data-aos-duration="3000">Lives</div>
      </div>
      <div class="rightTxt" data-aos="fade-left" data-aos-duration="1000">
        우리는 산업재해 예방을 위하여 건설 및 보안과<br />
        IT기술을 융복합해 안전한 건설 현장을 만들고<br />
        사회적 약자인 노동자들의 삶을 변화시킵니다.<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      homeBackImg: {
        backgroundImage: `url(${require('@/assets/2_main.png')})`
      }
    }
  }
}
</script>

<style scoped>
.banner{
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
.textBx {
  display: flex;
  width: 70%;
}
.textBx .leftTxt {
  flex: 6;
}
.textBx .leftTxt .slideTxt {
  color: #fff;
  font-family: "Noto Serif",serif;
  font-size: 8em;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  /* text-decoration: underline; */
  border-bottom: 3px solid #fff;
  display: inline-block;
  text-decoration-thickness: 4px;
}
.textBx .rightTxt {
  flex: 4;
  color: #fff;
  letter-spacing: 4px;
}

@media (max-width: 1200px){
  .rightTxt {
    display: none;
  }
}
@media (max-width: 730px) {
  .textBx .leftTxt .slideTxt {
    font-size: 6em;
    font-weight: 400;
    text-decoration-thickness: 4px;
  }
}
@media (max-width: 470px) {
  .textBx .leftTxt .slideTxt {
    font-size: 3em;
    font-weight: 200;
    text-decoration-thickness: 4px;
  }
}

</style>