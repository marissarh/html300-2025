<template>
  <div>
    <HeaderPage>
        <h1 class="text-primary">Welcome to the Images Page</h1>
    </HeaderPage>
    <ImagesPage />
  </div>
</template>

<script>
 import HeaderPage from './components/HeaderPage.vue';
 import ImagesPage from './pages/ImagesPage.vue';
export default {
  components:{
    HeaderPage,
    ImagesPage
  }
}
</script>

<style> 

h1{
  margin-top: 20px;
}
</style>
