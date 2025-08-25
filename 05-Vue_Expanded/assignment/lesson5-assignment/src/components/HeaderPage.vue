<template>
  <!--Add Header to Pages by using <slot>-->
  <header class="p-2 text-center headerContent">
    <slot />
  </header>
</template>

<script>

export default {
  name: 'HeaderPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
