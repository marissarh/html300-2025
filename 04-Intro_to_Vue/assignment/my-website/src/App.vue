<template>
  <!--<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div class="header">
  <HelloWorld msg="Responsive Website"/>
       <nav class=" navImg">
            <ul class="navImg__listImg">
                <li class="navImg__itemImg"><a href="./HelloWorld.vue" class="tt" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to Landing page">Landing</a></li>
                <li class="navImg__itemImg"><a href="./ImagesPage.vue" >Images</a></li>
                <li class="navImg__itemImg"><a href="./AccordionPage.vue">Accordion</a></li>
                <li class="navImg__itemImg"><a href="./GridPage.vue">Grid System</a></li>
            </ul>
            <component :is="currentView"/>
        </nav>
      <aside class="sidebar">Sidebar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, excepturi animi. Tempora quam laudantium amet distinctio illo, dignissimos recusandae sit?</aside>
        
        <main class="main">
            <p class="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe neque debitis facilis non quos, ducimus distinctio pariatur, fuga sit nam id placeat repellendus quod! Nihil dolorem sit inventore qui.</p>
        </main>
        <footer class="footerIndex">Footer: This website was created by Marissa H</footer></div>

  
  
         </template>

<script setup>
import { ref, computed } from "vue";
import HelloWorld from './components/HelloWorld.vue';
import ImagesPage from './components/ImagesPage.vue';
import AccordionPage from './components/AccordionPage.vue';
import GridPage from './components/GridPage.vue';

const routes = {
  "/": HelloWorld,
  "/ImagesPage": ImagesPage,
  "/AccordionPage": AccordionPage,
  "/GridPage": GridPage
}

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed (() => {
  return routes[currentPath.value.slice(1) || "/"] || HelloWorld;
});
/*export default {
  name: 'App',
  components: {
    HelloWorld,

  }
}*/

</script>

<style lang="scss">
// Colors
@import '../src/colors.scss';


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
