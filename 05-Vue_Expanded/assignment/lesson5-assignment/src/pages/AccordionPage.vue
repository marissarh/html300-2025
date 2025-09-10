<template>
   
        <!--Add heading -->
   <HeaderPage>
        <h1 class="text-primary">View Accordion List</h1>
    </HeaderPage>
        <div class=" d-flex justify-content-center p-2 buttonContent">
        <!--Create button to return to landing page-->
    <router-link to="/" class="btn btn-outline-secondary mb-3 ">Back to Landing Page</router-link>
    </div>
    <main class="col-md-8 text-center">
    
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Item 1
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora sapiente provident maxime expedita dignissimos laudantium ratione placeat molestias quas.
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

                      </div>
                  </div>
                
              </div></div>
        </main>
   


</template>
<script>

import HeaderPage from '@/components/HeaderPage.vue';
export default {
    name: 'AccordionPage',
    components:{
        HeaderPage
    }
    

}
</script>
<style></style>