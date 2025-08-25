<template>
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <ImageComponent 
        :src="BeachPath"
        alt="image of beach pathway"
        title="Click to toggle border"
        />
        <ImageComponent 
        :src="LifeguardStation"
        alt="image of lifeguard station on the beach"
        title="Click to toggle border"
        />
        <ImageComponent 
        :src="OceanRocks"
        alt="image of huges arches made of rock in the ocean"
        title="Click to toggle border"
        />
    </div>
    </div>
</template>
<script>
import ImageComponent from '../components/ImageComponent.vue';
import BeachPath from '../assets/images/BeachPath.jpg';
import LifeguardStation from '../assets/images/LifeguardStation.jpg';
import OceanRocks from '../assets/images/OceanRocks.jpg';
export default{
    name: 'ImagesPage',
    components:{
        ImageComponent
    },
    data(){
        return {
            BeachPath,
            LifeguardStation,
            OceanRocks
        }
    }
}
</script>