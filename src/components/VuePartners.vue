<template>
  <div id="partners">
    <div class="titleBx">
      <span class="titleMain">HULAN</span><span class="titleSub">partners</span> 
    </div>
    <div class="autoSlideWrap">
      <div class="itemBx">
        <div class="items">
          <img src="@/assets/partners/10_1_partners_한신공영.png" alt="">
        </div>
        <div class="items">
          <img src="@/assets/partners/10_2_partners_한진중공업.png" alt="">
        </div>    
        <div class="items">
          <img src="@/assets/partners/10_3_partners_한화건설.png" alt="">
        </div>
        <div class="items">
          <img src="@/assets/partners/10_4_partners_LH한국토지주택공사.png" alt="">
        </div>
        <div class="items">
          <img src="@/assets/partners/10_5_partners_국가철도공단.png" alt="">
        </div>
        <div class="items">
          <img src="@/assets/partners/10_6_partners_금호건설.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.startMove()
    },
    data: function() {
        return {
            leftVal: 0
        }
    },
    methods: {
        startMove: function() {
            setTimeout(()=> {
                this.leftVal += 33.33333;
                document.querySelector('.itemBx').style.left= -this.leftVal+"%";

                setTimeout(()=> {
                    this.leftVal += 33.33333
                    document.querySelector('.itemBx').style.left= -this.leftVal+"%"

                    setTimeout(()=> {
                        this.leftVal += 33.33333
                        document.querySelector('.itemBx').style.left= -this.leftVal+"%"

                        setTimeout(()=> {
                            this.leftVal = 0;
                            document.querySelector('.itemBx').style.left= -this.leftVal+"%"
                            this.startMove();
                        }, 3000);
                    }, 2500);
                }, 2000);
            }, 1000);
        }
    }
}
</script>

<style scoped>
.titleBx {
  position: absolute;
  left: 5%;
  top: 9%;
}
#partners {
  position: relative;
    margin-top: 40px;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.autoSlideWrap {
    width: 90%;
    height: 100px;
    border-top: 1px solid rgb(219, 219, 219);
    border-bottom: 1px solid rgb(219, 219, 219);
    position: relative;
    overflow: hidden;
}
.itemBx {
    display: flex;
    align-items: center;
    height: 100%;
    width: 200%;
    position: absolute;
    top: 0; left: 0;
    transition: .3s;
}
.itemBx .items {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.itemBx .items img {
    max-width: 40%;
}
</style>