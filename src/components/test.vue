<template>
    <div id="app">
        <input type="checkbox" id="check">
        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
            <header class="mt-3 text-center">Cooperate Pay</header>
            <ul>
                <li class=""><a href="" >Dashboard</a></li>
                <li><a href="">Manage</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">Reports</a></li>
            </ul>
        </div>
        <section>
            <h1>fssfs</h1>
        </section>
    </div>
</template>
<style  scoped>
li{
    list-style: none;
    text-decoration: none;
}
.sidebar{
    position: fixed;
    left: -250px;
    width: 250px;
    height: 100vh;
    background-color: rgb(92, 13, 165);
    transition: all .5s ease;
}
.sidebar ul a{
    display: block;
    line-height: 79px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: white;
    transition: .4s;
}
ul li:hover a{
    padding-left: 50px;
}
label #btn, label #cancel{
    position: absolute;
    cursor: pointer;
}
label #btn{
    left: 40px;
    top: 25px;
    color: red;
    font-size: 35px;
    /* padding: 6px 12px; */
    transition: all .5s;
}
label #cancel{
    left: -195px;
    top: 17px;
    font-size: 60px;
    z-index: 1111;
    padding: 4px;
    color:red;
    padding: 4px 9px;
}
#check{
    display: none;
}
#check:checked ~ .sidebar{
    left: 0;
}
#check:checked ~ label #btn{
    left: 250px;
    opacity: 0;
    pointer-events: none;
}
#check:checked ~ label #cancel{
    left: 195px;
}
section{
    height: 100%;
}
</style>