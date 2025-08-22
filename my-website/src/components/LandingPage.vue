<script>
import HelloWorld from './HelloWorld.vue';

export default{
    name: 'LandingPage',
    components: {HelloWorld}
}
</script>

<template>
    <div>
        <HelloWorld  msg="Welcome to the Landing Page!"/>
        <section>
            <p>This is the main landing content.</p>
        </section>
        </div>
</template>