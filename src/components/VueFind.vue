<template>
  <div id="findWrap">
    <div id="find" :style="formBackImg">
      <div class="container">
        <p class="content-title">HULAN과 함께 앞선 생각으로 새로운 미래를 창조할 인재를 찾습니다.</p>
        <p class="sub-title">상시 채용 중에 있으니 문의사항은 메일로 보내주시기 바랍니다.</p>
        <div class="btn-bx">
          <a href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=Q2lmWXZndThWeCt4bGM3c2dVcDJKZz09" target="_blank" class="saramin">채용 사이트로 바로가기</a>
          <div class="email" v-on:click="formBlock">이메일로 지원하기</div>
        </div>
      </div>
    </div>

    <div class="form">
      <div class="form-title"><span>HULAN</span> 이메일 지원하기</div>
      <div class="formSub">
        <form class="gform pure-form pure-form-stacked" method="POST" data-email="mingim132gguu@gmail.com"
            action="https://script.google.com/macros/s/AKfycbx4xQInefUw97fWbk4_MLnIzCcdXt7HBABotOCivkUwX-Dlupu5W5pEqR4dm2hAwliOzw/exec">
          <div class="form-elements">
            <div>
              <label for="name"></label>
              <input id="name" name="name" placeholder="이름">
            </div>

            <div>
              <label for="email"></label>
              <input id="email" name="email" type="email" value="" required="" placeholder="E-mail">
            </div>
            <div>
              <label for="message"></label>
              <textarea id="message" name="message" rows="10" placeholder="내용"></textarea>
            </div>

            <div class="btnBx">
              <button class="button-success pure-button button-xlarge send" v-on:click=newForm>제출하기</button>
              <button class="close" v-on:click="closeForm">닫기</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="formBack"></div>
  </div>
</template>

<script>//form formBack
export default {
  data: function() {
    return {
      formBackImg: {
        backgroundImage: `url(${require('@/assets/findbackimg2.png')})`
      },
      toggleDisplay: "block" 
    }
  },
  methods: {
    newForm: function() {
      alert('지원해주셔서 감사합니다.');
      setTimeout(function() {
          location.reload(true);
      }, 1000);
    },
    formBlock: function() {
      document.querySelector('.form').style.display=this.toggleDisplay
      document.querySelector('.formBack').style.display=this.toggleDisplay
    },
    closeForm() {
      document.querySelector('.form').style.display="none"
      document.querySelector('.formBack').style.display="none"
    }
  }
}
</script>

<style>
.btnBx {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
}
.block {
  display: block;
}
.container {
  width: 90%;
}
#find {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 30vh;
}
.content-title {
  font-weight: 600;
  font-size: 22px;
}
.sub-title {
  margin: 3% 0 2% 0;
  font-weight: 500;
  font-size: 18px;
}
.btn-bx {display: flex;}
.saramin, .email {
  color: gray;
  border-radius: 5px;
  background: #fff;
  padding: 10px;
  margin-right: 2%;
  box-shadow: 0 0 1px 1px rgba(221, 221, 221, 0.63);
}
.saramin:hover {
  background: rgb(241, 241, 241);
}
.email:hover {
  background: rgb(241, 241, 241);
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .content-title {
  font-weight: 500;
  font-size: 18px;
  }
  .sub-title {
    margin: 7% 0 5% 0;
    font-weight: 400;
    font-size: 14px;
  }
  .saramin, .email {
    font-size: 12px;
    cursor: pointer;
  }
}
.form {
  border-radius: 5px;
  display: none;
  position: fixed;
  z-index: 10;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background: #fff;
}
.formSub {
  width: 90%;
  background: #fff;
  margin: 0 auto;
}
.formBack {
  display: none;
  z-index: 1;
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(114, 114, 114, 0.705)
}
.form-title {
  background: rgb(235, 235, 235);
  font-size: 22px;
  padding: 3% 0 3% 3%;
  border-radius: 5px 5px 0 0;
}
.form-title span {
  font-weight: 600;
}
input ,textarea{
  width: 100%;
  border: none;
  resize: none;
  height: 20px;
  border-bottom: .5px solid rgb(63, 63, 63);
  font-size: 16px;
  margin: 10px 0;
}
textarea {
  background: rgb(235, 235, 235);
  height: 300px;
  border-radius: 5px 5px 0 0;
}
</style>