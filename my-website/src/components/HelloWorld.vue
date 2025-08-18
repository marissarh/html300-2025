
<script>
import bootstrap from 'bootstrap-vue'
import { Router } from 'express'

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
                <li class="nav__item"><a href="./HelloWorld.vue" class="tt" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to Landing page">Landing</a></li>
                <li class="nav__item"><a href="./ImagesPage.vue" >Images</a></li>
                <li class="nav__item"><a href="./AccordionPage.vue">Accordion</a></li>
                <li class="nav__item"><a href="./GridPage.vue">Grid System</a></li>
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
