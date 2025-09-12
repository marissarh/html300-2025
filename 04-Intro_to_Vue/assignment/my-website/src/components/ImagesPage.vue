<script >
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
    name: 'ImagesPage',

    data() {
        return {
            images: [
                {
                    //require image data
                    src: require('../assets/images/oceanRocks.jpg'),
                    alt: 'view of ocean and rock structured arches'
                },
                {
                    src: require('../assets/images/beachWalkway.jpg'),
                    alt: 'view of wooden bridge/walkway on the sand'
                },
                {
                    src: require('../assets/images/lifeguardBooth.jpg'),
                    alt: 'lifeguard station on the beach'
                }
            ]
        }
    }
}

</script>
<template>
    <div>
    
    <div class="container">
        <!--use a v-for loop to iterate through an array of images-->
    <div class="row">
        <div v-for="img in images"
        :key="img.alt"
        class="col-md-8 col-xs-3 p-2 rounded mx-auto d-block">
        <b-img
        :src="img.src"
        :alt="img.alt"
        fluid
        /></div>
    </div>
</div>
   
    </div>
</template>
<style lang="scss">
// Colors
@import '../assets/styles/colors.scss';
@import '../assets/styles/styles.scss'