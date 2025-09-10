<template>
   
        <!--Add heading -->
   <HeaderPage>
        <h1 class="text-primary">View Accordion List</h1>
    </HeaderPage>
    <div class="mainContent">
     <div class="container p-4 d-flex justify-content-center"> 
    <main class="text-center m-4">
    
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Item 1
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Item 2
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Item 3
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.

                      </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Item 4
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.

                      </div>
                  </div>
                

              </div></div>
        </main>
   </div> 
</div>

</template>
<script>

import HeaderPage from '@/components/HeaderPage.vue';

export default {
    name: 'AccordionPage',
    components:{
        HeaderPage, 
       
    }
    

}
</script>
<style lang="scss">
@import '../styles/styles.scss';
@import '../styles/colors.scss';

.container{
  min-height: 100vh;
  
}

.mainContent{
  background-color: $softCream;
}
</style>