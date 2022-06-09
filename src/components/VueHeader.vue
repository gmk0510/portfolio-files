<template>
    <header>
        <div class="toobar">
            <div class="logo">
                <img :src="require('@/assets/logo.png')" alt="">
            </div>
            <div><img v-on:click="toggleMenu" class="menuToggle" :src="require('@/assets/menu.png')" alt=""></div>
            <ul class="navigation"> <!--  .menuIcon 에 넣어서 toggle 형식 메뉴  -->
                <li><a href="#technology" v-on:click="toggleMenu">혁신기술</a></li>
                <li><a href="#accessory" v-on:click="toggleMenu">제품소개</a></li>
                <li><a href="#work-bg" v-on:click="toggleMenu">휴랜워크</a></li>
                <li><a href="#news" v-on:click="toggleMenu">보도자료</a></li>
                <li><a href="#kakaomapWrap" v-on:click="toggleMenu">회사소개</a></li>
            </ul>
        </div>

        <div class="topBtn"><a href="#home">▲</a></div>
    </header>
</template>

<script>
export default {
    methods: {
        toggleMenu: function() {
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active')
        },
    },
}
window.addEventListener('scroll', function(){ 
        const toobar = document.querySelector('.toobar'); 
        toobar.classList.toggle("sticky", window.scrollY > 0);
    }); /* △ header tag에 Y값 즉 상하로 scroll 할 시 class sticky 추가됨 */
    window.addEventListener('scroll', function(){ 
        const toobar = document.querySelector('.topBtn'); 
        toobar.classList.toggle("upActive", window.scrollY > 0);
    }); /* △ header tag에 Y값 즉 상하로 scroll 할 시 class sticky 추가됨 */
</script>

<style scoped>
.topBtn {
    background: rgba(233, 233, 233, 0.395);
    display: inline-block;
    position: absolute;
    bottom: -1300%;
    right: 10px;
    transition: .3s;
    border-radius: 5px;
    padding: 1px;
}
.topBtn.upActive {
    bottom: -800%;
}
header {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
}
.toobar {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 200px;
    background: rgba(238, 238, 238, 0.3);
    transition: .5s;
}
.navigation {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.navigation li {
    margin-left: 2rem;
}
.logo {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin: 20px 0;
}
.sticky {
    transition: .5s;
    /* padding: 7px 200px; */
    background: rgba(221, 221, 221, 0.651);
}
a {color: #fff}
a:hover {
    color: black;
}
.menuToggle {display: none;}
@media (max-width: 1000px) {
    .menuToggle {
        display: block;
        width: 30px;
        height: 25px;
        cursor: pointer;
    }
    .navigation {
        position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        background: #fff;
        transition: .3s;
        justify-content:flex-start;

    }
    .navigation li:nth-child(1) {margin-top: 60px;}
    .navigation li {
        margin-bottom: 70px;
        margin-left: 0;
    }
    a {
        color: black;
        font-weight: bold;
        position: relative;
        transition: .3s;
    }
    a::after {
        position: absolute;
        content: '';
        width: 0;
        height: .18rem;
        left: 0;
        top: 1.5rem;
        background: black;
        transition: .3s;
    }
    a:hover::after {
        width: 100%;
    }
    .navigation.active {
        top: 80px;
    }
    .toobar {
        padding: 5px 40px;
    }
}
@media (min-width: 1001px) and (max-width: 1200px){
    .toobar {
        padding: 5px 100px;
    }
}
@media (max-width: 730px) {
    .toobar {
        padding: 0 10px;
        margin-top: -10px;
    }
    .logo {
        font-size: 23px;
    }
    .menuToggle {
        width: 25px;
        height: 20px;
    }
    .navigation.active {
        top: 60px;
    }
    .topBtn.upActive {
        bottom: -1100%;
    }
}
</style>