<template>
    <div>
    <header>
        <nav>
            <ul>
                
                <li>
                    <RouterLink to="/images">Images</RouterLink>
                </li>
                <li>
                    <RouterLink to="/accordion">Accordion</RouterLink>
                </li>
                <li>
                    <RouterLink to="/grid">Grid</RouterLink>
                </li>
            </ul>
        </nav>
         <!-- <RouterLink to="/landing" class="tt btn btn-outline-secondary mb-3" v-b-tooltip.hover title="Tooltip directive content">
    Back to Landing Page
          </RouterLink>-->

        <RouterLink to="/landing" class="tt btn btn-outline-secondary mb-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to back to Landing page">Landing Page </RouterLink>
    </header>
    
    <slot />
    
</div>
    </template>

    <script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { Tooltip } from 'bootstrap'

onMounted(() =>{
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => {
    new Tooltip(el)
  })
})



       </script>
    <style scoped>
nav{
    background-color: rgb(241, 241, 241);
    padding: 10px;

}
ul{
    list-style-type: none;
    display: flex;
    justify-content: start;
    gap: 12px;
}
li{

}
</style>