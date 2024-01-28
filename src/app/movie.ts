export interface Movie {
  id: number;
  poster: string;
  title: string;
  year: string;
  genre: string;

  releaseDate: string; // ISO 8601
  runtimeMinutes: number;
  director: string;
  plot: string;
  imdbRating: number;
  productionBudget: number;
  budgetCurrency: string; // ISO 4217
}
