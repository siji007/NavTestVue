<template>
    <div class="bg-red-darker">
        <nav>
            <label class="logo">Design X</label>
            <ul class="nav-links">
                <li><a class="active" href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FeedBack</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <label id="icon">
                <i class="fas fa-bars" @click="clickButton"></i>
                
                <!-- <div class="harmburger" @click="clickButton()">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div> -->
            </label>
        </nav>
        <p>Hi there!</p>
    </div>
</template>
<script>

    export default{
        
    }
</script>
<style scoped>
*{
    padding:0;
    margin:0;
    text-decoration: none;
    list-style-image: none;
}
body{
    font-family: 'Helvetica Neue', sans-serif;
}
nav{
    height: 90px;
    width: 100%;
    background: #34495e;
}
.line{
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px;
}
.harmburger{
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 3%;
    z-index: 2;
    transform: translate(-3%,3px);
}
label.logo{
    font-size: 35px;
    font-weight: bold;
    color: white;
    padding: 0 100px;
    line-height: 80px;
}    
nav ul{
    float:right;
    margin-right: 40px;
}
nav li{
    display: inline-block;
    margin: 0 8px;
    line-height: 90px;
}
nav a{
    color:white;
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid transparent;
    padding: 7px 10px;
    border-radius: 3px;
    text-decoration: none;
}
a.active,a:hover{
    border:1px solid white;
    transition: .5s;
}
nav #icon{
    color:white;
    font-size: 30px;
    line-height: 80px;
    float: right;
    margin-right: 40px;
    cursor: pointer;
    display: none;
    margin-right: 40px;
}
@media (max-width: 1031px){
    label.logo{
        font-size: 32px;
        padding-left: 30px;
        
    }
    nav ul{
        margin-right: 20px;
    }
    nav a {
        font-size: 17px;
    }
}
@media (max-width:909px) {
    nav #icon{
        display: block;
    }
    nav ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2f3640;
        text-align: center;
        top: 150px;
        left: -100%;
        transition: all .5s;
    }
    nav li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav a{
        font-size: 20px;
    }
    a.active,a:hover{
        border: none;
        color: turquoise;
    }
    .nav-links.show{
        left: 0;
    }
}
</style>
<script>
export default {
    data(){
        return{
            
        }
        },
    methods:{
        clickButton(){
            let hamburger =  document.getElementById("icon");
            let navLinks = document.querySelector(".nav-links");
            hamburger.addEventListener("click",()=>{
                alert("Hey man!!");
                // navLinks.classList.toogle("show");
            })
            }
        }
}


</script>