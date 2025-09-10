<template>
  <div>
    <!--Shared Header-->
    <HeaderPage >
        <h1></h1>
    </HeaderPage>
  
    <NavigationBar />
    <router-view />
    <!--Shared Footer-->
    <FooterComponent class="p-4"/>
  
  </div>
</template>

<script>
 import HeaderPage from './components/HeaderPage.vue';
 import FooterComponent from './components/FooterComponent.vue';
import NavigationBar from './components/NavigationBar.vue';
 //import ImagesPage from './pages/ImagesPage.vue';
export default {
  name: 'App',
  components:{
    HeaderPage,
    NavigationBar,
    FooterComponent
    //ImagesPage
  }
}
</script>

<style> 

h1{
  margin-top: 20px;
}
</style>
