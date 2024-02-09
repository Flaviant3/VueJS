<script setup>
import { computed } from "vue";

const note1 = 18;
const note2 = 16;
const note3 = 13;

const moyenne = computed(() => {
  return ((note1 + note2 + note3) / 3).toFixed(2);
});

const mots = ["Voiture", "Entreprise", "Ordinateur", "Capybara"];
</script>

<template>
  <div>
    <h1>Mots</h1>
    <p>Voici les mots obtenus par les étudiants</p>
    <ul>
      <li>{{ mots[0] }}</li>
      <li>{{ mots[1] }}</li>
      <li>{{ mots[2] }}</li>
      <li>{{ mots[3] }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
