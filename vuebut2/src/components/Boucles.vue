<template>
  <div>
    <h1>Boucles</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ green: item.name > 10, red: item.name < 10 }"
        :style="{ color: item.name < 10 ? 'red' : '' }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  { id: 1, name: 12 },
  { id: 2, name: 8 },
  { id: 3, name: 15 },
  { id: 4, name: 10 },
  { id: 5, name: 17 },
  { id: 6, name: 5 },
  { id: 7, name: 20 },
  { id: 8, name: 3 },
  { id: 9, name: 7 },
  { id: 10, name: 9 },
];
</script>
