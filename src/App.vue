<script setup lang="ts">
import Card from '@/components/TestimonialCard.vue';
import testimonials from '@/testimonials';
</script>

<template>
    <main>
        <div v-for="{ person, title, description } in testimonials">
            <Card
                :person="person"
                :title="title"
                :description="description"
            />
        </div>
    </main>
    
    <footer class="p-6 text-center text-xs text-gray-700">
      Challenge by&nbsp;<a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener"
        >Frontend Mentor</a
      >. Coded by&nbsp;<a href="https://florianfrosch.de/"
        >Florian Frosch</a
      >.
    </footer>
</template>

<style scoped></style>