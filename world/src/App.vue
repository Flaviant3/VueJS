<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/pays">Pays</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({})
</script>

<style scoped>
/* Vos styles ici */
</style>
