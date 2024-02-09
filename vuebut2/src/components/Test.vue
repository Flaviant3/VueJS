<script setup>
// Définition des notes
let notes = [12, 8, 15, 10, 17];

// Fonction pour vérifier si une note est supérieure à 10
const isNoteSup10 = (note) => {
  if (note > 10) {
    return "Supérieure à 10";
  } else if (note >= 8 && note <= 10) {
    return "Entre 8 et 10";
  } else {
    return "Inférieure à 8";
  }
};
</script>

<template>
  <div>
    <h1>Notes</h1>
    <ul>
      <li v-for="note in notes" :key="note">
        Note {{ note }} :
        {{ isNoteSup10(note) }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
