import { computed } from 'vue';
import { recipes } from '~/data/recipes';
import type { Recipe, RecipeCategory } from '~/types/recipe';

const DEFAULT_CATEGORIES: RecipeCategory[] = [
  'ensaladas',
  'carnes',
  'pastas',
  'postres',
  'desayuno',
  'otros'
];

export function useRecipes() {
  const allRecipes = computed<Recipe[]>(() => recipes);

  const categories = computed<RecipeCategory[]>(() => {
    const set = new Set<RecipeCategory>(DEFAULT_CATEGORIES);
    for (const recipe of recipes) set.add(recipe.category);
    return Array.from(set);
  });

  function getBySlug(slug: string) {
    return recipes.find(recipe => recipe.slug === slug) ?? null;
  }

  return {
    allRecipes,
    categories,
    getBySlug
  };
}
