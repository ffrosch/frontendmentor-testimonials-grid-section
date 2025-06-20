<script setup lang="ts">
import type { Testimonial } from '@/types.ts';

defineProps<Testimonial>();
</script>

<template>
    <article class="grid gap-6 p-9 rounded-xl max-w-[420px]">
        <div class="grid grid-cols-2">
            <img
                class="row-span-2"
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

<style scoped>
article {
    background: var(--color-white);
}

img {
    border: 3px solid var(--color-primary-300);
    border-radius: 50%;
    width: 48px;
    height: 48px;
}
</style>