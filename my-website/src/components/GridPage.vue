<template>
     <div>
        <h1>{{ msg }}</h1>
     <!--<nav class=" navImg">
            <ul class="navImg__listImg">
                <li class="navImg__itemImg"><a href="./HelloWorld.vue" class="tt" data-bs-toggle="tooltip" data-bs-placement="left" title="Click to go to Landing page">Landing</a></li>
                <li class="navImg__itemImg"><a href="./ImagesPage.vue" >Images</a></li>
                <li class="navImg__itemImg"><a href="./AccordionPage.vue">Accordion</a></li>
                <li class="navImg__itemImg"><a href="./GridPage.vue">Grid System</a></li>
            </ul>
        </nav>--></div>
</template>
<script>


/*const tooltips = document.querySelectorAll('.tt')
       tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
       })*/

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
// Colors
@import "../styles.scss"
</style>
