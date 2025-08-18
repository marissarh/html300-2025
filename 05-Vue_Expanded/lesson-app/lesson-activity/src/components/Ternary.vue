<script setup>
import { ref } from 'vue'
const counter = ref(0)
</script>
<template>
    <main>
        <div>
            <button @click="counter++">Increment</button>
            <button @click="counter > 0 ? counter-- : 0">Decrement</button>
            <p>Counter: {{  counter }}</p>
        </div>
    </main>
</template>

<style scoped>
.address-card{
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>