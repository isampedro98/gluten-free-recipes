export type RecipeCategory =
| 'ensaladas'
| 'carnes'
| 'pastas'
| 'postres'
| 'desayuno'
| 'otros';

export interface RecipeIngredient {
  name: string;
  quantity: number | string;
  unit?: string;
}

export interface RecipeStep {
  order: number;
  text: string;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  category: RecipeCategory;
  image: string;
  description?: string;
  rating?: number; // 0-5
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  createdAt: string;
  updatedAt?: string;
}
