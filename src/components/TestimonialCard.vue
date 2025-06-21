<script setup lang="ts">
import type { Testimonial } from '@/types.ts';

defineProps<Testimonial>();
</script>

<template>
    <article class="card grid place-items-start gap-4 p-9 rounded-xl shadow-2xl">
        <div class="grid auto-cols">
            <img
                class="card__img row-span-2"
                :src="person.imageUrl"
                :alt="`Profile Picture of ${person.fullName}`"
            />
            <p class="text-xl">{{ person.fullName }}</p>
            <p class="text-sm">{{ person.role }}</p>
        </div>
        <h2 class="card__title">{{ title }}</h2>
        <p><q>&nbsp;{{ description }}&nbsp;</q></p>
    </article>
</template>

<style scoped>
.card {
    --_text: var(--text, var(--color-grey-400));
    --_title: var(--title, var(--color-grey-500));
    --_bg: var(--bg, var(--color-white));
    --_img: var(--img, var(--color-white));

    grid-template-rows: auto auto 1fr;
    color: var(--_text);
    background: var(--_bg);
}

.card__img {
    border: 2px solid var(--_img);
    border-radius: 50%;
    width: 36px;
    height: 36px;
}

.card__title {
    color: var(--title);
}

.auto-cols {
    column-gap: 1rem;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
}
</style>