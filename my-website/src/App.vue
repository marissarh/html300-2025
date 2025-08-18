<script setup>
//import { ref } from "vue";
import HelloWorld from './components/HelloWorld.vue';
//import ImagesPage from './components/ImagesPage.vue';
//import AccordionPage from './components/AccordionPage.vue';
//import GridPage from './components/GridPage.vue';

//const text = ref("Hello");
/*const routes = {
  "/": HelloWorld,
  "/ImagesPage": ImagesPage,
  "/AccordionPage": AccordionPage,
  "/GridPage": GridPage
}

/*const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed (() => {
  return routes[currentPath.value.slice(1) || "/"] || HelloWorld;
});

const text = ref("")
function changeText(event){
  text.value = event.target.value;
}*/

/*export default {
  name: 'App',
  components: {
    HelloWorld,

  }
}*/

/*const show = ref(true);*/



</script>

<template >
  <!--<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div>
  <div>{{ text }}</div>
  <div class="header">
  <HelloWorld msg="Responsive Website"/>
  </div>
 </div>
   
  
</template>


<style lang="scss">

</style>
