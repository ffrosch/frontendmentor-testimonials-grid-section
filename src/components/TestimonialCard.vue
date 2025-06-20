<script setup lang="ts">
import type { Testimonial } from '@/types.ts';

defineProps<Testimonial>();
</script>

<template>
    <article>
        <div>
            <img
                :src="person.imageUrl"
                :alt="`Profile Picture of ${person.fullName}`"
            />
            <h3>{{ person.fullName }}</h3>
            <h4>{{ person.role }}</h4>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </article>
</template>

<style scoped></style>