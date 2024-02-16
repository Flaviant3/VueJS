<!-- Pays.vue -->
<template>
  <div>
    <h1>Liste des Pays</h1>
    <CardPays v-for="pays in data" :key="pays.name.common" :pays="pays" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from './CardPays.vue'

let data = ref('')

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  data.value = response.data
})
</script>

<style scoped>
</style>
