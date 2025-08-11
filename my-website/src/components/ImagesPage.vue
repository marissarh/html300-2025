<script >
/*import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

 const tooltips = document.querySelectorAll('.tt')
       tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
       })*/

      //import HelloWorld from './components/HelloWorld.vue';

</script>
<template>

     
  
  
    <body class="bodyImg">
        <h1 class="headerImg">Responsive Bootstrap Website</h1>
        <nav class=" navImg">
            <ul class="navImg__listImg">
                <li class="navImg__itemImg"><a href="./HelloWorld.vue" class="tt" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to Landing page">Landing</a></li>
                <li class="navImg__itemImg"><a href="./ImagesPage.vue" >Images</a></li>
                <li class="navImg__itemImg"><a href="./AccordionPage.vue">Accordion</a></li>
                <li class="navImg__itemImg"><a href="./GridPage.vue">Grid System</a></li>
            </ul>
        </nav>
        <aside class="sidebar">Sidebar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, excepturi animi. Tempora quam laudantium amet distinctio illo, dignissimos recusandae sit?</aside>
        
        <main class="container mainImg">
            <div class="row">
                <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
                    <img src="../assets/oceanRocks.jpg" alt="view of ocean and rock structured arches" class="img-fluid">
                </div>
            </div>
            <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
                <img src="../assets/beachWalkway.jpg" alt="view of wooden bridge/walkway on the sand" class="img-fluid">
            </div>
        
        <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
            <img src="../assets/lifeguardBooth.jpg" alt="lifeguard station on the beach" class="img-responsive" width="500" height="500">
        
    </div></main> 
            <!--"main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe neque debitis facilis non quos, ducimus distinctio pariatur, fuga sit nam id placeat repellendus quod! Nihil dolorem sit inventore qui.</div>
        -->
       
        <footer class="footerImg mb-5 pb-4">
            Footer: This website was created by Marissa H</footer>
        </body>
</template>
<style lang="scss">
// Colors
@import '../colors.scss';


@mixin align{ 
    align-content: center;
    text-align: center;
    color: $cream;
    font-size: 30px;
}

.bodyIndex, .bodyImg, .bodyAccor{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto auto 2fr;
    grid-template-areas: 
    "header header"
    "nav nav"
    "main main"
    "footer footer" ;
}

.sidebar, .footerIndex, .main, .header, .footerAccor, .footerImg, .headerAccor, .headerImg, .mainAccor{
    @include align()
}

.header{
    grid-area: header;
    background-color: $brown;
    font-weight: 100;
    margin: 0;
    padding: 20px;
    
}


.nav{
    grid-area: nav;
    background-color: $seaGreen;
    font-size: 25px;
    margin: 0;
     
    &__list{
       width: 100%;
       text-align: center;
       

    }
    &__item{
    list-style: none;
    font-weight: 300;
    display: inline-block;
    padding-left: 30px;
    padding-right: 30px;
    
}
&__item a{
    text-decoration: none;
    color: $cream;
}
}
.sidebar{
    background-color: $softBrown;
}
.main, .mainImg, .mainAccor{
    background-color: $softCream;
    
}
.footerIndex, .footerAccor, .footerImg{
    grid-area: footer;
    background-color: $brown;
    padding: 15px;
}

/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
