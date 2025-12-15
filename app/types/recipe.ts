export type RecipeCategory =
  | 'ensaladas'
  | 'carnes'
  | 'pastas'
  | 'postres'
  | 'desayuno'
  | 'panificados'
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

export interface RecipeSource {
  type: 'demo' | 'user' | 'external';
  url: string | null;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  category: RecipeCategory;
  image: string;
  description?: string;
  rating?: number; // 0-5
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  totalTimeMinutes?: number;
  servings?: number;
  difficulty?: 'fácil' | 'media' | 'difícil';
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  createdAt: string;
  updatedAt?: string;
  source: RecipeSource;
  notes?: string[];
}
