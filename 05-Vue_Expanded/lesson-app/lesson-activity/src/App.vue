<script setup>
import Ternary from './components/Ternary.vue';
import TernaryWithComposable from './components/TernaryWithComposable.vue';
import Methods from './components/Methods.vue';
import SlotChildComponent from './components/SlotChildComponent.vue'
import NamesSlotsComponent from './components/NamesSlotsComponent.vue';
</script>

<template>
  <div>
  <Ternary />
  <TernaryWithComposable />
  <Methods />
  <SlotChildComponent>
    <div class="address-card">
      <h2>Address Card</h2>
      <p>123 Main St</p>
      <p>Springfield, IL 62701</p>
    </div>
  </SlotChildComponent>

  <NamesSlotsComponent>
    <template v-slot:header>
      <h2>Header Slot</h2>
    </template>
    <h1>Default Slot</h1>
    <template v-slot:footer>
      <h2>Footer Slot</h2>
    </template>
  </NamesSlotsComponent>
  </div>

</template>

<style scoped>
.address-card{
  background-color:rgb(223, 213, 200);
  padding: 2rem;

}
</style>
