<script setup>
import HomeCard from "./HomeCard.vue"
import cards from "./HomeCards.json"
</script>

<template>
  <template v-for="group in cards.groups" :key="group.title">
    <h2>{{ group.title }}</h2>
    <div class="group">
      <HomeCard v-for="card in group.cards" :key="card.title" v-bind="card" />
    </div>
  </template>
</template>

<style scoped>
.group {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .group {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .group {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
