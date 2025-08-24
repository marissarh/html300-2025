<template>
    <div>
        <img 
        :src="src" 
        :alt="alt"
        :title="title"
        @click="toggleBorder"
        class="['img-fluid', hasBorder ? 'border border-secondary' : '']"/>
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
<style></style>