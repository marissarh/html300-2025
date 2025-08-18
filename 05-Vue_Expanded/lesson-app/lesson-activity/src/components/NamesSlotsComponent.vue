<script setup></script>

<template>
    <header>
        <h1>Named Slots Component</h1>
        <!--This is the 'header' slot-->
        <slot name="header"></slot>
    </header>
    <main>
        <!--This is the default slot-->
        <slot></slot>
    </main>
    <footer>
        <!--This is the 'footer' slot-->
        <slot name="footer"></slot>
    </footer>
</template>