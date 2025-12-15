<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRecipes } from '~/composables/useRecipes';

const route = useRoute();
const router = useRouter();
const { getBySlug } = useRecipes();
const baseURL = useRuntimeConfig().app.baseURL || '/';
const placeholderImage = '/images/placeholder.svg';
const withBase = (path: string) => {
  const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

const slug = computed(() => route.params.slug as string);
const recipe = computed(() => getBySlug(slug.value));

const userRating = ref<number | null>(null);
const baseURL = useRuntimeConfig().app.baseURL || '/';
const withBase = (path: string) => {
  const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

watchEffect(() => {
  if (!recipe.value) router.replace('/');
});
</script>

<template>
  <UContainer v-if="recipe" class="py-10 space-y-8">
    <UCard class="glass-card border-none shadow-lg">
      <div class="flex items-center justify-between gap-3">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">
            {{ recipe.name }}
          </h1>
          <div class="flex items-center gap-2 flex-wrap">
            <UBadge color="success" variant="soft">
              {{ recipe.category }}
            </UBadge>
            <UBadge v-if="recipe.rating" color="warning" variant="soft" class="flex items-center gap-1">
              <UIcon name="i-lucide-star" />
              {{ recipe.rating.toFixed(1) }}
            </UBadge>
          </div>
        </div>

        <NuxtLink to="/">
          <UButton variant="ghost">
            Volver al listado
          </UButton>
        </NuxtLink>
      </div>
    </UCard>

    <div class="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
      <!-- Imagen y pasos -->
      <div class="space-y-6">
        <UCard class="glass-card border-none shadow-lg p-0 overflow-hidden">
          <div class="relative h-64">
            <img
              :src="withBase(recipe.image || placeholderImage)"
              :alt="recipe.name"
              class="h-full w-full object-cover mix-blend-multiply"
            >
            <div class="absolute inset-0 bg-white/15" />
          </div>
        </UCard>
        <!-- Ingredientes -->
        <UCard class="glass-card border-none shadow-lg">
          <h2 class="text-xl font-semibold mb-3">
            Ingredientes
          </h2>
          <ul class="space-y-3">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.name"
              class="flex items-start justify-between gap-3">
              <span class="font-medium">{{ ingredient.name }}</span>
              <span class="text-sm text-gray-500">
                {{ ingredient.quantity }}<span v-if="ingredient.unit"> {{ ingredient.unit }}</span>
              </span>
            </li>
          </ul>
        </UCard>
      </div>
      <section class="space-y-3">
        <UCard class="glass-card border-none shadow-lg">
          <div class="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
            <span v-if="recipe.totalTimeMinutes">
              ⏱️ {{ recipe.totalTimeMinutes }} min
            </span>
            <span v-else-if="recipe.prepTimeMinutes || recipe.cookTimeMinutes">
              ⏱️ Prep {{ recipe.prepTimeMinutes || 0 }} / Cocción {{ recipe.cookTimeMinutes || 0 }}
            </span>
            <span v-if="recipe.servings">🍽️ {{ recipe.servings }} porciones</span>
            <span v-if="recipe.difficulty">⚡ {{ recipe.difficulty }}</span>
          </div>
          <section class="space-y-3">
            <h2 class="text-xl font-semibold">
              Pasos
            </h2>
            <ol class="space-y-2 list-decimal list-inside text-gray-700">
              <li v-for="step in recipe.steps" :key="step.order">
                {{ step.text }}
              </li>
            </ol>
          </section>
        </UCard>

        <UCard class="glass-card border-none shadow-lg text-xs text-gray-500 space-y-2">
          <p>Creada: {{ new Date(recipe.createdAt).toLocaleDateString() }}</p>
          <p v-if="recipe.updatedAt">Actualizada: {{ new Date(recipe.updatedAt).toLocaleDateString() }}</p>
        </UCard>

        <UCard class="glass-card border-none shadow-lg space-y-3">
          <div class="flex items-center gap-2">
            <h3 class="text-lg font-semibold">Tu calificación</h3>
            <UBadge variant="soft" color="warning" class="flex items-center gap-1">
              <UIcon name="i-lucide-star" />
              {{ userRating ?? '—' }}
            </UBadge>
          </div>
          <div class="flex gap-2">
            <UButton v-for="n in 5" :key="n" :color="userRating && userRating >= n ? 'warning' : 'neutral'"
              variant="ghost" icon="i-lucide-star" @click="userRating = n">
              {{ n }}
            </UButton>
          </div>
          <p class="text-xs text-gray-500">
            (Solo local por ahora; más adelante se persiste en Mongo).
          </p>
        </UCard>
      </section>
    </div>
  </UContainer>
</template>
