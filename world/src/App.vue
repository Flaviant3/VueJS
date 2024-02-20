<template>
  <div class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
    <router-link class="nav-link" to="/pays">Pays</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  padding: 10px;
}

.nav-link {
  color: #000;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: red;
}

.router-link-exact-active {
  background-color: red;
}

/* Styles spécifiques à l'en-tête */
header {
  background-color: #2d3748;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
</style>
