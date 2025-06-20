<script setup lang="ts">
import Card from '@/components/TestimonialCard.vue';
import testimonials from '@/testimonials.ts';
</script>

<template>
  <main class="grid gap-9">
      <Card
        v-for="{ person, title, description } in testimonials"
        :person="person"
        :title="title"
        :description="description"
      />
  </main>

  <footer class="text-center mb-4">
    Challenge by&nbsp;<a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noopener"
    >Frontend Mentor</a>. Coded by&nbsp;<a href="https://florianfrosch.de/">Florian Frosch</a>.
  </footer>
</template>

<style scoped></style>