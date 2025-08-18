
<script>

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
        
        <main class="main">
            <p class="main-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe neque debitis facilis non quos, ducimus distinctio pariatur, fuga sit nam id placeat repellendus quod! Nihil dolorem sit inventore qui.</p>
        </main>
        <footer class="footerIndex">Footer: This website was created by Marissa H</footer>
      </div></div>
    
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../colors.scss';

@mixin align{ 
    align-content: center;
    text-align: center;
    color: $cream;
    font-size: 30px;
}

.sidebar, .main{
  @include align()
}
// Colors



.bodyIndex{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 3fr;
    grid-template-areas: 
    "header header"
    "nav nav"
    "main main"
    "footer footer" ;
}

.sidebar, .footer, .main, .header {
    @include align()
}

.header{
    grid-area: header;
    background-color: $brown;
    font-weight: 100;
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
.main{
    background-color: $softCream;
    
}
.footerIndex{
    grid-area: footer;
    background-color: $brown;
    padding-top:20px;
    
}
</style>
