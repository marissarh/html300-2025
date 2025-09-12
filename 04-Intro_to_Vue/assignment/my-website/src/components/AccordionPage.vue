<template>
     <!--Use Bootstrap to add padding to container and items-->
       <div class="container p-4">
        <!-- use a v-for to iterate through an object to fill out the content in an accordion-->
        <div class="accordion p-3" id="accordionExample" >
          <div class="accordion-item p-2"
          v-for="(item, index) in accordionItems" :key="index">
          <h2 class="accordion-header" :id="'heading' + index">
          <button class="accordion-button"
          :class="{collapsed: activeIndex !== index}"
          type="button" @click="toggle(index)" :aria-expanded="activeIndex === index"
          :aria-controls="'collapse' + index">
          {{ item.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + index" class="accordion-collapse collapse"
          :class="{ show: activeIndex === index}"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{ item.content }}
        </div>
      </div>
      </div>
    </div>
        </div>
</template>
<script>


export default {
  name: 'AccordionPage',
 
  data() {
    return {
      activeIndex: 0,
      accordionItems: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.'
      },
      {
        title: 'Item 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.'
      },
      {
        title: 'Item 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.'
      },
      {
        title: 'Item 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.'
      },
      {
        title: 'Item 5',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.'
      },
    ],
  };
},
methods: { toggle(index){
  this.activeIndex = this.activeIndex === index ? null: index;
}}
};
</script>
<style lang="scss">
// Colors
@import '../assets/styles/colors.scss';
@import '../assets/styles/styles.scss';
</style>