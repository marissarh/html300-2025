<template>
  <div>
    <!--Shared Header-->
    <HeaderPage >
        <h1></h1>
    </HeaderPage>
    <router-view />
    <!--Shared Footer-->
    <FooterComponent class="p-4"/>
  
  </div>
</template>

<script>
 import HeaderPage from './components/HeaderPage.vue';
 import FooterComponent from './components/FooterComponent.vue';
 //import ImagesPage from './pages/ImagesPage.vue';
export default {
  name: 'App',
  components:{
    HeaderPage,
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
