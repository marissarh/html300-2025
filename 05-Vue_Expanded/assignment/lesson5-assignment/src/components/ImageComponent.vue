<template>
    <div></div>
    <!--Add custom class in styles and add Bootstrap. Add dynamic binding; use props.-->
    <div class="image-wrapper mb-3">
        <img 
        :src="src" 
        :alt="alt"
        :title="title"
        @click="toggleBorder"
        :class="{bordered: hasBorder}"
        class= "responsive-img"/>
    </div>
</template>
<script>
//import reusable code
import ImageMixin from './ImageMixin';

//define props (src, alt, title)
export default {
    name: 'ImageComponent',
    mixins: [ImageMixin],
    props:{
        src:{
            type: String,
            required: true},

        alt: {
            type: String,
            required: true},
        title: {
            type: String,
            default: ''
        },
    }
}
</script>
<style  lang="scss">
@import '@/styles/styles.scss';


.image-wrapper img{
    max-width: 100%;
    height: auto;
    transition: border 0.3s ease;
    cursor: pointer;
}
.bordered {
    border: 10px solid $seaGreen;
}
</style>