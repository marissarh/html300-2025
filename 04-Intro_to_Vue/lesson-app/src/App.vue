<!--<script setup>
import { ref } from "vue";

 const text = ref("Hello Coders!!");

function changeText(event){
  text.value = event.target.value;
}

const hyperlink = ref('https://vuejs.org/')
</script> -->

<!-- <template>
 <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>{{ text }}</h1>

     Using methods in the <script> using directives, and triggering a method when an event occurs 
      v-on syntax example: -->
     <!--modeling data with v-model
     <input v-model="text" v-on:input="changeText"/>
     anchor tag with v-bind directive to bing a property
      <a v-bind:href="hyperlink">{{ hyperlink }}</a>
      
    
  </header>
</template>-->


<script setup>
import { ref } from "vue";


//show is a boolean, whether or not it's true of false
//const show = ref(true);

const ingredients = ref(["meat", "cheese", "veggies"])

</script>

<template>
  <main>
    <!--<button @click="show = !show">Toggle paragraph visibility</button>
     v-if show, if show is true then we will see the first <p> else we see the second <p>
    <p v-if="show">Can you see me?</p>
    <p v-else>Can you see this instead?</p>-->

    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
  </main>
</template>
<style scoped>
/*header {
  line-height: 1.5;
}*/
</style>
