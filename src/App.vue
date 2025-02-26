<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header/>
    <!--    <RouterLink to="/">Home</RouterLink>-->
    <!--    <RouterLink to="/about">About</RouterLink>-->
    <RouterView/>
    <Footer/>
</template>

<style scoped>

</style>
