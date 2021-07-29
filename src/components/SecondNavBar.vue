<template>
    <div>
        <nav>
            <div class="harmburger" @click="clickHam()">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Projects</a></li>               
            </ul>
        </nav>
        <section class="landing">
            <h1>Dots</h1>
            <p>Another day getting more efficient and productive minutes by minutes,day by day,seconds by seconds. </p>
        </section>
        <div class="container">
            <h1> Testing the new project out sasdasfasrfasfafasf
            afafasfafas
            familyafasfafasf
            asfasrfafafasfaf
            asfafagagagag
            fafagagadgag
            agsgagagatwetwetgw
            agagetwetwegwe
             </h1>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    box-sizing: border-box;
}
nav{
    height:10vh;
    background: #54bb45;
}
.nav-links{
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-around;
    float:right;
    height:100%;
}
.nav-links li a{
    color:white;
    text-decoration: none;
    font-size: 16px;
    
}
body{
    font-family: sans-serif;
}
   
    .landing{
        height: 30vh;
        display: flex;
    }
    @media(max-width:990px){
        /* body{
            display: none;
        } */
         .harmburger{
             position: absolute;
             cursor: pointer;
             right: 5%;
             top: 3%;
             z-index: 2;
             /* transform: translate(-5%,-50%); */
         }
        .line{
            width: 30px;
            height: 3px;
            background: white;
            margin: 5px;
        }
        .nav{
            position: relative;
        }
        .nav-links{
            position: fixed;
            height:100vh;
            width:100%;
            flex-direction: column;
            background: blue;
            align-items: center;
            clip-path: circle(10px at 90% -10%);
            -webkit-clip-path:circle(10px at 90% -10%);
            transition: all 1s ease-out;
        }
        .nav-links.open{
             clip-path: circle(1000px at 90% -10%);
            -webkit-clip-path: circle(1340px at 90% -10%);
        }
        .landing{
            flex-direction: column;
        }
    }
</style>
<script>
    export default {
        data(){
            return{
                //  hamburger: document.querySelector(".harmburger"),
                //  navLinks : document.querySelector(".nav-links"),
                //  links : document.querySelectorAll(".nav-links li"),
            }
        },
        methods:{
            clickHam(){
                
                let hamburger = document.querySelector(".harmburger");
                let navLinks = document.querySelector(".nav-links");
                hamburger.addEventListener("click",()=>{
                    navLinks.classList.toggle("open")
                })
            }
            
        },
    }
</script>