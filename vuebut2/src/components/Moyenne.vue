<template>
  <div>
    <h1>Calcul de la moyenne</h1>
    <p>Voici les notes obtenues par les étudiants</p>
    <ul>
      <li>Note 1 : 18</li>
      <li>Note 2 : 16</li>
      <li>Note 3 : 13</li>
    </ul>
    <p>La moyenne est de {{ moyenne }}</p>
  </div>
</template>

<script setup>
const note1 = 18;
const note2 = 16;
const note3 = 13;

const moyenne = ((note1 + note2 + note3) / 3).toFixed(2);
</script>
