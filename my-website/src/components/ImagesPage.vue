<script >
import HelloWorld from './HelloWorld.vue'
/*import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

 const tooltips = document.querySelectorAll('.tt')
       tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
       })*/

      //import HelloWorld from './components/HelloWorld.vue';
export default{
    components:{HelloWorld},
}
</script>
<template>

     
  <div>
  <HelloWorld>
    <slot>
    <main class="main ">
            <div class="row">
                <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
                    <img src="../assets/oceanRocks.jpg" alt="view of ocean and rock structured arches" class="img-fluid">
                </div>
            </div>
            <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
                <img src="../assets/beachWalkway.jpg" alt="view of wooden bridge/walkway on the sand" class="img-fluid">
            </div>
        
        <div class="col-sm-6 col-xs-3 p-2 rounded mx-auto d-block">
            <img src="../assets/lifeguardBooth.jpg" alt="lifeguard station on the beach" class="img-responsive" width="500" height="500">
        
    </div></main></slot>
  </HelloWorld>
</div>
         

</template>
<style lang="scss">
@import '../styles.scss';

</style>
