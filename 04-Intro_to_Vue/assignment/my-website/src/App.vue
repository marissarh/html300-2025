<script >
import NavigationBar from "./components/NavigationBar.vue";
import FooterCo from "./components/FooterCo.vue";
import HeaderCo from "./components/HeaderCo.vue";


export default {
  name: 'App',
  components:{
  
    NavigationBar,
    FooterCo,
    HeaderCo
  }}



</script>

<template>
  <div class="d-flex flex-column min-vh-100">
  <HeaderCo />
  <NavigationBar />
 
  <main class="main">
    <router-view />
  </main>
   
    <FooterCo class="mt-auto"/>
  </div>
  
  
</template>


<style lang="scss">
@import '@/assets/styles/styles.scss';
</style>
