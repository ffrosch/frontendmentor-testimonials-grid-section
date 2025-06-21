<script setup lang="ts">
import Card from '@/components/TestimonialCard.vue';
import testimonials from '@/testimonials.ts';
import Quotation from '@/assets/bg-pattern-quotation.svg';
</script>

<template>
  <main class="grid auto-cols gap-9">
    <Card
      v-for="[index, { person, title, description }] of testimonials.entries()"
      :key="person.fullName"
      :person="person"
      :title="title"
      :description="description"
      :class="{
        'card--purple decoration': index === 0,
        'card--grey': index === 1,
        'card--darkblue': index === 3,
      }"
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

.card--purple {
  --bg: var(--color-primary-500);
  --img: var(--color-primary-300);
  --text: var(--color-grey-100);
  --title: var(--color-white);
}

.card--grey {
  --bg: var(--color-grey-500);
  --img: var(--color-grey-400);
  --text: var(--color-grey-100);
  --title: var(--color-white);
}

.card--darkblue {
  --bg: var(--color-darkblue);
  --img: var(--color-primary-300);
  --text: var(--color-grey-100);
  --title: var(--color-white);
}

@media all and (min-width: 700px) and (max-width: 1330px) {
  .auto-cols> :nth-child(4) {
    grid-row: 1;
    grid-column: 2;
  }

  .auto-cols> :nth-child(5) {
    grid-column: span 2;
  }
}

@media all and (min-width: 1330px) {
  .decoration {
    background-image: v-bind('`url("${Quotation}")`');
    background-repeat: no-repeat;
    background-position: 85% 0;
    background-size: 8rem;
  }

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