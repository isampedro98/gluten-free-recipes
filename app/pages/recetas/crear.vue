<script setup lang="ts">
import { ref } from 'vue';
import type { RecipeCategory } from '~/types/recipe';
import { useRecipes } from '~/composables/useRecipes';

const { categories } = useRecipes();

const name = ref('');
const slug = ref('');
const category = ref<RecipeCategory | ''>('');
const image = ref('/images/');
const description = ref('');

const ingredients = ref([{ name: '', quantity: '', unit: '' }]);
const steps = ref([{ text: '' }]);

const outputJson = ref<string | null>(null);

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9áéíóúñü]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function addIngredient() {
  ingredients.value.push({ name: '', quantity: '', unit: '' });
}

function removeIngredient(index: number) {
  if (ingredients.value.length > 1) ingredients.value.splice(index, 1);
}

function addStep() {
  steps.value.push({ text: '' });
}

function removeStep(index: number) {
  if (steps.value.length > 1) steps.value.splice(index, 1);
}

function generateJson() {
  const finalSlug = (slug.value || slugify(name.value)) || `receta-${Date.now()}`;
  const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());

  const recipe = {
    id,
    slug: finalSlug,
    name: name.value,
    category: category.value || 'otros',
    image: image.value || '/images/',
    description: description.value,
    ingredients: ingredients.value
      .filter(i => i.name.trim())
      .map(i => ({
        name: i.name.trim(),
        quantity: i.quantity || '',
        unit: i.unit || undefined
      })),
    steps: steps.value
      .filter(s => s.text.trim())
      .map((s, idx) => ({
        order: idx + 1,
        text: s.text.trim()
      })),
    createdAt: new Date().toISOString()
  };

  outputJson.value = JSON.stringify(recipe, null, 2);
}
</script>

<template>
  <UContainer class="py-10 space-y-8">
    <UCard class="glass-card border-none shadow-lg">
      <header class="space-y-2">
        <h1 class="text-3xl font-bold">
          Crear receta (JSON)
        </h1>
        <p class="text-gray-600">
          Completa el formulario y copiá el JSON generado para pegarlo en <code>app/data/recipes.ts</code>.
        </p>
      </header>
    </UCard>

    <UCard class="glass-card border-none shadow-lg">
      <form class="space-y-8" @submit.prevent="generateJson">
        <section class="grid gap-4 md:grid-cols-2">
          <UInput
            v-model="name"
            label="Nombre"
            placeholder="Ej: Tarta de manzana"
            required
          />
          <UInput
            v-model="slug"
            label="Slug (opcional)"
            placeholder="ej: tarta-manzana"
            hint="Si lo dejas vacío se genera desde el nombre"
          />
          <USelectMenu
            v-model="category"
            :options="[
              ...categories.map(c => ({ label: c, value: c })),
              { label: 'otros', value: 'otros' }
            ]"
            label="Categoría"
            placeholder="Seleccioná una categoría"
            required
          />
          <UInput
            v-model="image"
            label="Ruta de imagen"
            placeholder="/images/mi-receta.jpg"
          />
        </section>

        <UTextarea
          v-model="description"
          label="Descripción"
          placeholder="Breve descripción de la receta"
        />

        <!-- Ingredientes -->
        <section class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">
              Ingredientes
            </h2>
            <UButton
              size="xs"
              color="neutral"
              icon="i-lucide-plus"
              type="button"
              @click="addIngredient"
            >
              Agregar
            </UButton>
          </div>

          <div class="space-y-3">
            <div
              v-for="(ingredient, index) in ingredients"
              :key="index"
              class="grid gap-3 md:grid-cols-[2fr,1fr,1fr,auto] items-end"
            >
              <UInput v-model="ingredient.name" label="Nombre" placeholder="Harina de arroz" />
              <UInput v-model="ingredient.quantity" label="Cantidad" placeholder="1" />
              <UInput v-model="ingredient.unit" label="Unidad" placeholder="taza, g, cda..." />
              <UButton
                v-if="ingredients.length > 1"
                size="xs"
                color="neutral"
                variant="ghost"
                icon="i-lucide-trash"
                type="button"
                @click="removeIngredient(index)"
              >
                Quitar
              </UButton>
            </div>
          </div>
        </section>

        <!-- Pasos -->
        <section class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">
              Pasos
            </h2>
            <UButton
              size="xs"
              color="neutral"
              icon="i-lucide-plus"
              type="button"
              @click="addStep"
            >
              Agregar
            </UButton>
          </div>

          <div class="space-y-3">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="grid gap-3 md:grid-cols-[auto,1fr,auto] items-start"
            >
              <span class="text-sm text-gray-500 pt-3">
                Paso {{ index + 1 }}
              </span>
              <UTextarea v-model="step.text" placeholder="Describe el paso..." />
              <UButton
                v-if="steps.length > 1"
                size="xs"
                color="neutral"
                variant="ghost"
                icon="i-lucide-trash"
                type="button"
                @click="removeStep(index)"
              >
                Quitar
              </UButton>
            </div>
          </div>
        </section>

        <div class="flex justify-end">
          <UButton type="submit" icon="i-lucide-wand-2">
            Generar JSON
          </UButton>
        </div>
      </form>
    </UCard>

    <UCard v-if="outputJson" class="glass-card border-none shadow-lg space-y-3">
      <h2 class="text-xl font-semibold">
        JSON generado
      </h2>
      <UTextarea
        :model-value="outputJson"
        readonly
        rows="12"
        class="font-mono text-sm"
      />
    </UCard>
  </UContainer>
</template>
