
<script>
//import ImagesPage from './ImagesPage.vue'
import bootstrap from 'bootstrap-vue'

 const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach(t => {
         new bootstrap.Tooltip(t)
        })



export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>
<template>
  
  <!--<div class="hello">

    

    <aside class="sidebar">{{ text }}</aside>
        <input v-on:input="changeText"/>-->
        
    <div><h1>{{ msg }}</h1>

     <nav class=" nav">
            <ul class="nav__list">
                <router-link to="./HelloWorld.vue" class="tt nav__item" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to Landing page">Landing</router-link>
                <router-link to="./ImagesPage.vue" class="nav__item">Images</router-link>
                <router-link to="./AccordionPage.vue" class="nav__item">Accordion</router-link>
                <router-link to="./GridPage.vue" class="nav__item">Grid System</router-link>
            </ul>
        </nav>
        <div class="bodyIndex">
      <aside class="sidebar">Sidebar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, excepturi animi. Tempora quam laudantium amet distinctio illo, dignissimos recusandae sit?</aside>
        <slot>
        <main class="main">
            <p class="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe neque debitis facilis non quos, ducimus distinctio pariatur, fuga sit nam id placeat repellendus quod! Nihil dolorem sit inventore qui.</p>
        </main></slot>
        <footer class="footerIndex">Footer: This website was created by Marissa H</footer>
      </div></div>
    
</template>


<style lang="scss">
@import '../styles.scss';

</style>
