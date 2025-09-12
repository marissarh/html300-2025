<template>
     <div>
    <!--Use Bootstrap to determine coloumn/row, padding, and background-color-->
    <div class="container-md">
     <div class="row">
            
                <p class="col p-5 mt-3 bg-light"  data-bs-toggle="tooltip" 
                data-bs-title="Tooltip 3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laudantium molestias sapiente quia
                    accusantium explicabo fugit recusandae culpa adipisci modi.</p>
        </div>
        <div class="row">
            
            <p class="col p-5 bg-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laudantium molestias sapiente quia
                accusantium explicabo fugit recusandae culpa adipisci modi.</p>
    </div>
    <div class="row">
            
        <p class="col p-5 bg-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laudantium molestias sapiente quia
            accusantium explicabo fugit recusandae culpa adipisci modi.</p>
</div>
<div class="row">
    <div class="col-12 col-md-8 bg-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
    <div class="col-6 col-md-4 bg-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
  </div>

  <div class="row">
    <div class="col-6 col-md-4 bg-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
    <div class="col-6 col-md-4 bg-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
    <div class="col-6 col-md-4 bg-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
  </div>
  
 
  <div class="row">
    <div class="col-6 bg-warning m-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
    <div class="col-6 bg-warning m-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique?</div>
  </div>
</div>

</div>
</template>
<script>




/*const tooltips = document.querySelectorAll('.tt')
       tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
       })*/

export default {
  name: 'GridPage',
  
  
}
</script>
<style lang="scss">
// Colors
@import '../assets/styles/colors.scss';
@import '../assets/styles/styles.scss';


</style>