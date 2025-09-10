<template>
    <div>
        <!--Add heading -->
         <HeaderPage>
        <h1 class="text-primary">Responsive Website</h1>
    </HeaderPage>
   

        <div class="mainContent">
        <div class="container">
            <div class="row">
                <!--Create aside content for Landing Page-->
               <aside class="col-md-4 mb-4 p-3 asideContent">
            <div class="p-3">
                <h4>Aside section</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatibus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis minus aut voluptatem similique amet illum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatibus.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis minus aut voluptatem similique amet illum!</p>
            </div>
        </aside>
        <!--Create main content for Landing Page-->
        <main class="col-md-8 text-center ">
            <div class="p-4">
                <h3 class="display-4 mb-4">Main Content</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sit, dignissimos deleniti ratione aperiam rem!</p>

            </div>
            
        </main> 
            </div></div>
        </div>
        
   </div>
</template>
<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default{
    name:'LandingPage',
    components:
        {HeaderPage}
    }
</script>
<style lang= "scss">
@import '@/styles/styles.scss';
</style>
