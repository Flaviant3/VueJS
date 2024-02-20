<template>
  <div id="pays-page">
    <h1>Pays</h1>
    <input type="text" v-model="recherche" @input="filtrer" placeholder="Rechercher un pays">
    <div id="cards-container">
      <div v-for="pays in data" :key="pays.cca3">
        <CardPays :pays="pays" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

const data = ref([])
const listeComplete = ref([])
const recherche = ref('')

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  listeComplete.value = response.data
  data.value = [...listeComplete.value]
})

const filtrer = () => {
  data.value = listeComplete.value.filter(pays => pays.name.common.toLowerCase().includes(recherche.value.toLowerCase()))
}
</script>

<style scoped>
#pays-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

#cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.country-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.capital {
  font-size: 1rem;
  color: #4a5568;
}

img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
