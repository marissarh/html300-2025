<script setup>
import { useCounter } from '@/composables/useCounter';
/*Destructure the return values from useCounter function, have access to values and methods */ 
const { count, increment, decrement } = useCounter()
</script>

<template>
    <main>
        <!--Using Ternary Operator to change the value of counter-->
        <div>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
            <p>Counter: {{ count }}</p>
        </div>
    </main>
</template>
<style scoped>
.address-card{
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}</style>