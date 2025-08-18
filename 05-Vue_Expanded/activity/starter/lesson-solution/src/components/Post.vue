<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    id: Number,
    author: String,
    title: String,
    category: String,
    excerpt: String,
    likes: Number
})

const likes = ref(props.likes)

const incrementLikes = () => {
    likes.value++
}
</script>
<template>
    <div class='post'>
        <h2>{{ props.title }}</h2>
        <p>By: {{ props.author }}</p>
        <p>Category: {{ props.category }}</p>
        <p>{{ props.excerpt }}</p>
        <p>likes: {{ likes }}</p>
        <button @click="incrementLikes">Like</button>
    </div>
</template>
<style scoped>

.post{
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
}
</style>