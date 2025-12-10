<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
});

const title = 'Recetas sin gluten';
const description = 'Recetario estático sin gluten con categorías, filtros y creador de recetas.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/social-card.png',
  twitterImage: 'https://ui.nuxt.com/social-card.png',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <UApp class="min-h-screen">
    <UHeader class="border-b border-gray-200/70 backdrop-blur bg-white/75">
      <template #left>
        <NuxtLink to="/">
          <div class="flex items-center gap-2 font-semibold text-lg">
            <UIcon name="i-simple-icons-nuxtdotjs" class="text-primary-500" />
            <span>Recetas sin gluten</span>
          </div>
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton to="/recetas/crear" icon="i-lucide-plus" size="sm">
          Crear receta
        </UButton>
      </template>
    </UHeader>

    <UMain class="pb-14">
      <NuxtPage />
    </UMain>

    <UFooter class="border-t border-gray-200/70 bg-white/75 backdrop-blur">
      <template #left>
        <p class="text-sm text-muted">
          Hecho con Nuxt UI · {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton to="/" variant="ghost" color="neutral" size="sm" icon="i-lucide-home">
          Inicio
        </UButton>
      </template>
    </UFooter>
  </UApp>
</template>
