<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRecipes } from '~/composables/useRecipes';
import type { RecipeCategory } from '~/types/recipe';

const { allRecipes, categories } = useRecipes();

const searchName = ref('');
const searchIngredient = ref('');
const selectedCategory = ref<RecipeCategory | ''>('');
const sortBy = ref<'rating' | 'newest' | 'name'>('rating');

const sortOptions: { label: string, value: 'rating' | 'newest' | 'name' }[] = [
  { label: 'Mejor calificación', value: 'rating' },
  { label: 'Más recientes', value: 'newest' },
  { label: 'Nombre A-Z', value: 'name' }
];

const categoryOptions = computed(() => [
  { label: 'Todas', value: '' },
  ...categories.value.map(cat => ({ label: cat, value: cat }))
]);

const page = ref(1);
const pageSize = 6;

const filteredRecipes = computed(() => {
  const name = searchName.value.trim().toLowerCase();
  const ing = searchIngredient.value.trim().toLowerCase();
  const cat = selectedCategory.value;

  return allRecipes.value.filter(recipe => {
    const matchesName =
      !name ||
      recipe.name.toLowerCase().includes(name) ||
      (recipe.description ?? '').toLowerCase().includes(name);

    const matchesCategory = !cat || recipe.category === cat;

    const matchesIngredient =
      !ing ||
      recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(ing));

    return matchesName && matchesCategory && matchesIngredient;
  });
});

const orderedRecipes = computed(() => {
  const list = [...filteredRecipes.value];

  if (sortBy.value === 'rating') {
    return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }

  if (sortBy.value === 'newest') {
    return list.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

const paginatedRecipes = computed(() => {
  const start = (page.value - 1) * pageSize;
  return orderedRecipes.value.slice(start, start + pageSize);
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredRecipes.value.length / pageSize))
);

watch([searchName, searchIngredient, selectedCategory, sortBy], () => {
  page.value = 1;
});
</script>

<template>
  <UContainer class="py-10 space-y-8">
    <header class="grid gap-6 md:grid-cols-[1.5fr,1fr] items-center">
      <UCard class="glass-card p-6 bg-linear-to-r from-primary-50 to-amber-50 border-none shadow-lg">
        <div class="space-y-3">
          <p class="text-sm uppercase tracking-wide text-primary-700">
            Recetario estético
          </p>
          <h1 class="text-3xl font-bold text-primary-900">
            Recetas sin gluten
          </h1>
          <p class="text-gray-600 text-base">
            Explorá recetas 100% sin gluten, filtrá por categoría e ingredientes
            y descubrí nuevas ideas deliciosas.
          </p>
          <div class="flex flex-wrap gap-2">
            <UBadge color="success" variant="soft"> Filtrado avanzado </UBadge>
            <UBadge color="primary" variant="soft"> Listo para SSG </UBadge>
            <UBadge color="warning" variant="soft"> Creador JSON </UBadge>
          </div>
        </div>
      </UCard>

      <!-- Filtros -->
      <UCard class="glass-card border-none shadow-lg">
        <div class="grid gap-4">
          <h2 class="text-sm uppercase tracking-wide text-gray-500">Filtros</h2>
          <div class="grid gap-3">
            <div class="grid gap-3 md:grid-cols-[2fr,1fr]">
              <div class="space-y-1">
                <p class="text-xs font-semibold text-gray-500">
                  Nombre / descripción
                </p>
                <UInput v-model="searchName" placeholder="Ej: pizza, pan, tarta..." icon="i-lucide-search" />
              </div>
              <div class="space-y-1">
                <p class="text-xs font-semibold text-gray-500">Ordenar</p>
                <USelectMenu v-model="sortBy" :options="sortOptions" placeholder="Elegí el orden"
                  icon="i-lucide-sort-desc" :searchable="false" />
              </div>
            </div>

            <div class="grid gap-3 md:grid-cols-3">
              <div class="space-y-1">
                <p class="text-xs font-semibold text-gray-500">Categoría</p>
                <USelectMenu v-model="selectedCategory" :options="categoryOptions" placeholder="Todas"
                  icon="i-lucide-filter" :searchable="false" />
              </div>

              <div class="space-y-1 md:col-span-2">
                <p class="text-xs font-semibold text-gray-500">Ingrediente</p>
                <UInput v-model="searchIngredient" placeholder="Ej: arroz, pollo, zanahoria..."
                  icon="i-lucide-sparkles" />
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </header>

    <!-- Listado -->
    <section>
      <div v-if="paginatedRecipes.length === 0" class="py-20 text-center text-gray-500">
        No se encontraron recetas con esos filtros.
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <UCard v-for="recipe in paginatedRecipes" :key="recipe.id"
          class="flex flex-col glass-card border-none shadow-lg hover:-translate-y-1 transition-transform duration-200">
          <template #header>
            <div class="relative h-40 w-full overflow-hidden rounded-lg bg-linear-to-r from-primary-100 to-emerald-100">
              <img :src="recipe.image" :alt="recipe.name" class="h-full w-full object-cover mix-blend-multiply">
              <div class="absolute inset-0 bg-white/20" />
            </div>
          </template>

          <div class="space-y-2 flex-1">
            <h2 class="text-xl font-semibold">
              {{ recipe.name }}
            </h2>
            <div class="flex items-center gap-2">
              <UBadge color="success" variant="soft">
                {{ recipe.category }}
              </UBadge>
              <UBadge v-if="recipe.rating" color="warning" variant="soft" class="flex items-center gap-1">
                <UIcon name="i-lucide-star" />
                {{ recipe.rating.toFixed(1) }}
              </UBadge>
            </div>

            <p class="text-sm text-gray-500 line-clamp-3">
              {{ recipe.description || 'Receta sin descripción.' }}
            </p>
          </div>

          <template #footer>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">
                {{ recipe.ingredients.length }} ingredientes
              </span>

              <NuxtLink :to="`/recetas/${recipe.slug}`">
                <UButton size="sm">
                  Ver receta
                </UButton>
              </NuxtLink>
            </div>
          </template>
        </UCard>
      </div>
    </section>

    <!-- Paginación -->
    <section v-if="totalPages > 1" class="flex justify-center">
      <UPagination v-model="page" :page-count="pageSize" :total="filteredRecipes.length" />
    </section>

    <!-- Link al creador -->
    <footer class="pt-8 border-t border-gray-200 flex justify-between items-center">
      <span class="text-sm text-gray-500">
        ¿Tenés una receta nueva?
      </span>
      <NuxtLink to="/recetas/crear">
        <UButton variant="outline" size="sm">
          Crear receta (JSON)
        </UButton>
      </NuxtLink>
    </footer>
  </UContainer>
</template>
