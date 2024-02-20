<!-- CardPays.vue -->
<template>
  <div class="card">
    <img :src="pays.flags.png" alt="Drapeau du pays" />
    <h2>{{ pays.name.common }}</h2>
    <p>{{ pays.capital && pays.capital[0] }}</p>
    <router-link :to="`/fiche-pays/${pays.cca3}`">{{ pays.name.common }}</router-link>
  </div>
</template>

<script setup>
defineProps({
  pays: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
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
