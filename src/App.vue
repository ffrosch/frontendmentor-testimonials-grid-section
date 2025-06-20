<script setup lang="ts">
import Card from '@/components/TestimonialCard.vue';
import testimonials from '@/testimonials.ts';
</script>

<template>
  <main class="grid auto-cols gap-9">
    <Card
      v-for="{ person, title, description } in testimonials"
      :person="person"
      :title="title"
      :description="description"
    />
  </main>

  <footer class="text-center mt-6 mb-4">
    Challenge by&nbsp;<a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noopener"
    >Frontend Mentor</a>. Coded by&nbsp;<a href="https://florianfrosch.de/">Florian Frosch</a>.
  </footer>
</template>

<style scoped>
.auto-cols {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

@media all and (min-width: 768px) and (max-width: 1330px) {
.auto-cols {
  grid-template-columns: repeat(2, minmax(320px, 1fr));
}
  .auto-cols> :nth-child(4) {
    grid-row: 1;
    grid-column: 2;
  }
  .auto-cols> :nth-child(5) {
    grid-column: span 2;
  }
}

@media all and (min-width: 1330px) {
  .auto-cols {
    max-width: 1440px;
  }

  .auto-cols> :nth-child(1) {
    grid-column: span 2;
  }

  .auto-cols> :nth-child(4) {
    grid-column: 2 / span 2;
  }

  .auto-cols> :nth-child(5) {
    grid-column: 4;
    grid-row: 1 / span 2;
  }
}
</style>