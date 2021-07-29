<template>
    <div id="app">
        <div id="content">

            <span class="slide">
                <a href="#" @click="openSlideMenu">
                    <i id="bars" class="fas fa-bars"></i>
                </a>
            </span>

            <div id="menu" class="nav">
                <a href="#" class="close" @click="closeSlideMenu">
                    <i class="fas fa-times">
                    </i>
                </a>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <h1> Testing out my navbars </h1>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods: {
            openSlideMenu(){
                
                document.getElementById('menu').style.width = '250px';
                document.getElementById('content').style.width = '250px';

                let menu =  document.getElementById('bars');
                menu.addEventListener("click",()=>{
                    document.getElementById('menu').style.width = '0';
                    document.getElementById('content').style.width = '0';
                })
            },
            closeSlideMenu(){
                document.getElementById('menu').style.width = '0';
                document.getElementById('content').style.width = '0';
            },
        },
    }
</script>
<style scoped>
    body{
        overflow-x:hidden;
    }
    .nav{
        position:fixed;
        height:100%;
        width:0;
        z-index:1;
        background-color:#111;
        top:0;
        left:0;
        opacity: .9;
        overflow-x:hidden;
        padding-top:10px;
        transition: 0.7s;
    }
    .nav a{
        display:block;
        padding: 20px 30px; /*topBottom and leftRight*/
        font-size:25px;
        text-decoration:none;
    }
    .nav a:hover{
        color:#fff;
        transition: 0.4s;
    }
    .nav .close{
        position:absolute;
        top:0;
        right:2px;
        margin-left:50px;
    }
    .slide{
        display:block;
    }
    .slide a{
        color:#000;
        font-size:30px;
    }
    #content{
        padding:20px;
        transition: margin-left 0.7s;
        overflow:hidden; /*so that the text will not drop*/
        width:100%
    }
</style>