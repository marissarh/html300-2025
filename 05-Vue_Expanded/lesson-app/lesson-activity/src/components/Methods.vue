<script setup>
import { useCounter } from '@/composables/useCounter';
const getHeadLineMessage = (name) =>{
    return `Hello, ${name}`
}
const { count, increment, decrement } = useCounter()
</script>
<template>
    <div>
        <h1>{{ getHeadLineMessage('Kevin') }}</h1>
        <div>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
            <p>Counter: {{ count }}</p>
        </div>

    </div>
</template>