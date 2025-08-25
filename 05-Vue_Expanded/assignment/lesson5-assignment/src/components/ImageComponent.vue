<template>
    <div class="image-wrapper">
        <img 
        :src="src" 
        :alt="alt"
        :title="title"
        @click="toggleBorder"
        class="[hasBorder ? 'border border-secondary' : '']"/>
    </div>
</template>
<script>
import ImageMixin from './ImageMixin';


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
<style lang="scss">
.image-wrapper {
    text-align: center;
    margin-bottom: 1rem;

img{
    max-width: 50%;
    height: auto;
    
}}
</style>