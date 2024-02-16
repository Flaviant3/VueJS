<!-- CardPays.vue -->
<template>
  <div class="card">
    <img :src="pays.flags.png" alt="Drapeau" />
    <h2>{{ pays.name.common }}</h2>
    <p>Capitale: {{ pays.capital[0] }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pays: Object
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
}

img {
  width: 100px;
  height: auto;
  margin-bottom: 8px;
}
</style>
