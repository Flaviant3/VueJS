<template>
  <div>
    <h1>Liste des pays</h1>
    <ul>
      <li v-for="index in 10" :key="index">
        <router-link :to="`/fiche-pays/${index}`">Pays {{ index }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
