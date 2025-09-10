
<script>


export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>
<template>
  <!--add input box-->
  <!--<div class="hello">

    

    <aside class="sidebar">{{ text }}</aside>
        <input v-on:input="changeText"/>-->
        
    <div><h1>{{ msg }}</h1>
<!--navBar-->
     <nav class=" nav">
            <ul class="nav__list">
                <router-link to="/" class="nav__item" v-b-tooltip.hover.left title="Click to go to Landing page">Landing</router-link>
                <router-link to="/images" class="nav__item">Images</router-link>
                <router-link to="/accordion" class="nav__item">Accordion</router-link>
                <router-link to="/grid" class="nav__item">Grid System</router-link>
            </ul>
        </nav>
        <div class="bodyIndex">
      <aside class="sidebar">Sidebar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, excepturi animi. Tempora quam laudantium amet distinctio illo, dignissimos recusandae sit?</aside>
        
        <main class="main">
            <p class="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe neque debitis facilis non quos, ducimus distinctio pariatur, fuga sit nam id placeat repellendus quod! Nihil dolorem sit inventore qui.</p>
        </main>
        <footer class="footerIndex">Footer: This website was created by Marissa H</footer>
      </div></div>
    
</template>


<style lang="scss">
@import '../styles.scss';

</style>
