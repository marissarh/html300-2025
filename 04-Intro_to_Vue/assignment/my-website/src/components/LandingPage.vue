
<script>
export default {
  name: 'LandingPage',

  data () {
    return {
      showAltText: false,
      altMainText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      sidebarText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      mainText: 'Lorem ipsum dolor sit,sed do eiusmod tempor incididunt ut labore. Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
  }
}
</script>
<template>
  
  <div>    
         <div class="body">
      <aside class="sidebar">
        <p>Sidebar</p>
        <p>{{ sidebarText }}</p>
      </aside>
        <main class="main">
          <p>Main Content</p>
          <!-- use one v-if v-else statement to change content-->
          <p class="main-content" v-if="showAltText">{{ altMainText }}</p>
          <p class="main-content" v-else>{{ mainText }}</p>
          <button @click="showAltText =!showAltText">
            Toggle Main Content
          </button>
            </main>
        </div>
          </div>
</template>



<style lang="scss">
@import '../assets/styles/colors.scss';
@import '../assets/styles/styles.scss';

</style>