<template>
<!-- ㅅㅂ안댐 -->
  <div id="kakaomapWrap">
    <div id="kakaomap">
      <div class="titleBx">
        <span class="titleMain">HULAN</span><span class="titleSub">Info</span> 
      </div>
      <hr>
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=883c65762e7588dad85a22764fb1627c";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.3812944480531, 126.64234899103639),
        level: 2,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      this.displayInfoWindow();
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="width:350px; padding:14px 4px; display:flex; align-items: center;" ><div style="flex: 2"><img style="width:80px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAsCAMAAABlsKfLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUdwTF1YVolJP/8xAF1YVl1YVmFEPl1YVl1ZVV1ZVv83AP82AFlWUVtXVV1XVf80AFxXVPw3Al1YVV1YVltXVP82AP84AP84AKpJNP83ALpGI61JK15ZV/85AH9SROfF/DcAAAAcdFJOUwCXER7grwf4g/BQNB1Odkdiar/POn7x6VHC/f4PAmCpAAAByUlEQVRYw+3W23LCIBAGYIIEgk1ozEGnLfb9H7PALgfTQ8CpV/JfOEaJ32SzWSSkpqam5lkitdYtvn+9mryQznykabqgIQf71fHmTC7sOi16d9QJE+W/a80B+0UUd4u9hnQg2rfSn9Wag/8XRxTnKAblMSJDUfAo6mFfVCa4jBxWk0Om6IuqtUpEvKt/iaNJEE8mNFMc7KpR+rKiqKfHVXWyq3r7KlMR6voIsYdGUR4JouxzRG5COD0WiFBUgGcUhTuzyRCFlLKll8u5QGxdUQmZsVudyCVe8p7olq1XSJ7oBo6XrOxE0tuPGc8RJ3ouEgc/bRYNjQAiaaCu035Vl/Vski/aXxY0DALuRW4PxbIntpQSalLQOc5pbBiUFUWyuLpOdzwdvb9h+idx0bfpgghXr8vE0fe4/wEzxzZitxElDyL387ZAhAtQdkBz2CCWrTg7BuNKEkRoqjIRdwWmBsX8uU5cTz7uuecQmAVRhLKUidu7NKAY8pFsTDh2EpHKYhGmZdIWJsdU/PTzO870NopY1yKRjDI2xQg9+5aIcVsKAEtEGIEs/5+VK5WapDCjYVLhMbkE8B2m+Le9OVw2DLv6t7WmpuZp8gXmTGqqPhNXaQAAAABJRU5ErkJggg=="/></div> <div style="flex: 8">인천광역시 연수구 인천타워대로 99, <br/>애니오션빌딩 9층</div></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(37.3812944480531, 126.64234899103639), //인포윈도우 표시 위치입니다
        iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 95%;
  max-width: 1400px;
  height: 500px;
  border-radius: 10px;
  margin: 0 auto;
}
#kakaomap {
  width: 100%;
}
#kakaomapWrap {
  display: flex;
  height: 80vh;
  align-items: center;
  position: relative;
}
hr{position: absolute; left: 5%; width: 70%;margin-bottom: 35px;margin-top: -45px;}
.titleBx {
  position: absolute;
  left: 5%;
  top: 7%;
}
@media screen and (min-width: 1700px) {
  .titleBx {
    left: 15%;
  }
  hr{left: 15%;}
}
</style>