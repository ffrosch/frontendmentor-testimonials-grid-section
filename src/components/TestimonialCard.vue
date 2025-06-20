<script setup lang="ts">
import type { Testimonial } from '@/types.ts';

defineProps<Testimonial>();
</script>

<template>
    <article class="grid place-items-start gap-4 p-9 rounded-xl">
        <div class="grid auto-cols">
            <img
                class="row-span-2"
                :src="person.imageUrl"
                :alt="`Profile Picture of ${person.fullName}`"
            />
            <p class="text-xl">{{ person.fullName }}</p>
            <p class="text-sm">{{ person.role }}</p>
        </div>
        <h2>{{ title }}</h2>
        <p class="flex grow">{{ description }}</p>
    </article>
</template>

<style scoped>
article {
    background: var(--color-white);
    grid-template-rows: auto auto 1fr;
}

.auto-cols {
    column-gap: 1rem;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
}

img {
    border: 2px solid var(--color-primary-300);
    border-radius: 50%;
    width: 36px;
    height: 36px;
}
</style>