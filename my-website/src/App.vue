<script>

import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {HelloWorld},
  
  }



</script>

<template >
  
  <div>

  <div id="app">
  <div class="header">
  <HelloWorld msg="Responsive Website"/></div>
<router-view />
    
  </div>
 </div>
   
  
</template>


<style lang="scss">

</style>
